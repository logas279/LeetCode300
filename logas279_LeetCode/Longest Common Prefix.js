/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // TH độ dài mảng = 0
    if (strs.length == 0) {
        return '';
    }

    //Tạo biến thỏa mãn
    let prxStr = '';

    // Chạy từng chữ cái trong strs[0]
    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];
        let flag = true;
        for (let j = 1; j<strs.length; j++){
            if(char !== strs[j][i]){
                flag = false;
            }
        }
        if (flag == true){
            prxStr += char;
        } else {
            break;
        }
    }

    return prxStr;
};