import { isIdValid, isKeyValid } from "./formValidation.js";
import { login } from "./main.js";

export function addEventListenerToID() {
    document.getElementById("id-visible").addEventListener("click", _ => {
        const button = document.getElementById("id-visible");
        const input = document.getElementById("id-input");

        if (button.getAttribute("src").includes("off")) {
            button.setAttribute("src", "../img/visibility.svg");
            input.setAttribute("type", "text");
        } else {
            button.setAttribute("src", "../img/visibility_off.svg");
            input.setAttribute("type", "password");
        }
    });
}

export function addEventListenerToSubmitLoginForm() {
    document.getElementById("submit-login-form").addEventListener("click", _ => {

        const idInputValue = (document.getElementById("id-input") as HTMLInputElement).value;
        const keyInputValue = (document.getElementById("key-input") as HTMLInputElement).value;
        const fileInput = document.getElementById("pass-file") as HTMLInputElement;

        if (!isIdValid()) return;
        if (!isKeyValid()) return;

        function getFileContent(): Promise<string> | string {
            const files = fileInput.files;

            if (files.length === 0) return "";

            return new Promise((resolve, reject) => {

                const file = files[0];
                const reader = new FileReader();

                reader.onload = function (e) {
                    const content = e.target.result as string;
                    resolve(content);
                };

                reader.onerror = function (e) {
                    reject(new Error('Error reading file.'));
                };

                reader.readAsText(file);
            });
        }

        login(idInputValue, keyInputValue, getFileContent());
    });
}

export function addEventListenerToLoginFormChange() {

    document.getElementById("id-input").addEventListener("change", _ => isIdValid());
    document.getElementById("key-input").addEventListener("change", _ => isKeyValid());
}