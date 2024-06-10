import { addEventListenerToID, addEventListenerToLoginFormChange, addEventListenerToSubmitLoginForm } from "./event.js";

// add event listeners
addEventListenerToID();
addEventListenerToSubmitLoginForm();
addEventListenerToLoginFormChange();

export function register(id: string, key: string) {

    const dataInText = "";

    sessionStorage.setItem("data", dataInText);
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("key", key);

    window.location.href = "table.html";
}