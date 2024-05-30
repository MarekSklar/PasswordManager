import { GaloisField, SBox } from "../../../../../shared/customTypes";
import { binariseGF, hexadecimaliseGF, processTextIntoGFs } from "../../../utils/galoisField";
import { xor } from "../../../utils/operation";

export default class EncryptLoop {

    static byteSub(GF: GaloisField) {

        const subedGF: GaloisField = [[], [], [], []];

        for (let i = 0; i < GF.length; i++) {
            for (let j = 0; j < GF[i].length; j++) {

                const subedByte = SBox[GF[i][j]];
                subedGF[i].push(subedByte);
            }
        }

        return subedGF;
    }

    static shiftRows(GF: GaloisField) {

        const shiftedGF: GaloisField = [[], [], [], []];

        for (let i = 0; i < GF.length; i++) {
            for (let j = 0; j < GF[i].length; j++) {

                const shiftedPos = (4 + (i-j)) % 4;
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

        // loop every column of galois field
        for (let i = 0; i < GF.length; i++) {
            const column = binaryGF[i];
            
            const values = { 1: [], 2: [], 3: [] };

            // get values for 1 (1)
            values[1] = column;

            // get values for 2 (x)
            column.forEach(byte => {
                byte += '0';
                if (byte.length === 9 && byte[0] === '1') {byte = xor(byte, '100011011')}; // if polynom contains x^8 xor with x^8 + x^4 + x^3 + x^1 + x^0
                values[2].push(byte);
            });

            // get values for 3 (x + 1)
            column.forEach(byte => {
                byte = xor(byte, byte + '0');
                if (byte.length === 9 && byte[0] === '1') {byte = xor(byte, '100011011')}; // if polynom contains x^8 xor with x^8 + x^4 + x^3 + x^1 + x^0
                values[3].push(byte);
            });

            // products
            // 2311
            mixedGF[i].push( xor(xor(xor(values[2][0], values[3][1]), values[1][2]), values[1][3]) );
            // 1231
            mixedGF[i].push( xor(xor(xor(values[1][0], values[2][1]), values[3][2]), values[1][3]) );
            // 1123
            mixedGF[i].push( xor(xor(xor(values[1][0], values[1][1]), values[2][2]), values[3][3]) );
            // 3112
            mixedGF[i].push( xor(xor(xor(values[3][0], values[1][1]), values[1][2]), values[2][3]) );
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
