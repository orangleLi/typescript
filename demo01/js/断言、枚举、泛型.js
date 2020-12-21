"use strict";
// 类型断言
function getLength(str) {
    if (str.length) {
        // return (str as string).length // 类型断言的两种写法
        return str.length; // 类型断言的两种写法
    }
    else {
        return str.toString().length;
    }
}
// 非空断言
function getLength1(args) {
    return args.length;
    // 相当于return args && args.length
}
// 枚举
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["yellow"] = 2] = "yellow";
})(Color || (Color = {}));
// 第一个默认是0, 从0开始自增
console.log(Color.red); // 0
console.log(Color.green); // 1
console.log(Color.yellow); // 2
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
console.log(Color[0]);
console.log(Color[1]);
console.log(Color[2]);
// 给枚举赋值
var Color1;
(function (Color1) {
    Color1[Color1["red"] = 1] = "red";
    Color1[Color1["green"] = 2] = "green";
    Color1[Color1["yellow"] = 3] = "yellow";
})(Color1 || (Color1 = {}));
// 枚举属性的值是前一个属性的值递增
console.log(Color1.red); // 1
console.log(Color1.green); // 2
console.log(Color1.yellow); // 3
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 1] = "red";
    Color2["green"] = "abc";
    Color2[Color2["yellow"] = 3] = "yellow";
})(Color2 || (Color2 = {}));
// 枚举属性的值是前一个属性的值递增，如果枚举前一个属性的值是字符串，无法递增，则后一个枚举的属性必须赋值
console.log(Color2.red); // 1
console.log(Color2.green); // abc
console.log(Color2.yellow); // 3
// 泛型
function func3(args) {
    return args;
}
console.log(func3(12));
console.log(func3('hhh'));
console.log(func3(true));
