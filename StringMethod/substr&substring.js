// substr(index [, length]), ���lengthΪ 0 ��ֵ, ���ؿ��ַ���, 
// index Ϊ��ֵ�� abs(index) ���� str�ĳ���, ��index ��0��ʼ, 
// index Ϊ��ֵ�Ҵ���str����, �򷵻ؿ��ַ���
let str = 'abcdefghij' 
console.log(str.substr(1,2));  // 'bc'
console.log(str.substr(-3, 2));   // 'hi'
console.log(str.substr(-3));  // 'hij'
console.log(str.substr(3));  // 'defghij'
console.log(str.substr(-20, 2));  // 'ab'
console.log(str.substr(20, 2));  // ''

// substring(indexStart [, indexEnd])
// ���[indexStart, indexEnd)֮����ַ���, ')'��ʾ������indexEnd�����ַ���
let str1 = 'Mozilla'
console.log(str1.substring(0, 3));  // Moz
console.log(str1.substring(3, 0)); // Moz  if indexStart > indexEnd, ��ִ�н�������indexStart�Լ�indexEnd��ͬ
// if index < 0 ��ΪNaN, ���൱��0
console.log(str1.substring(-3, 3));  // equals to substring(0, 3) or (3, NaN), (NaN, 3)....
// ͬ��, ʡ�Եڶ�������indexEnd, ��ֱ����ȡ�ַ�������β
console.log(str1.substring(0));  // Mozill

'