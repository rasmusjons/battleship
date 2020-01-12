const ship = require('./ShipFactory');

let testship = ship('Carrier', 4);
test('ship functions', () => {
    expect(testship.getName()).toBe('Carrier');
    expect(testship.getLife()).toBe(4);
    expect(testship.isSunk()).toBe(false);
    expect(testship.hit()).toBe(3);
});

 let testship2 = ship('battleship', 0);
 test('ship functions', () => {
     expect(testship2.getName()).toBe('battleship');
     expect(testship2.getLife()).toBe(0);
     expect(testship2.isSunk()).toBe(true);
     expect(testship2.hit()).toBe(false);
 });
