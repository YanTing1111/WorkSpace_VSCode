var shalloCopy = function(obj) {
  if(typeof obj !== "object") return ;
  var new_Object = obj instanceof Array ? [] : {};
  for(var key in obj) {
    if(obj.hasOwnProperty(key)) {
      new_Object[key] = obj[key];
    }
  } 
  return new_Object;
}

var arr = ["old", 1, true, [2, 3]];
var new_arr = shalloCopy(arr);
new_arr[3][0] = 4;
console.log(arr);
console.log(new_arr);
console.log(arr === new_arr);