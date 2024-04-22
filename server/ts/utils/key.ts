import { FieldKey, Key } from "../customTypes";
import { Hash } from "../tools/hash/main";

export async function hashKey(key: string, id: string, dataLength: number, iterations: number, parallelism: number) {

    const length = dataLength * 15;
    
    const hashedKey = await Hash.generate(key, id, length, iterations, parallelism);

    return hashedKey;
}

export function divideToFieldKeys(keyHash: string) {
    
    const fieldArea = 128 / 4; // (x)16 -> (xxxx)2, (xx)16 -> (xxxxxxxx)2 (1 byte)
    const roundKeysNum = 15; // AES-256 uses 15 round keys
    const fieldKeyLength = fieldArea * roundKeysNum;
    const roundKeyLength = fieldArea;

    const finalKey: Key = [];

    for (let i = 0; i < keyHash.length / roundKeyLength / roundKeysNum; i++) {
        const hashIndex = i * fieldKeyLength;
        const fieldKeyHash = keyHash.substring(hashIndex, hashIndex + fieldKeyLength);
        const fieldKey: FieldKey = [];

        // add each round key to a field key
        for (let j = 0; j < fieldKeyHash.length; j += roundKeyLength) {
            const roundKeyHash = fieldKeyHash.substring(j, j + roundKeyLength);
            fieldKey.push(roundKeyHash);
        }

        // add each field key to a key
        finalKey.push(fieldKey);
    }

    return finalKey;
}
