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
});