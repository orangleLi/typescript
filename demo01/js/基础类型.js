"use strict";
// 布尔型
var boo = true;
var bo = !!5;
console.log(boo, bo);
// 字符串
var str = 'hello';
console.log(str);
// 数组
var arr = [1, 2, 3];
var arr1 = ['a', 'b', 'c'];
console.log(arr, arr1);
// null undefined
var _null = null;
var _undefined = undefined;
var vo = undefined;
// ts中的或
// 联合类型
var some_var = 12;
console.log(some_var);
some_var = true;
console.log(some_var);
some_var = 'abc';
console.log(some_var);
// any 不进行类型校验
var _any = 112;
_any = true;
// void 函数没有返回值
function func(args) {
}
func(1);
function func1(args) {
    // 逻辑代码
    return true;
}
func1('');
var func2 = function (args) {
    return 'hhh';
};
func2([1]);
function getName(n) {
    if (typeof n === 'string') {
        return n;
    }
    else {
        return n();
    }
}
function handle(a, b) {
    console.log(a, b);
}
handle('hhh', 'age'); // 第二个参数只能传age或sex或length
// 元组
// 数组合并了相同类型的对象，而元组合并了不同类型的对象
var info_tuples = ['hhh', 1];
// 注意：当直接对元组类型的变量进行初始化或者赋值的时候,需要提供所有元组类型中指定的项.
info_tuples.push('abc');
console.log(info_tuples); // ["hhh", 1, true, "abc"]
// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型。
// info_tuples.push(true) // 报错 Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
