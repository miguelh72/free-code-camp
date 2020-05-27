"use strict";

// Problem statement:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/cash-register
function checkCashRegister(price, cash, cid) {
    // NOTE: All money inside function will be in units of pennies, and will only be converted to ones at end.
    const VALUE = {
        PENNY: 1,
        NICKEL: 5,
        DIME: 10,
        QUARTER: 25,
        ONE: 100,
        FIVE: 500,
        TEN: 1000,
        TWENTY: 2000,
        "ONE HUNDRED": 10000,
    };
    price = Math.round(price * VALUE["ONE"]);
    cash = Math.round(cash * VALUE["ONE"]);
    const cashRegister = cid.reduce((drawer, [label, valueInOnes]) => {
        const valueInPennies = Math.round(valueInOnes * VALUE["ONE"]);
        drawer[label] = Math.round(valueInPennies / VALUE[label]);
        drawer.total += valueInPennies;
        return drawer;
    }, { total:0 });

    const change = cash - price;
    if (cashRegister.total < change) return {status: "INSUFFICIENT_FUNDS", change: []};
    if (cashRegister.total === change) return {status: "CLOSED", change: cid};

    let remainingChange = change;
    let foundChange = 0;
    const calcChange =  ["ONE HUNDRED", "TWENTY", "TEN", "FIVE", "ONE", "QUARTER", "DIME", "NICKEL", "PENNY"]
        .reduce((out, label) => {
            let numUnits = 0;
            while(remainingChange >= VALUE[label] && cashRegister[label] > 0) {
                cashRegister[label]--;
                cashRegister.total -= VALUE[label];
                remainingChange -= VALUE[label];
                numUnits++;
            }
            if (numUnits) {
                out.push([label, (numUnits*VALUE[label]) / VALUE["ONE"]]);
                foundChange += numUnits*VALUE[label];
            }
            return out;
        }, []);
    if (foundChange === change)
        return {status: "OPEN", change: calcChange};
    else
        return {status: "INSUFFICIENT_FUNDS", change: []};
}

module.exports = { checkCashRegister };