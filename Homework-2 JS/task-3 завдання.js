const findLongestWord = function(string) {
    const stringSplit = string.split(' ');
    let longestWord = "";
    for (const word of stringSplit) {
        if (word.length > longestWord.length) {
            longestWord=word;
        }
        }   
        return longestWord;
};
console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Googl e do a roll'));
console.log(findLongestWord('May the force be with you'));
