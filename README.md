#### 协作
- 修改别人部分代码加注释
- push到github的代码保证是可运行的
- 项目本地启动 npm install & npm start (网页自动刷新，需要配置IDE自动保存的功能，webstorm需要)
- 代码规范 eslint (webstorm会提示红线，需要配置)
- 由于eslint的规范，在不同平台开发可能出现问题，所以如果变现编译出错，运行node eslint_auto_fix_test.js, 运行这条命令的前提是eslint是全局安装的
- 使用dora mock用于本地数据测试,npm run mock