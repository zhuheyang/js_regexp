// change money to with ','
const str = '1234567'
const str2 = '123456789'
const reg1 = /(\d)(?=(?:\d{3})+$)/g
const reg2 = /(\d)(?=(\d{3})+$)/g
// 使用前瞻, 找到距离句子末尾的距离为x个\d{3}的数字, 将其替换为'该数字 + ,'
// ?= 为正向前瞻, ?!为负向前瞻, 而?:表示不捕获该分组 
console.log(str.replace(reg1, '$1,'));  // 1,234,567
console.log(str.replace(reg2, '$1,'));  // 1,234,567

// exec每次只寻找一个, 但设置全局模式后, 下次寻找会从上次的lastIndex出发
let matches1 = reg1.exec(str)
let matches2 = reg2.exec(str)
console.log(matches1);  // [ '1', '1', index: 0, input: '1234567' ]
console.log(matches2);  // [ '1', '1', '567', index: 0, input: '1234567' ]
let matches3 = reg1.exec(str2)
let matches4 = reg2.exec(str2)
console.log(matches3, reg1.lastIndex);  // [ '3', '3', index: 2, input: '123456789' ], 3
console.log(reg1.exec(str2), reg1.lastIndex);  // [ '6', '6', index: 5, input: '123456789' ], 6
console.log(matches4, reg2.lastIndex);  // [ '3', '3', '789', index: 2, input: '123456789' ], 3
console.log(reg2.exec(str2), reg2.lastIndex); // [ '6', '6', '789', index: 5, input: '123456789' ], 6

// use match to change the number
// change 1000000 to 1,000,000.00
// change -5223.23 to -5,223.23
const dealNumber = function(money) {
  if(money && money != null) {
    money = String(money)
    let left = money.split('.')[0]
    let right = money.split('.')[1]
    // if right.length == 0, then it will directly return '.00'
    // else its length >= 2, then take the substr(0,2), or length == 1, take one
    right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0') : '.00'
    let temp = left.split('').reverse().join('').match(/\d{1,3}/g)
    // console.log(temp);  // [ '000', '000', '1' ] or [ '532', '5' ]
    return (Number(money) < 0 ? '-' : '') + temp.join(',').split('').reverse().join('') + right
  } else if(money == 0) {
    return '0.00'
  } else {
    return ''
  }
}

console.log(dealNumber(1000000.2))  // 1,000,000.20
console.log(dealNumber(1000000.25))  // 1,000,000.25
console.log(dealNumber(-5235.23))  //-5,235.23
console.log(dealNumber(0));