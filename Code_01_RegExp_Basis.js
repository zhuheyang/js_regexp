// ������ģʽ�Լ����캯�����ַ���ģʽ
// var regularExpression = / pattern / flags;
// 3 ��flag: g, i, m

const pattern1 = /[bc]at/i  // ƥ�� bat or cat, �����ִ�Сд.
const pattern2 = /\[bc\]at/i // ƥ��[bc]at, �����ִ�Сд
const pattern3 = /.at/i  // ƥ��������'at'��β�������ַ������. '.'���������ַ�
const pattern4 = /\.at/i  // ƥ������'.at', �����ִ�Сд.

const pattern11 = new RegExp('[bc]at', 'i')
const pattern12 = new RegExp('\\[bc\\]at', 'i')
const pattern13 = new RegExp('.at', 'i')
const pattern14 = new RegExp('\\.at', 'i')

// ����Ԫ�ַ����ַ����ж�����˫��ת��, �����Ѿ�ת�ƹ����ַ�Ҳͬ��
// \n���ַ�����Ϊ\\n, ����������ʽ�ַ�����Ϊ: '\\\\n'

let str1 = 'baetsdcatbat wesdwe'
console.log(pattern1.test(str1))
let str2 = '[bc]at'
console.log(pattern2.test(str2));

// es3��, ʹ����������ʽʼ�չ���һ��RegExpʵ��, ��ʹ�ù��캯��������RegExpʵ��ÿ�ζ���һ����ʵ��
// ��es5���Ѹ���, ʹ����������ʽ��RegExp���캯��һ��, ÿ�ζ������µ�ʵ��
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
    console.log(re.test('catastrophe'));
    i++
  }
}

testExample2()  // print 'true' 10 times