const { 
    convertToRoman 
} = require('./convert_to_roman.js');

test("Implemented problem interface", () => {
    expect(convertToRoman).toBeTruthy();
});

test("Check out of bound and invalid inputs", () => {
    expect(() => {convertToRoman(4000)}).toThrow(/OutOfBounds/i);
    expect(() => {convertToRoman(-1)}).toThrow(/OutOfBounds/i);
    expect(() => {convertToRoman(0)}).toThrow(/OutOfBounds/i);
});

test("Convert numbers less than or equal to 10", () => {
    expect(convertToRoman(2)).toBe("II");
    expect(convertToRoman(4)).toBe("IV");
    expect(convertToRoman(5)).toBe("V");
    expect(convertToRoman(9)).toBe("IX");
    expect(convertToRoman(10)).toBe("X");
});

test("Convert numbers less than or equal to 100", () => {
    expect(convertToRoman(12)).toBe("XII");
    expect(convertToRoman(44)).toBe("XLIV");
    expect(convertToRoman(83)).toBe("LXXXIII");
    expect(convertToRoman(99)).toBe("XCIX");
    expect(convertToRoman(100)).toBe("C");
});

test("Convert numbers less than or equal to 1000", () => {
    expect(convertToRoman(500)).toBe("D");
    expect(convertToRoman(649)).toBe("DCXLIX");
    expect(convertToRoman(798)).toBe("DCCXCVIII");
    expect(convertToRoman(891)).toBe("DCCCXCI");
    expect(convertToRoman(1000)).toBe("M");
});

test("Convert numbers less than or equal to 3999", () => {
    expect(convertToRoman(1004)).toBe("MIV");
    expect(convertToRoman(1023)).toBe("MXXIII");
    expect(convertToRoman(2014)).toBe("MMXIV");
    expect(convertToRoman(3999)).toBe("MMMCMXCIX");
});
