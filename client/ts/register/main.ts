import { addEventListenerToID, addEventListenerToLoginFormChange, addEventListenerToSubmitLoginForm } from "./event.js";

// add event listeners
addEventListenerToID();
addEventListenerToSubmitLoginForm();
addEventListenerToLoginFormChange();

export async function register(id: string, key: string) {

    const dataInText = "";

    sessionStorage.setItem("data", dataInText);

    window.location.href = "table.html";
}