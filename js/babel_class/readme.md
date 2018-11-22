20181121 babel是怎么编译class的?
1、npm init -y初始化，yarn add babel-core babel-preset-env
2、.babelrc文件必不可少,presets数组默认env
3、JS面向对象是原型式的，JS的面向对象并没有改变，还是es5式的
eg: function Person(){}   构造函数
    Person.prototype = {}
4、es6的class constructor只不过是语法糖而已
5、es5的构造函数，可以作为普通函数来执行，如果new就返回一个Object，如果new的话，函数没有return就不会执行，返回undefined
6、我们将一个class的es6的代码在babel编译的时候，如何做到杜绝没有new的函数运行？
7、es6的prototype属性不可枚举（enumerable），Object.key()，Object.getOwnPropertyNames(Person.prototype)
