import { addEventListenerToID, addEventListenerToLoginFormChange, addEventListenerToSubmitLoginForm } from "./event.js";

// add event listeners
addEventListenerToID();
addEventListenerToSubmitLoginForm();
addEventListenerToLoginFormChange();

export async function register(id: string, key: string) {

    const dataInText = "";

    sessionStorage.setItem("data", dataInText);
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("key", key);

    const blob = new Blob([dataInText], {type: 'application/txt'});
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `pass-file.txt`;
    link.click();
    URL.revokeObjectURL(url);

    window.location.href = "table.html";
}