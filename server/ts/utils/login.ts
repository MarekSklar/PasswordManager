import Cipher from "../tools/cipher/main";
import { hexToText } from "./convert";


export async function login(id: string, key: string, data: string) {

    const deciphered = await Cipher.decrypt(data.replace(/\n/g, ''), key, id);
    const dataInText = hexToText(deciphered);

    console.log("\n\nlogin test", id, key, data, dataInText);
    
    return dataInText;
}
