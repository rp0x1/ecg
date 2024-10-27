#!/usr/bin/env node

const typeMeat = process.argv[2] || undefined;
const quantityOfMeat = process.argv[3] || undefined;

const newMeat = {
    typeOfMeat: typeMeat,
    quantityInGrams: quantityOfMeat
}

console.log(newMeat);