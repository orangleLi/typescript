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