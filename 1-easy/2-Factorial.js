// Challenge -- Difficulty: Easy

// Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it(e.g.if num = 4, return (4 * 3 * 2 * 1)).For the test cases, the range will be between 1 and 18 and the input will always be an integer.

// Sample Test Cases
// Input:4
// Output:24

// Input:8
// Output:40320


//----------------------------------------------
function FirstFactorial(num) {
    let numFactor = num;
    let Factorial = 0;
    for (let i = 0; i < num; i++) {
        Factorial = num * (numFactor - 1);
        num = Factorial;
        numFactor -= 1;
        if (numFactor === 1) {
            return Factorial;
        }
    }
}

var num = FirstFactorial(8)
console.log(num);
                           

//----------------------------------------------
function FirstFact(num) {
    let factor = 1;
    for (let i = 1; i <= num; i++) {
        factor = factor * i;
    }
    return factor
}
console.log(FirstFact(4));