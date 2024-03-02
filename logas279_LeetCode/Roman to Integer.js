/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const vars = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    
    var result = 0;

    for (let i = 0; i < s.length; i++){
        let cur = vars[s[i]];
        let next =vars[s[i+1]];
        
        if (cur < next) {
            result += next - cur;
            i++;
        } else {
            result += cur;
        }
    }
    return result;
};