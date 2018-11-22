// class Person {
//     // es6 constructor
//     constructor(){
//         this.name = name;
//     }
//     sayHello(){
//         return this.name;
//     }
// }
// console.log(Object.keys(Person.prototype));
// console.log(Object.getOwnPropertyNames(Person.prototype));


// es5 构造函数
function _classCallCheck(a,b) {
    if(!(a instanceof b)){
       throw new TypeError("Cannot call a class as a function"); 
    }
}
function Person(name) {
    // 杜绝将Person函数作为普通函数来调用
    _classCallCheck(this,Person);
    this.name = name;
}

Person.prototype = {
    sayHello: function(){
        return this.name;
    }
}
console.log(Object.keys(Person.prototype));
console.log(Object.getOwnPropertyNames(Person.prototype));
// var lilei = new Person('lilei');
// console.log(lilei);
// var la = Person('lalala');
// console.log(la);

// 让我们的"构造函数"当做一般的函数来运行
// Person("li");
