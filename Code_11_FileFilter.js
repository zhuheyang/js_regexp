// 过滤掉所有的.css与.js文件
// 不使用非捕获模式, 匹配非js非css文件可拿到正确文件名, 但对js与css文件的匹配会返回.js, .css
// 因为正向或负向前瞻(?=xxx), (?!xxx)均会消耗字符, 则在做与判断时会将'.js'与'.css'给消耗了
console.log(/(?!.+\.js$|.+\.css$).*/.exec('test.wow.html'))  // [ 'test.wow.html', index: 0, input: 'test.wow.html' ]
console.log(/(?!.+\.js$).*/.exec('test.wow.js'))  // [ '.js', index: 8, input: 'test.wow.js' ]
console.log(/(?!.+\.js$|.+\.css$).*/.exec('test.wow.css'))  // [ '.css', index: 8, input: 'test.wow.css' ]

// 如果期望得到空字符串, 应使用非捕获模式 
console.log(/(?:(?!.+\.js$|.+\.css$).)*/.exec('test.wow.html'))  // [ 'test.wow.html', index: 0, input: 'test.wow.html' ]
console.log(/(?:(?!.+\.js$|.+\.css$).)*/.exec('test.wow.js'))   // [ '', index: 0, input: 'test.wow.js' ]