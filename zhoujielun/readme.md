20181120
1、为了封装性、易用性以及代码的可读性，将弹幕的业务逻辑（独立）封装成一个类，
并将其模块化，直接在浏览器端执行export default或import模块化关键字，浏览器目前还没有支持，async在最近的Chrome版本才支持。
如何既用面向未来的编码风格（es6部分代码浏览器不支持），又能编译通过，故使其写的代码跟最后执行的代码不一样=>使用babel
webpack
    test.js
        babel-loader => es5
            最后webpack-dev-server
2、 webpack-dev-Server http server 在这之前，它会先compile webpack
    entry：一个入口，入口会引入更深层次的文件
    module：先匹配规则，在loader
    output：出口
3、canvas业务逻辑模式（通用）：
    render()负责一直画 => 用递归（由requestAnimationFrame(render.bind(this))实现）
    renderBarrange()负责画
    clearRect(0,0,w,h) 擦除的位置
    barrange集合，
    筛选哪些是可以画的？由与video.currentTime比较决定
    完了要回收，设置item.flag = true;表示播放过了的
    render()

4、代码的思想
    面向对象：核心的职责是对象的职责和分工
    容器对象，负责整个业务的抽象，把canvas、video、data封装进去，它的render()负责一直画（递归 + x轴的更新）
    业务细节对象：它的render()负责画出文字，data里每个item的属性就是它的属性
    对象都有constructor方法，负责初始化