// 布尔型
let boo: boolean = true
let bo: boolean = !!5
console.log(boo, bo)

// 字符串
let str: string = 'hello'
console.log(str)

// 数组
let arr: number[] = [1, 2, 3]
let arr1: Array<string> = ['a', 'b', 'c']
console.log(arr, arr1)

// null undefined
let _null: null = null
let _undefined: undefined = undefined

// ts中的或
let some_var: number | boolean | string = 12
console.log(some_var)
some_var = true
console.log(some_var)
some_var = 'abc'
console.log(some_var)

// any 不进行类型校验
let _any: any = 112
_any = true

// void 函数没有返回值
function func(args: number): void {

}
func(1)

function func1(args: string): boolean {
  // 逻辑代码
  return true
}
func1('')

let func2 = (args: number[]): string => {
  return 'hhh'
}
func2([1])

// 对象  使用接口来定义对象的类型
interface IPerson {
  name: string;
  age: number;
  sex: string;
}

let obj: IPerson = {
  name: 'zs',
  age: 20,
  sex: '男'
} // 少写属性或者属性类型不对都会报错

// 可选项
interface IPerson2 {
  name: string;
  age?: number;
  sex?: string;
}

let obj2: IPerson2 = {
  name: 'zs'
}

// 接口继承 extends
interface IA extends IPerson2 {
  hobby: string[]
}
let obj3: IA = {
  name: 'zs',
  hobby: ['吃饭', '睡觉']
}

interface IB {
  name: string;
}

interface IC {
  age: number;
}

interface ID extends IB, IC {
  sex: string;
}

let obj4: ID = {
  name: 'zs',
  age: 20,
  sex: '男'
}

// ts中的与
let obj5: IB & IC & ID = {
  name: 'zs',
  age: 20,
  sex: '男'
}

// 不确定的属性
interface IPerson3 {
  name: string;
  [anyName: string]: any; // anyName 这个可以随意写 anyName propName自己起名字
}

let obj6: IPerson3 = {
  name: 'zs',
  a: 1,
  b: true
}

// 接口实现
interface IPerson4 {
  name: string;
  age: number;
  sex: string;
  getName() : string;
  getAge: () => number;
}

class Person implements IPerson4 {
  name: string;
  age: number;
  sex: string;
  constructor(name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  getName() : string {
    return this.name;
  }
  getAge = (): number => {
    return this.age;
  }

  // 类自己的方法
  getAll(): void {
    console.log(this.name + ',' + this.age + ',' + this.sex);
  }
}
let objPerson = new Person('zs', 20, '男')
console.log(objPerson.getName())
console.log(objPerson.getAge())
objPerson.getAll()


// 类型断言
function getLength(str: number | string): number {
  if ((str as string).length) {
    // return (str as string).length // 类型断言的两种写法
    return (<string>str).length // 类型断言的两种写法
  } else {
    return str.toString().length
  }
}

// 非空断言
function getLength1(args?: string): number {
  return args!.length;
  // 相当于return args && args.length
}

// 枚举
enum Color {
  red,
  green,
  yellow
}
// 第一个默认是0, 从0开始自增
console.log(Color.red) // 0
console.log(Color.green) // 1
console.log(Color.yellow) // 2

// 反向映射
/*
{
  red: 0,
  green: 1,
  yellow: 2,
  0: red,
  1: green,
  2: yellow
}
*/
console.log(Color[0])
console.log(Color[1])
console.log(Color[2])

// 给枚举赋值
enum Color1 {
  red = 1,
  green,
  yellow 
}
// 枚举属性的值是前一个属性的值递增
console.log(Color1.red) // 1
console.log(Color1.green) // 2
console.log(Color1.yellow) // 3

enum Color2 {
  red = 1,
  green = 'abc',
  yellow = 3 
}
// 枚举属性的值是前一个属性的值递增，如果枚举前一个属性的值是字符串，无法递增，则后一个枚举的属性必须赋值
console.log(Color2.red) // 1
console.log(Color2.green) // abc
console.log(Color2.yellow) // 3


// 泛型
function func3<T> (args: T): any {
  return args;
}

console.log(func3<number>(12))
console.log(func3<string>('hhh'))
console.log(func3<boolean>(true))