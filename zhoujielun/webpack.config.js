// 工作流是依赖于node来运行的
const path = require("path");
module.exports = {
    // 入口 entry
    entry:"./src/main.js",
    output: {
        // 打包好的文件bundle.js
        filename:"bundle.js",
        path: path.resolve(__dirname,'.')
    },
    module: {
        // 匹配规则
        rules:[
            {
                test:/\.js/,
                use: {
                    loader: "babel-loader"
                },
                exclude: "/node_modules/"
            }
        ]
    },
    resolve: {
        extensions: [".js"]
    },
    devServer: {
        contentBase:"."
    }
}