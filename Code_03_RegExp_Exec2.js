const reg1 = /\d(\w)(\w)\d/
const reg2 = /\d(\w)(\w)\d/g  // \w��ʾһ���ַ�, ��������
const test = '#1ds2, 1212, 2ed3, meemeda'

// ��ʹ��ȫ��ģʽ
function nonGlobal() {
  let matches = reg1.exec(test)
  console.log(matches);
  console.log(matches.valueOf());
  console.log(typeof matches);
  console.log(typeof matches.valueOf());
  console.log(matches == matches.valueOf());  // true
  // 0       1       1ds2,d,s
  console.log(reg1.lastIndex + '\t' + matches.index + '\t' + matches.toString());
  // 0       1       1ds2,d,s
  console.log(reg1.lastIndex + '\t' + matches.index + '\t' + matches.toString());
}

nonGlobal()

// ʹ��ȫ��ģʽ����µ�exec
function inGlobal() {
  let matches = reg2.exec(test)
  // 5       1       1ds2,d,s
  console.log(reg2.lastIndex + '\t' + matches.index + '\t' + matches.toString());
  matches = reg2.exec(test)
  // 11      7       1212,2,1
  console.log(reg2.lastIndex + '\t' + matches.index + '\t' + matches.toString());
}

inGlobal()

const testReg = /\w/g
console.log(testReg.lastIndex);  // 0
console.log(testReg.test('1212'));
console.log(testReg.lastIndex);  // 1