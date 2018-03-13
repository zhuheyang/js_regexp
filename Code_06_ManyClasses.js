// 字符类[]
const reg = /[abc]/g
const str = 'a1b2c3d4'
console.log(str.replace(reg, 'dog'))
// 字符类取反
const reg2 = /[^abc]/g
console.log(str.replace(reg2, 'dog'))

// 范围类
// [a-z][A-Z][0-9]
// 也可以连写, [a-zA-Z0-9], 如果想包括'-'连字符, 在最后面添加'-'即可
// [0-9-]

// 预定义类
// . [^\n\r] 除回车与换行外的所有字符
// \d  数字字符[0-9]
// \D  非数字字符[^0-9]
// \w  单词字符: 字母, 数字, 下划线, 相当于[a-zA-Z0-9_]
// \W  非单词字符: [^a-zA-Z_0-9]
// \s  空白符 [\n\r\f\t\x0B]
// \S  非空白符 [^\n\r\t\f\x0B]

// 边界
// ^ 以xxx开头
// $ 以xxx结尾
// \b 单词边界, 除[a-zA-Z0-9_]以外的字符
// \B 非单词边界

const reg3 = /\bdog/g
const reg4 = /\Bdog/g
const str2 = '@dog@dog@dogdog@'
console.log(str2.replace(reg3, 'memeda'))  // @memeda@memeda@memedadog@
console.log(str2.replace(reg4, 'memeda'))  // @dog@dog@dogmemeda@

// 量词 classifier
// * 任意次数
// + 至少一次
// ? 一次或0次
// {n} 出现n次
// {n,m}至少出现n次但不超过m次
// {n,} 至少出现n次
// {0,n} 至多出现n次