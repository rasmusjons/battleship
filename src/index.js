import { ship } from './ShipFactory';
import { gameboard } from './Gameboard';

let runPlacingPhase = false
let currentDirection = true
let indexarray = []
let currentShip = 1


//skapar båtarna
const carrier = ship('carrier', 5);
const battleship = ship('battleship', 4);
const cruiser = ship('crusier', 3);
const submarine = ship('submarine', 3);
const destroyer = ship('destroyer', 2);

//skapar brädet
let board = gameboard();



//grid creation--------------

let container = document.querySelector('#container');

function createGrid(idName) {
    const element = document.createElement('div');

    element.setAttribute('class', 'gridsquares');
    element.setAttribute('id', + idName);
    element.innerHTML = idName  

    return container.appendChild(element);
}


function removeGrid() {
    const element = document.getElementsByClassName('gridsquares');

    while(element[0]) {
        element[0].parentNode.removeChild(element[0]);
    }
}





function updateGrid () {
board.grid.forEach(e => {
    e.forEach(e2 => {
        createGrid(e2, board.grid);
    });
});
}
//-----------------------grid creation


//retunerar rutnumret av rutan man klickade på 
function getSquareNumber (callbackFindIndex) {
    document.querySelectorAll(".gridsquares").forEach(element => {
    element.addEventListener('click', function(e) {
    let squarePicked= e.target.id;
    callbackFindIndex(squarePicked)

   })
 })
 }





// hittar index i arrayen så. Kallar sedan på placeShip. 
function findIndex (number) {
    let n = parseInt(number)
    for (let i = 0; i < board.grid.length; i++){   
        let index = board.grid[i].indexOf(n)
         if (index != -1) {
            indexarray.push(i)
            indexarray.push(index)
            confirmText.style.display = "block"
            confirmText.innerHTML="Confirm position: " + number
            console.log(indexarray)
        }

    }
}

function placeShip (ship, y, x, direction) {
    console.log(length, y, x, direction )
    length = ship.getLife()

    if (!currentDirection) {
        for (let i = 0; i < length; i++){
           board.grid[y][x+i] = ship.getName()
        }
    } else {
        for (let i = 0; i < length; i++){
        board.grid[y+i][x] = ship.getName()
        }     
    }
    removeGrid()
    updateGrid()
}

//ändra från  vertical to horizontal
const directionButton = document.getElementById("direction");
directionButton.addEventListener("click", function () {
    console.log("direction button")
     currentDirection = !currentDirection
     if (currentDirection) {
         console.log(currentDirection)
        directionButton.innerHTML = "Change to Horizontal"
     } else {
        console.log(currentDirection)
        directionButton.innerHTML = "Change to Vertical"
     }
})


const confirmButton = document.getElementById("confirmButton");
const confirmText = document.getElementById("confirmText");
confirmButton.addEventListener("click", function () {
    
    switch (currentShip) {
        case 1: 
            placeShip(carrier, indexarray[0], indexarray[1], currentDirection) 
            currentShip++  
            getSquareNumber(findIndex);
            break;
        case 2: 
            placeShip(battleship, indexarray[2], indexarray[3], currentDirection) 
            currentShip++  
            getSquareNumber(findIndex);
            break;  
        case 3: 
            placeShip(cruiser, indexarray[4], indexarray[5], currentDirection) 
            currentShip++  
            break;              
    }    
})




//game running
updateGrid();

getSquareNumber(findIndex);



//den kör getSquare  en gång och vid nästa klick så for ja ginte en ny uppdaterad array


