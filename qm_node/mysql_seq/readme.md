yarn add env2 mysql2 sequelize sequelize-cli
# 将配置放在.env文件里,该文件绝对不能上传到github上,记得将其添加到.gitignore

# 后端开发首先考虑安全
  - 数据库的连接信息统一放到.env文件里来保存，这个文件写入.gitignore，本地有，但不上传到github上。
  - env2 帮我们将.env逐行读取为配置
  - node_modules\.bin\sequelize init
  - sequelize 命令行 可以简化sql操作，因为mysql本身的命令行太低效
    sequelize-cli 这里将集成mysql 初始化
    node react app 数据库服务（数据存储）
    1. init
      一个应用对应一个数据库 eleme DB_NAME
      使用sequelize工具来形象化mysql操作
      代码运行环境分为开发环境（develop），线上环境（production），测试环境（test）
      线上环境maysql的密码不会给我们
      process.env.NODE_ENV 设置当前环境是何？
      线上机器走 .env.prod
      本地开发走 .env 本地数据库只需要有基本结构和一些数据就好了。



