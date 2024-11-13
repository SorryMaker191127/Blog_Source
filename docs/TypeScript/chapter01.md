# 类型标注

## 基础类型

### 字符串 类型

```typescript
let str_01: string = "strData" //标注字符串
let str_02: string = `${'strDate'.toUpperCase()}` //标注模板字符串
```

### 数字 

```typescript
let num_01: number = 123
let num_NaN: number = NaN            //NaN
let num_infinity: number = Infinity  //无穷大
let num_decimal: number = 10;        //十进制
let num_octal: number = 0o744        //八进制
let num_binary: number = 0b1010      //二进制
let num_hex: number = 0xf00d         //十六进制
```

### 布尔值 

```typescript
let Bool_true: boolean = true
```

### Null 

```typescript
let Null_data: null = null
```

### Undefined 

```typescript
let undef_data: undefined = undefined
```

### Void 

```typescript
function noReturn(): void {
    console.log("There is no return in this function!")  //函数没有返回值，使用void标注
}
```

### 数组

```typescript
//两种方式定义类型
//1.在元素类型后面加上[]
let arr_number: number[] = [1, 2, 3, 4, 5]
//2.使用数组泛型
let arr_str: Array<string> = ["1", "2", "3", "4"]
```

### 元组

表示一个已知元素数量和类型的数组

```typescript
let tuple_list: [string, number, boolean] = ['string', 123, true]
```

### 枚举

enum类型是对JavaScript标准数据的一个补充。可以为一组数值赋予有好的名字

```typescript
enum Color {Red, Green, Blue};
let enum_color: Color = Color.Red  //0
```
默认情况下，从0开始为元素编号。也可以手动指定成员的数值,后续成员数值会一次递增
```typescript
enum Color {Red=10, Green, Blue};
let enum_red: Color = Color.Red  //10
let enum_green: Color = Color.Green  //11
let enum_blue: Color = Color.Blue  //12
```
或者全部手动赋值
```typescript
enum Color {Red=3, Green=6, Blue=9};
let enum_red: Color = Color.Red  //3
let enum_green: Color = Color.Green  //6
let enum_blue: Color = Color.Blue  //9
```
还可以通过枚举的值得到它的名字
```typescript
enum Color {Red=3, Green=6, Blue=9};
let color_name:string  = Color[6]  // Green
```
### Object
object表示非原始值（除number,string,boolean,symbol,null,undefined之外的类型）
## 顶级类型

### Any 类型

```typescript
//any任意类型 类型没有类型限制，可以赋予任何值
let any_num: any = 123
let any_str: any = "anyString"
let any_bool: any = true
let any_undef: any = undefined
```

### Unknown 类型

```typescript
//unknown未知类型 没有类型限制，可以赋予任何值
let unkn_num: unknown = 123
let unkn_str: unknown = "anyString"
let unkn_bool: unknown = true
let unkn_undef: unknown = undefined
```

:::tip
any和unknown  
相同点：  
都可以被赋予任何值，并可以读取属性和方法  
不同点：
unknown不可以读取属性和调用方法，例如：

```typescript {7,8}
let unkn_ojb: unknown = {
    unkn_prop: "unkn_data",
    unkn_fun() {
        console.log("this is unkn_obj`s function")
    }
}
console.log(unkn_ojb.unkn_prop)  //报错
console.log(unkn_ojb.unkn_fun()) //报错
```
:::

### 类型断言
当你清楚知道一个实体具有比他现有类型更确切的类型时，可以使用类型断言  
```typescript
//类型断言两种形式
//'尖括号'语法
let any_data:any = "this is string";
let strLength:number = (<string>any_data).length  //将any断言为string类型
//as 语法
let strLengthAs:number = (any_data as string).length //将any断言为string类型
```


