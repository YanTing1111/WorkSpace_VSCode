var fileFinder = require("./demo1.js");
// console.log(fileFinder);
fileFinder("./src",function(err, filename) {
    if(err) {
        return console.error(err);
    }
    console.log(filename);
});

// 1、cb
// 2、then
// 3、async await
// 4、generate
// error