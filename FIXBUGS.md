# 遇到报错的解决方法总结

## 关于 TypeScript 的配置
1. 编译过程引入库文件不对
    > ERROR in [at-loader] ./node_modules/@types/react/index.d.ts:378:23
    > TS2583: Cannot find name 'Set'. Do you need to change your target library? Try changing the `lib` compiler option to es2015 or later.
    ```json
    // tsconfig.json
    {
      "compilerOptions": {
        "lib": ["es6"]
      }
    }
    ```

2. 模块导入方式错误
    > ERROR in [at-loader] ./lib/button.tsx:1:8 
    > TS1192: Module '"/Users/caijialinxx/FrontEnd/jirengu/ui-demo/node_modules/@types/react/index"' **has no default export**.
    ```json
    // 方法一：允许为所有导入为命名空间的对象启用CommonJS和ES模块之间的互操作性。相当于allowSyntheticDefaultImports
    // tsconfig.json
    {
      "compilerOptions": {
        "esModuleInterop": true       // 相当于 "allowSyntheticDefaultImports": true ，但这个被弃用了
      }
    }
    ```
    ```typescript jsx
    // 方法二：为命名空间使用对应的导入方法
    // import React from 'react'      // 舍弃这种写法
    import * as React from 'react'    // 改为这种 ES6 导入方式

    function Button() {
      return (<div>按钮</div>)
    }

    export default Button
    ```

## 关于 Webpack 的配置
1. 无法解析自定义模块
    > ERROR in ./lib/index.tsx
    > **Module not found: Error: Can't resolve './button'** in '/Users/caijialinxx/FrontEnd/jirengu/ui-demo/lib'
    ```js
    // webpack.config.js
    module.exports = {
      // ...
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']  // 加入扩展，使得自定义模块可以被加载
      }
    }
    ```


## 关于 Jest 测试
1. 遇到无法解析的模块（例如css/scss/jpg这些）
    > Jest encountered an unexpected token
    > This usually means that you are trying to import a file which Jest cannot parse, e.g. it's not plain JavaScript.
    ```js
    // jest.config.js
    module.exports = {
      moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/file-mock.js",
        "\\.(css|less|sass|scss)$": "<rootDir>/test/__mocks__/object-mock.js",
      }
    }

    /* 然后在根目录下创建/test/__mocks__ */
    // file-mock.js
    module.exports = 'test-file-stub'
    // object-mock.js
    module.exports = {}
    ```

2. 测试事件，使用 Enzyme 库
    ```shell script
    yarn add --dev enzyme
    yarn add --dev enzyme-adapter-react-16
    ```
    安装好之后，还需要配置：
    ```js
    // jest.config.js
    module.exports = {
      setupFilesAfterEnv: ["<rootDir>/test/setupTests.js"],
    }

    /* 然后在根目录下创建/test/setupTests.js */
    // setupTests.js
    const Enzyme = require('enzyme')
    const Adapter = require('enzyme-adapter-react-16')
    Enzyme.configure({ adapter: new Adapter() })
    ```

## NPM 发布流程
1. `npm adduser` 登录
2. `npm publish`
    - 401 报错 未登录
    - 403 报错 无权限，已发布过同样的版本
    - 必备三个文件：`package.json` `LICENSE` `README.md`


## 使用 Circle CI 自动发布到 NPM
1. 未认证
    > npm ERR! code ENEEDAUTH
    > npm ERR! need auth auth required for publishing
    > npm ERR! need auth You need to authorize this machine using `npm adduser`
    ```yaml
    # .circleci/config.yml
    jobs:
      publish:
        <<: *defaults
        steps:
          - attach_workspace:
              at: .
          - run: npm config set //registry.npmjs.org/:_authToken $NPM_TOKEN
          - run: npm publish
    ```
    在 `.circleci/config.yml` 中添加 `NPM_TOKEN` ，`npm config set //registry.npmjs.org/:_authToken $NPM_TOKEN`。并且在 CircleCI 的项目中添加 `$NPM_TOKEN` 环境变量。
    具体戳 https://github.com/Caijialinxx/ui-demo/commit/592132227a055565efc70c970e6bd172350c88a4 。

2. 自动添加版本号
    版本号说明：major.minor.patch
    - `npm version patch` API 不变，修复了 bug
    - `npm version minor` API 有变化，但变化不大，不影响现有代码
    - `npm version major` API 变化很大，影响现有代码
    
    添加一个脚本文件 `./deploy.sh` ，使其自动升级版本号并发布。
    ```shell script
    npm version $1 && git push
    ``` 

3. 在 publish 流程中 CI 没有监测到 tags ，导致 publish 无法自动进行
    ```shell script
    # deploy.sh
    npm version $1 && git push --follow-tags
    ```
    然而实际上，添加了 `--follow-tags` 也没有让 CI 成功监测到，那么我们需要转换思路，在特定分支下进行发布：
    ```shell script
    git push origin master:deploy
    ```


## 在其他项目引入本项目
1. Minified React error #321
    > Error: Minified React error #321; visit https://reactjs.org/docs/error-decoder.html?invariant=321 
    > for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    ```js
    // webpack.config.prod.js
    module.exports = {
      // ...
      externals: {
        react: {
          commonjs: 'react',
          commonjs2: 'react',
          amd: 'react',
          root: 'React',
        },
        'react-dom': {
          commonjs: 'react-dom',
          commonjs2: 'react-dom',
          amd: 'react-dom',
          root: 'ReactDOM',
        },
      }
    };
    ```

2. 引入直接写模块名报错
    ```js
    import {Icon} from 'cui-demo'; // Could not find module in path: 'cui-demo' relative to '/src/index.tsx'
    // => import {Icon} from 'cui-demo/dist/lib';
    console.log(Icon);
    ```
    查看 `webpack.config.js` 中的 `output.path` 为 `dist/lib` 。所以解决方法为：
    ```diff
    // package.json
    {
      "name": "cui-demo",
    - "main": "index.js",
    + "main": "dist/lib/index.js",
    + "types": "dist/lib/index.d.ts",
      // ...
    }
    ```
