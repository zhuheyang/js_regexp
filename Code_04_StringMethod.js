// String.prototype.search
// 忽略/g标志(flag)
let str1 = 'memeda1d21t2'
console.log(str1.search('da')) // 4
console.log(str1.search('as'))  // -1
console.log(str1.search(/\d(\w)\d/))  // 6 
console.log(str1.search(/\d(\w)\d/g)) // 6

// String.prototype.match
// /g flag is important
// without /g flag likely equals to reg.exec() without /g flag
const reg1 = /\d\w\d/
const matches1 = str1.match(reg1)
console.log(matches1);  // [ '1d2', index: 6, input: 'memeda1d21t2' ] 
console.log(matches1.index);  // 6
console.log(reg1.lastIndex);  // 0
const reg2 = /\d\w\d/g
const matches2 = str1.match(reg2)
console.log(matches2);  // [ '1d2', '1t2' ]
console.log(matches2.index);  // undefined
console.log(reg2.lastIndex);  // 0

// String.prototype.replace
let str4 = '$asdswbs1221n223sdwn23n2d'
let str5 = str4  // 对基本值进行赋值, 会将值进行拷贝, 而不是引用
let reg3 = /\d\w\d/
console.log(str4.replace(reg3, 'memeda'));  // $asdswbsmemeda1n223sdwn23n2d
let reg4 = /\d\w\d/g
console.log(str5.replace(reg4, 'memeda'));  // $asdswbsmemedamemeda23sdwn2memedad
console.log(str4);
console.log(str5);

let str6 = str4.replace(/\d/g, function(match, index, input) {
  console.log(index);
  return parseInt(match) + 1
})
console.log(str6)  // $asdswbs2332n334sdwn34n3d

// String.prototype.split
let str2 = 'a, b, c, d, e, f, '
console.log(str2.split(', '));  // [ 'a', 'b', 'c', 'd', 'e', 'f', '' ]
console.log(str2.split(/, /))  // [ 'a', 'b', 'c', 'd', 'e', 'f', '' ]
console.log(str2.split(/(, )/))  // [ 'a', ', ', 'b', ', ', 'c', ', ', 'd', ', ', 'e', ', ', 'f', ', ', '' ]
console.log(str2.split(/,\s/));  // [ 'a', 'b', 'c', 'd', 'e', 'f', '' ]

let str3 = 'a, b, c, d| e; f'
console.log(str3.split(/;\s/));  // into two: [ 'a, b, c, d| e', 'f' ]
console.log(str3.split(/\|\s/));  // into two: [ 'a, b, c, d', 'e; f' ]
console.log(str3.split(/(\|\s)/)); // into three: [ 'a, b, c, d', '| ', 'e; f' ]
console.log(str3.split(/[;,\|]\s/));  // [ 'a', ' b', ' c', ' d', ' e', ' f' ]

let str7 = 'memedamemedamemeda'
// 使用分组符号(), 一个会保留分隔的匹配字符串, 不使用(), 则不会保留分隔的匹配字符串
console.log(str7.split(/meme/));  // [ '', 'da', 'da', 'da' ]
console.log(str7.split(/(meme)/));  // [ '', 'meme', 'da', 'meme', 'da', 'meme', 'da' ]