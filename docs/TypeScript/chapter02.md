# interface 接口

## 基本概念
TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
:::tip
interface 接口，我更愿意叫它“对象约束”，“对象”是值它的作用类型为object,"约束"是指在使用interface时，主要的功能就是校验object的结构，起到约束作用。
:::

## 使用
### 基本结构
```typescript
interface Person {
    name:string;
    age:number;
}
function printPersonInfo(person:Person):void {
    console.log(person.name);
    console.log(person.age);
}
printPersonInfo({name:'Bob',age:19});
```
:::tip  
上面代码定义了一个printPersonInfo的方法，打印传入person的name和age属性。为了确保传入的person必须带有name和age属性，因此创建了一个Person接口来对传入的参数进行约束，使其必须具有和接口相同的结构，从而避免在执行过程中找不到必要的属性。如果传入的参数结构与接口不符，则会提示错误。
:::

### 可选属性
```typescript
interface Person {
    name:string
    age:number
    job?:string
}
function printPersonInfo(person:Person):void {
    console.log(person.name);
    console.log(person.age);
    if(person.job){
        console.log(person.job);
    }
}
printPersonInfo({name:'Bob',age:19,job:"doctor"});
printPersonInfo({name:'Sam',age:15});  //不传入job属性也可以
```
:::tip
上述代码中，我们新增了一个打印person的job属性的功能，但是对与job属性并不是必需的，有就打印，没有就忽略。因此我们在接口Person中，将job属性定义可选属性，用?表示。
:::

### 只读属性
一些对象属性只能在刚刚创建的时候修改其值，可以在属性名前用readonly来指定只读属性
```typescript {6}
interface Person {
    readonly name:string
    readonly age
}
let person:Person = {name:'Bob',age:18}
person.name = 'Sam' //错误 无法为“name”赋值，因为它是只读属性
```
:::tip
我们通过赋值一个字面量来构造一个person,由于其受到interface约束，其属性为只读，创建之后其属性便不能再被修改。
:::
`ReadonlyArray<T>`只读数组。和`Array<T>`类似，只是去掉了所有可变方法，确保数组创建后不能再被修改。
```typescript
let readOnly_arr:ReadonlyArray<number> = [1,2,3,4,5]
readOnly_arr[0] = 10         //错误
readOnly_arr.push(6)         //错误
readOnly_arr.length = 3      //错误
readOnly_arr = [6,7,8,9,10]  //错误
```

