// 深拷贝浅拷贝
var arr = ["old", 1, true, null, undefined];
var new_arr = arr.slice();//浅拷贝
// var new_arr = arr.concat();//浅拷贝
//slice和concat是数组里面少数返回新数组的方法，这两个方法也称为浅拷贝

// var new_arr = arr 
// 如果arr或new_arr一方修改，未来就不可知了，所以不要用
// 用Immutable（不可变数据），外界无法修改它，
// 基于它计算出来的一个新的状态不会修改老的状态
// reducer 是一个纯函数 => 结果一定是确定的，不会出现模棱两可的情况
new_arr[0] = "new";
console.log(arr);
console.log(new_arr);