# hexo-tag-tiy

npm: [hexo-tag-tiy](https://www.npmjs.com/package/hexo-tag-tiy)

> TIY 是 Try It Yourself 的缩写，此处特指 [Xecades](https://github.com/Xecades/) 开发的版本。

Hexo 博客内嵌 [TIY HTML 调试器](https://tiy.xecades.xyz/)，可用作在线 HTML 代码运行和调试.

![PC 端插件截图](/image/pic1.png)

![移动端插件截图](/image/pic2.png)

---

## 安装

直接使用 npm 开发

```bash
npm install hexo-tag-tiy --save
```

---

## 使用方法

```html
{% tiy %}
// Your code goes here.
{% endtiy %}
```

例如：

```html
{% tiy %}
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Hello</title>
</head>

<body>
    <p>Hi, TIY!</p>
    <script>
        console.log("Greetings from Xecades!");
    </script>
</body>

</html>
{% endtiy %}
```

![渲染样式](/image/pic3.png)

---

## 可选参数

请在博客根目录 `_config.yml` 文件中配置（以下填入的均为默认值）：

```yaml
# TIY
## Author: Xecades
## Repository: https://github.com/Xecades/hexo-tag-tiy
tiy:
    enable: true                         # 是否启用插件
    base_url: "https://tiy.xecades.xyz/" # 基础 URL
    height_pc: 500px                     # 电脑版高度
    height_mobile: 700px                 # 手机版高度
    width_pc: 100%                       # 电脑版宽度
    width_mobile: 100%                   # 手机版宽度
    margin: "1rem 0"                     # margin，遵循 CSS 格式
    border: "1px solid #eee"             # 边框样式，遵循 CSS 格式
```

---

## LICENSE

MIT