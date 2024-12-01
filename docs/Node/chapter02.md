# path模块

## 路径操作

### path.resolve() 拼接规范的绝对路径

```js
//导入文件
const path = require('path')
//拼接路径
console.log(path.resolve(__dirname, 'index.html'))
```

### path.parse() 解析路径并返回对象

```js
//导入文件
const path = require('path')
//解析路径
console.log(path.parse(__filename))
/**
 {
 root: 'D:\\',
 dir: 'D:\\CodeSpace\\Node',
 base: 'test.js',
 ext: '.js',
 name: 'test'
 }
 * */
```

### path.sep 获取操作系统的路径分隔符

```js
//导入文件
const path = require('path')
//查看文件分隔符
console.log(path.sep) //示例： \
```

### path.basename() 获取路径的基础名称

```js
//导入文件
const path = require('path')
//获取路径的基础名称
console.log(path.basename(__filename))  //示例：test.js
```

### path.dirname() 获取路径的目录名

```js
//导入文件
const path = require('path')
//获取路径的目录名
console.log(path.dirname(__filename)) //示例：D:\CodeSpace\Node
```

### path.extname() 获取路径的扩展名

```js
//导入文件
const path = require('path')
//获取路径的扩展名
console.log(path.extname(__filename)) //示例：.js
```