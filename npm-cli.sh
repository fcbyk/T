echo "该脚本仅用于笔记，非执行脚本，请使用cat查看本脚本"
exit 1

# npm（Node Package Manager）命令是 随 Node.js 一起安装的，并且在安装 Node.js 后，npm 会自动安装和配置
# https://nodejs.org/zh-cn

npm install                             #安装所有依赖（根据 package.json）
npm install <package-name>              #安装本地依赖包
npm install --save <package-name>       #安装并保存为生产环境依赖（dependencies）
npm install --save-dev <package-name>   #安装并保存为开发环境依赖（devDependencies）
npm install -g <package-name>           #全局安装包
npm install <package-name>@<version>    #安装特定版本的包
npm install --no-package-lock           #安装并忽略 package-lock.json 文件
# npm i 是 npm install 的简写，适用于大部分安装命令
# npm i -D 可以代替 npm install --save-dev
# 自 npm v5 起，--save 已经成为默认行为，因此可以直接使用。不需要显式添加 --save，因为它是默认的。

# 使用 npm config 命令可以设置或修改 npm 的仓库地址。
npm config set registry <registry-url>
npm config set registry https://registry.npmmirror.com                  #设置为国内的 淘宝镜像
npm config --global set registry https://registry.npmmirror.com         #使用 --global 参数来明确设置为全局配置
npm config get registry                                                 #验证是否更改成功
npm install <package-name> --registry=https://registry.npmmirror.com    #一次性命令中使用指定的仓库地址

# npx 是 npm 包管理工具的一部分，用于执行 npm 包 中的可执行文件，而无需全局安装这些包。
# npx 是从 npm v5.2 开始引入的，目的是简化命令行工具的执行，尤其是在不希望全局安装包时。
npx eslint .  # 使用本地安装的 eslint 来检查代码
npx create-react-app my-app  # 使用 create-react-app 来创建 React 应用
npx create-react-app@4.0.0 my-app  # 使用指定版本的 create-react-app 创建项目