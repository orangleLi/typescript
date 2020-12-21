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