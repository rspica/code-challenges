// Challenge -- Difficulty: Easy

// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

// Sample Test Cases
// Input:"fun&!! time"
// Output:"time"

// Input:"I love dogs"
// Output:"love"


//----------------------------------------------
function LongestWord(sen) {
    var output;
    var words = sen.split(' ');
    var longWord = '';
    for (var i = 0; i < words.length; i++) {
        if (longWord.length < words[i].length) {
            longWord = words[i];
        }
    }
    return longWord
}

// keep this function call here 
console.log(LongestWord('hello big yellow fox'));

//----------------------------------------------
function wordSort(sentence) {
	var words = sentence.split(' ');
	var longest = words.sort(function(a, b){return b.length-a.length});
	return longest[0];
}

// keep this function call here 
console.log(wordSort('the quick brown fox is largest'));