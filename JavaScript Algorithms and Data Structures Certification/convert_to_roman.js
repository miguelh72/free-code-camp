"use strict";

// Problem statement: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter 
function convertToRoman(num) {
    if (num < 1 || num > 3999) 
        throw new Error("OutOfBounds: convertToRoman can only convert a number between 1 and 9999, inclusively.");
    const romanNumDict = {1:"I", 5:"V", 10:"X", 50:"L", 100:"C", 500:"D", 1000:"M"};
    return [1000, 100, 10, 1]
        .map(portion => {
            const decomposedPortion = Math.floor(num / portion);
            num -= decomposedPortion * portion;
            if (decomposedPortion < 4) {
                return romanNumDict[portion].repeat(decomposedPortion);
            } else if (decomposedPortion === 4) {
                return romanNumDict[portion] + romanNumDict[5*portion];
            } else if (decomposedPortion >= 5 && decomposedPortion < 9) {
                return  romanNumDict[5*portion] + romanNumDict[portion].repeat(decomposedPortion - 5);
            } else { // === 9
                return romanNumDict[portion] + romanNumDict[10*portion];
            }})
        .join("");
}

module.exports = {
    convertToRoman,
};