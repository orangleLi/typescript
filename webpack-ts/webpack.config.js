const path = require('path')
// 引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin')
// 引入clean插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: "./src/index.ts",
  output: {
    // 指定打包文件的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后的文件
    filename: 'bundle.js',
    // // 告诉webpack不使用箭头函数，转换为Function
    // corejs处理promise等非自己写的函数转换的时候，会处理为箭头函数
    // 可以注释调这里的代码，看一看bundle.js的差异
    environment: {
      arrowFunction: false
    }
  },
  // 指定webpack打包时要使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: 'babel-loader',
            // 设置babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    targets: {
                      "chrome": "60",
                      "ie": "11"
                    },
                    // 指定corejs的版本
                    "corejs": "3",
                    // 使用corejs的方式  "usage" 按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'// 从后往前执行
        ],
        // 要排除的文件
        exclude: /node-modules/
      }
    ]
  },
  // 配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ],
  // 用来设置引用模块 export import
  resolve: {
    extensions: ['.ts', '.js']
  }
}