import { processData } from "../../../shared/data.js";
import { createNewRecord } from "./elementHandling.js";

export function createTable() {
    const data = sessionStorage.getItem("data");
    const processedData = processData(data, true);

    for (let i = 0; i < processedData.length; i++) {
        const record = processedData[i];
        createNewRecord(record, i);
    }

    console.log(processedData);
}