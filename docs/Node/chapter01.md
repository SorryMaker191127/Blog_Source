# fs 模块

## 文件写入

### writeFile异步写入

`fs.writeFile(file,data,[option],callback)`

```js
//导入文件
const fs = require('fs');
//写入文件
fs.writeFile('./text.txt', "Hello Node.js", (err) => {
    //err 失败：错误对象；成功：null
    if (err) {
        console.log("写入失败：", err)
    }
    console.log("写入成功！")
})
```

### writeFileSync同步写入

`fs.writeFileSync(file,data,[option])`

```js
//导入文件
const fs = require('fs');
//写入文件
fs.writeFileSync('./text.txt', "Hello Node.js")
```

### appendFile异步追加写入

`fs.appendFile(file,data,[option],callback)`

```js
//导入文件
const fs = require('fs');
//追加写入文件
fs.appendFile('./text.txt', "Hello Node.js", (err) => {
    //err 失败：错误对象；成功：null
    if (err) {
        console.log("写入失败：", err)
    }
    console.log("写入成功！")
})
```

### appendFileSync同步追加写入

`fs.appendFileSync(file,data,[option])`

```js
//导入文件
const fs = require('fs');
//追加写入文件
fs.appendFileSync('./text.txt', "Hello Node.js")
```

### createWriteStream流式写入

`fs.createWriteStream(file,[option])`

```js
//导入文件
const fs = require('fs');
//创建写入流对象
const ws = fs.createWriteStream('./text.txt')
//写入文件
ws.write('Hello world !\r\n')
ws.write('Hello Node.js !\r\n')
ws.write('Hello world !\r\n')
//关闭通道
ws.close()
```

## 文件读取

### readFile异步读取

`fs.readFile(file,[option],callback)`

```js
//导入文件
const fs = require('fs');
//读取文件
fs.readFile('./text.txt', (err, data) => {
    //err 失败：错误对象；成功：null
    if (err) {
        console.log("读取失败：", err)
    } else {
        //读取到的是Buffer数据,通过同String()方式转化为字符串
        console.log(data.toString())
    }
})
```

### readFileSync同步读取

`fs.readFileSync(file,[option])`

```js
//导入文件
const fs = require('fs');
//读取文件
let data = fs.readFileSync('./text.txt')
//读取到的是Buffer数据,通过同String()方式转化为字符串
console.log(data.toString())
```

### createReadStream流式读取

`fs.createReadStream(file,[option])`

```js
//导入文件
const fs = require('fs');
//创建读取流对象
const rs = fs.createReadStream('./test.mp4')
//绑定读取事件
rs.on('data', (chunk) => {
    console.log(chunk) //chunk:65536字节 => 64kb
})
rs.on('end', () => {
    console.log('读取完成');
})
```

## 文件拷贝

通过fs模块实现文件拷贝

```js
//引入文件
const fs = require('fs')
//创建读取流
const rs = fs.createReadStream('./test.mp4')
//创建写入流
const ws = fs.createWriteStream('./test.copy.mp4')
//绑定读取事件
rs.on('data', (chunk) => {
    //写入文件
    ws.write(chunk)
})
rs.on('end', () => {
    //关闭写入流
    ws.close()
})
```

## 文件重命名

### rename异步重命名

`fs.rename(oldFile,newFile,callback)`

```js
//导入文件
const fs = require('fs');
//重命名文件
fs.rename('./text.txt', './text.rename.txt', (err) => {
    //err 失败：错误对象；成功：null
    if (err) {
        console.log("重命名失败：", err)
    }
    console.log("重命名成功！")
})
```

### renameSync同步重命名

`fs.renameSync(oldFile,newFile)`

```js
//导入文件
const fs = require('fs');
//重命名文件
fs.renameSync('./text.txt', './text.rename.txt')
```

::: tip
通过修改新的文件路径和文件名，可以实现文件的移动
:::

## 文件删除

### unlink异步删除

`fs.unlink(file,callback)`

```js
//导入文件
const fs = require('fs');
//删除文件
fs.unlink('./text.txt', (err) => {
    //err 失败：错误对象；成功：null
    if (err) {
        console.log("删除失败：", err)
    }
    console.log("删除成功！")
})
```

### unlinkSync同步删除

`fs.unlinkSync(file)`

```js
//导入文件
const fs = require('fs');
//删除文件
fs.unlinkSync('./text.txt')
```

::: tip
14.4新增fs.rm()/fs.rmSync()文件删除方法
:::

## 文件夹操作

### 创建文件夹

`fs.mkdir(folder,[option],callback)`

```js
//导入文件
const fs = require('fs');
//创建文件夹
fs.mkdir('./test', (err) => {
    //err 失败：错误对象；成功：null
    if (err) {
        console.log("创建失败：", err)
    }
    console.log("创建成功！")
})
//递归创建文件夹
fs.mkdir('./recuTest/testChild/', {recursive: true}, (err) => {
    //err 失败：错误对象；成功：null
    if (err) {
        console.log("创建失败：", err)
    }
    console.log("创建成功！")
})
```

### 读取文件夹

`fs.readdir(folder,callback)`

```js
//导入文件
const fs = require('fs');
//读取文件夹
fs.readdir('./', (err, data) => {
    //err 失败：错误对象；成功：null
    if (err) {
        console.log("读取失败：", err)
    } else {
        console.log("读取成功！", data) //文件夹内容数组
    }
})
```

### 删除文件夹

`fs.rmdir(folder,[option],callback)`

```js
//导入文件
const fs = require('fs');
//删除文件夹
fs.rmdir('./test', (err) => {
    //err 失败：错误对象；成功：null
    if (err) {
        console.log("删除失败：", err)
    } else {
        console.log("删除成功！")
    }
})
//当需要删除的文件夹不为空，需要递归删除
fs.rmdir('./recuTest', {recursive: true}, (err) => {
    //err 失败：错误对象；成功：null
    if (err) {
        console.log("删除失败：", err)
    } else {
        console.log("删除成功！")
    }
})
```

::: tip
后续版本fs.rmdir(path, { recursive: true })会被移除，可以使用fs.rm(path, { recursive: true })代替
:::

## 查看文件状态
`fs.stat(file,callback)`
```js
//导入文件
const fs = require('fs');
//文件状态
fs.stat('./text.txt',(err,data)=>{
    //err 失败：错误对象；成功：null
    if (err) {
        console.log("查看失败：", err)
    } else {
        console.log(data)  //Stats 对象。可以通过isFile()/isDirectory()检测是文件还是文件夹
    }
})
```
