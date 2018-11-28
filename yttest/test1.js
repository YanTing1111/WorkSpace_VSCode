const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
var lnum = [];
var arr = [];
var temp = [];
rl.on('line', function (input) {
    //将输入放到新建的空数组中
    inputArr.push(input);
    //将输入的数据转换为数组
    var inputs = input.split(" ");
    //得到第i行的那个数（行数）
    var n = inputArr[0];
    var nLine = +inputArr[2];
    //判断，如果第一行输入的数字（行数）等于输入的总行数
    var opration = function(l,r,k) {
        var s = inputArr[1].split(" ");
        for(var i = l-1; i < r; i++) {
            if(s[i] == k) {
                result++;
            }
        }
    }
    if (inputArr.length == (nLine + 3)) {
        //截取第一行到最后一行数据（即：除了第一个数据行数之外的其他数据）
        for(var i = 1; i <= 3; i++) {
            arr = inputArr.slice(i);
        }
        for(var j = 0; j < arr.length; j++){
            var result = 0;
            temp = arr[j].split(" ");
            opration(temp[0],temp[1],temp[2]);
            console.log(result);
        }
        //这里打印的arr不包括第一行数字（行数）
        // console.log("n:",inputArr[0]);
        // console.log("s:",s);
        // console.log("nLine:",nLine);
        // console.log("arr:",arr);
        //这里打印的inputArr包括第一行数字（行数）
        // console.log(inputArr);       
        // inputArr = [];
        // console.log(inputArr);
    }
});
// function test(n,arr,q,l,r,k){
//     var result = 0;
//     if(arr.length == n) {
//         for(var i = l-1; i <= r-1; i++){
//             if(arr[i] == k) {
//                 result++;
//             }
//         }
//     }
//     return result;
// }