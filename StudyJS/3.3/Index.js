const { odd, even } = require('./Var')
const checkNum = require('./Func')

function checkStringOddOrEven(str){
    if(str.length % 2){
        return odd;
    }
    return even;
}

console.log(checkNum(10))
console.log(checkStringOddOrEven('hello'))