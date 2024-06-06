import { processData } from "../../../shared/data.js";

export function toggleRecordVisibility(index: number) {
    const record = document.getElementsByClassName("record")[index];
    const username = document.getElementsByClassName("col1")[index];
    const password = document.getElementsByClassName("col2")[index];
    const button = document.getElementsByClassName("visibility-button")[index] as HTMLImageElement;

    const data = sessionStorage.getItem("data");
    const processedData = processData(data, true);

    if (record.classList.contains("visible")) {
        record.classList.remove("visible");

        username.innerHTML = "*****";
        password.innerHTML = "*****";

        button.src = '../img/visibility_off.svg';
    } else {
        record.classList.add("visible");

        username.innerHTML = processedData[index].login;
        password.innerHTML = processedData[index].text;

        button.src = '../img/visibility.svg';
    }
}

export function editRecord(index: number) {
    sessionStorage.setItem("editRecord", `${index}`);

    window.location.href = "recordEdit.html";
}