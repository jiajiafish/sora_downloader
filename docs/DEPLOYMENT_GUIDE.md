# 🚀 完整部署指南 | Complete Deployment Guide

## 📋 部署概览

### 部署目标
1. **GitHub Pages** - 托管隐私政策页面
2. **Chrome Web Store** - 发布扩展到应用商店

---

## 🌐 第一步：GitHub Pages 部署

### 1.1 创建GitHub仓库

1. 访问 [github.com](https://github.com) 并登录
2. 点击右上角的 "+" → "New repository"
3. 仓库设置：
   - **Repository name**: `sora-downloader`
   - **Description**: `Sora Video Downloader Chrome Extension`
   - **Public** ✓ (必须公开才能免费托管)
   - **Initialize with README**: 取消勾选
   - **Add .gitignore**: 取消勾选
   - **Choose a license**: 取消勾选
4. 点击 "Create repository"

### 1.2 上传文件到仓库

#### 方法A：直接上传（推荐新手）
1. 在新创建的仓库页面，点击 "uploading an existing file"
2. 拖拽整个 `sora_downloader` 文件夹内容到上传区域
3. 确保包含以下文件和文件夹：
   ```
   manifest.json
   content.js
   styles.css
   README.md
   PRIVACY_POLICY.md
   icons/
   docs/
   ```
4. 写提交信息："Initial commit - Sora Video Downloader"
5. 点击 "Commit changes"

#### 方法B：使用Git命令（适合开发者）
```bash
cd e:\Project\sora_downloader
git init
git add .
git commit -m "Initial commit - Sora Video Downloader"
git remote add origin https://github.com/[your-username]/sora-downloader.git
git push -u origin main
```

### 1.3 启用GitHub Pages

1. 在仓库页面，点击 "Settings" 标签
2. 左侧菜单找到 "Pages"（页面）
3. 配置GitHub Pages：
   - **Source**: Deploy from a branch
   - **Branch**: main
   - **Folder**: /docs
   - 点击 "Save"
4. 等待1-2分钟，页面会显示：
   "Your site is ready to be published at https://[your-username].github.io/sora-downloader/"

### 1.4 验证隐私政策页面

打开浏览器访问：
```
https://[your-username].github.io/sora-downloader/privacy.html
```

✅ 应该能看到美观的隐私政策页面

---

## 🎯 第二步：更新项目中的URL

### 2.1 更新配置文件

1. 打开 `docs/_config.yml`
2. 替换 `[your-github-username]` 为你的实际GitHub用户名

### 2.2 更新隐私政策文件

1. 打开 `PRIVACY_POLICY.md`
2. 替换URL中的占位符

### 2.3 更新README文件

1. 打开 `README.md`
2. 替换隐私政策URL中的占位符

### 2.4 提交更新

```bash
git add .
git commit -m "Update GitHub Pages URLs"
git push
```

---

## 🛍️ 第三步：Chrome Web Store 发布

### 3.1 准备打包文件

#### 创建扩展包
1. 确保 `manifest.json` 中的版本号正确
2. 删除不需要的文件：
   - `sora_downloader.zip`（如果存在）
   - `.git` 文件夹（如果有）
3. 创建新的ZIP文件：
   - 选择所有文件（不包括文件夹本身）
   - 右键 → "发送到" → "压缩文件夹"
   - 命名为 `sora-downloader-v1.1.0.zip`

#### 验证扩展包
1. 打开Chrome浏览器
2. 访问 `chrome://extensions/`
3. 开启"开发者模式"
4. 点击"加载已解压的扩展程序"
5. 选择你的项目文件夹
6. 访问 `sora.chatgpt.com` 测试功能

### 3.2 创建开发者账户

1. 访问 [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
2. 点击 "Register now"
3. 支付一次性注册费（$5 USD）
4. 填写开发者信息
5. 验证邮箱

### 3.3 上传扩展到商店

1. 登录 [Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
2. 点击 "New Item"
3. 上传你的ZIP文件：`sora-downloader-v1.1.0.zip`
4. 填写扩展信息：

#### 基本信息
- **Extension name**: Sora Video Downloader
- **Summary**: 🎬 Download videos from sora.chatgpt.com with elegant hover interaction
- **Description**: 
  ```
  🎬 Sora Video Downloader - Smart video downloader for sora.chatgpt.com
  
  Features:
  • Hover to reveal elegant download button
  • One-click direct download without new tabs
  • Modern transparent design with smooth animations
  • Dark theme support and responsive layout
  • Zero data collection - privacy focused
  
  How to use:
  1. Visit sora.chatgpt.com
  2. Hover over any video
  3. Click the download button
  4. Video downloads directly to your device
  
  Privacy-focused: No data collection, all operations performed locally in your browser.
  ```

#### 类别和标签
- **Primary category**: Productivity
- **Tags**: video, downloader, sora, chatgpt, productivity

#### 隐私政策
- **Privacy practices**: ✅ "This item does not handle user data"
- **Privacy policy URL**: `https://[your-username].github.io/sora-downloader/privacy.html`

#### 截图和宣传图
准备以下图片：
1. **Extension icon**: 128x128 PNG（从你的icons文件夹）
2. **Screenshots**: 
   - 1280x800 或 640x400
   - 显示扩展在sora.chatgpt.com上的使用效果
   - 展示hover交互和下载按钮

#### 其他信息
- **Website**: 可选，可以留空或填GitHub仓库
- **Support**: 可选，可以填GitHub issues页面
- **Developer email**: 你的邮箱地址

### 3.4 提交审核

1. 检查所有信息填写完整
2. 点击 "Submit for review"
3. 通常审核时间：1-3个工作日
4. 审核通过后，扩展将在Chrome Web Store上线

---

## 📊 部署检查清单

### GitHub Pages ✅
- [ ] GitHub仓库创建完成
- [ ] 所有文件已上传
- [ ] GitHub Pages已启用
- [ ] 隐私政策页面可正常访问
- [ ] URL已更新为实际用户名

### Chrome Web Store ✅
- [ ] 扩展包已创建并测试
- [ ] 开发者账户已注册
- [ ] 扩展信息填写完整
- [ ] 隐私政策URL已添加
- [ ] 截图和宣传图已准备
- [ ] 扩展已提交审核

---

## 🚨 常见问题解决

### GitHub Pages 问题
**页面404错误**
- 检查仓库是否为公开
- 确认文件在docs文件夹
- 等待几分钟让GitHub构建

**样式不加载**
- 检查HTML文件中的CSS路径
- 确认_config.yml配置正确

### Chrome Web Store 问题
**扩展被拒绝**
- 检查是否违反政策（仔细阅读拒绝原因）
- 确保权限使用合理
- 完善隐私政策内容

**审核时间过长**
- 正常为1-3个工作日
- 节假日可能延长
- 可以联系支持但要有耐心

---

## 🎉 部署完成！

完成以上步骤后：
1. ✅ GitHub Pages隐私政策页面上线
2. ✅ Chrome扩展提交审核
3. ✅ 用户可以通过应用商店安装扩展

**下一步**: 等待审核通过后，推广你的扩展！