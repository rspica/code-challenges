// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

// print numbers 1 through 100
// for each instance of x3 print the number + "fizz"
// for each instance of x5 print the number + "buzz"
// for each instance of x3 and x5 print the number + "fizzbuzz"

// output
// 1
// 2
// 3 - Fizz
// 4
// 5 - Buzz
// 6 - Fizz
// .
// .
// .
// 15 - FizzBuzz


function fB() {
    for (var i = 1; i < 100; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            console.log(i, 'FizzBuzz');
        }
        else if(i % 3 === 0) {
            console.log(i, 'Fizz');
        }
        else if(i % 5 === 0) {
            console.log(i, 'buzz');
        }
        else {
            console.log(i);
        }
    }
}

fB()
