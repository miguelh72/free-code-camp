const { checkCashRegister } = require("./cash_register.js");

test("Implemented problem interface", () => {
    expect(checkCashRegister).not.toBeFalsy();
});

test("The checkCashRegister() function should always return an object with a status key and a change key.", () => {
    expect(checkCashRegister(
        19.5, 
        20, 
        [
            ["PENNY", 1.01], 
            ["NICKEL", 2.05], 
            ["DIME", 3.1], 
            ["QUARTER", 4.25], 
            ["ONE", 90], 
            ["FIVE", 55], 
            ["TEN", 20], 
            ["TWENTY", 60], 
            ["ONE HUNDRED", 100]
        ])
        .status
    ).toBeTruthy();
    
    expect(checkCashRegister(
        19.5, 
        20, 
        [
            ["PENNY", 1.01], 
            ["NICKEL", 2.05], 
            ["DIME", 3.1], 
            ["QUARTER", 4.25], 
            ["ONE", 90], 
            ["FIVE", 55], 
            ["TEN", 20], 
            ["TWENTY", 60], 
            ["ONE HUNDRED", 100]
        ])
        .change
    ).toBeTruthy();
    
});

test("Returns correct change when change is less than available in change drawer", () => {
    expect(checkCashRegister(
        19.5, 
        20, 
        [
            ["PENNY", 1.01], 
            ["NICKEL", 2.05], 
            ["DIME", 3.1], 
            ["QUARTER", 4.25], 
            ["ONE", 90], 
            ["FIVE", 55], 
            ["TEN", 20], 
            ["TWENTY", 60], 
            ["ONE HUNDRED", 100]
        ])
    ).toEqual({
        status: "OPEN", 
        change: [["QUARTER", 0.5]]
    });

    expect(checkCashRegister(
        3.26, 
        100, 
        [
            ["PENNY", 1.01], 
            ["NICKEL", 2.05], 
            ["DIME", 3.1], 
            ["QUARTER", 4.25], 
            ["ONE", 90], 
            ["FIVE", 55], 
            ["TEN", 20], 
            ["TWENTY", 60], 
            ["ONE HUNDRED", 100]
        ])
    ).toEqual({
        status: "OPEN", 
        change: [
            ["TWENTY", 60], 
            ["TEN", 20], 
            ["FIVE", 15], 
            ["ONE", 1], 
            ["QUARTER", 0.5], 
            ["DIME", 0.2], 
            ["PENNY", 0.04]
        ]
    });
});

test("Return insufficient fund object when there isnt enough chainge in cash register.", () => {
    expect(checkCashRegister(
        19.5, 
        20, 
        [
            ["PENNY", 0.01], 
            ["NICKEL", 0], 
            ["DIME", 0], 
            ["QUARTER", 0], 
            ["ONE", 0], 
            ["FIVE", 0], 
            ["TEN", 0], 
            ["TWENTY", 0], 
            ["ONE HUNDRED", 0]
        ])
    ).toEqual({
        status: "INSUFFICIENT_FUNDS", 
        change: []
    });

    expect(checkCashRegister(
        19.5, 
        20, 
        [
            ["PENNY", 0.01], 
            ["NICKEL", 0], 
            ["DIME", 0], 
            ["QUARTER", 0], 
            ["ONE", 1], 
            ["FIVE", 0], 
            ["TEN", 0], 
            ["TWENTY", 0], 
            ["ONE HUNDRED", 0]
        ])
    ).toEqual({
        status: "INSUFFICIENT_FUNDS", 
        change: []
    });
});

test("Return change with CLOSED status when change is exact amount in cash register.", () => {
    expect(checkCashRegister(
        19.5, 
        20, 
        [
            ["PENNY", 0.5], 
            ["NICKEL", 0], 
            ["DIME", 0], 
            ["QUARTER", 0], 
            ["ONE", 0], 
            ["FIVE", 0], 
            ["TEN", 0], 
            ["TWENTY", 0], 
            ["ONE HUNDRED", 0]
        ])
    ).toEqual({
        status: "CLOSED", 
        change: [
            ["PENNY", 0.5], 
            ["NICKEL", 0], 
            ["DIME", 0], 
            ["QUARTER", 0], 
            ["ONE", 0], 
            ["FIVE", 0], 
            ["TEN", 0], 
            ["TWENTY", 0], 
            ["ONE HUNDRED", 0]
        ]
    });
});