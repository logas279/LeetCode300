/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Nếu s là chuỗi rỗng
    if (s.length == 0){
        return false;
    }

    // chuỗi ngoặc xen kẽ
    var check_xen_ke = function(s){
        let arr = [];
        for (let i = 0; i < s.length; i++) {
            
            let char = s[i];

            for (let i = 0; i < s.length; i ++){
                switch(char) {
                    case '(': arr.push(')');
                        break;
                    case '[': arr.push(']');
                        break;
                    case '{': arr.push('}');
                        break;
                    default:
                        continue;
                }
            }
        }
        arr.reverse();
        let arrStr = '';
        for (let i = 0; i < arrStr.length; i++){
            arrStr += arr[i];
        }
        if (arrStr === s.slice(s.length/2)){
            return true
        }else{return false;}
    }
    
    // Chuỗi ngoặc độc lập
    var check_doc_lap = function(s){
        let flag = true;
        for (var k = 0; k < s.length; k = k+ 2){
            if (s[k] === '(' && s[k+1] === ')' || s[k] === '[' && s[k+1] === ']' || s[k] === '{' && s[k+1] === '}') {
                continue;
            } else {
                return flag = false;
            }
        }
        return flag;
    }

    if(check_doc_lap() === true || check_xen_ke() ===true){
        return true;
    } else {
        return false;
    }
};