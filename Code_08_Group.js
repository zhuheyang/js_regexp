// 将正则表达式拆分成小表达式, 方便量词的作用
// /abc{2}/, 量词仅作用最后的c
// /(abc){2}/
const reg1 = /abc{2}/
const reg2 = /(abc){2}/
const str1 = 'abccabcabc'
console.log(str1.replace(reg1, 'memeda'));
console.log(str1.replace(reg2, 'memeda'));

const reg = /^(\d{4})[/-](\d{2})[/-](\d{2})/
const str = '2018-03-02'
console.log(str.replace(reg, '$1年$3日$2月'));

// 反向引用中, 如果不想捕获某一分组, 可在前面添加 '?:'即可
// Eg: /^(?:\d{4})[/-](\d{2})[-/](\d{2})/