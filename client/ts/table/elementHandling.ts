import { Password } from "../../../shared/customTypes";

export function createNewRecord(row: Password) {
    // Get the table body element
    let tableElmnt = document.querySelector('#data-table');
            
    // Create the new table row element
    let newRow = document.createElement('tr');
    
    // Define the content for each cell
    let cellContents = [
        row.name,
        row.login,
        row.text,
        `<img src="../img/visibility_off.svg">
        <img src="../img/edit.svg">`
    ];
    
    // Loop through the content and create cells
    cellContents.forEach((content) => {
        let newCell = document.createElement('td');
        newCell.innerHTML = content;
        newRow.appendChild(newCell);
    });
    
    // Append the new row to the table body
    tableElmnt.appendChild(newRow);

}

function removeRecord() {
    
}