import { addEventListenerToFormChange, addEventListenerToPassword, addEventListenerToSubmitForm, deleteRecord } from "./event.js";
import { loadData } from "./loadData.js";

loadData();

// events
addEventListenerToPassword();
addEventListenerToSubmitForm();
addEventListenerToFormChange();
deleteRecord();