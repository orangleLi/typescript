import { hh } from './m1'
function fn(a: number, b: number) {
  return a + b
}
console.log(hh);
console.log(fn(123, 456));

const obj = {name: '孙悟空', age: 33}
obj.age = 10
console.log(obj);

// ie中没有Promise这个对象，所以打包的时候corejs就会使用自己的promise使得ie也能使用Promise
/**
 * core-js是完全模块化的javascript标准库。 包含ECMA-262至今为止大部分特性的polyfill
 *  如promises、symbols、collections、iterators、typed arrays、etc，以及一些跨平台的WHATWG / W3C特性的polyfill，如WHATWG URL。 
 * 它可以直接全部注入到全局环境里面，帮助开发者模拟一个包含众多新特性的运行环境
 * 这样开发者仅需简单引入core-js，仍然使用最新特性的ES写法编码即可；也可以不直接注入到全局对象里面，这样对全局对象不会造成污染
 */
// 所以无这一句代码，打包出来的bundle.j和index.ts差不多，有这句，打包出来的bundle.js很长很长，多了很多内容
console.log(Promise);


class Person {
  /**
   * private 私有属性，只有当前类可以访问（修改）
   * public  公有属性，修饰的属性可以在任务位置进行访问（修改），默认值
   * protected 受保护属性  只能当前类及其子类访问（修改）
   */
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name
    this._age = age
  }

  // 属性是在对象中设置的，属性可以任意的被修改
  // 属性可以任意被修改将会导致对象中的数据变得非常不安全

  // ts存取器  下面这种写法是提供的setter getter简便写法
  get name() {
    return this._name
  }
  set name(value) {
    this._name = value
  }

  get age() {
    return this._age
  }

  set age(value) {
    if(value >= 0) {
      this._age = value
    }
  }
}

let p = new Person('孙悟空', 18)
console.log(p.name);

p.name = '猪八戒'
p.age = 22
console.log(p);


class C {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}
console.log(new C('zs', 18));
// 这种方式也是ts提供的语法糖，是对上述class C方式的简写
class C1{
  constructor(public name: string, public age: number) {}
}
console.log(new C1('zs', 18));

function fn1<T>(a: T): T{
  return a
}
console.log(fn1<number>(10));

function fn2<T, K>(a: T, b: K): T{
  return a
}
console.log(fn2<string, number>('hello', 20));

interface Inter{
  length: number
}
function fn3<T extends Inter>(a: T): number{
  return a.length
}
console.log(fn3('hello'));
console.log(fn3({length: 10}));

class MyClass<T> {
  constructor(public name: T) {}
}

console.log(new MyClass<string>('孙悟空'));









