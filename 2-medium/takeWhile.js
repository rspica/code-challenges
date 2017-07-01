// Challenge -- Difficulty: medium

//Define a function `takeWhile` that takes a callback function and an array as argument. `takeWhile` will iterate through the array, passing each array element to the callback as an argument. Every sequential array value that returns `true` from the callback should be collected in a new array. As soon as an array value returns `false` from the callback, `takeWhile` should returnthe new array.

// Sample Test Cases
// Input:[2,4,5,6,8]
// Output:[2,4]

// Input:[7,100,14]
// Output:[]

// Input:[10, 8, 6, 4, 2]
// Output:[10, 8, 6, 4, 2]


//----------------------------------------------
function takeWhile(array, callback) {
	var evenOutput = [];

	for (var i = 0; i < array.length; i++) {

		console.log('');
		console.log('--------------------------');
		console.log('array.length: ', array.length);
		console.log("i: ",i );
		console.log('array[ '+  i +' ]: ', array[i] );
		console.log(i+'array[ '+  (i + 1) +' ]: ', array[i+1] );
		console.log(i+'arrayfuture[ '+i+' ]: ', (array[i]+2) );
		console.log(i+'arraydecimentalfuture[ '+i+' ]: ', (array[i]-2) );

		if ((isEven(array[i])) && (array[(i+1)] == (array[i] + 2)) || (array[(i+1)] == (array[i] - 2))) {
		//checks for two conditions: is the number even && is the array one index spot forward == to next logical consecutive number (i.e. if current is 2 is next 4 (is 4 == 4 )).	
		evenOutput.push(array[i], array[i+1]);
	} 
}
	return evenOutput
}

var isEven = function(elem) { // evalutates for even number by having a remainder === 0
	return elem % 2 === 0
}

var arraySend = [1,2,4,6,7,8,9,10,11]
var results = takeWhile(arraySend, isEven);
console.log(results);

var arraySend = [10,8,5,5,4,2]
var results = takeWhile(arraySend, isEven);
console.log(results);