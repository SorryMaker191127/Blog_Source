# 基本概念

## 数据类型

### typeof 操作符

检测数据类型的操作符，可返回的下列某个**字符串**

* "undefined"值未定义
* "boolean"值是布尔值
* "string"值是字符串
* "number"值是数值
* "object"值是对象或者是null
* "function"值是函数

::: tip  
1.typeof 返回的是一个字符串  
2.除了函数以外,typeof检测引用类型返回的都是"object"  
3.null是一个空对象,所以也是返回"object"  
:::

### Undefined 类型

Undefined只有一个特殊undefined类型，声名但未对其初始化的变量值就是undefined。
::: tip  
我们直接去调用一个未声名的变量会报错  
例如：

```
console.log(unknownData)` // 产生错误  
```  

但是对为声名的变量调用typeof会返回undefined  
例如：

```
console.log(typeof unknownData) // undefined
```

:::

### Null 类型

Null类型也只有一个特殊数据类型null，表示一个**空对象指针**  
null的值是派生自null的值

### Boolean 类型

Boolean只有两个字面量的值**true**和**false**，虽然Boolean类型只有两个字面量的值，但是所有类型的值有与这两个值等价的值。  
要将一个值转换为其对应的Boolean值，可以调用转型函数`Boolean()`。下表给出了各种数据类型及其对应的转换规则:

| 数据类型      |   转换为true的值    | 转换为false的值 |
|-----------|:--------------:|:----------:|
| Boolean   |      true      |   false    |
| String    |     任何非空字符     | " "(空字符串)  |
| Number    | 任何非零数字值(包括无穷大) |   0和NaN    |
| Object    |      任何对象      |    null    |
| Undefined |    n/a(不适用)    | undefined  |

### Number 类型

**NaN**（非数值）  
是一个特殊的数值，表示一个本来要返回数值的操作数未返回数值的情况（这样就不会抛出错误）。  
例如：任何数值除以非数值会返回NaN。  
NaN有两个非同寻常的特点：

* **任何涉及NaN的操作都会返回NaN（例如NaN/10）**
* **NaN和任何值都不相等，包括NaN本身**

针对这两个特点，定义了`isNaN()`函数，用来确定一个变量是否“**不是数值**”。  
isNaN收到参数后，会尝试将这个值转换为数值。某些不是数值的值会直接转换为数值，例如字符串“10”或Boolean值。不能被转换为数值的值会导致这个函数返回true.
例：

```js
isNaN(NaN)    //true
isNaN(10)     //false 10是数值
isNaN("10")   //false "10"被转化为数值10
isNaN("blue") //true "blue"不能被转化为数值
isNaN(true)   //false true被转化为数值1
```

::: tip
isNaN也适用于对象。基于对象调用isNaN()时，首先会调用对象的valueOf()
方法，然后确定该方法的返回值能否转化为数值，如果不能，再基于这个返回值调用同String()方法，再测试返回值。这也是内置函数和操作符的一般执行流程，更详细内容见操作符
:::
::: warning  
浮点数值的最高精度是17位小数，在进行算数计算时精度远远不如整数  
例如0.1+0.2结果不是0.3，而是0.30000000000000004。因此，永远不要测试某个特定的浮点数值。
例如：

```js
if (0.1 + 0.2 == 0.3) {
    alert('got 0.3')
}
```

:::
**数值转换**  
有3个函数可以把非数值转换为数值：  
`Number()` 可以用于任何数据类型，转换规则如下：

* 如果是Boolean值，true和false分别转化为1和0。
* 如果是数值，只是简单传入和返回。
* 如果时null,返回0。
* 如果是undefined，返回NaN。
* 如果是字符串，遵循以下规则：
    * 字符串中只包含数字，将其转换为十进制数值。
    * 字符串中包含有效浮点格式，将其转换为对应浮点数值。
    * 字符串中包含有效十六进制格式，将其转换为相同大小十进制整数值。
    * 字符串是空的，将其转换为0。
    * 字符串包含除上述格式之外的字符，将其转换为NaN。
* 如果是对象，调用对象的valueOf()方法，然后依照前面的规则转换返回的值。如果转换的结果是NaN,则调用对象的toString()
  方法，然后再次依照前面的规则转换反回的字符串值。

`parseInt()` 处理整数时更常用parseInt()  
parseInt()在转换字符串时，更多是看其是否符合数值模式。  
他会忽略字符串前面的空格，直到找到第一个非空格字符：

* 如果不是数字字符或者负号，返回NaN。因此parseInt()转换空字符串会返回NaN（Number()转换空字符串返回0）
* 如果是数字字符，parseInt()会继续解析第二个字符，直到解析完所有后续字符或遇到了一个非数值字符。
* parseInt()也能识别整数格式，例如"0x"开头且后跟数字字符的十六进制，"0"开头且跟数字字符的八进制。
  例如：

```js {5}
parseInt("")           //NaN
parseInt("  1234blue") //转化为1234，前面空格被忽略，blue被忽略
parseInt(22.5)         //转化为22，因为.并不是有效数字字符
parseInt("0xA")        //10(十六进制数) 
parseInt("070")        //56(八进制数)，但是存在分歧
```

::: warning
ECMAScript 3 和ECMAScript 5 对八进制解析存在分歧  
`parseInt("070")`  
ECMAScript 3认为是八进制 转换为56。   
ECMAScript 5已不再具有解析八进制值的能力，前导的零被认为无效，认为是十进制，转换为70。  
:::  
为了消除上述困惑，这个函数提供了第二个参数：转换时使用基数（转换进制）。例如：

```js
parseInt("0xAF", 16)  //175
parseInt("AF", 16)    //175，指定了16作为第二个参数，前面的"0x"可以忽略
```  

指定不同基数会影响转换结果

```js
parseInt("10", 2)   //2 二进制
parseInt("10", 8)   //8 八进制
parseInt("10", 10)  //10 十进制
parseInt("10", 16)  //16 十六进制
```

因此建议任何情况下都明确指定基数  
`parseFloat()`  
和parseInt()类似，不同点：

* 第一个小数点有效，第二个小数点无效
* 始终会忽略前导的零
* 只解析十进制数，没有第二个参数
* 如果包含可解析为整数的数，则返回整数（没有小数点或小数点后是0）

例如：

```js
parseFloat("12345blue")  //1234 整数
parseFloat("0xA")        //0
parseFloat("22.5")       //22.5
parseFloat("22.23.5")    //22.23
parseFloat("0908.5")     //908.5
parseFloat("3.125e7")    //31250000
```  

### String 类型

定义没啥好写的，就是字符串 :rofl:  
**转换为字符串**  
`toString()`方法  
几乎每个值都有toString()方法，包括数值，布尔值，字符串值，但null和undefined没有这个方法。
多数情况下，toString()方法不必传参数，但是在数值调用toString()方法时，可以传入一个基数参数，时期输出对应的字符串，例如：

```js
var number = 10;
number.toString()    //"10
number.toString(2)   //"1010"
number.toString(8)   //"12"
number.toString(10)  //"10"
number.toString(16)  //"a"
```

如果不确定转换的数值是不是null或者undefined，可以使用String()方法，可以使任何类型的值转换为字符串，规则如下：

* 值有toString()方法，调用toString()
* 值是null,反回"null"，值是undefined返回"undefined"

```js
String(10)         //"10"
String(true)       //"true"
String(null)       //"null"
String(undefined)  //"undefined"
```

### Object 类型

对象就是数据和功能的集合。可使用new操作符后跟要创建的对象类型来创建，如果不给构造函数传递参数，可以省略后面的括号，但是不推荐。例如：

```js
var obj = new Object  //不推荐
```

Object的每个**实例**都具有以下属性和方法：

* constructor:保留用于创建当前对象的函数。
* hasOwnProperty(propertyName):检查指定的属性在当前实例中（而不是在实例原型中）是否存在。propertyName必须是字符串形式
* isPrototypeOf(object):检查传入的对象是否是当前对象的原型。
* propertyIsEnumerable(propertyName):检查指定的属性是否能够使用for-in来枚举。
* toLocaleString():返回对象的字符串表示，该字符串与执行唤醒的地区对应。
* toString():返回对象的字符串表示。
* valueOf():返回对象的字符串、数值或布尔值表示。通常与toString()方法返回值相同。
  后面再详细介绍Object和其它对象关系。


