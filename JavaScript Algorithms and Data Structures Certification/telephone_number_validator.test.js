const { telephoneCheck } = require("./telephone_number_validator.js");

test("Implemented problem interface", () => {
    expect(telephoneCheck).not.toBeFalsy();
});

test("Return false for no input", () => {
    expect(telephoneCheck()).toBe(false);
});

test("Return boolean true for valid phone number formats", () => {
    expect(telephoneCheck("5555555555")).toBe(true);
    expect(telephoneCheck("555 555 5555")).toBe(true);
    expect(telephoneCheck("555-555-5555")).toBe(true);
    expect(telephoneCheck("(555) 555-5555")).toBe(true);
});

test("Return boolean true for valid phone numbers with a US area code.", () => {
    expect(telephoneCheck("1 (555) 555-5555")).toBe(true);
    expect(telephoneCheck("15555555555")).toBe(true);
    expect(telephoneCheck("1-555-555-5555")).toBe(true);
});

test("Return boolean false for valid phone numbers with a non US area code.", () => {
    expect(telephoneCheck("2 (555) 555-5555")).toBe(false);
    expect(telephoneCheck("+645555555555")).toBe(false);
    expect(telephoneCheck("11-555-555-5555")).toBe(false);
});

test("Return boolean false for invalid phone numbers.", () => {
    expect(telephoneCheck("555-5555")).toBe(false);
    expect(telephoneCheck("1 555)555-5555")).toBe(false);
    expect(telephoneCheck("(6054756961)")).toBe(false);
    expect(telephoneCheck("(275)76227382)")).toBe(false);
});