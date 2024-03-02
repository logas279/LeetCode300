/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let amount = 0;
    for (let i = 0; i < sentences.length; i++){
        let word_array = sentences[i].split(' ');
        if (word_array.length > amount) {
            amount = word_array.length;
        }
    }
    return amount;
};