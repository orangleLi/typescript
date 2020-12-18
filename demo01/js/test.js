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
// ts中的或
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
var obj = {
    name: 'zs',
    age: 20,
    sex: '男'
}; // 少写属性或者属性类型不对都会报错
var obj2 = {
    name: 'zs'
};
var obj3 = {
    name: 'zs',
    hobby: ['吃饭', '睡觉']
};
var obj4 = {
    name: 'zs',
    age: 20,
    sex: '男'
};
// ts中的与
var obj5 = {
    name: 'zs',
    age: 20,
    sex: '男'
};
var obj6 = {
    name: 'zs',
    a: 1,
    b: true
};
var Person = /** @class */ (function () {
    function Person(name, age, sex) {
        var _this = this;
        this.getAge = function () {
            return _this.age;
        };
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    // 类自己的方法
    Person.prototype.getAll = function () {
        console.log(this.name + ',' + this.age + ',' + this.sex);
    };
    return Person;
}());
var objPerson = new Person('zs', 20, '男');
console.log(objPerson.getName());
console.log(objPerson.getAge());
objPerson.getAll();
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
