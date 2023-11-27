//Generating the Table Rows and Columns
document.addEventListener('DOMContentLoaded',()=>{
    const table = document.getElementById("sheet");
    const rowHeading = document.getElementById("row-heading");
    const columnHeading = document.getElementById("tableBody");
    //Creation of 100x26 grid for the excel sheet
    const rows = 100;//Defining the number of rows as 100
    const columns = 26;//Defining the number of columns as 26

    //Generation of the column heading A,B,C,D,E,F .....
    for(let col=0;col<columns;col++){
        let th = document.createElement("th");
        th.innerText = String.fromCharCode(65+col);
        rowHeading.append(th);
    }
    //Generation of the Row heading 1,2,3,4......
    for(let row=1;row<=rows;row++){
        let td = document.createElement("td");
        let tr = document.createElement("tr");
        td.innerText = row;
        tr.append(td);
    //Generation of Blank Cell in all the Cells
        for(let col=0;col<columns;col++){
            let td = document.createElement("td");
            td.innerText = "";
            tr.append(td);
        }
        columnHeading.append(tr);
    }

    function handleCellInput(event){
        const cell = event.target;
        const row = parseInt(cell.getAttribute('data-row'));
        const column = parseInt(cell.getAttribute('data-column'));
        console.log(`Cell ${row},${column} is Changed to: ${cell.textContent}`);
    }

})