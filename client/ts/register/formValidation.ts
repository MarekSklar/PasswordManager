import { ASCII, bigSplitter, smallSplitter } from "../../../shared/customTypes.js";

function unsupportedChars(text: string) {

    let includesNotASCIISymbols = false;
    for (let i = 0; i < text.length; i++)
        if (!ASCII.includes(text[i])) {
            includesNotASCIISymbols = true;
            break;
        }
    
    return includesNotASCIISymbols;
}

function includesSplitter(text: string) {
    
    if (text.includes(smallSplitter) || text.includes(bigSplitter)) return true;
    return false;
}

export function isIdValid() {
    const idInputValue = (document.getElementById("id-input") as HTMLInputElement).value;

    const errTextElmnt = document.getElementById("login-form-err");
    let errText = "";

    switch (true) {
        case unsupportedChars(idInputValue): errText = "ID includes unsupported characters. Only ASCII characters are supported."; break;
        case includesSplitter(idInputValue): errText = "ID includes forbidden group of characters. ('(X,,X)' or '!<0~0>!')"; break;
        case idInputValue.length < 6: errText = "ID is too short. (min = 6; recom = 10+)"; break;
    }

    errTextElmnt.innerHTML = errText;
    return !errText.length;
}

export function isKeyValid() {
    const keyInputValue = (document.getElementById("key-input") as HTMLInputElement).value;
    const keyRepeatInputValue = (document.getElementById("key-repeat-input") as HTMLInputElement).value;

    const errTextElmnt = document.getElementById("login-form-err");
    let errText = "";

    switch (true) {
        case unsupportedChars(keyInputValue): errText = "Key includes unsupported characters. Only ASCII characters are supported."; break;
        case includesSplitter(keyInputValue): errText = "Key includes forbidden group of characters. ('(X,,X)' or '!<0~0>!')"; break;
        case keyInputValue.length < 10: errText = "Key is too short. (min = 10; recom = 20+)"; break;
        case keyInputValue !== keyRepeatInputValue: errText = "Keys do not match."; break;
    }

    errTextElmnt.innerHTML = errText;
    return !errText.length;
}