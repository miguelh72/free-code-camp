"use strict";

// Problem statement:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
function checkCashRegister(price, cash, cid) {
    const valueInPennies = {
        PENNY: 1,
        NICKEL: 5,
        DIME: 10,
        QUARTER: 25,
        ONE: 100,
        FIVE: 500,
        TEN: 10000,
        TWENTY: 20000,
        "ONE HUNDRED": 100000,
    };
    
    const changeInPenies = Math.round(price*1000 - cash*1000);
    
    return { status: "OPEN", change: true };
}

module.exports = { checkCashRegister };