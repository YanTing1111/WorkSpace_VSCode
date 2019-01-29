# 前端跨域解决方案

- cookies
  是一个网站为了识别用户身份，进行session跟踪，而存储在用户本地终端上的数据，
  服务端和客户端都可操作和访问。
  后端用ctx.cookies.set
  前端用document.cookie 形式是以;隔开的key=val
  1. path选项
    指定cookie有效的路径
  2. http-only
    为true时，js无法获得cookie值，增强了cookie的安全性
  3. maxAge
    设置过期时间
  4. expires
    指定过期日期
  5. overwrite
    是否允许覆盖