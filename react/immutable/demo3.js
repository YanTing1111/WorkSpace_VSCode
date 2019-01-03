// 一个数组里面只要有一项是复杂的，那就不是浅拷贝能解决的问题，就要用深拷贝
// 深浅自知，浅拷贝仍然有它的应用场景，因为它更高效
var arr = [{ old: "old"}, ["old"]];
// var new_arr = arr.slice();
var new_arr = JSON.parse(JSON.stringify(arr));
// 注：JSON里面的这两个方法很耗能，数组只有一层的话就别用了，用浅拷贝就好了
// JSON.stringify会把一个数组变成一个字符串
// JSON.parse可以把变成字符串的数组复活
new_arr[0].old = "new";
new_arr[1][0] = "new";
console.log(arr);
console.log(new_arr);
console.log(arr === new_arr);