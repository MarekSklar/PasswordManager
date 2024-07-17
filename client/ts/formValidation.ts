import config from "../../shared/config.js";

export function unsupportedChars(text: string) {

    const chars = Object.keys(config.charSet.charToHex);

    let includesUnsupportedChars = false;
    for (let i = 0; i < text.length; i++)
        if (!chars.includes(text[i]) || text[i] === config.splitter.record || text[i] === config.splitter.unit) {
            includesUnsupportedChars = true;
            break;
        }
    
    return includesUnsupportedChars;
}