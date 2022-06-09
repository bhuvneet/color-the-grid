// container div to hold all rows and column divs
let container   = document.getElementById("container");

// create the defaul 16x16 grid by invoking rowsColumns function.
function grid16by16 ()
{
    let numOfRows = 100;
    createGrid(numOfRows);
    gridSize(numOfRows);
}

// get userInput to create rows and column grid less than 100.
function createGrid (numOfRows)
{
    for(let i = 0; i < numOfRows; i++)
    {   
        // create rows
        let row = document.createElement("div");
        row.id = "gridRow";
        row.addEventListener("mousemove", colorWhenHovered);
        container.appendChild(row);
    }
    
    let numOfCells = (numOfRows*numOfRows) - numOfRows;
    for(let j = 0; j < numOfCells; j++)
    {
        let cell = document.createElement("div");
        cell.id = "gridCells";
        cell.addEventListener("mousemove", colorWhenHovered);
        container.appendChild(cell);
    }
    
    let cellPerColumn = numOfRows - 1;

    document.getElementById("container").style.gridTemplate = "repeat(" + cellPerColumn + ", 1fr) / repeat(" + numOfRows + ", 1fr)";
}

// create a new grid from the valid value entered by user.
function newGrid ()
{
    let userValue = document.getElementById("userCreatedGrid").value;
    console.log(userValue);

    let prevValidVal = 16;

    // prompt user to enter number of rows less than 100
    if (userValue > 100)
    {
        let gridText = document.getElementById("newGridText");
        gridText.textContent = "Enter grid size less (> 100):";
        container.style.backgroundColor = "aliceblue";
        let clear = document.getElementById("userCreatedGrid").value ='';

        // remove colored grid and resize to previously valid sized grid or 16x16
        removePrevGrid();
        createGrid(prevValidVal);
        gridSize(prevValidVal);
    }
    // create grid for the number of rows entered by user
    else
    {
        let prevValidVal = userValue;
        // remove divs inside the grid
        removePrevGrid();

        // invoke rowsColumns function to create new grid
        createGrid(userValue);
        gridSize(userValue);
    }
}

function gridSize (s)
{
    // update size of grid
    let size = document.getElementById("size");
    size.innerText = "Grid size: " + s + ' x ' + s;
}

function colorWhenHovered (e)
{
    function randomColor()
    {
        return Math.floor(Math.random()*256);
    }
    x = e.offsetX;
    y = e.offsetY;
    
    this.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}

function removePrevGrid ()
{
    const prevGRid = document.getElementById("container");
    
    while (prevGRid.hasChildNodes())
    {
        prevGRid.removeChild(prevGRid.firstChild);
    }

    return;
}

grid16by16();

