var obj = {};
var arr = ['2 2 3','3 5 6 1','2 3 4','2 6 3','0'];
for(let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].split(" ");
    for(let j = 1; j <= arr[i][0]; j++) {
        if(obj[arr[i][j]]) {
            obj[arr[i][j]].push(i+1);
        }else{
            obj[arr[i][j]] = [i+1]
        }
    }
}
console.log(obj);
var temp = Object.values(obj);
var c = 0;
console.log(temp);
for(let m = 0; m < temp.length; m++) {
    for(let n = 1; n < temp[m].length; n++) {
        if(temp[m][n+1] - temp[m][n] < 2) {
            c++;
        }
    }
}
console.log(c);