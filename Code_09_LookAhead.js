// 正则表达式引擎是从文本头部向尾部进行解析的, 也可通过正则选项控制解析方向
// 则对于文本尾部的方向, 称为'前', 文本的头部方向则称为'后', 因为已经走过那块地方
// 后顾的性能损耗较大, 则js只支持前瞻
const str = 'aa11bb22cc**'
const reg1 = /[a-z]{2}(?=\d{2})/  // 正向前瞻, (?=xxx)
const reg2 = /[a-z]{2}(?!\d{2})/  // 负向前瞻, (?!xxx)
console.log(str.replace(reg1, 'memeda'))  //memeda11bb22cc**
console.log(str.replace(reg2, 'memeda'))  // aa11bb22memeda**