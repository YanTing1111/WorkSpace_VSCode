// 手写一个new
// 实例化过程是怎么底层的？
// Otaku类 抽象的概念，等待被new，new之后变为具象
//  JS里面没有类，只有对象
function Otaku(name, age) {
    this.name = name;
    this.age = age;
    this.habit = "Games";
}
Otaku.prototype.strenth = 60;
Otaku.prototype.sayYourName = function () {
    console.log("I am " + this.name);
}
// new是js语言的一个关键字，无法替代的，new可以：
// 1、返回一个实例{} 声明，拥有Otaku函数中加的那些属性
// 2、实例可以访问到Otaku.prototype中的属性
function objectFactor(fn,...args) {
    // console.log(arguments);
    //参数：1、构造函数 2、其余是构造函数需要的参数
    // return 一个对象
    // var obj = {}; new过程第一步，返回新的空对象
    var obj = new Object(),
    Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    Constructor.apply(obj,arguments);
    // new过程第二步，this要指向新的对象
    // fn.apply(obj,...args);
    // 让obj上有constructor上的所有属性？
    // 函数也是对象
    return obj;
}
const didi = objectFactor(Otaku,"Kevin", 18);
console.log(didi.name,didi.age,didi.sayYourName);
