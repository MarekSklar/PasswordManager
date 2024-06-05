import Cipher from "../tools/cipher/main";
import { hexToText, textToHex } from "./convert";
import { normalizeData, processData } from "./data";


export async function login(id: string, key: string, data: string) {

    const deciphered = await Cipher.decrypt(data.replace(/\n/g, ''), key, id);
    const processedData = processData(hexToText(deciphered), true);

    console.log("\n\nlogin test", id, key, data, processedData);
    
    return processedData;
}
