var deepCopy = function(obj) {
  if(typeof obj !== "object") return ;
  var new_Object = obj instanceof Array ? [] : {};
  for(var key in obj) {
    console.log(key);
    console.log(typeof obj[key]);
    if(obj.hasOwnProperty(key)) {
      new_Object[key] = typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
    }
  } 
  return new_Object;
}

var arr = ["old", 1, true, [2, 3]];
var new_arr = deepCopy(arr);
new_arr[3][0] = 4;
console.log(arr);
console.log(new_arr);
console.log(arr === new_arr);