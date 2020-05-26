const { rot13 } = require("./caesars_cipher.js");

test("Implemented problem interface", () => {
    expect(rot13).not.toBeFalsy();
});

test("Single character string, without looping.", () => {
    expect(rot13("A")).toBe("N");
    expect(rot13("B")).toBe("O");
});

test("Single character with looping, i.e. Z -> M", () => {
    expect(rot13("Z")).toBe("M");
    expect(rot13("P")).toBe("C");
})

test("Longer words with looping", () => {
    expect(rot13("SERRPBQRPNZC")).toBe("FREECODECAMP");
})

test("Do not transform any non alphabetical char", () => {
    expect(rot13("SERR CVMMN!")).toBe("FREE PIZZA!");
    expect(rot13("SERR YBIR?")).toBe("FREE LOVE?");
    expect(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))
        .toBe("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
})