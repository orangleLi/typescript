1. 安装相关依赖
```
cnpm i -D webpack webpack-cli typescript ts-loader
```

2. 编写webpack.config.js文件

3. 编写tsconfig.json

4. 编写package.json

5. 引入webpack插件
```
cnpm i -D html-webpack-plugin clean-webpack-plugin

// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// 配置webpack插件
plugins: [
  new CleanWebpackPlugin(),
  new HTMLWebpackPlugin({
    template: './src/index.html'
  })
],
```
```
cnpm i -D webpack-dev-server
package.json
"start": "webpack serve --open --mode development"

npm run start自动打开浏览器
```
6. 配置babel

```
cnpm i -D @babel/core @babel/preset-env babel-loader core-js
```