import { GaloisField, inverseSBox } from "../../../../../shared/customTypes";
import { binariseGF, hexadecimaliseGF, processTextIntoGFs } from "../../../utils/galoisField";
import { xor } from "../../../utils/operation";

export default class DecryptLoop {

    static byteSub(GF: GaloisField) {

        const subedGF: GaloisField = [[], [], [], []];

        for (let i = 0; i < GF.length; i++) {
            for (let j = 0; j < GF[i].length; j++) {
                const subedByte = inverseSBox[GF[i][j]];
                subedGF[i].push(subedByte);
            }
        }

        return subedGF;
    }

    static shiftRows(GF: GaloisField) {

        const shiftedGF: GaloisField = [[], [], [], []];

        for (let i = 0; i < GF.length; i++) {
            for (let j = 0; j < GF[i].length; j++) {

                const shiftedPos = (i+j) % 4;
                const byte = GF[i][j];
                shiftedGF[shiftedPos][j] = byte;
            }
        }

        return shiftedGF;
    }

    static mixColumns(GF: GaloisField) {

        // convert GF to binary
        const binaryGF = binariseGF(GF);

        const mixedGF: GaloisField = [[], [], [], []];

        function valueMul(polynom: number[], byte: string) {

            const bits = {};
            let resultByte = [0,0,0,0,0,0,0,0];

            polynom.forEach(item => {
                for (let bitPos = byte.length - 1; bitPos >= 0; bitPos--) {

                    const bitValue = parseInt(byte[bitPos]);

                    if (!bitValue) continue;

                    const mulBitValue = item + (byte.length - 1 - bitPos);

                    bits[mulBitValue] = (bits[mulBitValue] === undefined) ? 1 : bits[mulBitValue] + 1;
                }
            });

            // convert x^(8+n) -> x^(4+n) + x^(3+n) + x^(1+n) + x^n
            for (let i = 0; i < 3; i++) {
                
                if (bits[8+i] === undefined) continue;
                if (!(bits[8+i] % 2)) continue;

                if (bits[4+i] === undefined) bits[4+i] = 0;
                if (bits[3+i] === undefined) bits[3+i] = 0;
                if (bits[1+i] === undefined) bits[1+i] = 0;
                if (bits[0+i] === undefined) bits[0+i] = 0;

                bits[4+i]++; bits[3+i]++; bits[1+i]++; bits[0+i]++;
            }

            delete bits[8];
            delete bits[9];
            delete bits[10];

            for (const key in bits) {

                const bit = parseInt(bits[key]) % 2;
				resultByte[7 - parseInt(key)] = bit;
			}
            
            return resultByte.join("");
        }

        // loop every column of galois field
        for (let i = 0; i < GF.length; i++) {
            const column = binaryGF[i];
            
            const values = { 9: [], B: [], D: [], E: []};

            // get values for 9 (x^3 + x^0)
            column.forEach(byte => {
                byte = valueMul([3, 0], byte);
                values['9'].push(byte);
            });

            // get values for B (x^3 + x^1 + x^0)
            column.forEach(byte => {
                byte = valueMul([3, 1, 0], byte);
                values['B'].push(byte);
            });

            // get values for D (x^3 + x^2 + x^0)
            column.forEach(byte => {
                byte = valueMul([3, 2, 0], byte);
                values['D'].push(byte);
            });

            // get values for E (x^3 + x^2 + x^1)
            column.forEach(byte => {
                byte = valueMul([3, 2, 1], byte);
                values['E'].push(byte);
            });

            // products
            // EBD9
            mixedGF[i].push( xor(xor(xor(values['E'][0], values['B'][1]), values['D'][2]), values['9'][3]) );
            // 9EBD
            mixedGF[i].push( xor(xor(xor(values['9'][0], values['E'][1]), values['B'][2]), values['D'][3]) );
            // D9EB
            mixedGF[i].push( xor(xor(xor(values['D'][0], values['9'][1]), values['E'][2]), values['B'][3]) );
            // BD9E
            mixedGF[i].push( xor(xor(xor(values['B'][0], values['D'][1]), values['9'][2]), values['E'][3]) );
        }

        return hexadecimaliseGF(mixedGF);
    }

    static addRoundKey(GF: GaloisField, roundKey: string) {

        // convert GF to binary
        const binaryGF: GaloisField = binariseGF(GF);

        // process round key into array
        const processedRoundKey: GaloisField = binariseGF(processTextIntoGFs(roundKey)[0]);

        const cipheredGF: GaloisField = [[], [], [], []];

        for (let i = 0; i < GF.length; i++) {
            for (let j = 0; j < GF[i].length; j++) {

                const subedByte = xor(binaryGF[i][j], processedRoundKey[i][j]);
                cipheredGF[i].push(subedByte);
            }
        }

        return hexadecimaliseGF(cipheredGF);
    }
}
