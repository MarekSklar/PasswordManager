import argon2 from 'argon2-browser';
import { Key } from '../../../../shared/customTypes';
import { textToUint8Array } from '../../utils/convert';
import { generateSalt } from './utils/generateSalt';
import { divideToFieldKeys } from '../../utils/key';

export class Hash {

    static async generate(plaintextKey: string, id: string, hashLength: number, iterations: number, parallelism: number): Promise<Key> {

        // options
        const salt = textToUint8Array(generateSalt(id, plaintextKey));

        const options = {
            pass: new TextEncoder().encode(plaintextKey), // Convert the password to a Uint8Array
            salt,
            time: iterations, // The number of iterations
            mem: 65536, // Memory usage in KB
            hashLen: hashLength, // The length of the output hash
            parallelism, // Number of parallel threads
            type: argon2.ArgonType.Argon2id, // argon type
        };

        // Hash the password
        let key = "";
        key = (await argon2.hash(options)).hashHex;

        return divideToFieldKeys(key);
    }
}
