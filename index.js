let grid = document.getElementById("grids");

let cell = document.createElement("div");
cell.innerHTML = "HTML";
grid.appendChild(cell);


// get userInput to create rows and column grid less than 100.
function rowsColumns (numOfCells)
{
    if (numOfCells > 100)
    {
        alert("Make another choice less than 100 cells");
    }
    else
    {
        for(let i = 0; i < numOfCells; i++)
        {
            let row = document.createElement("div");
            grid.appendChild(row).className = "gridRow";
    
            let column = document.createElement("div");
            grid.appendChild(column).className = "gridColumn";
        }
    }
}