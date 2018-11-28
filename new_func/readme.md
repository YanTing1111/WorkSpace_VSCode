new到底做了什么？
let p = new Person();
p 是Object类型，Person是一个函数类型typeof
1、Person 被执行，加了new后，Person函数会在new的作用域下执行，this就指向p的作用域，构造函数里的属性被当做p的属性被创建
2、将p.__proto__指向Person.prototype,p就继承了Person.prototype中的属性跟方法
