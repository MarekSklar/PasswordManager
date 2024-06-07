import { addEventListenerToFormChange, addEventListenerToPassword, addEventListenerToSubmitForm } from "./event.js";
import { loadData } from "./loadData.js";

loadData();

// events
addEventListenerToPassword();
addEventListenerToSubmitForm();
addEventListenerToFormChange();