const { rot13 } = require("./caesars_cipher.js");

test("Implemented problem interface", () => {
    expect(rot13).not.toBeFalsy();
});

test("Single character string, without looping.", () => {
    expect(rot13("A")).toBe("N");
    expect(rot13("B")).toBe("O");
});

// looping, single char

// longer words with possible looping

// Do not transform any non alphabetical char