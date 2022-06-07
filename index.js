// container div to hold all rows and column divs
let container   = document.getElementById("container");
let rows        = document.querySelectorAll("gridRow");
let cells       = document.querySelectorAll("gridCells");

// create the defaul 16x16 grid by invoking rowsColumns function.
function grid16by16 ()
{
    // 256 cells in total
    let numOfRows = 20;
    createGrid(numOfRows);
}

// get userInput to create rows and column grid less than 100.
function createGrid (numOfRows)
{
    for(let i = 0; i < numOfRows; i++)
    {   
        // create rows
        let row = document.createElement("div");
        row.id = "gridRow";  
        container.appendChild(row);
    }
    
    let numOfCells = (numOfRows*numOfRows) - numOfRows;
    for(let j = 0; j < numOfCells; j++)
    {
        let cell = document.createElement("div");
        cell.id = "gridCells";
        container.appendChild(cell);
    }
    
    let cellPerColumn = numOfRows - 1;

    //createColumns(numOfRows);
    document.getElementById("container").style.gridTemplate = "repeat(" + cellPerColumn + ", 1fr) / repeat(" + numOfRows + ", 1fr)";
    //document.getElementById("container").style.gridTemplateColumns = "repeat(" + cellPerColumn + ", 1fr)";
}
/*
function createColumns (numOfRows)
{
    // append cells to the rows
    for(let j = 0; j < (numOfRows*numOfRows); j++)
    {
        let cell = document.createElement("div");
        cell.id = "gridCells";
        container.appendChild(cell);
    }
}

function newGrid ()
{
    let userValue = document.getElementById("userCreatedGrid").value;
    console.log(userValue);

    // prompt user to enter number of rows less than 100
    if (userValue > 100)
    {
        let gridText = document.getElementById("newGridText");
        gridText.textContent = "Enter a new number for rows, less than 100: ";
        let clear = document.getElementById("userCreatedGrid").value ='';
    }
    // create grid for the number of rows entered by user
    else
    {
        // remove divs inside the grid
        removePrevGrid();

        // invoke rowsColumns function to create new grid
        createRows(userValue);
    }
}

function removePrevGrid ()
{
    const prevGRid = document.getElementById("grids");
    
    while (prevGRid.hasChildNodes())
    {
        prevGRid.removeChild(prevGRid.firstChild);
    }

    return;
}
*/
grid16by16();

