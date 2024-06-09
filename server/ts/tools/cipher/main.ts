import { processTextIntoGFs, processGFsIntoText } from "../../utils/galoisField";
import { hashKey } from "../../utils/key";
import Aes from "./utils/aes";

export default class Cipher {

    static async encrypt(text: string, key: string, id: string) {
        const processedRawData = processTextIntoGFs(text);

        const dataLength = text.length;
        const hashedKey = await hashKey(key, id, dataLength, 15, 20);

        console.log(1, processedRawData, hashedKey);
        
        return processGFsIntoText(Aes.encrypt(processedRawData, hashedKey));
    }

    static async decrypt(text: string, key: string, id: string) {
        const processedRawData = processTextIntoGFs(text);

        const dataLength = text.length;
        const hashedKey = await hashKey(key, id, dataLength, 15, 20);

        //console.log(2, processedRawData, hashedKey);
        
        return processGFsIntoText(Aes.decrypt(processedRawData, hashedKey));
    }
}
