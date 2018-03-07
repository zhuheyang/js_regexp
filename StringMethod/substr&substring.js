// substr(index [, length]), 如果length为 0 或负值, 返回空字符串, 
// index 为负值且 abs(index) 大于 str的长度, 则index 从0开始, 
// index 为正值且大于str长度, 则返回空字符串
let str = 'abcdefghij' 
console.log(str.substr(1,2));  // 'bc'
console.log(str.substr(-3, 2));   // 'hi'
console.log(str.substr(-3));  // 'hij'
console.log(str.substr(3));  // 'defghij'
console.log(str.substr(-20, 2));  // 'ab'
console.log(str.substr(20, 2));  // ''

// substring(indexStart [, indexEnd])
// 输出[indexStart, indexEnd)之间的字符串, ')'表示不包括indexEnd处的字符串
let str1 = 'Mozilla'
console.log(str1.substring(0, 3));  // Moz
console.log(str1.substring(3, 0)); // Moz  if indexStart > indexEnd, 则执行结果与调换indexStart以及indexEnd相同
// if index < 0 或为NaN, 则相当于0
console.log(str1.substring(-3, 3));  // equals to substring(0, 3) or (3, NaN), (NaN, 3)....
// 同样, 省略第二个参数indexEnd, 会直接提取字符串到结尾
console.log(str1.substring(0));  // Mozill

'