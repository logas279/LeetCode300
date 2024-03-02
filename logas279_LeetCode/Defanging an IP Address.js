/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let str = '';
    for (let i = 0; i < address.length; i++){
        if(address[i] !== '.'){
           str += address[i];
        } else{
          str = str + '[' + address[i] + ']';
        }
    }
    return str;
};