// ������ʽ�����Ǵ��ı�ͷ����β�����н�����, Ҳ��ͨ������ѡ����ƽ�������
// ������ı�β���ķ���, ��Ϊ'ǰ', �ı���ͷ���������Ϊ'��', ��Ϊ�Ѿ��߹��ǿ�ط�
// ��˵�������Ľϴ�, ��jsֻ֧��ǰհ
const str = 'aa11bb22cc**'
const reg1 = /[a-z]{2}(?=\d{2})/  // ����ǰհ, (?=xxx)
const reg2 = /[a-z]{2}(?!\d{2})/  // ����ǰհ, (?!xxx)
console.log(str.replace(reg1, 'memeda'))  //memeda11bb22cc**
console.log(str.replace(reg2, 'memeda'))  // aa11bb22memeda**