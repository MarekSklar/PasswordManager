import { processData } from "../../../shared/data.js";

export function logout() {
    document.getElementById("logout").addEventListener("click", _ => {
        
        sessionStorage.clear();
        window.location.href = "index.html";
    });
}

export function saveData() {
    document.getElementById("save-files").addEventListener("click", _ => {
        const id = sessionStorage.getItem("id");
        const key = sessionStorage.getItem("key");
        const data = sessionStorage.getItem("data");

        const saveDataBackEnd = window['backEnd'].saveData;

        saveDataBackEnd(id, key, data).then((ciphered: string) => {
            const blob = new Blob([ciphered], {type: 'application/txt'});
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `pass-file.txt`;
            link.click();
            URL.revokeObjectURL(url);
        });
    });
}

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

        username.innerHTML = processedData[index].username;
        password.innerHTML = processedData[index].password;

        button.src = '../img/visibility.svg';
    }
}

export function editRecord(index: number) {
    sessionStorage.setItem("editedRecordIndex", `${index}`);

    window.location.href = "recordEdit.html";
}

export function addRecord() {
    document.getElementById("record-add").addEventListener("click", _ => {

        const data = sessionStorage.getItem("data");
        const dataLength = processData(data, true).length;
    
        sessionStorage.setItem("editedRecordIndex", `${dataLength}`);
    
        window.location.href = "recordAdd.html"; 
    });
}