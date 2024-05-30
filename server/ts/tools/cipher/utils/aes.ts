import EncryptLoop from "./encryptLoop";
import DecryptLoop from "./decryptLoop";
import { GaloisFields, Key } from "../../../../../shared/customTypes";


export default class Aes {

    static encrypt(data: GaloisFields, key: Key) {

        const rounds = 15;

        // loop each galios field
        for (let i = 0; i < data.length; i++) {

            let GF = data[i];
            
            // pre round
            GF = EncryptLoop.addRoundKey(GF, key[i][0]);

            // loop rounds with all functions
            for (let j = 0; j < rounds - 2; j++) {

                GF = EncryptLoop.byteSub(GF);
                GF = EncryptLoop.shiftRows(GF);
                GF = EncryptLoop.mixColumns(GF);
                GF = EncryptLoop.addRoundKey(GF, key[i][j + 1]);
            }

            // last round (without mixColumns step)
            GF = EncryptLoop.byteSub(GF);
            GF = EncryptLoop.shiftRows(GF);
            GF = EncryptLoop.addRoundKey(GF, key[i][14]);

            // write galois field back into the data array
            data[i] = GF;
        }

        return data;
    }

    static decrypt(data: GaloisFields, key: Key) {

        const rounds = 15;

        // loop each galios field
        for (let i = 0; i < data.length; i++) {

            let GF = data[i];

            // pre round
            GF = DecryptLoop.addRoundKey(GF, key[i][14]);
            GF = DecryptLoop.shiftRows(GF);
            GF = DecryptLoop.byteSub(GF);

            // loop rounds with all functions
            for (let j = rounds - 2; j > 0; j--) {

                GF = DecryptLoop.addRoundKey(GF, key[i][j]);
                GF = DecryptLoop.mixColumns(GF);
                GF = DecryptLoop.shiftRows(GF);
                GF = DecryptLoop.byteSub(GF);
            }

            // last round
            GF = DecryptLoop.addRoundKey(GF, key[i][0]);

            // write galois field back into the data array
            data[i] = GF;
        }

        return data;
    }
}
