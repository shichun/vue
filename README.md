# ifab

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


{
    // 强制单引号
    "prettier.singleQuote": true,
    // 尽可能控制尾随逗号的打印
    "prettier.trailingComma": "all",
    // 开启 eslint 支持
    "prettier.eslintIntegration": true,
    // 保存时自动fix
    "eslint.autoFixOnSave": true,
    // 添加 vue 支持
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      {
        "language": "vue",
        "autoFix": true
      }
    ],
    // 使用插件格式化 html
    "vetur.format.defaultFormatter.html": "js-beautify-html",
    // 格式化插件的配置
    "vetur.format.defaultFormatterOptions": {
      "js-beautify-html": {
        // 属性强制折行对齐
        "wrap_attributes": "force-aligned",
      }
    }
  }