import Cipher from "../tools/cipher/main";
import { hexToText, textToHex } from "./convert";
import { normalizeData, processData } from "./data";


export async function login(id: string, key: string, data: string) {
    console.log("login test", id, key, data);

    const deciphered = await Cipher.decrypt(data, key, id);
    const processedData = processData(hexToText(deciphered), true);

    return processedData;
}
