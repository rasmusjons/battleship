/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Gameboard.js":
/*!**************************!*\
  !*** ./src/Gameboard.js ***!
  \**************************/
/*! exports provided: gameboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameboard\", function() { return gameboard; });\nconst gameboard = () => {\n    let grid = [\n        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],\n        [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],\n        [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],\n        [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],\n        [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],\n        [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],\n        [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],\n        [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],\n        [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],\n        [91, 92, 93, 94, 95, 96, 97, 98, 99, 100],\n    ];\n\n    let indexarray = [];\n\n    let findIndex = number => {\n        console.log(grid.length);\n        for (let i = 0; i < grid.length; i++) {\n            let index = grid[i].indexOf(number);\n\n            if (index > -1) {\n                console.log(index + ' IF');\n\n                indexarray.push(i);\n                indexarray.push(index);\n\n                console.log(indexarray);\n                return indexarray;\n            }\n        }\n    };\n\n    let hit = number => {\n        let index = findIndex(number);\n\n        if (grid[index[0]][index[1]] != 'X') {\n            grid[index[0]][index[1]] = 'X';\n        } else console.log('error');\n\n        return gridSquares;\n    };\n\n    return { findIndex, hit, grid };\n};\n\n//module.exports = gameboard;\n\n\n\n//# sourceURL=webpack:///./src/Gameboard.js?");

/***/ }),

/***/ "./src/ShipFactory.js":
/*!****************************!*\
  !*** ./src/ShipFactory.js ***!
  \****************************/
