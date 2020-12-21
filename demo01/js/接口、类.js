"use strict";
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
var obj7 = {
    name: 'zs',
    age: 20,
    sex: 'n'
};
obj7.name = 'ls';
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
