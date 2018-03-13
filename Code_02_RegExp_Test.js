const pattern1 = /\w/
const pattern2 = /\w/g
let str = 'ab'
pattern1.test(str)
console.log(pattern1.lastIndex)  // 0
pattern1.test(str)
console.log(pattern1.lastIndex)  // 0
pattern1.test(str)
console.log(pattern1.lastIndex)  // 0

pattern2.test(str)
console.log(pattern2.lastIndex)  // 1
pattern2.test(str)
console.log(pattern2.lastIndex)  // 2
pattern2.test(str)
console.log(pattern2.lastIndex)  // 0

// console.log:
// 1
// 2
while(pattern2.test(str)) {
  console.log(pattern2.lastIndex)
}
