import { ASCII, Data, bigSplitter, smallSplitter} from "./customTypes.js";
import { hexToText, textToHex } from "../server/ts/utils/convert.js";
import { randomString, randomNum } from "../server/ts/utils/random.js";

export function normalizeData(data: string) {
    
    const length = data.length;
    const remainder = length % 16;
    let adderNum = 0;
    let adderText = "";

    adderNum = (16 - remainder) + ((length < 32) ? randomNum(3, 6, 16) : randomNum(1, 3, 16)) - bigSplitter.length;
    adderText = randomString(adderNum, ASCII);

    return data + bigSplitter + adderText;
}

export function normalizeHex(hex: string) {
    
    return textToHex(normalizeData(hexToText(hex)));
}

export function hexData(data: Data) {
    
    let stringifiedData = "";
    let dataHex = "";

    for (let i = 0; i < data.length; i++) {
        const record = data[i];

        if (i !== 0) stringifiedData += bigSplitter;
        stringifiedData += record.company + smallSplitter + record.username + smallSplitter + record.password; // stringify pass with splitters
    }

    dataHex = normalizeData(stringifiedData);
    dataHex = textToHex(dataHex);

    return dataHex;
}

export function dehexData(dataHex: string) {

    return processData(hexToText(dataHex));
}

export function processData(dataText: string, skipGibberish: boolean = false) {
    
    const dataSplit = dataText.split(bigSplitter);
    const data: Data = [];

    if (dataSplit.length === 2 && dataSplit[0].length === 0) return data;
    
    for (let i = 0; i < dataSplit.length; i++) {

        if ((i === dataSplit.length - 1 && skipGibberish) || !dataText.length) continue;
        
        const passwordSplit = dataSplit[i].split(smallSplitter);
        const password = {
            company: passwordSplit[0],
            username: passwordSplit[1],
            password: passwordSplit[2]
        }
        
        data.push(password);
    }

    return data;
}
