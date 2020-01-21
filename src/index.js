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
let computerBoard = gameboard();

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

function removeComputerGrid() {
    const element = document.getElementsByClassName('gridsquaresComputer');

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

function updateComputerGrid() {
    computerBoard.grid.forEach(e => {
        e.forEach(e2 => {
            createComputerGrid(e2, computerBoard.grid);
        });
    });
}

//-----------------------grid creation

//retunerar rutnumret av rutan man klickade på
function getSquareNumber(callbackFindIndex) {
    document.querySelectorAll('.gridsquares').forEach(element => {
        element.addEventListener('click', function(e) {
            let squarePicked = e.target.id;
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
        }
    }
}

function placeShip(ship, y, x, verticalDirection) {
    let length = ship.getLife();
    let arrayLength = board.grid.length;

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
    } else {
        for (let i = 0; i < length; i++) {
            board.grid[y + i][x] = ship.getName();
        }

        currentShip++;
        console.log(currentShip);
    }

    removeGrid();
    updateGrid();
}

function placeComputerShip(ship) {
    let y = Math.floor(Math.random() * 10);
    let x = Math.floor(Math.random() * 10);
    let verticalDirection = Math.random() >= 0.5;
    let length = ship.getLife();
    let arrayLength = computerBoard.grid.length;

    console.log('y' + y + 'x:' + x + verticalDirection + length + arrayLength);

    while (length + y > arrayLength) {
        y = Math.floor(Math.random() * 10);
        console.log('whileloop y');
    }

    while (length + x > arrayLength) {
        x = Math.floor(Math.random() * 10);
        console.log('whileloop x');
    }

    while (!Number.isInteger(computerBoard.grid[y][x])) {
        console.log('whileloop occupado');
        y = Math.floor(Math.random() * 10);
        x = Math.floor(Math.random() * 10);
    }

    if (!verticalDirection) {
        for (let i = 0; i < length; i++) {
            computerBoard.grid[y][x + i] = ship.getName();
        }
    } else {
        for (let i = 0; i < length; i++) {
            computerBoard.grid[y + i][x] = ship.getName();
        }
    }

    removeComputerGrid();
    updateComputerGrid();
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
            placeComputerShip(carrier);
            break;
        case 2:
            placeShip(
                battleship,
                indexarray[indexarray.length - 2],
                indexarray[indexarray.length - 1],
                verticalDirection,
            );
            getSquareNumber(findIndex);
            placeComputerShip(battleship);

            break;
        case 3:
            console.log('case3');
            placeShip(
                cruiser,
                indexarray[indexarray.length - 2],
                indexarray[indexarray.length - 1],
                verticalDirection,
            );
            placeComputerShip(cruiser);

            runPlacingPhase = false; // avslutar placerings fasen
            break;
    }
});

//game running
updateGrid();
updateComputerGrid();

getSquareNumber(findIndex);

//den kör getSquare  en gång och vid nästa klick så for ja ginte en ny uppdaterad array
