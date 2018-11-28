// var readline = require('readline');
// const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
// });
// rl.on('line', function(line){
//    var tokens = line.split(' ');
//     console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
// });

//多行输入
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    //将输入放到新建的空数组中
    inputArr.push(input);
    //将输入的数据转换为数组
    var inputs = input.split(" ");
    //得到第一行的那个数（行数）
    var nLine = +inputArr[0];
    //判断，如果第一行输入的数字（行数）等于输入的总行数
    if (inputArr.length == (nLine + 1)) {
        //截取第一行到最后一行数据（即：除了第一个数据行数之外的其他数据）
        var arr = inputArr.slice(1);
        //这里打印的arr不包括第一行数字（行数）
        console.log(arr);
        //这里打印的inputArr包括第一行数字（行数）
        // console.log(inputArr);       
        inputArr = [];
        // console.log(inputArr);
    }
});
