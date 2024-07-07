import { unsupportedChars } from "../formValidation.js";

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
    const keyRepeatInputValue = (document.getElementById("key-repeat-input") as HTMLInputElement).value;

    const errTextElmnt = document.getElementById("login-form-err");
    let errText = "";

    switch (true) {
        case unsupportedChars(keyInputValue): errText = "Key includes unsupported characters. Check config for more info."; break;
        case keyInputValue.length < 10: errText = "Key is too short. (min = 10; recom = 20+)"; break;
        case keyInputValue !== keyRepeatInputValue: errText = "Keys do not match."; break;
    }

    errTextElmnt.innerHTML = errText;
    return !errText.length;
}