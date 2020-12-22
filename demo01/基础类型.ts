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

let vo: void = undefined

// ts中的或
// 联合类型
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

// 类型别名
// 可以理解为给一个类型起一个新的名字
type Name = string; // 声明一个变量，返回类型是string
type NameResolver = () => string; // 声明一个函数，返回类型是string
type NameOrNameResolver = Name | NameResolver;
function getName(n: NameOrNameResolver): string {
  if (typeof n === 'string') {
    return n;
  } else {
    return n();
  }
}


// 字符串字面量类型
type Info = 'age' | 'sex' | 'length'
function handle(a: string, b: Info): void {
  console.log(a, b);
}
handle('hhh', 'age') // 第二个参数只能传age或sex或length

// 元组
// 数组合并了相同类型的对象，而元组合并了不同类型的对象
let info_tuples: [string, number] = ['hhh', 1];
// 注意：当直接对元组类型的变量进行初始化或者赋值的时候,需要提供所有元组类型中指定的项.
info_tuples.push('abc')
console.log(info_tuples) // ["hhh", 1, true, "abc"]
// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型。
// info_tuples.push(true) // 报错 Argument of type 'boolean' is not assignable to parameter of type 'string | number'.