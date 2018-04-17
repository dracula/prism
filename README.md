# Dracula Theme for Prism.js

<p align="center">
<img alt="Vampiro Geek" src="images/vampiro-geek.svg" style="display: block; height: auto; margin: 0 auto; max-width: 100%; text-align: center;">
</p>

### Now it is oficial!

Bugs fixed!

### Preview

![Preview](images/previsao.png)

Is Dracula theme for Prism.js missed? Don't worry! The geek and nerdy king Dracula has just built the theme for Prism.js with his MacBook full of funny stickers!

This theme was built at Prism Theme builder, developed by Sandras Hklyaeva. 

This theme code or pre body is using a new font called PT Mono from Google Fonts, an elegant monoscaped serif font, which looks like Dracula's serif font – Abril Text. It also won a new scrollbar style and it is optimised for mobile and bigger monitors.

You can test the demo:
https://gusbemacbe.github.io/draucla-prism/ 

### Install

#### Make `cd` to your website project

```shell
cd 'path/to/your_project'
```

#### Download

```shell
git clone https://github.com/gusbemacbe/draucla-prism.git
```

#### Add two files and PT Mono of Google Webfonts link and do not forget of adding `.htaccess` for allowing the WOFF fonts

```html
<!-- Put this in the head -->
<link href="https://fonts.googleapis.com/css?family=PT+Mono&amp;subset=cyrillic,cyrillic-ext,latin-ext" rel="stylesheet"> 
<link rel="stylesheet" href="css/dracula-prism.css">

<!-- Put them in the end of the file -->
<script src="js/jquery.js"></script>
<script src="js/prism.js"></script>
<script type="text/javascript">
  Prism.plugins.NormalizeWhitespace.setDefaults(
    {
      'remove-trailing': true,
      'remove-indent': true,
      'left-trim': true,
      'right-trim': true,
      // 'break-lines': 10,
      // 'indent': 2,
      // 'remove-initial-line-feed': false,
      // 'tabs-to-spaces': 4,
      // 'spaces-to-tabs': 4
    });
</script>
```

### Add a code by, finishing with `language-xxx`. Check the [@LeaVerou](https://github.com/LeaVerou)'s site about of supported languages: http://prismjs.com/#languages-list.

```html
<pre>
  <code class="language-xxx line-numbers">
  your codes
  </code>
</pre>
