const str = '\n\t   \r\f mememda  \r\t\n  '
console.log(str);
console.log(str.trim());  // memeda  in ES5

// 1. use RegExp:
// ���˷�������������ʽ�ķ�֧����, �ڴ����ַ���ʱ������������
if (String.prototype.trim) {
  String.prototype.trim1 = function () {
    // ���ﲻҪ�������ȫ������flag, ����ֻ�ᴦ����ߵĿհ��ַ���
    return this.replace(/^\s+|\s+$/g, '')
  }
}
console.log(str.trim1());  // memeda

// 2. use RegExp twice, improve performance
if (String.prototype.trim) {
  String.prototype.trim2 = function () {
    return this.replace(/^\s+/, '').replace(/\s+$/, '')
  }
}
console.log(str.trim2());  // memeda

// 3. use RegExp & String.prototype.slice 
if (String.prototype.trim) {
  String.prototype.trim3 = function() {
    const ws = /\s/ 
    let str = this.replace(/^\s+/, '')
    let end = str.length
    while(ws.test(str.charAt(--end))) {}
    return str.slice(0, end + 1)  // slice(indexStart [, indexEnd]) => [indexStart, indexEnd)
  }
}
console.log(str.trim3());  // memeda
