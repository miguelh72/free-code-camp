const { telephoneCheck } = require("./telephone_number_validator.js");

test("Implemented problem interface", () => {
    expect(telephoneCheck).not.toBeFalsy();
});

// Check boolean truthy for valid phone numbers

// Check truthy for numbers with valid US country code

// Check falsy for numbers with invalid country code

// Check boolean falsy for invalid phone numbers