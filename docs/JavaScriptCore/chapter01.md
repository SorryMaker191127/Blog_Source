# 数据类型

## 数据类型分类

### 基础数据类型

* Undefined
* Null
* Boolean
* String
* Number

#### 特殊基础类型

* Symbol
* BigInt

### 引用数据类型

* Object
    * Array
    * RegExp
    * Date
    * Math
    * Function

::: tip
基础类型存储在栈内存  
被引用或被拷贝时，会创建一个完全相等的变量

引用类型存储在堆内存地址  
存储的时地址，多个引用指向同一个地址  
:::

```js
let a = {
  name: 'Julia',
  age: 20
}

function change(o) {
  o.age = 24;
  o = {
    name: 'Kath',
    age: 30
  }
  return o
}

let b = change(a);  //函数中传入的是a的内存地址
console.log(b.age); //30
console.log(a.age); //24
```

## 数据类型检测

### typeof

```js {6}
typeof 1           //'number'
typeof '1'         //'string'
typeof undefined  //'undefined'
typeof true        //'boolean'
typeof Symbol()    //'symbol'
typeof null        //'object' null表示一个空引用对象，但是是基础数据类型，不是引用数据类型
typeof []          //'object'
typeof {}          //'object'
typeof console     //'object'
typeof console.log //'function'
```

### instanceof

```js {6,9}
let Car = function () {
}
let benz = new Car()
benz instanceof Car  //true

let car = new String('Mercedes Benz')
car instanceof String  //true 这里的car是一个基本包装类型String对象

let str = 'Mercedes Benz'
str instanceof String  //false 这里的str是基础类型string
```

#### myInstanceof实现

```js
function myInstanceof(left, right) {
  //instanceof只能判断引用类型，所以先检测left数据类型,如果是基础数据类型，直接返回false
  if (typeof left != 'object' || left === null) return false
  //getPrototypeOf是Object对象自带API,用来拿到参数的原型对象
  let proto = Object.getPrototypeOf(left)
  //循环向下寻找，直到找到相同的原型对象
  while (true) {
    if (proto === null) return false
    if (proto === right.prototype) return true //找到相同原型对象，返回true
    proto = Object.getPrototypeOf(proto)
  }
}

//验证
myInstanceof(new Number(123), Number)  //true
myInstanceof(123, Number)              //false
```

::: tip
typeof可以判断基础数据类型（null除外）  
但是引用数据类型中，除了function类型以外，其他无法判断

instanceof可以准确地判断复杂引用数据类型  
但是不能正确判断基础数据类型
:::

### Object.prototype.toString

```js
Object.prototype.toString({})                  //"[object Object]"
Object.prototype.toString.call({})             //"[object Object]"
Object.prototype.toString.call(1)              //"[object Number]"
Object.prototype.toString.call('1')            //"[object String]"
Object.prototype.toString.call(true)           //"[object Boolean]"
Object.prototype.toString.call(function () {
})  //"[object Function]"
Object.prototype.toString.call(null)           //"[object Null]"
Object.prototype.toString.call(undefined)      //"[object Undefined]"
Object.prototype.toString.call(/123/g)         //"[object RegExp]"
Object.prototype.toString.call(new Date())     //"[object Date]"
Object.prototype.toString.call([])             //"[object Array]"
Object.prototype.toString.call(document)       //"[object HTMLDocument]"
Object.prototype.toString.call(window)         //"[object Window]"
```

## 数据类型转换

### 强制类型转换

* Number()
* parseInt()
* parseFloat()
* toString()
* String()
* Boolean()

### 隐式类型转换

* 逻辑运算符 &&、||、!
* 运算符 +、-、*、/
* 关系操作符 >、<、<=、>=
* 相等运算符 ==
* if/while 条件

::: tip
具体转换规则可以查看[JavaScript基础](/JavaScript/chapter01.md)
:::

## 数据拷贝

### 浅拷贝

创建一个新的对象，来接受要重新复制或引用的对象值。  
如果对象属性是基本数据类型，复制的就是基本类型的值。  
如果属性是引用数据类型，复制的就是内存中的地址，如果其中一个对象改变了这个内存中的地址，会影响到另一个对象。

#### Object.assign()

Object.assign是ES6中的一个方法，可以用于JS对象的合并等多个用途，其中一个用途就是进行浅拷贝。
`Object.assign(target,...sources)`

