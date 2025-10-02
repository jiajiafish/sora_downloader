# GitHub Pages Deployment Guide

This guide explains how to host your privacy policy on GitHub Pages for free.

## Setup Steps

### 1. Create GitHub Repository
1. Go to [github.com](https://github.com) and create a new repository
2. Name it `sora-downloader` (or your preferred name)
3. Make it public (required for free GitHub Pages hosting)
4. Don't initialize with README (you already have one)

### 2. Upload Your Files
1. Upload all files from your `sora_downloader` folder to the repository
2. Make sure the `docs/` folder is included with:
   - `privacy.html`
   - `_config.yml`

### 3. Configure GitHub Pages
1. Go to your repository Settings
2. Scroll down to "Pages" section
3. Source: Deploy from a branch
4. Branch: main
5. Folder: /docs
6. Click Save

### 4. Update URLs
Replace `[your-github-username]` in these files:
- `docs/_config.yml`
- `PRIVACY_POLICY.md`
- `README.md`

### 5. Wait for Deployment
- GitHub Pages will build your site (takes 1-2 minutes)
- Your privacy policy will be available at:
  `https://[your-github-username].github.io/sora-downloader/privacy.html`

## Verification

After deployment, verify:
1. Privacy policy page loads correctly
2. All links work
3. Page styling looks good
4. Mobile responsiveness works

## Chrome Web Store Submission

Use this URL in your Chrome Web Store listing:
```
https://[your-github-username].github.io/sora-downloader/privacy.html
```

## Custom Domain (Optional)

If you want a custom domain:
1. Buy a domain from any registrar
2. Add CNAME file to docs folder
3. Configure DNS settings
4. Enable HTTPS in GitHub Pages settings

## Troubleshooting

### Page not loading?
- Check if repository is public
- Verify GitHub Pages is enabled
- Ensure docs folder exists
- Check for build errors in repository settings

### Styling issues?
- Clear browser cache
- Check browser console for errors
- Verify CSS file paths
- Test in different browsers

## 中文部署说明

### 1. 创建GitHub仓库
1. 访问 [github.com](https://github.com) 创建新仓库
2. 命名为 `sora-downloader`
3. 设置为公开仓库（免费托管需要）
4. 不要初始化README

### 2. 上传文件
上传`sora_downloader`文件夹所有内容，确保包含`docs/`文件夹

### 3. 配置GitHub Pages
1. 进入仓库设置
2. 找到"Pages"部分
3. 源：从分支部署
4. 分支：main
5. 文件夹：/docs
6. 保存

### 4. 更新URL
替换文件中的`[your-github-username]`为你的GitHub用户名

### 5. 完成部署
- 等待1-2分钟构建完成
- 隐私政策地址：`https://[你的用户名].github.io/sora-downloader/privacy.html`

使用这个地址在Chrome应用商店提交扩展即可！