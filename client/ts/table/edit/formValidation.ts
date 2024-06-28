import config from "../../../../shared/config.js";

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

export function isCompanyValid() {
    const companyInputValue = (document.getElementById("company-input") as HTMLInputElement).value;

    const errTextElmnt = document.getElementById("form-err");
    let errText = "";

    switch (true) {
        case unsupportedChars(companyInputValue): errText = "Company includes unsupported characters. Check config for more info."; break;
    }

    errTextElmnt.innerHTML = errText;
    return !errText.length;
}

export function isUsernameValid() {
    const usernameInputValue = (document.getElementById("username-input") as HTMLInputElement).value;

    const errTextElmnt = document.getElementById("form-err");
    let errText = "";

    switch (true) {
        case unsupportedChars(usernameInputValue): errText = "Username includes unsupported characters. Check config for more info."; break;
    }

    errTextElmnt.innerHTML = errText;
    return !errText.length;
}

export function isPasswordValid() {
    const passwordInputValue = (document.getElementById("password-input") as HTMLInputElement).value;

    const errTextElmnt = document.getElementById("form-err");
    let errText = "";

    switch (true) {
        case unsupportedChars(passwordInputValue): errText = "Password includes unsupported characters. Check config for more info."; break;
    }

    errTextElmnt.innerHTML = errText;
    return !errText.length;
}