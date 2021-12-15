# 说明

## 文档
使用`npm run docs:build`生成文档到`docs/pages/api.md`。

- 优点：
1. 强迫写详细的注释
2. 形成文档更加自动化

## 安装

```bash
npm i @jomsou/utils -S
or
yarn add @jomsou/utils -S
```

## 使用

- 在原生js中使用

```html
<script src="xx/dist/index.aio.js"></script>
<script>
    const { 
      xxx,
      ...
    } = window['jrfe-utils'];
<script>
```

- 在框架中使用

```js
import JrfeUtils from '@jomsou/utils';
const { xxx, ... } = JrfeUtils
or 
import { xxx } from '@jomsou/utils';
```

- 按需引入

```bash
npm i babel-plugin-import -D
or
yarn add babel-plugin-import -D
```

配置.babelrc或者babel.config.js

```
// .babelrc
{
  "plugins": [
  [
    "import", {
      "libraryName": "@jomsou/utils"
    }, "@jomsou/utils"
  ],
  ]
}
```

```js
// babel.config.js
module.exports = {
  plugins: [
  [
    'import', {
      libraryName: '@jomsou/utils'
    }, '@jomsou/utils'
  ],
  ]
}
```