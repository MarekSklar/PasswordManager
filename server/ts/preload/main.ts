import Cipher from "../tools/cipher/main";
import { hexToText, textToHex } from "../utils/convert";


export async function login(id: string, key: string, data: string) {

    const deciphered = await Cipher.decrypt(data.replace(/\n/g, ''), key, id);
    const dataInText = hexToText(deciphered);

    console.log("\n\nlogin test", id, key, data, dataInText);
    
    return dataInText;
}

export async function saveData(id: string, key: string, data: string) {

    const ciphered = await Cipher.encrypt(textToHex(data), key, id);

    console.log("\n\nsave test", id, key, data, ciphered);
    
    return ciphered;
}