react(UI) + redux(data flow) + immutable(不可变数据)

reducer里面
  switch
    case
    default
      return
有性能问题
在状态之中只有一部分更新了，但我们却丢掉了没有更新的大部分，此为浪费

深拷贝、浅拷贝，最后的目标都为拷贝，规避JS对复杂对象类型引用式赋值，
引用式赋值会让代码的未来变得不可预测，不在单纯，出现二义性
结合react reducer 纯函数， 引入Immutable来确保状态对象赋值后是全新的对象，
不会影响原对象
1. 浅拷贝 
  数组的slice() concat() 方法，但是解决不了非数组，如果是数组的话最方便
  如果不是数组的话，可以用最原始的for(key in  ) 重新赋值，没有解决不了的
2. 嵌套对象时，浅拷贝就解决不了问题了，如果内部没有函数时，可以用
JSON.parse(JSON.stringify())
3. 递归思想，将一个深拷贝变为n个浅拷贝，当元素不为对象时退出，不过用递归性能开销大。
4. immutable
#各有优势，看情况使用
#以下为递归思想重点代码
typeof obj !== "object" return ;
var new_Object = obj instanceof Array ? [] : {};
for( key in obj) {
  if(obj.hasOwnProperty(key)) {
    new_Object[key] = typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key]
  }
}
return new_Object;