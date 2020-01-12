const ship = (name, length) => {
    let getName = () => name;
    let getLife = () => length;
    let hitsTaken = [];
    let sunk = false;

    let hit = number => {
        if (sunk === false) {
            hitsTaken.push(number);
            length--;
            return length;
        } else return false;
    };
    let isSunk = () => {
        if (length === 0) {
            return (sunk = true);
        } else return false;
    };

    let getHitsTaken = () => {
        console.log(hitsTaken);
    };

    return { getName, hit, isSunk, getLife, getHitsTaken };
};

//module.exports = ship;
 export {
     ship
 }