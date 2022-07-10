# learn-typescript

### 环境搭建

#### Parcel 打包支持浏览器运行 ts 文件
(见 `/01-learn/03-autoReboot`)

1. 安装 Parcel 打包工具: yarn add parcel-bundler --dev
2. 在 package.json 中给 npm 添加启动项, 支持启动 parcel 工具包
   ```shell
      "scripts": {
          "dev": "parcel ./index.html"
      }
   ```
3. 启动 parcel 工具包
   ```shell
      yarn dev
   ```

#### 安装 typescript
1. ```shell
      全局安装:
        npm install typescript -g
      本地安装:
        npm install typescript -D
      yarn安装:
        yarn global add typescript
   ```
2. 生成 tsconfig.ts 中的配置
   ```shell
      tsc --init
   ```
3. 修改 tsconfig.ts 中的配置

   "outDir": "./dist"  --outDir 是 ts 编译后生成 js 文件保存的目录

   "rootDir": "./src"  --rootDir 是自己编写的 ts 源文件所在的目录


5. 编译 src 目录及子目录下的 ts 文件

   tsc **在src当前目录下: 输入 `tsc`**

   **会把 src 目录及子目录下的ts文件全部编译成 js 文件, 并全部输出到dist目录中**


6. 安装 ts-node

   ts-node 让 node 能直接运行 ts 代码, 无需使用 `tsc` 将 ts 代码编译成 js 代码

   **ts-node 则包装了node; 它可以直接的运行 ts 代码**

   ```shell
      全局安装:
        yarn global add ts-node
      本地安装:
        yarn add ts-node --dev
   ```
   
7. 安装 nodemon 工具
   
   nodemon 作用: **nodemoon 可以自动检测到目录中的文件更改时通过重新启动用用程序开调试基于 node.js 的应用程序**

   ```shell
      全局安装:
        yarn global add nodemon
      本地安装:
        yarn add nodemon --dev
   ```
   
8. 在 package.js 中配置自动检测, 自动重启应用程序
   ```shell
      "scripts:" {
          "watch": "nodemon --watch src/ -e ts --exec ts-node ./src/app.ts"
      }
   ```
   `nodemou --watch src/` 表示检测的目录是 package.json 同级目录 src
   
   `-e ts` 表示 nodemou 命令准备将要监听的是 ts 后缀的文件

   `--exec ts-node ./src/app.ts` 表示检测到 src 目录下有任何变化, 都要重新执行 app.ts 文件

