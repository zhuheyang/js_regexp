// ���˵����е�.css��.js�ļ�
// ��ʹ�÷ǲ���ģʽ, ƥ���js��css�ļ����õ���ȷ�ļ���, ����js��css�ļ���ƥ��᷵��.js, .css
// ��Ϊ�������ǰհ(?=xxx), (?!xxx)���������ַ�, ���������ж�ʱ�Ὣ'.js'��'.css'��������
console.log(/(?!.+\.js$|.+\.css$).*/.exec("test.wow.html"));  // [ 'test.wow.html', index: 0, input: 'test.wow.html' ]
console.log(/(?!.+\.js$).*/.exec("test.wow.js"));  // [ '.js', index: 8, input: 'test.wow.js' ]
console.log(/(?!.+\.js$|.+\.css$).*/.exec("test.wow.css"));  // [ '.css', index: 8, input: 'test.wow.css' ]

// ��������õ����ַ���, Ӧʹ�÷ǲ���ģʽ 
console.log(/(?:(?!.+\.js$|.+\.css$).)*/.exec("test.wow.html"));  // [ 'test.wow.html', index: 0, input: 'test.wow.html' ]
console.log(/(?:(?!.+\.js$|.+\.css$).)*/.exec("test.wow.js"));   // [ '', index: 0, input: 'test.wow.js' ]