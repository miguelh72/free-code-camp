"use strict";

// Remove all symbols and spaces
function validate(str) {
    return str
        .replace(RegExp(/[^a-zA-Z0-9]+/g), "")
        .toLowerCase();
}

// Problem statement: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
function palindrome(str) {
    str = validate(str);
    const numComparisons = Math.floor(str.length / 2);
    for (let i = 0; i < numComparisons; i++) {
        if (str[i] !== str[str.length - 1 - i]) return false;
    }
    return true;
}

// For unit testing
module.exports = {
    palindrome,
    validate,
};