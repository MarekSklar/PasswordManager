import { Password } from "../../../../shared/customTypes.js";
import { processData } from "../../../../shared/data.js";

export function loadData() {
    const companyInput = (document.getElementById("company-input") as HTMLInputElement);
    const usernameInput = (document.getElementById("username-input") as HTMLInputElement);
    const passwordInput = (document.getElementById("password-input") as HTMLInputElement);

    const editedRecordIndex = sessionStorage.getItem("editedRecordIndex");

    const data = sessionStorage.getItem("data");
    const processedData = processData(data, true);

    if (processedData[editedRecordIndex] === undefined) processedData[editedRecordIndex] = {name: "", login: "", tag: "", text: ""};

    const record: Password = processedData[editedRecordIndex];

    companyInput.value = record.name;
    usernameInput.value = record.login;
    passwordInput.value = record.text;
}