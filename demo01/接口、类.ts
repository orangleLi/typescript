// 面向对象的语言中，接口是对行为的抽象，而具体如何行动需要由类去实现
// ts中的接口，除了可以用于对类的一部分行为进行抽象外，也常用于对【对象的形状（Shape）】进行描述。
// 对象  使用接口来定义对象的类型
interface IPerson {
  name: string;
  age: number;
  sex: string;
}

let obj: IPerson = {
  name: 'zs',
  age: 20,
  sex: '男'
} // 少写属性或者属性类型不对都会报错

// 可选项
interface IPerson2 {
  name: string;
  age?: number;
  sex?: string;
}

let obj2: IPerson2 = {
  name: 'zs'
}

// 接口继承 extends
interface IA extends IPerson2 {
  hobby: string[]
}
let obj3: IA = {
  name: 'zs',
  hobby: ['吃饭', '睡觉']
}

interface IB {
  name: string;
}

interface IC {
  age: number;
}

interface ID extends IB, IC {
  sex: string;
}

let obj4: ID = {
  name: 'zs',
  age: 20,
  sex: '男'
}

// ts中的与
let obj5: IB & IC & ID = {
  name: 'zs',
  age: 20,
  sex: '男'
}

// 不确定的属性
// 一个接口中只能定义一个任意类型。
interface IPerson3 {
  name: string;
  [anyName: string]: any; // anyName 这个可以随意写 anyName propName自己起名字
}

let obj6: IPerson3 = {
  name: 'zs',
  a: 1,
  b: true
}

// 只读类型
// 类似与js中的const定义变量，一旦被定义了就不允许修改。
interface IOnlyread {
  name: string;
  readonly age: number;
  sex: string;
}

let obj7: IOnlyread = {
  name: 'zs',
  age: 20,
  sex: 'n'
}
obj7.name = 'ls'
// obj7.age = 21 // Cannot assign to 'age' because it is a read-only property.

// 接口实现
interface IPerson4 {
  name: string;
  age: number;
  sex: string;
  getName() : string;
  getAge: () => number;
}

class Person implements IPerson4 {
  name: string;
  age: number;
  sex: string;
  constructor(name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  getName() : string {
    return this.name;
  }
  getAge = (): number => {
    return this.age;
  }

  // 类自己的方法
  getAll(): void {
    console.log(this.name + ',' + this.age + ',' + this.sex);
  }
}
let objPerson = new Person('zs', 20, '男')
console.log(objPerson.getName())
console.log(objPerson.getAge())
objPerson.getAll()
