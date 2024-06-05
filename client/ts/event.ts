import { isLoginFormValid } from "./input.js";
import { login } from "./login.js";

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
        // const keyRepeatInputValue = (document.getElementById("key-repeat-input") as HTMLInputElement).value;
        const fileInput = document.getElementById("pass-file") as HTMLInputElement;

        if (document.getElementById("login-form-err").innerHTML.length > 0 || idInputValue.length === 0 || keyInputValue.length === 0 /* || keyRepeatInputValue.length === 0 */) return;

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

        // reset id value
        const idButton = document.getElementById("id-visible");
        const idInput = document.getElementById("id-input") as HTMLInputElement;
        idInput.value = "";
        idButton.setAttribute("src", "../img/visibility.svg");
        idInput.setAttribute("type", "text");

        // reset key value
        const keyInput = document.getElementById("key-input") as HTMLInputElement;
        keyInput.value = "";
        keyInput.setAttribute("type", "password");

        // reset key repeat value
        /*
        const keyRepeatInput = document.getElementById("key-repeat-input") as HTMLInputElement;
        keyRepeatInput.value = "";
        keyRepeatInput.setAttribute("type", "password");

        // hide form
        document.getElementById("form-box").style.display = "none";

        // unhide table
        document.getElementById("table-box").style.display = "flex";
        */

        login(idInputValue, keyInputValue, getFileContent());
    });
}

export function addEventListenerToLoginFormChange() {

    document.getElementById("id-input").addEventListener("change", _ => isLoginFormValid());
    document.getElementById("key-input").addEventListener("change", _ => isLoginFormValid());
    //document.getElementById("key-repeat-input").addEventListener("change", _ => isLoginFormValid());
}