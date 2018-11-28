const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
var sum = 0;
rl.on('line',function(input) {
    inputArr.push(input);
    // var inputs = input.split(" ");
    var nLine = +inputArr[0].split(" ")[0];
    var c = +inputArr[0].split(" ")[2];
    var fn1 = function(realArray){
        var t = 0;
        var len = realArray.length;
        for (let j = 0; j < len; j++) {
            if(realArray[j] >= 1 && realArray[j] <= c && temp.indexOf(realArray) === -1) {
                t++;
            }
        }
        return t;
    }
    if(inputArr.length == (nLine + 1)) {
        var arr = inputArr.slice(1);
        console.log(arr);
        for(let i = 0; i < arr.length - 1; i++){
            var arr1 = arr[i].split(" ");
            var arr2 = arr[i+1].split(" ");
            var arr1_son = arr1.slice(1);
            var arr2_son = arr2.slice(1);
            var temp = [];
            if(fn1(arr1_son) == arr1_son.length == arr1[0] && fn1(arr2_son) == arr2_son.length == arr2[0]) {
                temp1 = arr1_son.concat(arr2_son);
                var temp2 = [...new Set(temp1)];
                sum = temp2.length - (arr1_son.length + arr2_son.length);
            }
        }
        console.log(sum);
    }
});