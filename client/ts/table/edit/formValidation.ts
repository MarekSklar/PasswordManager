import { unsupportedChars } from "../../formValidation.js";

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