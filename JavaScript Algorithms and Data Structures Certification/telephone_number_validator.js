"use strict";

// Problem statement:
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator
function telephoneCheck(str) {
    if (!(str) || str.length < 10) return false;
    
    return /^(1(\s|-)?)?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/.test(str);
}

module.exports = { telephoneCheck };