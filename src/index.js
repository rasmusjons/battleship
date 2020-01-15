import { ship } from './ShipFactory';
import { gameboard } from './Gameboard';

let runPlacingPhase = true;
let verticalDirection = true;
let indexarray = [];
let currentShip = 1;

//skapar båtarna
const carrier = ship('Carrier', 5);
const battleship = ship('Battleship', 4);
const cruiser = ship('Crusier', 3);
const submarine = ship('Submarine', 3);
const destroyer = ship('Destroyer', 2);

//skapar brädet
let board = gameboard();

//grid creation--------------

let container = document.querySelector('#container');

let containerComputer = document.querySelector('#containerComputer');

function createGrid(idName) {
    const element = document.createElement('div');

    element.setAttribute('class', 'gridsquares');
    element.setAttribute('id', +idName);
    element.innerHTML = idName;

    return container.appendChild(element);
}

function removeGrid() {
    const element = document.getElementsByClassName('gridsquares');

    while (element[0]) {
        element[0].parentNode.removeChild(element[0]);
    }
}

function updateGrid() {
    board.grid.forEach(e => {
        e.forEach(e2 => {
            createGrid(e2, board.grid);
        });
    });
}

function createComputerGrid(idName) {
    const element = document.createElement('div');

    element.setAttribute('class', 'gridsquaresComputer');
    element.setAttribute('id', +idName);
    element.innerHTML = idName;

    return containerComputer.appendChild(element);
}

function renderComputerGrid() {
    board.grid.forEach(e => {
        e.forEach(e2 => {
            createComputerGrid(e2, board.grid);
        });
    });
}

//-----------------------grid creation

//retunerar rutnumret av rutan man klickade på
function getSquareNumber(callbackFindIndex) {
    document.querySelectorAll('.gridsquares').forEach(element => {
        element.addEventListener('click', function(e) {
            let squarePicked = e.target.id;
            console.log(squarePicked);
            callbackFindIndex(squarePicked);
        });
    });
}

// hittar index i arrayen så.
function findIndex(number) {
    let n = parseInt(number);
    for (let i = 0; i < board.grid.length; i++) {
        let index = board.grid[i].indexOf(n);
        if (index != -1) {
            indexarray.push(i);
            indexarray.push(index);
            confirmText.style.display = 'block';
            confirmText.innerHTML = 'Confirm position: ' + number;
            console.log(indexarray);
        }
    }
}

function placeShip(ship, y, x, verticalDirection) {
    console.log(ship, y, x, verticalDirection);
    let length = ship.getLife();
    let arrayLength = board.grid.length;
    console.log(arrayLength);

    if (length + y > arrayLength || length + x > arrayLength) {
        alert('wrong');
        return;
    }

    if (!Number.isInteger(board.grid[y][x])) {
        alert('occupado!');
        return;
    }

    if (!verticalDirection) {
        for (let i = 0; i < length; i++) {
            board.grid[y][x + i] = ship.getName();
        }
        currentShip++;
        console.log('currentship' + currentShip);
    } else {
        for (let i = 0; i < length; i++) {
            board.grid[y + i][x] = ship.getName();
        }
        currentShip++;
        console.log('currentship' + currentShip);
    }

    removeGrid();
    updateGrid();
}

//ändra från  vertical to horizontal
const directionButton = document.getElementById('direction');
directionButton.addEventListener('click', function() {
    console.log('direction button');
    verticalDirection = !verticalDirection;
    if (verticalDirection) {
        console.log(verticalDirection);
        directionButton.innerHTML = 'Change to Horizontal';
    } else {
        console.log(verticalDirection);
        directionButton.innerHTML = 'Change to Vertical';
    }
});

//PLACERAR UT SKEPPEN. En tre skepps varian.t
const confirmButton = document.getElementById('confirmButton');
const confirmText = document.getElementById('confirmText');

confirmButton.addEventListener('click', function() {
    switch (currentShip) {
        case 1:
            placeShip(
                carrier,
                indexarray[indexarray.length - 2],
                indexarray[indexarray.length - 1],
                verticalDirection,
            );

            getSquareNumber(findIndex);
            break;
        case 2:
            placeShip(
                battleship,
                indexarray[indexarray.length - 2],
                indexarray[indexarray.length - 1],
                verticalDirection,
            );
            getSquareNumber(findIndex);
            break;
        case 3:
            placeShip(
                cruiser,
                indexarray[indexarray.length - 2],
                indexarray[indexarray.length - 1],
                verticalDirection,
            );
            runPlacingPhase = false; // avslutar placerings fasen
            break;
    }
});

//game running
updateGrid();
renderComputerGrid();

getSquareNumber(findIndex);

//den kör getSquare  en gång och vid nästa klick så for ja ginte en ny uppdaterad array
