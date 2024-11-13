# 日常类型

## 基础类型

### 字符串 类型

```typescript
let str_01: string = "strData"; //标注字符串
let str_02: string = `${"strDate".toUpperCase()}`; //标注模板字符串
```

### 数字

```typescript
let num_01: number = 123;
let num_NaN: number = NaN; //NaN
let num_infinity: number = Infinity; //无穷大
let num_decimal: number = 10; //十进制
let num_octal: number = 0o744; //八进制
let num_binary: number = 0b1010; //二进制
let num_hex: number = 0xf00d; //十六进制
```

### 布尔值

```typescript
let Bool_true: boolean = true;
```

### 类型推断

我们可以通过添加类型注释显式指定变量的类型

```typescript
let myName: string = "Alice";
```

但是大多数情况下这不是必需的，TS 会尽可能尝试自动推断代码中的类型。例如：根据其初始化程序推断变量类型

```typescript
let myName = "Alice";
```

## 函数

### 参数类型注解

```typescript
//指定参数name的类型是string
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
```

### 返回类型注解

```typescript
//指定返回值的类型是number
function getFavoriteNumber(): number {
  return 26;
}
```

#### 返回 Promise

返回 Promise 类型时，应该使用 Promise 类型

```typescript
async function getFavoriteNumber(): Promise<number> {
  return 26;
}
```

#### 没有返回值 void

```typescript
//当函数没有返回值时，可以指定返回值类型为void
function noReturn(): void {
  console.log("There is no return in this function!"); //函数没有返回值，使用void标注
}
```

## 数组

```typescript
//两种方式定义类型
//1.在元素类型后面加上[]
let arr_number: number[] = [1, 2, 3, 4, 5];
//2.使用数组泛型
let arr_str: Array<string> = ["1", "2", "3", "4"];
```

## 元组

表示一个已知元素数量和类型的数组

```typescript
let tuple_list: [string, number, boolean] = ["string", 123, true];
```

## 枚举

enum 类型是对 JavaScript 标准数据的一个补充。可以为一组数值赋予有好的名字

```typescript
enum Color {
  Red,
  Green,
  Blue,
}

let enum_color: Color = Color.Red; //0
```

默认情况下，从 0 开始为元素编号。也可以手动指定成员的数值,后续成员数值会一次递增

```typescript
enum Color {
  Red = 10,
  Green,
  Blue,
}

let enum_red: Color = Color.Red; //10
let enum_green: Color = Color.Green; //11
let enum_blue: Color = Color.Blue; //12
```

或者全部手动赋值

```typescript
enum Color {
  Red = 3,
  Green = 6,
  Blue = 9,
}

let enum_red: Color = Color.Red; //3
let enum_green: Color = Color.Green; //6
let enum_blue: Color = Color.Blue; //9
```

还可以通过枚举的值得到它的名字

```typescript
enum Color {
  Red = 3,
  Green = 6,
  Blue = 9,
}

let color_name: string = Color[6]; // Green
```

## Object

object 表示非原始值（除 number,string,boolean,symbol,null,undefined 之外的类型）

## 其它类型

### Any 类型

```typescript
//any任意类型 类型没有类型限制，可以赋予任何值
let any_num: any = 123;
let any_str: any = "anyString";
let any_bool: any = true;
let any_undef: any = undefined;
```

### Unknown 类型

```typescript
//unknown未知类型 没有类型限制，可以赋予任何值
let unkn_num: unknown = 123;
let unkn_str: unknown = "anyString";
let unkn_bool: unknown = true;
let unkn_undef: unknown = undefined;
```

:::tip
any 和 unknown  
相同点：  
都可以被赋予任何值，并可以读取属性和方法  
不同点：
unknown 不可以读取属性和调用方法，例如：

```typescript {7,8}
let unkn_ojb: unknown = {
  unkn_prop: "unkn_data",
  unkn_fun() {
    console.log("this is unkn_obj`s function");
  },
};
console.log(unkn_ojb.unkn_prop); //报错
console.log(unkn_ojb.unkn_fun()); //报错
```

:::

### 字面类型

除了通用类型 string 和 number 之外，我们还可以在类型位置引用特定的字符串和数字。  
考虑这一点的一种方法是考虑 JavaScript 如何使用不同的方法来声明变量。var 和 let 都允许更改变量中保存的内容，而 const 不允许。这反映在 TypeScript 如何为字面创建类型。

```typescript
let heollo: "Hello" = "Hello";
heollo = "world"; //错误
```

就其本身而言，字面类型并不是很有价值，变量只能有一个值并没有多大用处，但是通过将字面量组合成联合，可以表达更有用的概念。关于联合类型，会在后续详细讲解。

### Null

```typescript
let Null_data: null = null;
```

### Undefined

```typescript
let undef_data: undefined = undefined;
```

### bigInt

基础类型用于非常大的整数

```typescript
const oneHundred: bigint = BigInt(100);
const anotherHundred: bigint = 100n;
```
### symbol
用于通过函数 Symbol() 创建全局唯一引用
```typescript
const firstName = Symbol("name");
const secondName = Symbol("name");
firstName === secondName //false
```
## 类型断言

当你清楚知道一个实体具有比他现有类型更确切的类型时，可以使用类型断言
类型断言两种形式

```typescript
//'尖括号'语法
let any_data: any = "this is string";
let strLength: number = (<string>any_data).length; //将any断言为string类型
//as 语法
let strLengthAs: number = (any_data as string).length; //将any断言为string类型
```

## 非空断言

在不进行任何显式检查的情况下从类型中删除 null 和 undefined。在任何表达式之后写 ! 实际上是一个类型断言，该值不是 null 或 undefined：

```typescript
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```
