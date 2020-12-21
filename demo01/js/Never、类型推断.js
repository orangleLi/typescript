"use strict";
// never表示的是那些永不存在的值的类型。
// 例如 never类型是那些总是会抛出异常或根本不会有返回值的函数表达式或箭头函数表达式的返回值类型；
// 变量也可能是never类型，当他们被永不为真的类型保护所约束时。
// never是任何类型的子类型，也可以赋值给任何类型；
// 然而，没有类型是never的子类型或者可以赋值给never类型（除了never本身以外）。
// 即使any也不能赋值给never
// 返回never类型的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error('Something failed');
}
// 返回never类型的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) { }
}
// 类型推断
// 在定义变量的时候，如果没有明确的指定类型，那么Typescript根据类型推论推断出一个类型
var a = 1;
// a = 'aaa' // 报错 不能将string赋给number
// 定义变量如果没有赋值，那么它将会被推论为任意类型any，不管后面有没有进行赋值
var anything;
anything = 1;
anything = 'abc';
