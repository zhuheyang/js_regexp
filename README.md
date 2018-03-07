# 正则表达式

正则表达式式使用某个字符串来描述, 匹配一系列句法规则的字符串.  
写一些带有元字符或转义字符的正则表达式时, 尽量用RegExper进行图像化检验

```js
const reg1 = /(;\s)(|\s)/
const reg2 = /(;\s)(\|\s)/
// 这里\s匹配任意的空白符, 其中需要注意的是分组2中的 '|' 前
// 如果不带上转义字符'\', 分组2会匹配 空 或者 \s
```

## 安装regexper-static中遇到的node-sass问题

正常情况yarn install 之后, yarn start即可, 但由于 node-sass的binary安装问题, 导致相关css文件编译不出来.  
查到的大部分方法是npm rebuild node-sass, 但在自己这里会出现以下的原因, binary文件has a problem error

```js
Binary found at C:\Users\lin\github_repository\regexper-static\node_modules\node-sass\vendor\win32-x64-57\binding.node
Testing binary
Binary has a problem: Error: \\?\C:\Users\lin\github_repository\regexper-static\node_modules\node-sass\vendor\win32-x64-57\binding.node is not a valid Win32 application\\?\C:\Users\lin\github_repository\regexper-static\node_modules\node-sass\vendor\win32-x64-57\binding.node
```

这个问题在自己之前升级NodeJS版本时也遇到过, 既然是安装Node-sass的Binary版本失败.  
是由于node模块的二进制版本与操作系统之间的问题. `npm uninstall node-sass --save`, 卸载node-sass,  
同时设置nodejs目录下的npmrc文件中: `SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/`  
之后再使用`npm install node-sass --save-dev`重新安装, 以上两步操作等同于: 
`cnpm install node-sass --save-dev`, 也即使用淘宝源的镜像binary来重新安装即可.

具体安装后, `yarn start`后的项目运行为:

```js
lin@DESKTOP-78PGLLG MINGW64 ~/github_repository/regexper-static (master)
$ yarn start
yarn run v1.3.2
$ gulp
[20:10:26] Using gulpfile ~\github_repository\regexper-static\gulpfile.js
[20:10:26] Starting 'static'...
[20:10:26] Starting 'webpack'...
[20:10:26] Starting 'docs:files'...
[20:10:29] Finished 'static' after 2.79 s
[20:10:32] Finished 'docs:files' after 5.64 s
[20:10:32] Starting 'docs'...
[20:10:32] Finished 'docs' after 75 ms
[20:10:41] [webpack] Hash: 395de382bdc06f5fb882
Version: webpack 3.11.0
Time: 15203ms
                          Asset       Size  Chunks                    Chunk Names
                   css/main.css    8.54 kB          [emitted]
                    css/svg.css  937 bytes          [emitted]
                     js/main.js     326 kB       0  [emitted]  [big]  js/main.js
     __discard__/css/svg.css.js  550 bytes       1  [emitted]         __discard__/css/svg.css.js
    __discard__/css/main.css.js  552 bytes       2  [emitted]         __discard__/css/main.css.js
                 js/main.js.map    3.23 MB       0  [emitted]         js/main.js
 __discard__/css/svg.css.js.map    6.13 kB       1  [emitted]         __discard__/css/svg.css.js
__discard__/css/main.css.js.map    6.14 kB       2  [emitted]         __discard__/css/main.css.js
  [10] ./node_modules/lodash/lodash.js 540 kB {0} [built]
  [32] ./src/js/util.js 4.93 kB {0} [built]
  [65] (webpack)/buildin/global.js 509 bytes {0} [built]
 [127] ./src/js/parser/javascript.js 5.53 kB {0} [built]
 [129] multi babel-polyfill ./src/js/main.js 40 bytes {0} [built]
 [130] ./node_modules/babel-polyfill/lib/index.js 833 bytes {0} [built]
 [131] ./node_modules/core-js/shim.js 8.18 kB {0} [built]
 [326] ./node_modules/core-js/modules/web.immediate.js 162 bytes {0} [built]
 [327] ./node_modules/core-js/modules/web.dom.iterable.js 1.81 kB {0} [built]
 [328] ./node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js 24.4 kB {0} [built]
 [329] ./node_modules/core-js/fn/regexp/escape.js 108 bytes {0} [built]
 [332] ./src/js/main.js 1.75 kB {0} [built]
 [334] ./src/js/regexper.js 12.2 kB {0} [built]
 [356] ./src/sass/main.scss 58 bytes {2} [built]
 [357] ./src/sass/svg.scss 57 bytes {1} [built]
    + 343 hidden modules
[20:10:41] Finished 'webpack' after 15 s
[20:10:41] Starting 'markup'...
[20:10:41] Finished 'markup' after 125 ms
[20:10:41] Starting 'build'...
[20:10:41] Finished 'build' after 30 μs
[20:10:41] Starting 'server'...
[20:10:41] Starting server...
[20:10:41] Finished 'server' after 60 ms
[20:10:41] Starting 'default'...
[20:10:42] Finished 'default' after 305 ms
[20:10:42] Server started http://localhost:8080
[20:10:42] LiveReload started on port 35729
[20:10:42] Running server
```

// 如果你在这里退出了命令行之后, 它就自动停止了!  
[20:16:06] Server stopped