import { Data } from "./customTypes.js";
import { hexToText, textToHex } from "./convert.js";
import { randomString, randomNum } from "../server/ts/utils/random.js";
import config from "./config.js";

export function normalizeData(data: string) {

    const chars = Object.keys(config.charSet.charToHex).filter(item => item !== config.splitter.record && item !== config.splitter.unit);
    
    const length = data.length;
    const remainder = length % 16;
    let adderNum = 0;
    let adderText = "";

    adderNum = (16 - remainder) + ((length < 32) ? randomNum(3, 6, 16) : randomNum(1, 3, 16)) - config.splitter.record.length;
    adderText = randomString(adderNum, chars);

    return data + config.splitter.record + adderText;
}

export function normalizeHex(hex: string) {
    
    return textToHex(normalizeData(hexToText(hex)));
}

export function hexData(data: Data) {
    
    let stringifiedData = "";
    let dataHex = "";

    for (let i = 0; i < data.length; i++) {
        const record = data[i];

        if (i !== 0) stringifiedData += config.splitter.record;
        stringifiedData += record.company + config.splitter.unit + record.username + config.splitter.unit + record.password; // stringify pass with splitters
    }

    dataHex = normalizeData(stringifiedData);
    dataHex = textToHex(dataHex);

    return dataHex;
}

export function dehexData(dataHex: string) {

    return processData(hexToText(dataHex));
}

export function processData(dataText: string, skipGibberish: boolean = false) {
    
    const dataSplit = dataText.split(config.splitter.record);
    const data: Data = [];

    if (dataSplit.length === 2 && dataSplit[0].length === 0) return data;
    
    for (let i = 0; i < dataSplit.length; i++) {

        if ((i === dataSplit.length - 1 && skipGibberish) || !dataText.length) continue;
        
        const passwordSplit = dataSplit[i].split(config.splitter.unit);
        const password = {
            company: passwordSplit[0],
            username: passwordSplit[1],
            password: passwordSplit[2]
        }
        
        data.push(password);
    }

    return data;
}
