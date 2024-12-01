# http模块

## 创建http服务

```js
//1.导入模块
const http = require('http')
//2.创建服务
const server = http.createServer((request, response) => {
    //请求报文封装的对象
    console.log("收到请求：", request);
    //设置响应头
    response.setHeader('content-type', 'text/html;charset=utf-8');
    //返回响应内容
    response.end("Hello Node Http Server! 你好")

})
//3.监听端口,启动服务
server.listen(9000, () => {
    console.log('服务启动成功')
})
```

## 获取http请求报文

通过request对象获取请求的数据

```js
//导入模块
const http = require('http')
//创建服务
const server = http.createServer((request, response) => {
    //请求方法
    console.log(request.method)
    //协议版本号
    console.log(request.httpVersion)
    //url路径
    console.log(request.url)
    //请求头
    console.log(request.headers)

    //获取请求体
    const reqBody = "";
    //绑定响应事件
    request.on('data', (chunk) => {
        reqBody += chunk
    })
    request.on('end', () => {
        console.log(reqBody)
    })
})
//监听端口,启动服务
server.listen(9000, () => {
    console.log('服务启动成功')
})
```

通过url模块获取url中的请求路径和查询字符串

```js
//导入模块
const http = require('http')
const url = require('url')
//创建服务
const server = http.createServer((request, response) => {
    //url路径
    console.log(request.url)
    //使用url模块解析 第二个参数设置为true,可以方便解析query
    let result = url.parse(request.url, true)
    console.log(result.query)
    console.log(result)
})
//监听端口,启动服务
server.listen(9000, () => {
    console.log('服务启动成功')
})
```
通过new URL模块获取url中的请求路径和查询字符串

```js
//导入模块
const http = require('http')
//创建服务
const server = http.createServer((request, response) => {
    //需要第二个参数补齐完整域名
    let result = new URL(request.url,'http://127.0.0.1')
    console.log(result)
})
//监听端口,启动服务
server.listen(9000, () => {
    console.log('服务启动成功')
})
```
## 设置http响应报文
通过response设置响应报文
```js
//导入模块
const http = require('http')
//创建服务
const server = http.createServer((request, response) => {
    //设置响应状态码
    response.statusCode = 404;
    //设置响应状态的描述
    response.statusMessage = 'Page is not found!!!' //一般响应描述会自动和响应状态码对应，不需要自己设置。
    //设置响应头
    response.setHeader('content-type','text/html;charset=utf-8')
    //自定义响应头
    response.setHeader('myHeader',['my response header']) //同名响应头可以以数组形式设置
    //响应体设置
    response.write('this is response'); // 可多次调用
    response.end()
})
//监听端口,启动服务
server.listen(9000, () => {
    console.log('服务启动成功')
})
```

## MIME类型
用来表示文档，文件或字节流的性质和格式。  
http服务可以通过设置响应头Content-Type来表明响应体的MIME类型。
* html:'text/html'
* css:'text/css'
* js:'text/javascript/
* png:'image/png'
* jpg:'image/jpg'
* mp4:'video/mp4'
* mp3:'audio/mpeg'
* json:'application/json'

