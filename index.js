import test from 'ava';

let arr = new Array();

test.describe("some test", () => {
  // test code
    expect(1).toBe(1);

    // call the sum method
    expect(sum(1, 2)).toBe(3);

    // test the array
    arr.push(1);
    expect(arr.length).toBe(1);
});

//Define a methoid to use in my test
function sum(a, b) {
    return a + b;
}