//Letting All the Elements,Buttons to load in the Webpage
document.addEventListener('DOMContentLoaded',()=>{
    //Defining All the Direct Buttons from HTML
    const italic = document.getElementById("italicBtn");
    const bold = document.getElementById("boldBtn");
    const underline = document.getElementById("underline");
    const fontFamily = document.getElementById("fontFamily");
    const fontSize = document.getElementById("fontSize");
    const resetBtn = document.getElementById("reset");
    const left = document.getElementById("left-align");
    const right = document.getElementById("right-align");
    const center = document.getElementById("center-align");
    const textColor = document.getElementById("fontColor");
    const background = document.getElementById("background");
    const cutBtn = document.getElementById("cut");
    const copyBtn = document.getElementById("copy");
    const pasteBtn = document.getElementById("paste");
    const downloadBtn = document.getElementById("download");
    const findSearch = document.getElementById("find");//Defining the find Input
    const replaceSearch = document.getElementById("replace");//Defining the Replace Input
    
    //Defining the Arbitary Elements ID.
    let currentCell;
    let cutCell = {};
    let lastPressedButton;
    const table = document.getElementById("sheet");
    const rowHeading = document.getElementById("row-heading");
    const columnHeading = document.getElementById("tableBody");

    //Generating the Table Rows and Columns

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

        //Adding the Focus functionality to the cell data
        td.setAttribute("contenteditable","true");
        td.setAttribute("id",`${String.fromCharCode(col+65)}${row}`)
        td.addEventListener('focus',(event)=>onFocuFn(event));
        td.addEventListener('input',(event)=>onInputFn(event));
        tr.append(td);
        }
        columnHeading.append(tr);
    }

    //Forming an outer Array
    let matrix = new Array(rows);
    for(let row = 0;row<rows;row++){
        matrix[row] = new Array(columns);
        for(let col = 0;col<columns;col++){
            matrix[row][col] = {};
        }
    }

    //Displaying the Current Cell ID and Storing in the global variable in the Blank Cell.
    function onFocuFn(event){
        currentCell = event.target;
        document.getElementById("currentCell").innerText = currentCell.id;
    }
    //Adding the input change inside the Cell to the Matrix
    function onInputFn(event){
        updateMatrix(event.target);
    }

    function updateMatrix(currentCell){
        let tempObj = {
            style: currentCell.style.cssText,
            text: currentCell.innerText,
            id: currentCell.id,
        }
        let i = currentCell.id.substr(1) -1;//Defining the row of the matrix
        let j = currentCell.id[0].charCodeAt(0)-65;//Defining the Column of the Matrix
        matrix[i][j] = tempObj;
        console.log(matrix);
    }
    //Adding Functionality to the Font Styles

    //Bold Button Functionality
    bold.addEventListener('click',()=>{
        if(currentCell.style.fontWeight == ""){
            currentCell.style.fontWeight = "bolder";
            bold.style.backgroundColor = "#3297FD";
            bold.style.border = "1px solid #3297FD";
            bold.style.borderRadius = "4px";
        }else{
            currentCell.style.fontWeight = "";
            bold.style.backgroundColor = "";
            bold.style.border = "";
            bold.style.borderRadius = "";
        }
        updateMatrix(currentCell);
    })

    //Underline Button Functionality
    underline.addEventListener('click',()=>{
        if(currentCell.style.textDecoration == ""){
            currentCell.style.textDecoration = "underline";
            underline.style.backgroundColor = "#3297FD";
            underline.style.border = "1px solid #3297FD";
            underline.style.borderRadius = "4px";
        }else{
            currentCell.style.textDecoration = "";
            underline.style.backgroundColor = "";
            underline.style.border = "";
            underline.style.borderRadius = "";
        }
        updateMatrix(currentCell);
    })

    //Italic Button Functionality
    italic.addEventListener('click',()=>{
        if(currentCell.style.fontStyle == ""){
            currentCell.style.fontStyle = "italic";
            italic.style.backgroundColor = "#3297FD";
            italic.style.border = "1px solid #3297FD";
            italic.style.borderRadius = "4px";
        }else{
            currentCell.style.fontStyle = "";
            italic.style.backgroundColor = "";
            italic.style.border = "";
            italic.style.borderRadius = "";
        }
        updateMatrix(currentCell);
    })

    //Font-Family Functionality
    fontFamily.addEventListener('change',()=>{
        currentCell.style.fontFamily = fontFamily.value;
        updateMatrix(currentCell);
    })

    //Font-Size Funtionality
    fontSize.addEventListener('change',()=>{
        currentCell.style.fontSize = fontSize.value;
        updateMatrix(currentCell);
    })

    //Reset Button
    resetBtn.addEventListener('click',()=>{
        currentCell.style.fontStyle = "normal";
        currentCell.style.textDecoration = "none";
        currentCell.style.fontWeight = "inherit";
        currentCell.style.textAlign = "center";
        currentCell.style.fontFamily = "Sans-serif";
        currentCell.style.fontSize = "18px";
        currentCell.style.color = "#000000";
        currentCell.style.backgroundColor = "#ffffff";
        fontFamily.value = "Sans-serif";
        fontSize.value = "18px";
        textColor.value = "#000000";
        background.value = "#ffffff";
        italic.style = "";
        bold.style = "";
        underline.style = "";
        updateMatrix(currentCell);
    })

    //Text Align Buttons of the Text inside the cell

    //Left Align
    left.addEventListener('click',()=>{
        const defaultStyle = currentCell.style.textAlign;
        console.log(defaultStyle);
        if(currentCell.style.textAlign = defaultStyle || currentCell.style.textAlign ==""){
            currentCell.style.textAlign="left";
        }else{
            if(!defaultStyle){
                currentCell.style.textAlign = "center";
            }else{
                currentCell.style.textAlign = defaultStyle;
            }
        }
        updateMatrix(currentCell)
    })

    //Right Align
    right.addEventListener('click',()=>{
        const defaultStyle = currentCell.style.textAlign;
        console.log(defaultStyle);
        if(currentCell.style.textAlign = defaultStyle || currentCell.style.textAlign ==""){
            currentCell.style.textAlign="right";
        }else{
            if(!defaultStyle){
                currentCell.style.textAlign = "center";
            }else{
                currentCell.style.textAlign = defaultStyle;
            }
        }
        updateMatrix(currentCell);
    })

    //Center Align
    center.addEventListener('click',()=>{
        const defaultStyle = currentCell.style.textAlign;
        console.log(defaultStyle);
        if(currentCell.style.textAlign = defaultStyle || currentCell.style.textAlign ==""){
            currentCell.style.textAlign="center";
        }
        updateMatrix(currentCell);
    })
    
    //Changing the fontColor of the text
    textColor.addEventListener('change',()=>{
      currentCell.style.color = textColor.value;  
      updateMatrix(currentCell);
    })

    //Changing the background Color of the Current Cell
    background.addEventListener('change',()=>{
        currentCell.style.backgroundColor = background.value;  
        updateMatrix(currentCell);
      })
      
      //Functioning of Cell Operations

      //Cut Operation
      cutBtn.addEventListener('click',()=>{
        cutCell = {
            style : currentCell.style.cssText,
            text: currentCell.innerText,
        }
        currentCell.innerText = "";
        currentCell.style.cssText = "";
        lastPressedButton = "cutBtn";
      })

      //Copy Operation
      copyBtn.addEventListener('click',()=>{
        cutCell = {
            style : currentCell.style.cssText,
            text: currentCell.innerText,
        }
        currentCell.innerText = currentCell.innerText;
        currentCell.style.cssText = currentCell.style.cssText;
        lastPressedButton = "copyBtn";
      })     

      //Paste Operation
      pasteBtn.addEventListener('click',()=>{
            currentCell.innerText = cutCell.text;
            currentCell.style.cssText = cutCell.style;
            console.log(lastPressedButton);
            if(lastPressedButton == "cutBtn"){
                    cutCell = {
                        style : "",
                        text: "",                        
                    };
            }else if(lastPressedButton == "copyBtn"){
                cutCell = {
                    style : currentCell.style.cssText,
                    text: currentCell.innerText,                   
                }
            }
      })
      function downloadJSON(){
        const matrixString = JSON.stringify(matrix);
        const blob = new Blob([matrixString],{type:'application/json'});
        const link = document.createElement('a');
        link.href= URL.createObjectURL(blob);
        document.body.append(link);
        link.click();
        document.body.removeChild(link);
      }

      downloadBtn.addEventListener('click',()=>{
        downloadJSON();
      })
      findSearch.addEventListener('change',(event)=>{
        for(let i=0;i<rows;i++){//Checking for the 100 rows
            for(let j=0;j<columns;j++){//Checking for the 26columns
                if(matrix[i][j].text = event.target.value){
                    currentCell.style.backgroundColor = "blue";                    
                }
            }
        }
        console.log(matrix);
        console.log(event.target.value);//Printing the Input Value
      })
      replaceSearch.addEventListener('change',(event)=>{
        console.log(event.target.value);
        if(currentCell.style.backgroundColor = "blue"){
            currentCell.innerText = event.target.value
        }
      })
})



