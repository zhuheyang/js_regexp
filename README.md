# ������ʽ

������ʽʽʹ��ĳ���ַ���������, ƥ��һϵ�о䷨������ַ���.  
дһЩ����Ԫ�ַ���ת���ַ���������ʽʱ, ������RegExper����ͼ�񻯼���

```js
const reg1 = /(;\s)(|\s)/
const reg2 = /(;\s)(\|\s)/
// ����\sƥ������Ŀհ׷�, ������Ҫע����Ƿ���2�е� '|' ǰ
// ���������ת���ַ�'\', ����2��ƥ�� �� ���� \s
```

## ��װregexper-static��������node-sass����

�������yarn install ֮��, yarn start����, ������ node-sass��binary��װ����, �������css�ļ����벻����.  
�鵽�Ĵ󲿷ַ�����npm rebuild node-sass, �����Լ������������µ�ԭ��, binary�ļ�has a problem error

```js
Binary found at C:\Users\lin\github_repository\regexper-static\node_modules\node-sass\vendor\win32-x64-57\binding.node
Testing binary
Binary has a problem: Error: \\?\C:\Users\lin\github_repository\regexper-static\node_modules\node-sass\vendor\win32-x64-57\binding.node is not a valid Win32 application\\?\C:\Users\lin\github_repository\regexper-static\node_modules\node-sass\vendor\win32-x64-57\binding.node
```

����������Լ�֮ǰ����NodeJS�汾ʱҲ������, ��Ȼ�ǰ�װNode-sass��Binary�汾ʧ��.  
������nodeģ��Ķ����ư汾�����ϵͳ֮�������. `npm uninstall node-sass --save`, ж��node-sass,  
ͬʱ����nodejsĿ¼�µ�npmrc�ļ���: `SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/`  
֮����ʹ��`npm install node-sass --save-dev`���°�װ, ��������������ͬ��: 
`cnpm install node-sass --save-dev`, Ҳ��ʹ���Ա�Դ�ľ���binary�����°�װ����.

���尲װ��, `yarn start`�����Ŀ����Ϊ:

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
[20:10:41] Finished 'build' after 30 ��s
[20:10:41] Starting 'server'...
[20:10:41] Starting server...
[20:10:41] Finished 'server' after 60 ms
[20:10:41] Starting 'default'...
[20:10:42] Finished 'default' after 305 ms
[20:10:42] Server started http://localhost:8080
[20:10:42] LiveReload started on port 35729
[20:10:42] Running server
```

// ������������˳���������֮��, �����Զ�ֹͣ��!  
[20:16:06] Server stopped