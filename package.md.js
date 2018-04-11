({
  "name": "react_pro",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "webpack-dev-server",
    "start:dev": "webpack-dev-server --config webpack.config.dev.js",
    "build:dev": "webpack --config webpack.config.dev.js",
    "build": "webpack --mode production --config webpack.config.dev.js",
    "koa": "node ./server/index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.26.0", // 把 js 代码分析成 ast(抽象语法树)
    "babel-plugin-transform-runtime": "^6.23.0", // 避免了重复打包代码和手动引入模块
    "babel-polyfill": "^6.26.0", // babel-polyfill 的做法是将全局对象通通污染，增加Promise、Set、Map 等新增对象，Object.assign、Object.entries等静态方法。import "babel-polyfill"
    "babel-preset-env": "^1.6.1", // 声明环境, 然后该preset就会只编译包含我们所声明环境缺少的特性的代码
    "babel-preset-es2015": "^6.24.1", // babel-preset-es2015 打包了 es6 的特性
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1", // 数字越小，阶段越靠后，存在依赖关系。也就是说stage-0是包括stage-1的
    "babel-preset-stage-1": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "babel-preset-stage-3": "^6.24.1",
    "babel-register": "^6.26.0",
    "css-loader": "^0.28.11",
    "koa-webpack-middleware": "^1.0.7",
    "less": "^3.0.1",
    "less-loader": "^4.1.0",
    "postcss-loader": "^2.1.2",
    "style-loader": "^0.20.3",
    "url-loader": "^1.0.1",
    "webpack": "^4.1.1",
    "webpack-cli": "^2.0.12",
    "webpack-dev-server": "^3.1.1"
  },
  "dependencies": {
    "babel-runtime": "^6.26.0", // 自己手动引入 helper 函数，引用会重复
    "koa": "^2.5.0",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-router": "^4.2.0"
  }
})

// webpack会自动调用.babelrc

// https://segmentfault.com/q/1010000007193472
// https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md
// https://excaliburhan.com/post/babel-preset-and-plugins.html
