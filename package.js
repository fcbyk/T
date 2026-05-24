// https://docs.npmjs.com/cli/v9/configuring-npm/package-json

let package = {

    // 发布包必须要设置的字段
    name: "名称", 
    version: "版本号", // 必须是 semver 格式，表示包的版本，例如： "1.0.0"
  
    // 可选的基本信息
    description: "包的简短描述", // 包的简短描述，帮助别人理解这个包的功能
    keywords: [
      "一个字符串数组，用于描述包的关键词，便于搜索"
    ], // 用于搜索的关键字数组，有助于包在 npm 上的查找
  
    homepage: "项目主页的 URL", // 包的主页地址，通常是 GitHub 或类似的平台链接
    bugs: {
      url: "项目问题跟踪的 URL", // 项目的问题跟踪页面 URL
      email: "项目问题跟踪的电子邮件地址" // 可选的，问题反馈的电子邮件地址
    },
    license: "包的许可证，通常是开源协议的名称", // 项目的许可证名称，例如：MIT、Apache-2.0、GPL-3.0 等
  
    // 版本控制与维护者信息
    repository: {
      type: "git", // 包的版本控制系统类型，通常是 "git"
      url: "https://github.com/username/project-name.git" // 项目的 Git 仓库地址
    },
    author: "作者姓名 <email@domain.com>", // 项目的作者，可以包括姓名、电子邮件或其他联系方式
    contributors: [
      "贡献者姓名 <email@domain.com>"
    ], // 可选字段，其他贡献者的姓名和联系方式
  
    // 依赖管理
    dependencies: {
      "express": "^4.17.1", // 生产环境依赖，定义包依赖的其他包和它们的版本
    },
    devDependencies: {
      "mocha": "^8.2.1" // 开发环境依赖，通常用于测试、构建工具等
    },
    peerDependencies: {
      "react": "^16.8.0" // 外部插件依赖，指示你的包需要哪些外部库
    },
    optionalDependencies: {
      "fancy-package": "^1.0.0" // 可选的依赖，安装后包的功能可用，但不是必需的
    },
  
    // 脚本和构建
    scripts: {
      "start": "node app.js", // 启动应用的命令
      "test": "mocha", // 执行测试的命令
      "build": "webpack --config webpack.config.js" // 构建命令
    },
  
    // 引擎和环境要求
    engines: {
      "node": ">=12.0.0" // 规定包支持的 Node.js 版本范围
    },
    
    // 安全、发布等
    private: true, // 如果设置为 true，包将不能被发布到 npm
    main: "index.js", // 包的主要入口文件，通常是库的入口文件
    bin: {
      "my-cli-tool": "./bin/cli.js" // CLI 工具的可执行文件路径
    },
  
    // 其他选项
    files: [
      "dist/", // 发布时包括的文件或目录
      "README.md"
    ],
    dependenciesMeta: {
      "express": {
        "optional": true // 指定某个依赖是否是可选的
      }
    },
  
    // 包的 API 或导出
    exports: {
      ".": "./lib/index.js" // 控制包的哪些部分可以被外部引用，支持 ESM 模块
    },
  
    // 包的资产
    assets: [
      "assets/images/", // 打包时需要包括的资源文件
      "assets/styles/"
    ],
  
    // 浏览器兼容
    browserslist: [
      "last 2 versions", // 兼容的浏览器版本范围
      "not dead"
    ],
  
    // 配置
    config: {
      foo: "bar"
    },
  
    // 其他特定的自定义字段
    myCustomField: "value" // 你可以在 package.json 中添加任何自定义字段
};
  