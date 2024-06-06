import { ASCII, bigSplitter, smallSplitter } from "../../../../shared/customTypes.js";

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

export function isCompanyValid() {
    const companyInputValue = (document.getElementById("company-input") as HTMLInputElement).value;

    const errTextElmnt = document.getElementById("form-err");
    let errText = "";

    switch (true) {
        case unsupportedChars(companyInputValue): errText = "ID includes unsupported characters. Only ASCII characters are supported."; break;
        case includesSplitter(companyInputValue): errText = "ID includes forbidden group of characters. ('(X,,X)' or '!<0~0>!')"; break;
    }

    errTextElmnt.innerHTML = errText;
}

export function isUsernameValid() {
    const usernameInputValue = (document.getElementById("username-input") as HTMLInputElement).value;

    const errTextElmnt = document.getElementById("form-err");
    let errText = "";

    switch (true) {
        case unsupportedChars(usernameInputValue): errText = "ID includes unsupported characters. Only ASCII characters are supported."; break;
        case includesSplitter(usernameInputValue): errText = "ID includes forbidden group of characters. ('(X,,X)' or '!<0~0>!')"; break;
    }

    errTextElmnt.innerHTML = errText;
}

export function isPasswordValid() {
    const passwordInputValue = (document.getElementById("password-input") as HTMLInputElement).value;

    const errTextElmnt = document.getElementById("form-err");
    let errText = "";

    switch (true) {
        case unsupportedChars(passwordInputValue): errText = "ID includes unsupported characters. Only ASCII characters are supported."; break;
        case includesSplitter(passwordInputValue): errText = "ID includes forbidden group of characters. ('(X,,X)' or '!<0~0>!')"; break;
    }

    errTextElmnt.innerHTML = errText;
}