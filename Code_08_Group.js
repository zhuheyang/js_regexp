// ��������ʽ��ֳ�С���ʽ, �������ʵ�����
// /abc{2}/, ���ʽ���������c
// /(abc){2}/
const reg1 = /abc{2}/
const reg2 = /(abc){2}/
const str1 = 'abccabcabc'
console.log(str1.replace(reg1, 'memeda'));
console.log(str1.replace(reg2, 'memeda'));

const reg = /^(\d{4})[/-](\d{2})[/-](\d{2})/
const str = '2018-03-02'
console.log(str.replace(reg, '$1��$3��$2��'));

// ����������, ������벶��ĳһ����, ����ǰ����� '?:'����
// Eg: /^(?:\d{4})[/-](\d{2})[-/](\d{2})/