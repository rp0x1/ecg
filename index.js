#!/usr/bin/env node
//const utils = require("./utils/index");

const typeMeat = process.argv[2] || undefined;
const quantityOfMeat = process.argv[3] || undefined;

const newMeat = {
    typeMeat,
    quantityOfMeat
}

console.log(newMeat);
