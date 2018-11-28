const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on('line', function (input) {
    inputArr.push(input);
    var nLine = +inputArr[2];
    if (inputArr.length == (nLine + 3)) {
        var s = inputArr[1].split(" ");
        var arr = inputArr.slice(3);
        for(var j = 0; j < arr.length; j++){
            var result = 0;
            var temp = arr[j].split(" ");
            for(var i = temp[0]-1; i < temp[1]; i++) {
                if(s[i] == temp[2]) {
                    result++;
                }
            }
            console.log(result);
        }
    }
});
