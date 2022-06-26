# VUE的多页面H5模版

## 使用
```
npm install
npm run dev
```

## 常用模块
1. 创建VUE单页面应用
    ```
    npm install -g @vue/cli
    vue create vue-mh5-template
    ```
2. 选择模块
   - Babel - ES6+转码
   - CSS Pre-processors - sass or less
   - Linter / Formatter - 代码检查和格式化
      - ESLint + Standard config
3. 安装常用依赖
    ```
    npm install normalize.css -S
    npm install axios -S
    npm install qs -S
    ```

## REM方案配置
1. 安装依赖
    ```
    npm install postcss-pxtorem -D
    npm install -S amfe-flexible
    ```
2. 配置vue.config.js
    ```
    const pxtorem = require('postcss-pxtorem')

    pxtorem({
        rootValue: 37.5, // //UI图片的基准值 750px就是75,640px就是64,默认为75
        propList: ['*']
    })
    ```
3. 配置index.js
    ```
    import 'amfe-flexible'
    ```

## Vant配置
1. 安装
    ```
    npm i vant -S
    npm i babel-plugin-import -D
    ```
2. 配置babel.config.js实现按需引入
    ```
    module.exports = {
    plugins: [
            ['import', {
            libraryName: 'vant',
            libraryDirectory: 'es',
            style: true
            }, 'vant']
        ]
    };
    ```

## 多页面入口配置