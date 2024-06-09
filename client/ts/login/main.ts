import { addEventListenerToID, addEventListenerToLoginFormChange, addEventListenerToSubmitLoginForm } from "./event.js";

addEventListenerToID();
addEventListenerToSubmitLoginForm();
addEventListenerToLoginFormChange();

export async function login(id: string, key: string, fileContentPromise: Promise<string> | string) {
    
    const data = fileContentPromise === "" ? "" : await fileContentPromise;

    const loginBackEnd = window['backEnd'].login;
    const dataInText = await loginBackEnd(id, key, data);

    sessionStorage.setItem("data", dataInText);
    sessionStorage.setItem("id", id);
    sessionStorage.setItem("key", key);

    console.log(dataInText, dataInText, id, key, data);

    window.location.href = "table.html";
}