// ������ʽĬ��ƥ��̰��ģʽ, Ҳ�������ܵض�ƥ��
// ����ģʽ���Ǿ�����ƥ���ٵ����, �����ʺ��?�ż���
const reg1 = /\d{3,6}?/
const reg2 = /\d{3,6}/
const str = '1234567890'
console.log(str.replace(reg1, 'memeda'));  // memeda4567890
console.log(str.replace(reg2, 'memeda'));  // memeda7890