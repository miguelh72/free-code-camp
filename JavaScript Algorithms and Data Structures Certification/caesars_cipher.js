// Problem statement: 
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
function rot13(str) {
    return str
        .split("")
        .map(c => {
            if (/[A-Z]+/.test(c)) {
                return String.fromCharCode(c.charCodeAt(0) + 13);
            }
            return c;
        })
        .join("");
}

module.exports = { rot13 };