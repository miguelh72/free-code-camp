// Problem statement: 
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher
function rot13(str) {
    const CHAR_CODE_A = 65, CHAR_CODE_Z = 90;

    return str
        .split("")
        .map(c => {
            if (/[A-Z]+/.test(c)) {
                let rotatedCharCode = c.charCodeAt(0) + 13;
                if (rotatedCharCode > CHAR_CODE_Z) {
                    rotatedCharCode = CHAR_CODE_A + (rotatedCharCode - CHAR_CODE_Z) - 1;
                }
                return String.fromCharCode(rotatedCharCode);
            }
            return c;
        })
        .join("");
}

module.exports = { rot13 };