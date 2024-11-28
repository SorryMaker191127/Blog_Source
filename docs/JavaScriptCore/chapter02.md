# 继承

## 常见继承方法

### 原型链继承

原型链继承是比较常见的继承方法之一，其中涉及的构造函数，原型和实例

* 每一个构造函数都有一个原型对象
* 原型对象又包含一个指向构造函数的指针
* 而实例则包含一个原型对象的指针

```js {17}
//创建父类
function FatherType() {
  this.fatherData = "father data"
}

//给父类原型对象添加方法
FatherType.prototype.getFatherData = function () {
  return this.fatherData
}

//创建子类
function SonType() {
  this.sonData = "son data"
}

//原型链继承，子类的原型对象指向父类的实例对象
SonType.prototype = new FatherType()
//为之类原型对象添加方法
SonType.prototype.getSonData = function () {
  return this.sonData
}
//创建之类实例
let sonObj = new SonType()
//调用子类的方法
console.log(sonObj.getSonData())     //"son data"
//调用子类的方法
console.log(sonObj.getFatherData())  //"father data"
```

::: tip
上述代码中，我们没有使用子类SonType的默认提供的原型，而是给它换了一个新的原型：*父类的实例`new FatherType()`*。  
新原型不仅具有作为父类FatherType的实例所拥有的全部属性和方法，其内部还有一个指针，指向FatherType的原型。
:::
上述代码存在一定的缺陷,主要问题来自包含引用类型的原型

```js
//创建父类
function FatherType() {
  this.fatherData = [1, 2, 3]
}

//创建子类
function SonType() {
}

//原型链继承，子类的原型对象指向父类的实例对象
SonType.prototype = new FatherType()
//创建之类实例
let sonObj_01 = new SonType()
let sonObj_02 = new SonType()
sonObj_01.fatherData.push(4)
console.log(sonObj_01.fatherData, sonObj_02.fatherData)  //[1,2,3,4] [1,2,3,4]
```

::: tip
存在缺陷：

1.
SonType通过原型链继承了FatherType之后，SonType的原型对象就变成了FatherType的一个实例，那么所有的SonType实例都共享了FatherType实例的fatherData(
引用类型)。因此sonObj_01.fatherData的修改，能通过sonObj_01.fatherData反映出来。
2. 在创建子类实例时，没有办法在不影响所有对象实例的情况下，给父类的构造函数传递参数
   :::

### 借用构造函数

```js {10}
//创建父类
function FatherType(name) {
  this.name = name
  this.fatherData = [1, 2, 3]
}

//创建子类
function SonType() {
  //继承
  FatherType.call(this, "Jack")
}

//创建之类实例
let sonObj_01 = new SonType()
sonObj_01.fatherData.push(4)
console.log(sonObj_01.fatherData)  //[1,2,3,4]
console.log(sonObj_01.name)        //"Jack"

let sonObj_02 = new SonType()
console.log(sonObj_02.fatherData)  //[1,2,3]
console.log(sonObj_02.name)        //"Jack"
```

::: tip
上述代码中，继承时“借调”了父类的构造函数，这样就会在新SonType对象上执行FatherType()
函数中定义的所有对象初始化代码，每个实例就会有自己独立的属性副本。  
但是还是存在缺陷：

1. 方法都在构造函数中定义，因此函数复用就无从谈起。
2. 父类原型中定义的方法，对于子类也是不可见的，结果所有类型都只能使用构造函数模式。
   :::

### 组合继承

使用原型链实现对原型属性和方法的继承，通过借用构造函数来实现对实例属性的继承。这样，即通过在原型上定义方法实现了函数的复用，又能够保证每个实例都有它自己的属性。

```js
//创建父类
function FatherType(name) {
  this.name = name
  this.fatherData = [1, 2, 3]
}

//添加父类原型方法
FatherType.prototype.getName = function () {
  console.log(this.name)
}

//创建子类
function SonType(name, age) {
  //继承属性
  FatherType.call(this, name)
  this.age = age
}

//继承方法
SonType.prototype = new FatherType()
SonType.prototype.constructor = FatherType;
SonType.prototype.getAge = function () {
  console.log(this.age)
}
//创建之类实例
let sonObj_01 = new SonType("Jack", 19)
sonObj_01.fatherData.push(4)
console.log(sonObj_01.fatherData)  //[1,2,3,4]
sonObj_01.getName()                //"Jack"
sonObj_01.getAge()                 //19

let sonObj_02 = new SonType("Sam", 29)
console.log(sonObj_02.fatherData)  //[1,2,3]
sonObj_02.getName()                //"Sam"
sonObj_02.getAge()                 //29
```