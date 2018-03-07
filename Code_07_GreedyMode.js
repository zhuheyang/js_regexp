// 正则表达式默认匹配贪婪模式, 也即尽可能地多匹配
// 懒惰模式就是尽可能匹配少的情况, 在量词后加?号即可
const reg1 = /\d{3,6}?/
const reg2 = /\d{3,6}/
const str = '1234567890'
console.log(str.replace(reg1, 'memeda'));  // memeda4567890
console.log(str.replace(reg2, 'memeda'));  // memeda7890