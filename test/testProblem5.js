const inventory = require('../inventory');
const sumCars = require('../problem5');

let arrOld = [];
arrOld=sumCars(inventory, arrOld);
console.log(arrOld);
console.log(arrOld.length);