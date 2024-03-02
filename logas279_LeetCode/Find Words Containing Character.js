/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let index_array=[];
    for (let i = 0; i < words.length; i++){
        if (words[i].includes(x)){
            index_array.push(i)
        }
    }
    return index_array;
};