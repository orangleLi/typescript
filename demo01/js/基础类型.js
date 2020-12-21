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
