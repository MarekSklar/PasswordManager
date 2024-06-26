import { Record } from "../../../shared/customTypes.js";
import { editRecord, toggleRecordVisibility } from "./event.js";

export function createNewRecord(record: Record, index: number) {
    // Get the table body element
    const tableElmnt = document.querySelector('#data-table');
            
    // Create the new table row element
    const newRecord = document.createElement('tr');
    
    // Define the content for each cell
    let cellContents = [
        record.company,
        "*****",
        "*****"
    ];
    
    // Loop through the content and create cells

    for (let i = 0; i < cellContents.length; i++) {
        const content = cellContents[i];

        const newCell = document.createElement('td');
        newCell.innerHTML = content;
        newCell.classList.add(`col${i}`);
        newRecord.appendChild(newCell);
        
    }

    // button cell
    const buttonCell = document.createElement('td');

    // visibility button
    const buttonVisibility = document.createElement('img');
    buttonVisibility.src = '../../assets/img/visibility_off.svg';
    buttonVisibility.classList.add("visibility-button");
    buttonVisibility.addEventListener("click", _ => toggleRecordVisibility(index));

    buttonCell.appendChild(buttonVisibility);

    // edit button
    const buttonEdit = document.createElement('img');
    buttonEdit.src = '../../assets/img/edit.svg';
    buttonEdit.classList.add("edit-button");
    buttonEdit.addEventListener("click", _ => editRecord(index));

    buttonCell.appendChild(buttonEdit);

    // append the button cell to the table
    newRecord.appendChild(buttonCell);

    // add class to the record
    newRecord.classList.add('record');
    
    // Append the new row to the table
    tableElmnt.appendChild(newRecord);

}