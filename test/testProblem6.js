const inventory = require('../inventory');
const cars = require('../problem6');

let arr = [];

arr=cars(inventory, arr);
console.log(JSON.stringify(arr));
