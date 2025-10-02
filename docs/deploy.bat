@echo off
echo 🚀 Sora Video Downloader 部署助手
echo =============================
echo.

:: 检查Git是否安装
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Git未安装，请先安装Git: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo ✅ Git已安装
echo.

:: 获取GitHub用户名
set /p github_username=请输入你的GitHub用户名: 
if "%github_username%"=="" (
    echo ❌ GitHub用户名不能为空
    pause
    exit /b 1
)

echo.
echo 📁 正在准备文件...

:: 创建临时部署文件夹
set deploy_folder=deploy_temp
if exist %deploy_folder% rmdir /s /q %deploy_folder%
mkdir %deploy_folder%

:: 复制必要文件到部署文件夹
echo 📋 复制项目文件...
copy manifest.json %deploy_folder%\
copy content.js %deploy_folder%\
copy styles.css %deploy_folder%\
copy README.md %deploy_folder%\
copy PRIVACY_POLICY.md %deploy_folder%\
xcopy /s /i icons %deploy_folder%\icons
xcopy /s /i docs %deploy_folder%\docs

:: 更新文件中的占位符
echo 🔧 更新配置文件...
powershell -Command "(Get-Content %deploy_folder%\docs\_config.yml) -replace '\[your-github-username\]', '%github_username%' | Set-Content %deploy_folder%\docs\_config.yml"
powershell -Command "(Get-Content %deploy_folder%\PRIVACY_POLICY.md) -replace '\[your-github-username\]', '%github_username%' | Set-Content %deploy_folder%\PRIVACY_POLICY.md"
powershell -Command "(Get-Content %deploy_folder%\README.md) -replace '\[your-github-username\]', '%github_username%' | Set-Content %deploy_folder%\README.md"

echo.
echo 📦 创建扩展包...
cd %deploy_folder%

:: 创建Chrome扩展包
powershell -Command "Compress-Archive -Path manifest.json, content.js, styles.css, icons, PRIVACY_POLICY.md -DestinationPath sora-downloader-v1.1.0.zip -Force"

echo.
echo ✅ 部署准备完成！
echo.
echo 📋 下一步操作：
echo 1. 访问 https://github.com/new 创建新仓库
echo 2. 仓库名: sora-downloader
echo 3. 上传 %deploy_folder% 文件夹中的所有文件
echo 4. 在仓库设置中启用 GitHub Pages (docs文件夹)
echo 5. 隐私政策URL: https://%github_username%.github.io/sora-downloader/privacy.html
echo.
echo 📁 扩展包已创建: %deploy_folder%\sora-downloader-v1.1.0.zip
echo 📁 部署文件位置: %deploy_folder%\
echo.
echo 🌐 GitHub Pages URL: https://%github_username%.github.io/sora-downloader/privacy.html
echo.
echo 按任意键打开部署文件夹...
pause >nul

:: 打开部署文件夹
explorer %deploy_folder%

echo.
echo 🎉 部署助手完成！请参考 DEPLOYMENT_GUIDE.md 获取详细说明。
echo.
pause