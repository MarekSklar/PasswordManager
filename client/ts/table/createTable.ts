import { processData } from "../../../shared/data.js";
import { createNewRecord } from "./elementHandling.js";

export function createTable() {
    const data = sessionStorage.getItem("data");
    const processedData = processData(data, true);

    processedData.forEach(row => {
        createNewRecord(row);
    });

    console.log(processedData);
}