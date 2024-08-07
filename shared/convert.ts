import config from "./config.js";

export function hextoBin(hex: string) {

    // Convert each hexadecimal digit to its binary equivalent
    const binaryDigits = hex.split("").map(hexDigit => {
        const decimalValue = parseInt(hexDigit, 16);
        return decimalValue.toString(2).padStart(4, '0');
    });

    // Concatenate the binary digits to form the binary representation
    const binaryResult = binaryDigits.join("");

    return binaryResult;
}

export function binToHex(bin: string) {

    // Convert binary to decimal
    const decimal = parseInt(bin, 2);

    // Convert decimal to hexadecimal
    let hex = decimal.toString(16).toLowerCase();

    // add 0 if the length of hex is odd
    hex = (hex.length % 2 ? 0 : '') + hex;

    return hex;
}

export function textToHex(text: string) {

    let hex = '';
  
    for (let i = 0; i < text.length; i++) {
        const character = text[i];
        const hexByte = config.charSet.charToHex[character];
        hex += hexByte;
    }
  
    return hex;
}

export function hexToText(hex: string) {
    let text = '';

    for (let i = 0; i < hex.length; i += 2) {
        const hexByte = hex.slice(i, i+2);
        const character = config.charSet.hexToChar[hexByte];
        text += character;
    }

    return text;
}

export function textToUint8Array(text: string) {

    const textEncoder = new TextEncoder();
    return textEncoder.encode(text);
}
