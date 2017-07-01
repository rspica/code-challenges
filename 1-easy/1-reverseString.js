// Challenge -- Difficulty: Easy

// Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. For example: if the input string is "Hello World and Coders" then your program should return the string sredoC dna dlroW olleH. 

// Sample Test Cases
// Input:"coderbyte"
// Output:"etybredoc"

// Input:"I Love Code"
// Output:"edoC evoL I"


//----------------------------------------------
function FirstReverse(str) { 
	let outputStr = []
	for (let i = 0; i < str.length; i++) {
		outputStr.unshift(str[i]);
	}
  return outputStr.join(''); 
         
}

console.log(FirstReverse('hello'));    

//----------------------------------------------
function FirstRev(string) {
	return string.split('').reverse().join('');
}

console.log(FirstRev('string'));

//----------------------------------------------
function revString(stringy) {
	let string = [];
	for (let i = stringy.length-1; i >= 0; i--) {
		console.log('string['+i+']',stringy[i])
		string.push(stringy[i]);

	}
	return string.join('')
}

console.log(revString('yeah boy'));
