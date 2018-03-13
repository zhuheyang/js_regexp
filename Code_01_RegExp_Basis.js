// 字面量模式以及构造函数的字符串模式
// var regularExpression = / pattern / flags;
// 3 种flag: g, i, m

const pattern1 = /[bc]at/i  // 匹配 bat or cat, 不区分大小写.
const pattern2 = /\[bc\]at/i // 匹配[bc]at, 不区分大小写
const pattern3 = /.at/i  // 匹配所有以'at'结尾的三个字符的组合. '.'代表任意字符
const pattern4 = /\.at/i  // 匹配所有'.at', 不区分大小写.

const pattern11 = new RegExp('[bc]at', 'i')
const pattern12 = new RegExp('\\[bc\\]at', 'i')
const pattern13 = new RegExp('.at', 'i')
const pattern14 = new RegExp('\\.at', 'i')

// 所有元字符在字符串中都必须双重转移, 即便已经转移过的字符也同样
// \n在字符串中为\\n, 则在正则表达式字符串中为: '\\\\n'

let str1 = 'baetsdcatbat wesdwe'
console.log(pattern1.test(str1))
let str2 = '[bc]at'
console.log(pattern2.test(str2))

// es3中, 使用字面量形式始终共享一个RegExp实例, 而使用构造函数创建的RegExp实例每次都是一个新实例
// 在es5中已更正, 使用字面量形式与RegExp构造函数一样, 每次都创建新的实例
function testExample() {
  let re = null
  let i = 0
  while (i < 10) {
    re = /cat/g
    console.log(re.test('catastrophe'))
    i++
  }
}

testExample()  // in ES3, it will just be ture in the first time, in ES5, it will be true 10 times

function testExample2() {
  // which is equal to:
  let re = null
  let i = 0
  while (i < 10) {
    re = new RegExp('cat', 'g')
    console.log(re.test('catastrophe'))
    i++
  }
}

testExample2()  // print 'true' 10 times