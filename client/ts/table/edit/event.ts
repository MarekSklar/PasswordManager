import { hexToText } from "../../../../shared/convert.js";
import { Record } from "../../../../shared/customTypes.js";
import { hexData, processData } from "../../../../shared/data.js";
import { isCompanyValid, isPasswordValid, isUsernameValid } from "./formValidation.js";

export function addEventListenerToPassword() {
    document.getElementById("password-visible").addEventListener("click", _ => {
        const button = document.getElementById("password-visible");
        const input = document.getElementById("password-input");

        if (button.getAttribute("src").includes("off")) {
            button.setAttribute("src", "../../assets/img/visibility.svg");
            input.setAttribute("type", "text");
        } else {
            button.setAttribute("src", "../../assets/img/visibility_off.svg");
            input.setAttribute("type", "password");
        }
    });
}

export function addEventListenerToSubmitForm() {
    document.getElementById("submit-form").addEventListener("click", _ => {

        if (!isCompanyValid()) return;
        if (!isUsernameValid()) return;
        if (!isPasswordValid()) return;

        const companyInputValue = (document.getElementById("company-input") as HTMLInputElement).value;
        const usernameInputValue = (document.getElementById("username-input") as HTMLInputElement).value;
        const passwordInputValue = (document.getElementById("password-input") as HTMLInputElement).value;

        const editedRecordIndex = sessionStorage.getItem("editedRecordIndex");

        const data = sessionStorage.getItem("data");
        const processedData = processData(data, true);

        processedData[editedRecordIndex] = {company: companyInputValue, username: usernameInputValue, password: passwordInputValue} as Record;

        const deprocessedData = hexToText(hexData(processedData));
        sessionStorage.setItem("data", deprocessedData);

        window.location.href = "table.html";
    });
}

export function addEventListenerToFormChange() {

    document.getElementById("company-input").addEventListener("change", _ => isCompanyValid());
    document.getElementById("username-input").addEventListener("change", _ => isUsernameValid());
    document.getElementById("password-input").addEventListener("change", _ => isPasswordValid());
}

export function deleteRecord() {
    document.getElementById("record-delete").addEventListener("click", _ => {

        const editedRecordIndex = sessionStorage.getItem("editedRecordIndex");

        const data = sessionStorage.getItem("data");
        const processedData = processData(data, true);

        processedData.splice(Number(editedRecordIndex), 1);

        console.log(processedData);

        const deprocessedData = hexToText(hexData(processedData));
        sessionStorage.setItem("data", deprocessedData);

        window.location.href = "table.html";
    });
}