// Challenge
// Using the JavaScript language, have the
// function isEven(num) take the num parameter being passed and
// return whether the num param passed is even or odd (e.g. if num = 5; return false/odd).

// Sample Test Cases
// Input: num = 89
// Output:'the number 89 is odd'

// Input: num = 2
// Output:'the number 2 is even'


//------------------------------------------------------
function isEven(num) {
	if (num%2===0) {
		return true;
	} else {
		return false;
	}
}

var result = isEven(2);
console.log(result);

var result = isEven(3);
console.log(result);

//============================

function areEven(num1, num2) {
	if (num1 % 2 === 0 && num2 % 2 === 0) {
		return 
	}
}

function areEven (num1, num2) {
	return isEven(num1) && isEven(num2)
}

const areEven = (num1, num2) => isEven(num1) && isEven(num2)
// }