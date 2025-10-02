# 🎬 Sora Video Downloader - Chrome扩展

一个智能的Chrome浏览器扩展，专为 `https://sora.chatgpt.com/` 网站设计。采用悬停交互方式，在鼠标移到视频上时优雅地显示下载按钮，支持一键直接下载，不会打开新网页。

An intelligent Chrome extension designed for `https://sora.chatgpt.com/`. Features hover interaction - elegantly reveals download button when mouse hovers over videos, supports one-click direct download without opening new tabs.

> 📋 **Chrome Web Store描述 | Store Description**: `🎬 Sora视频下载器 | Hover显示下载按钮，一键直接下载。Smart video downloader for sora.chatgpt.com with elegant hover interaction.` (107字符 | chars)

## 🌟 功能特点 | Features

### 🎯 智能交互 | Smart Interaction
- 🔍 自动检测sora.chatgpt.com网页上的所有视频元素
- ⬇️ **智能显示**：鼠标悬停时显示下载按钮，平时隐藏
- 🎬 **优雅体验**：无干扰的观看体验，需要时才出现

### 🎨 精美设计 | Beautiful Design
- 🎨 **全新设计**：现代透明风格SVG图标，支持暗色主题
- ✨ **动画效果**：微妙的脉冲动画，悬停和点击反馈
- 🌙 **暗色适配**：自动适配浏览器暗色主题

### ⚡ 强大功能 | Powerful Functions
- 📱 响应式设计，适配不同屏幕尺寸
- 🔄 动态监听新添加的视频元素
- 💾 **直接下载**：点击按钮直接下载，不会打开新网页
- 🛡️ **安全可靠**：本地处理，保护隐私

## 安装步骤

### 方法1：开发者模式安装（推荐）

1. 打开Chrome浏览器，输入 `chrome://extensions/` 进入扩展程序页面
2. 开启右上角的"开发者模式"开关
3. 点击"加载已解压的扩展程序"按钮
4. 选择本项目的文件夹 `e:\Project\sora_downloader`
5. 扩展安装完成，会自动在sora.chatgpt.com网页上生效

### 方法2：打包安装

1. 在扩展程序页面点击"打包扩展程序"
2. 选择扩展根目录 `e:\Project\sora_downloader`
3. 点击"打包扩展程序"生成 `.crx` 文件
4. 拖拽生成的 `.crx` 文件到扩展程序页面进行安装

## 🚀 使用方法 | How to Use

### 中文说明
1. 访问 `https://sora.chatgpt.com/` 网站
2. 将鼠标悬停在视频上，左上角会显示下载按钮（⬇️）
3. 点击下载按钮即可**直接下载**对应的视频文件
4. 下载的视频将保存到你的默认下载文件夹中

### English Instructions
1. Visit `https://sora.chatgpt.com/` website
2. Hover your mouse over any video, download button will appear in top-left corner (⬇️)
3. Click the download button to **directly download** the video file
4. Downloaded videos will be saved to your default download folder

## 文件结构

```
sora_downloader/
├── manifest.json      # 扩展配置文件
├── content.js         # 内容脚本，处理视频下载逻辑
├── styles.css         # 按钮样式文件
├── icons/             # 扩展图标文件夹
│   ├── icon16.svg     # 16x16图标
│   ├── icon48.svg     # 48x48图标
│   └── icon128.svg    # 128x128图标
└── README.md          # 说明文档
```

## 技术说明

- 使用Manifest V3规范开发
- 内容脚本在页面加载完成后注入
- 使用MutationObserver监听DOM变化
- 支持动态加载的视频元素
- 按钮样式使用CSS3实现现代化效果

## 注意事项

- 本扩展仅在 `https://sora.chatgpt.com/` 域名下生效
- 下载功能依赖于视频的实际URL可访问性
- 请遵守相关网站的使用条款和版权规定

## 🔒 隐私政策 | Privacy Policy

本扩展**不收集任何个人数据**，所有操作都在您的浏览器本地进行。详细信息请查看 [PRIVACY_POLICY.md](PRIVACY_POLICY.md) 文件。

This extension **does not collect any personal data**. All operations are performed locally in your browser. For details, please see [PRIVACY_POLICY.md](PRIVACY_POLICY.md) file.

**在线隐私政策 | Online Privacy Policy:** [https://[your-github-username].github.io/sora-downloader/privacy.html](https://[your-github-username].github.io/sora-downloader/privacy.html)

## 更新日志

### v1.1.0 (2025-01-10)
- 🌐 **双语支持**：扩展描述支持中英双语，国际化体验
- 📝 **详细文档**：README全面双语化，更好的用户指导
- 🎯 **智能交互**：鼠标悬停时显示下载按钮，平时隐藏
- 🎨 **专业图标**：使用高质量SVG下载图标，支持响应式颜色
- ✨ **流畅动画**：优化的显示/隐藏过渡效果
- 🔧 **交互增强**：改进的hover检测和按钮显示逻辑

### v1.0.2 (2025-01-10)
- 🎨 **全新图标设计**：透明背景的现代化下载图标
- ✨ **按钮美化**：添加脉冲动画、悬停效果和暗色主题适配
- 🌙 **暗色模式**：自动适配浏览器暗色主题
- 📐 **响应式优化**：改进移动端显示效果

### v1.0.1 (2025-01-10)
- 🚀 **直接下载**：优化下载逻辑，点击按钮直接下载，不再打开新网页
- 💾 支持Chrome下载API和降级方案
- 🛡️ 更好的错误处理机制

### v1.0.0 (2025-01-10)
- ✨ 初始版本发布
- 🎯 支持sora.chatgpt.com网站视频下载
- 🎨 现代化UI设计
- 📱 响应式布局支持