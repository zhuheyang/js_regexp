// 主要方法为exec(), 返回Array实例, 但多了index 以及 input 两个属性
const memeda = 'hey, mom, dad, and the baby'
const regExp = /mom,( dad,( and the ))/i

let matches = regExp.exec(memeda)
console.log(matches.input);
console.log(matches.index);  // 5
console.log(matches[0]);  //  'mom, dad, and the ' 
console.log(matches[1]);  //  'dad, and the '
console.log(matches[2]);  // ' and the '

// exec()方法中全局模式的使用
// 不使用全局模式, 将使用只返回第一个匹配项, 设置全局标志则会每次继续查找新的匹配项, 从而lastIndex也随之改变
const test = 'sat, bat, dat, mat'

function testExec() {
  const pattern1 = /.at/
  let matches1 = pattern1.exec(test)
  console.log(matches1);  // [ 'sat', index: 0, input: 'sat, bat, dat, mat' ]
  console.log(matches1[1]);  // undefined
  console.log(matches1.index);  // 0
  console.log(pattern1.lastIndex);  // 0

  matches1 = pattern1.exec(test)
  console.log(matches1);  // same as above
  console.log(matches1.index);
  console.log(pattern1.lastIndex);
}

// testExec()

function testExec2() {
  const pattern2 = /.at/g
  let matches2 = pattern2.exec(test)
  console.log(matches2);  // [ 'sat', index: 0, input: 'sat, bat, dat, mat' ]
  console.log(matches2.index);  // 0
  console.log(pattern2.lastIndex);  // 3

  matches2 = pattern2.exec(test)
  console.log(matches2);  // [ 'bat', index: 5, input: 'sat, bat, dat, mat' ]
  console.log(matches2.index);  // 5
  console.log(pattern2.lastIndex);  // 8
}

testExec2()