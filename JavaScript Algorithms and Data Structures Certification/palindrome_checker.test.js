const { 
    palindrome, 
    validate, 
} = require('./palindrome_checker.js');

test("remove all non-alphanumeric characters (punctuation, spaces and symbols)", () => {
    expect(validate("_a_")).toBe("a");
    expect(validate("Hello World")).toBe("helloworld");
    expect(validate("2_A3*3#A2")).toBe("2a33a2");
});

test('Return boolean true for palindrome inputs', () => {
    expect(typeof palindrome("eye")).toBe("boolean");
    expect(palindrome("eye")).toBeTruthy();

    expect(typeof palindrome("_eye")).toBe("boolean");
    expect(palindrome("_eye")).toBeTruthy();

    expect(typeof palindrome("race car")).toBe("boolean");
    expect(palindrome("race car")).toBeTruthy();

    expect(typeof palindrome("A man, a plan, a canal. Panama")).toBe("boolean");
    expect(palindrome("A man, a plan, a canal. Panama")).toBeTruthy();

    expect(typeof palindrome("0_0 (: /-\ :) 0-0")).toBe("boolean");
    expect(palindrome("0_0 (: /-\ :) 0-0")).toBeTruthy();
});

test("Return boolean false for non palindrome inputs", () => {
    expect(typeof palindrome("not a palindrome")).toBe("boolean");
    expect(palindrome("not a palindrome")).toBeFalsy();

    expect(typeof palindrome("almostomla")).toBe("boolean");
    expect(palindrome("almostomla")).toBeFalsy();

    expect(typeof palindrome("five|\_/|four")).toBe("boolean");
    expect(palindrome("five|\_/|four")).toBeFalsy();
});