/*! exports provided: ship */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ship\", function() { return ship; });\nconst ship = (name, length) => {\n    let getName = () => name;\n    let getLife = () => length;\n    let hitsTaken = [];\n    let sunk = false;\n\n    let hit = number => {\n        if (sunk === false) {\n            hitsTaken.push(number);\n            length--;\n            return length;\n        } else return false;\n    };\n    let isSunk = () => {\n        if (length === 0) {\n            return (sunk = true);\n        } else return false;\n    };\n\n    let getHitsTaken = () => {\n        console.log(hitsTaken);\n    };\n\n    return { getName, hit, isSunk, getLife, getHitsTaken };\n};\n\n//module.exports = ship;\n \n\n//# sourceURL=webpack:///./src/ShipFactory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ShipFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShipFactory */ \"./src/ShipFactory.js\");\n/* harmony import */ var _Gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gameboard */ \"./src/Gameboard.js\");\n\n\n\nlet runPlacingPhase = true;\nlet verticalDirection = true;\nlet indexarray = [];\nlet currentShip = 1;\n\n//skapar båtarna\nconst carrier = Object(_ShipFactory__WEBPACK_IMPORTED_MODULE_0__[\"ship\"])('Carrier', 5);\nconst battleship = Object(_ShipFactory__WEBPACK_IMPORTED_MODULE_0__[\"ship\"])('Battleship', 4);\nconst cruiser = Object(_ShipFactory__WEBPACK_IMPORTED_MODULE_0__[\"ship\"])('Crusier', 3);\nconst submarine = Object(_ShipFactory__WEBPACK_IMPORTED_MODULE_0__[\"ship\"])('Submarine', 3);\nconst destroyer = Object(_ShipFactory__WEBPACK_IMPORTED_MODULE_0__[\"ship\"])('Destroyer', 2);\n\n//skapar brädet\nlet board = Object(_Gameboard__WEBPACK_IMPORTED_MODULE_1__[\"gameboard\"])();\n\n//grid creation--------------\n\nlet container = document.querySelector('#container');\n\nlet containerComputer = document.querySelector('#containerComputer');\n\nfunction createGrid(idName) {\n    const element = document.createElement('div');\n\n    element.setAttribute('class', 'gridsquares');\n    element.setAttribute('id', +idName);\n    element.innerHTML = idName;\n\n    return container.appendChild(element);\n}\n\nfunction removeGrid() {\n    const element = document.getElementsByClassName('gridsquares');\n\n    while (element[0]) {\n        element[0].parentNode.removeChild(element[0]);\n    }\n}\n\nfunction updateGrid() {\n    board.grid.forEach(e => {\n        e.forEach(e2 => {\n            createGrid(e2, board.grid);\n        });\n    });\n}\n\nfunction createComputerGrid(idName) {\n    const element = document.createElement('div');\n\n    element.setAttribute('class', 'gridsquaresComputer');\n    element.setAttribute('id', +idName);\n    element.innerHTML = idName;\n\n    return containerComputer.appendChild(element);\n}\n\nfunction renderComputerGrid() {\n    board.grid.forEach(e => {\n        e.forEach(e2 => {\n            createComputerGrid(e2, board.grid);\n        });\n    });\n}\n\n//-----------------------grid creation\n\n//retunerar rutnumret av rutan man klickade på\nfunction getSquareNumber(callbackFindIndex) {\n    document.querySelectorAll('.gridsquares').forEach(element => {\n        element.addEventListener('click', function(e) {\n            let squarePicked = e.target.id;\n            console.log(squarePicked);\n            callbackFindIndex(squarePicked);\n        });\n    });\n}\n\n// hittar index i arrayen så.\nfunction findIndex(number) {\n    let n = parseInt(number);\n    for (let i = 0; i < board.grid.length; i++) {\n        let index = board.grid[i].indexOf(n);\n        if (index != -1) {\n            indexarray.push(i);\n            indexarray.push(index);\n            confirmText.style.display = 'block';\n            confirmText.innerHTML = 'Confirm position: ' + number;\n            console.log(indexarray);\n        }\n    }\n}\n\nfunction placeShip(ship, y, x, verticalDirection) {\n    console.log(ship, y, x, verticalDirection);\n    let length = ship.getLife();\n    let arrayLength = board.grid.length;\n    console.log(arrayLength);\n\n    if (length + y > arrayLength || length + x > arrayLength) {\n        alert('wrong');\n        return;\n    }\n\n    if (!Number.isInteger(board.grid[y][x])) {\n        alert('occupado!');\n        return;\n    }\n\n    if (!verticalDirection) {\n        for (let i = 0; i < length; i++) {\n            board.grid[y][x + i] = ship.getName();\n        }\n        currentShip++;\n        console.log('currentship' + currentShip);\n    } else {\n        for (let i = 0; i < length; i++) {\n            board.grid[y + i][x] = ship.getName();\n        }\n        currentShip++;\n        console.log('currentship' + currentShip);\n    }\n\n    removeGrid();\n    updateGrid();\n}\n\n//ändra från  vertical to horizontal\nconst directionButton = document.getElementById('direction');\ndirectionButton.addEventListener('click', function() {\n    console.log('direction button');\n    verticalDirection = !verticalDirection;\n    if (verticalDirection) {\n        console.log(verticalDirection);\n        directionButton.innerHTML = 'Change to Horizontal';\n    } else {\n        console.log(verticalDirection);\n        directionButton.innerHTML = 'Change to Vertical';\n    }\n});\n\n//PLACERAR UT SKEPPEN. En tre skepps varian.t\nconst confirmButton = document.getElementById('confirmButton');\nconst confirmText = document.getElementById('confirmText');\n\nconfirmButton.addEventListener('click', function() {\n    switch (currentShip) {\n        case 1:\n            placeShip(\n                carrier,\n                indexarray[indexarray.length - 2],\n                indexarray[indexarray.length - 1],\n                verticalDirection,\n            );\n\n            getSquareNumber(findIndex);\n            break;\n        case 2:\n            placeShip(\n                battleship,\n                indexarray[indexarray.length - 2],\n                indexarray[indexarray.length - 1],\n                verticalDirection,\n            );\n            getSquareNumber(findIndex);\n            break;\n        case 3:\n            placeShip(\n                cruiser,\n                indexarray[indexarray.length - 2],\n                indexarray[indexarray.length - 1],\n                verticalDirection,\n            );\n            runPlacingPhase = false; // avslutar placerings fasen\n            break;\n    }\n});\n\n//game running\nupdateGrid();\nrenderComputerGrid();\n\ngetSquareNumber(findIndex);\n\n//den kör getSquare  en gång och vid nästa klick så for ja ginte en ny uppdaterad array\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });