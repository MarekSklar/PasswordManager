import Cipher from "../tools/cipher/main";
import { hexToText, textToHex } from "./convert";
import { normalizeData, processData } from "../../../shared/data";


export async function login(id: string, key: string, data: string) {

    const deciphered = await Cipher.decrypt(data.replace(/\n/g, ''), key, id);
    const dataInText = hexToText(deciphered);

    console.log("\n\nlogin test", id, key, data, dataInText);
    
    return dataInText;
}
