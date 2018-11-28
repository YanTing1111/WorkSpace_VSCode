//固定行数输入：
var lineNum = parseInt(readline());//获取第一行输入的数字，即行数
for(var i = 0; i < lineNum; i++) {
    var lines = readline();//遍历行数，获取每一行的字符
}
/**
 * eg:输入 3
 *         1 2
 *         2 3
 * 得到 lineNum 3
 *      lines ['1 2','2 3']
 */
// 任意行数输入：
while(line = readline()){
    //利用while循环，只要还有行数存在，就会获取输入数据
    // 获取到的字符串会放在数组中
    var lines = line.split(" ");
    var n = parseInt(lines[0]);
    var b = parseInt(lines[1]);
}
/******************************************************** */
// 1.输入一行，输出一行
var line = readline();
print();
//或者
while(line = readline()){
    //Do some operation
    print();
}

// 2.输入两行，输出一行

var line = readline();
var num = parseInt(readline());
print();

// 3.输入数据有多组，每组单独占一行，对于输入的每组数据，对应输出多组，
// 每组单独占一行（这种情况和例子1是一样的处理方法）
var line = readline();
print();
//或者
while(line = readline()){
    //Do some operation
    print();
}

// 4.输入数据有多组，每组占两行，对于输入的每组数据，
// 对应输出多组，每组单独占一行（这种情况和例子2是一样的处理方法）
var line = readline();
var num = parseInt(readline());
print();

// 5.输入数据第一行表示测试样例数，接下来的n行表示n组测试样例，
// 对于输入的每组测试样例，对应输出n组数据
var num = parseInt(readline());
while(line = readline()){
    //Do some operation
    print();
}

// 6.输入n行，输出一行
while(line = readline()){
    //Do some operation
}
print();

// 注意：上面的例子是读取输入数据和输出数据，读取到的数据还要处理。 
// 例如输入包括一行，用空格分开的两个正整数，
// 那么用var line = readline()读取到输入数据之后，
// 还要将读取到的字符串转为数组var arr = line.split(' ');
// 然后经过var num1 = parseInt(arr[0]), num2 = parseInt(arr[1])
// 读取到输入的两个正整数。
// 总之，还需要多实践，慢慢就知道牛客网在线编程的套路了。最后，祝好。