```js
let target = {}
let source = {a: 1, b: {c: 1}}
Object.assign(target, source)
source.b.c = 10
console.log(source)  //{a:1,b:{c:10}}
console.log(target)  //{a:1,b:{c:10}}
```

::: tip
它不会拷贝对象的继承属性
它不会拷贝对象的不可枚举属性
它不可拷贝Symbol属性
:::

#### JS扩展运算符

`let target = {...source}`

```js
let source = {a: 1, b: {c: 1}}
let target = {...source}
console.log(target)  //{a:1,b:{c:1}}
```

#### 数组的浅拷贝

```js
let arr = [1, 2, 3]
/* 扩展运算符 */
let newArr_1 = [...arr]
/* concat */
let newArr_2 = arr.concat()
/* slice */
let newArr_3 = arr.slice()
```
#### 手动实现一个浅拷贝
```js
const shallowClone = (target) => {
  //确认拷贝的是一个引用类型
  if (typeof target === 'object' && target !== null) {
    //判断拷贝的是数组还是对象
    const cloneTarget = Array.isArray(target) ? [] : {}
    for (let prop in target) {
      if(target.hasOwnProperty(prop)){
        cloneTarget[prop] = target[prop]
      }
    }
    return cloneTarget
  }else {
    return target
  }
}
```
### 深拷贝
对于复杂引用数据类型，其在堆内存中完全开辟了一块内存地址，并将原有的对象完全复制过来存放。  
新对象的修改不会改变原对象，二者实现真正分离。

#### JSON.stringify()
```js
let objSource = {a:1,b:{c:10}}
let targetStr = JSON.stringify(objSource)
let objTarget = JSON.parse(targetStr)
```
::: tip
1. 拷贝的对象的值中含有函数，undefined，symbol这几种类型，经过JSON.stringify序列化之后的字符串中这个键值对会消失。
2. 拷贝Date引用类型会变成字符串
3. 无法拷贝不可枚举的属性
4. 无法拷贝对象的原型链
5. 拷贝RegExp引用类型会变成空对象
6. 对象中含有NaN,Infinity，-Infinite，JSON序列化的结果会变成null
7. 无法拷贝对象的循环引用，即对象成环（obj[key]=obj）
:::
#### 基础版（手写递归实现）
```js
function deepClone(obj) {
  let cloneObj  = {}
  for (let key in obj) {  //遍历
    if(typeof obj[key] === "object"){
      cloneObj[key] =deepClone(obj[key])  //如果是对象就再次调用该函数递归
    }else {
      cloneObj[key] = obj[key]  //基本类型的话直接复制值
    }
  }
  return cloneObj
}
```
::: tip
1. 这个方法并不能复制不可枚举的属性以及Symbol类型
2. 这个方法只是针对普通引用类型的值进行递归复制
3. 对象的属性成环，即循环引用的问题没有解决
:::
#### 改进版（改进后递归实现）
1. 针对能够遍历对象的不可枚举属性以及Symbol类型，可以使用Reflect.ownKeys方法
2. 当参数为Date,RegExp类型，则直接生成一个新的实例返回
3. 利用Object.getOwnPropertyDescriptors方法获取到对象的所有属性，以及对应的特性，顺便结合Object.create方法创建一个新的对象，并继承传入原独享的原型链。
4. 利用WeakMap类型作为Hash表，因为WeakMap是弱引用类型，可以有效防止内存泄露，如果存在循环，则引用直接返回WeakMap存储的值。
```js
const isComplexDataType = (obj) => {
  (typeof obj === "object" || typeof obj === "function") && (obj !== null)
}
const deepClone = (obj,hash = new WeakMap()){
  if(obj.constructor == Date){
    return new Date(obj)
  }
  if(obj.constructor == RegExp){
    return new RegExp(obj)
  }
  //如果循环引用了就用WeakMap来解决
  if(hash.has(obj)){
    return hash.get(obj)
  }
  let allDesc = Object.getOwnPropertyDescriptors(obj)
  //遍历传入参数的所有键的特性
  let cloneObj = Object.create(Object.getPrototypeOf(obj),allDesc)
  //继承原型链
  hash.set(obj,cloneObj)
  for (let key of Reflect.ownKeys(obj)) {
    cloneObj[key] = (isComplexDataType(obj[key])&&typeof obj[key]!=="function")?deepClone(obj[key],hash):obj[key]
  }
  return cloneObj
}
```