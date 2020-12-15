#### 安装typescript
npm install -g typescript

#### 编译ts文件生成js
tsc 文件名.ts

#### vscode中自动编译
tsc --init 生成tsconfig.json文件<br>
"outDir": "./" 打开注释，配置编译生成的js文件路径<br>
"outDir": "./js"<br>
任务  ->  运行任务  ->  typescript  ->  tsc:监视 tsconfig.json<br>


