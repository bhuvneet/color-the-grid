// container div to hold all rows and column divs
let grid = document.getElementById("grids");
let rows = document.getElementsByClassName("gridRow");
let cells = document.getElementsByClassName("gridCells");

// create the defaul 16x16 grid by invoking rowsColumns function.
function grid16by16 ()
{
    // 256 cells in total
    let numOfrows = 16;
    rowsColumns(numOfrows);
}

// get userInput to create rows and column grid less than 100.
function rowsColumns (numOfrows)
{
    if (numOfrows > 100)
    {
        alert("Make another choice less than 100 cells");
    }
    else
    {
        for(let i = 0; i < numOfrows; i++)
        {
            let row = document.createElement("div");
            grid.appendChild(row).className = "gridRow";
            
        }

        for(let j = 0; j < (numOfrows * numOfrows); j++)
        {
            let cell = document.createElement("div");
            grid.appendChild(cell).className = "gridCells";
        }
    }
}

grid16by16();