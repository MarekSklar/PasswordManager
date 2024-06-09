import { createTable } from "./createTable.js";
import { addRecord, logout, saveData } from "./event.js";

createTable();

// events
logout();
saveData();
addRecord();