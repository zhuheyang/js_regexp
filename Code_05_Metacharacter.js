// 正则表达式由两种基本字符构成: 原义字符与非打印字符, 还有元字符

// 原义字符
// /is/ 匹配字符串'is', 而'\'将下一个字符标记为一个特殊字符
// 原义字符 | 向后引用 | 八进制转译符: '\n'匹配换行符.

// 非打印字符
// \cx 匹配一个由x指明的控制字符, \cM匹配Control-M或回车符
// \f 匹配换页符
// \n 匹配换行符
// \r 匹配回车符
// \s 匹配任何空白字符 [\f\n\r\t\v]
// \S 匹配任何非空白字符: [^\f\n\r\t\v]
// \t 匹配制表符
// \v 匹配垂直制表符

// 元字符
// * 任意次数
// + 至少一次
// ? 一次或0次
// $  String结尾
// ^  在[]中表示取反, 正常情况为String开头
// . 代表一个任意字符
// | 或
// \ 转译
// ()  分组
// {}  量词
// []  构建字符类