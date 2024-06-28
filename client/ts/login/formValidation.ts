import config from "../../../shared/config.js";

function unsupportedChars(text: string) {

    const chars = Object.keys(config.charSet.charToHex);

    let includesUnsupportedChars = false;
    for (let i = 0; i < text.length; i++)
        if (!chars.includes(text[i])) {
            includesUnsupportedChars = true;
            break;
        }
    
    return includesUnsupportedChars;
}

export function isIdValid() {
    const idInputValue = (document.getElementById("id-input") as HTMLInputElement).value;

    const errTextElmnt = document.getElementById("login-form-err");
    let errText = "";

    switch (true) {
        case unsupportedChars(idInputValue): errText = "ID includes unsupported characters. Check config for more info."; break;
        case idInputValue.length < 6: errText = "ID is too short. (min = 6; recom = 10+)"; break;
    }

    errTextElmnt.innerHTML = errText;
    return !errText.length;
}

export function isKeyValid() {
    const keyInputValue = (document.getElementById("key-input") as HTMLInputElement).value;

    const errTextElmnt = document.getElementById("login-form-err");
    let errText = "";

    switch (true) {
        case unsupportedChars(keyInputValue): errText = "Key includes unsupported characters. Check config for more info."; break;
        case keyInputValue.length < 10: errText = "Key is too short. (min = 10; recom = 20+)"; break;
    }

    errTextElmnt.innerHTML = errText;
    return !errText.length;
}