import { isIdValid, isKeyValid } from "./formValidation.js";
import { register } from "./main.js";


export function addEventListenerToID() {
    document.getElementById("id-visible").addEventListener("click", _ => {
        const button = document.getElementById("id-visible");
        const input = document.getElementById("id-input");

        if (button.getAttribute("src").includes("off")) {
            button.setAttribute("src", "../../assets/img/visibility.svg");
            input.setAttribute("type", "text");
        } else {
            button.setAttribute("src", "../../assets/img/visibility_off.svg");
            input.setAttribute("type", "password");
        }
    });
}

export function addEventListenerToSubmitLoginForm() {
    document.getElementById("submit-login-form").addEventListener("click", _ => {

        if (!isIdValid()) return;
        if (!isKeyValid()) return;

        const idInputValue = (document.getElementById("id-input") as HTMLInputElement).value;
        const keyInputValue = (document.getElementById("key-input") as HTMLInputElement).value;

        register(idInputValue, keyInputValue);
    });
}

export function addEventListenerToLoginFormChange() {

    document.getElementById("id-input").addEventListener("change", _ => isIdValid());
    document.getElementById("key-input").addEventListener("change", _ => isKeyValid());
    document.getElementById("key-repeat-input").addEventListener("change", _ => isKeyValid());
}