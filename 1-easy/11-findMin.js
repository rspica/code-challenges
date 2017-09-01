// Challenge
// Using the JavaScript language, have the
// function findMin(arr) take the arr parameter being passed and
// return the minimum value in the array (e.g. if arr = [4, 5, -1, 10, -8]
// return (8)). The arr canbe any length.

// Sample Test Cases
// Input: arr [3, 2, 6, 1, 89, 0]
// Output:minium value: 0

// Input: arr[3, 0, 1, 0]
// Output:minium value: 0


//------------------------------------------------------
function findmin(arr) {
    min = arr.sort((a, b) => a-b)[0]
    return min
}

var arr = [3, 2, 6, 1, 89, 0];
console.log(findmin(arr));
                          

//------------------------------------------------------
function findMin2(arr) {
    var currentMin = arr[0]
    for (let i=0; i<arr.length; i +=1) {
        let nextItem = arr[i]
        if (nextItem < currrentMin) {
            currentMin = nextItem
        }
    }
        return currentMin
}

console.log(findmin2(arr));

//------------------------------------------------------
//-- above example is rewritten using the forEach method
function findMin3(arr) {
    var currentMin = arr[0]
    arr.forEach(elem => {
        let nextItem = elem
        if (nextItem < currrentMin) {
            currentMin = nextItem
        }
    }
        return currentMin
}