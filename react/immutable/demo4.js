var arr = [function() {
  console.log(a);
}, {
  b: function() {
    console.log(b);
  }
}];

var new_arr = JSON.parse(JSON.stringify(arr));

console.log(arr);
console.log(new_arr);
console.log(arr === new_arr);
// JSON两个方法对非函数的子元素可进行深拷贝，它的性能开销比浅拷贝略大