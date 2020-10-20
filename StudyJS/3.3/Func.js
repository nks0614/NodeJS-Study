const { odd, even } = require('./Var')

function checkOddOrEven(num){
    if(num % 2){
        return odd
    }
    return even
}

module.exports = checkOddOrEven