import { isCompanyValid, isPasswordValid, isUsernameValid } from "./formValidation.js";

export function addEventListenerToPassword() {
    document.getElementById("password-visible").addEventListener("click", _ => {
        const button = document.getElementById("password-visible");
        const input = document.getElementById("password-input");

        if (button.getAttribute("src").includes("off")) {
            button.setAttribute("src", "../img/visibility.svg");
            input.setAttribute("type", "text");
        } else {
            button.setAttribute("src", "../img/visibility_off.svg");
            input.setAttribute("type", "password");
        }
    });
}

export function addEventListenerToSubmitForm() {
    document.getElementById("submit-form").addEventListener("click", _ => {

        const companyInputValue = (document.getElementById("company-input") as HTMLInputElement).value;
        const usernameInputValue = (document.getElementById("username-input") as HTMLInputElement).value;
        const passwordInputValue = (document.getElementById("password-input") as HTMLInputElement).value;

        isCompanyValid();
        isUsernameValid();
        isPasswordValid();

        if (document.getElementById("form-err").innerHTML.length > 0) return;

        console.log(companyInputValue, usernameInputValue, passwordInputValue);
        
    });
}

export function addEventListenerToFormChange() {

    document.getElementById("company-input").addEventListener("change", _ => isCompanyValid());
    document.getElementById("username-input").addEventListener("change", _ => isUsernameValid());
    document.getElementById("password-input").addEventListener("change", _ => isPasswordValid());
}