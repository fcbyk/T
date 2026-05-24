# demo88

## 配置说明 (nuxt.config.ts)

- `ssr: false` - 客户端渲染（CSR）模式
- `devtools: { enabled: false }` - 禁用开发工具
- `compatibilityDate` - 兼容性日期，锁定 Nuxt 行为，确保升级时的稳定性

## 项目脚本

| 命令 | 说明 | 产物 |
|------|------|------|
| `pnpm dev` | 启动开发服务器 | - |
| `pnpm build` | 生产构建（SSR/CSR） | `.output/`，需要 Node.js 服务器 |
| `pnpm generate` | 静态站点生成（SSG） | `dist/`，纯静态 HTML 文件 |
| `pnpm preview` | 预览生产构建 | - |

## 快速开始

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 生产构建
pnpm build
pnpm preview

# 静态生成
pnpm generate
```
