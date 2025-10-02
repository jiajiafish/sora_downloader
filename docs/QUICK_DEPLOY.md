# ⚡ 快速部署指南 | Quick Deploy Guide

## 🎯 一键部署

### Windows用户
双击运行 `deploy.bat` 脚本，按提示操作即可！

### 手动部署步骤

## 1️⃣ GitHub Pages 部署（5分钟）

### 创建仓库
```
仓库名: sora-downloader
类型: Public
```

### 上传文件
上传这些文件到仓库：
- ✅ `manifest.json`
- ✅ `content.js` 
- ✅ `styles.css`
- ✅ `icons/` 文件夹
- ✅ `docs/` 文件夹

### 启用Pages
```
Settings → Pages → Source: Deploy from branch
Branch: main → Folder: /docs → Save
```

### 隐私政策URL
```
https://[你的用户名].github.io/sora-downloader/privacy.html
```

---

## 2️⃣ Chrome Web Store 发布

### 打包扩展
```
选择所有文件 → 右键 → 发送到 → 压缩文件夹
文件名: sora-downloader-v1.1.0.zip
```

### 提交审核
```
📍 访问: https://chrome.google.com/webstore/devconsole/
📤 上传: sora-downloader-v1.1.0.zip
📝 填写: 扩展信息
🔗 隐私政策: 你的GitHub Pages URL
✅ 提交: 等待审核（1-3天）
```

---

## 📋 关键信息

### 扩展信息模板
```
名称: Sora Video Downloader
简介: 🎬 Download videos from sora.chatgpt.com with elegant hover interaction
描述: 智能悬停显示下载按钮，一键直接下载。Smart video downloader with modern design.
类别: Productivity
```

### 隐私政策要点
```
✅ 不收集个人数据
✅ 本地处理所有操作
✅ 仅使用必要权限
✅ 限定特定网站
```

---

## 🚨 注意事项

### GitHub Pages
- 仓库必须是 **Public**
- 等待1-2分钟构建完成
- URL格式要正确

### Chrome Web Store
- 需要支付 $5 开发者注册费
- 审核通常需要1-3个工作日
- 确保扩展功能正常

---

## 🎉 完成！

1. ✅ GitHub Pages隐私政策上线
2. ✅ Chrome扩展提交审核
3. ✅ 等待审核通过

**下一步**: 审核通过后，你的扩展将在Chrome Web Store上线！🚀