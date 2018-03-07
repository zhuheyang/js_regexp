// �ַ���[]
const reg = /[abc]/g
const str = 'a1b2c3d4'
console.log(str.replace(reg, 'dog'));
// �ַ���ȡ��
const reg2 = /[^abc]/g
console.log(str.replace(reg2, 'dog'));

// ��Χ��
// [a-z][A-Z][0-9]
// Ҳ������д, [a-zA-Z0-9], ��������'-'���ַ�, ����������'-'����
// [0-9-]

// Ԥ������
// . [^\n\r] ���س��뻻����������ַ�
// \d  �����ַ�[0-9]
// \D  �������ַ�[^0-9]
// \w  �����ַ�: ��ĸ, ����, �»���, �൱��[a-zA-Z0-9_]
// \W  �ǵ����ַ�: [^a-zA-Z_0-9]
// \s  �հ׷� [\n\r\f\t\x0B]
// \S  �ǿհ׷� [^\n\r\t\f\x0B]

// �߽�
// ^ ��xxx��ͷ
// $ ��xxx��β
// \b ���ʱ߽�, ��[a-zA-Z0-9_]������ַ�
// \B �ǵ��ʱ߽�

const reg3 = /\bdog/g
const reg4 = /\Bdog/g
const str2 = '@dog@dog@dogdog@'
console.log(str2.replace(reg3, 'memeda'))  // @memeda@memeda@memedadog@
console.log(str2.replace(reg4, 'memeda'))  // @dog@dog@dogmemeda@

// ���� classifier
// * �������
// + ����һ��
// ? һ�λ�0��
// {n} ����n��
// {n,m}���ٳ���n�ε�������m��
// {n,} ���ٳ���n��
// {0,n} �������n��