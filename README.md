# Hongcheng Li · Academic Homepage

这是李洪成的个人学术主页静态文件，可直接部署到 GitHub Pages。

## 发布到 GitHub Pages

你的 `Li-Hongcheng/Li-Hongcheng.github.io` 仓库已经存在，并且当前默认分支为 `master`。先备份仓库中的旧页面，然后将此目录下的全部文件放到仓库根目录并提交：

```bash
git clone https://github.com/Li-Hongcheng/Li-Hongcheng.github.io.git
cd Li-Hongcheng.github.io
# 将本目录的 index.html、styles.css、script.js、avatar.jpg、og.jpg 和 .nojekyll 复制到这里
git add .
git commit -m "Redesign academic homepage"
git push origin master
```

通常等待一两分钟后即可通过 <https://Li-Hongcheng.github.io> 访问。

## 后续建议补充

- 常用邮箱
- Google Scholar、DBLP、ORCID 链接
- 正式个人照片（目前使用 GitHub 头像）
- 可下载的中英文简历 PDF
- 各奖项年份

页面为纯静态实现，不依赖构建工具；支持响应式布局、深色模式和社交分享封面。
