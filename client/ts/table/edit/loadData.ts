import { Record } from "../../../../shared/customTypes.js";
import { processData } from "../../../../shared/data.js";

export function loadData() {
    const companyInput = (document.getElementById("company-input") as HTMLInputElement);
    const usernameInput = (document.getElementById("username-input") as HTMLInputElement);
    const passwordInput = (document.getElementById("password-input") as HTMLInputElement);

    const editedRecordIndex = sessionStorage.getItem("editedRecordIndex");

    const data = sessionStorage.getItem("data");
    const processedData = processData(data, true);

    if (processedData[editedRecordIndex] === undefined) processedData[editedRecordIndex] = {company: "", username: "", password: ""} as Record;

    const record: Record = processedData[editedRecordIndex];

    companyInput.value = record.company;
    usernameInput.value = record.username;
    passwordInput.value = record.password;
}