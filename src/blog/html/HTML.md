# HTML
## 三步学习知识
### 是什么
	Hyper Text Markup Language 超文本标记语言 主要用途：网页表现数据
	由浏览器来解析，这一套 标记标签 (markup tag)
	HTML 不是一种编程语言，而是一种 标记语言，使用标记标签来描述web网页
	后缀 .htm .html

	XML   可扩展标记语言（eXtensible Markup Language）。主要用途：存储和传输数据
	XHTML 可扩展超文本标记语言,更严格更纯净

### 怎么做
	页面标签、使用规范、标签语法、标签属性

### 为什么
	基础必学

## 基本简介
### 编辑器 Vs Code
	新建，另存，扩展 "open in browser" 右击运行

### 页面结构标签
- `<!DOCTYPE html>` 声明为 HTML5 文档，没有结束标签，不区分大小写，告知 Web 浏览器页面使用了哪种 HTML 版本。
- `<html \>` 根元素，
- `<head \>` 头元素，
		区分于body标签当中的 `header` 标签用于定义文档的页眉
	1. 标题 title
			 `<title>xxx标题<title>` 文档的标题、收藏夹中的标题、搜索引擎结果页面的标题
	2. 基本链接 base
			`<base href="http://www.baidu.com/images/" target="_blank">` 文档中所有的链接标签的默认链接
	1. 脚本（scripts）
			script  JavaScript
	1. 样式文件（CSS） 
	    - link 
		    `<link rel="stylesheet" type="text/css" href="mystyle.css">` 文档与外部资源之间的关系，通常用于链接到样式表
	    - style
		    `<style type="text/css"> body {background-color:yellow} </style>` 直接添加样式来渲染文档
	5. 各种meta信息元（meta）数据
	    - 编码 charset="utf-8" 
		    - `<meta charset="utf-8">` 定义网页编码格式为 **utf-8**
	    - 关键词 keywords
		    - `<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">` 为搜索引擎定义关键词
	    - 描述 description
		    - `<meta name="description" content="免费 Web & 编程 教程">` 为网页定义描述内容
	    - 作者 author
		    - `<meta name="author" content="baidu">` 定义网页作者
	    - 刷新 http-equiv="refresh"
		    - `<meta http-equiv="refresh" content="30">` 每30秒钟刷新当前页面
    
- `<body\>` 体元素，页面内容浏览器中显示

### 标签元素
尖括号包围的 关键词 成对出现的 开始标签和结束标签（开放标签**opening tag**和闭合标签**closing tag**）
```
	<标签关键词>内容</标签关键词>
```
对大小写不敏感，但未来强制使用**小写**
大多数标签都可以**嵌套**使用
浏览器确实识别没有关闭标签，但一定要正确的**闭合标签**

### 标签属性
元素中添加**附加信息**，键值对  属性名=“属性值”
推荐双引号，但属性值含有双引号时，外套一层单引号也行
推荐小写的属性/属性值
- class 一个或**多个**类名（classname）
- id **唯一**id
- style 行内样式（inline style）
- title 额外信息 (作为工具条使用)

### 注释
	`<!-- 这是一个注释 -->`

### 浏览器及源代码
浏览器，以及查看网页源代码的方式，F12

## 排版标签
四个排版标签：标题、段落、水平线、折行

### 标题 h
 h1 主标题（最重要的） h2（次重要的 以此类推到h6
	`<h1>这是主标题h1</h1>` 见名知意 
	 `<font size="6"> 字体大小和h1一样大 </font>`可以达到 h1 的字体那么大但是不推荐，而且font也即将废弃
 浏览器会自动地在标题的前后添加空行

### 段落 p
浏览器会自动地在段落的前后添加空行
	`<p>一段文字ooxx</p>`

### 水平线 hr
	`<hr>`

### 折行 br
	`<br> <br/> <br /> 三种历史遗留问题，这仨一样`

## 格式化标签
如下三大类

### 文本格式化
```
<strong>	加重语气---粗体文本+强调重要
<b>			粗体文本 === CSS 的 "font-weight" 设置粗体文本
<em>		着重文字---斜体字+强调（只被强调不一定重要）
<i>			斜体字   === "font-style" italic斜体字，oblique倾斜的文字(没有斜体字的字体)
<sub>		下标字
<sup>		上标字
<u> 下划线插入
<ins>		插入字
<s> 删除
<del>		删除字
<small>		小号字--小型文本（和旁注）
```
<strong>粗体文本+强调重要 strong</strong><br>
<b>粗体文本 b</b><br>
<em>斜体字+强调 em</em><br>
<em>斜体字 i</em><br>
<sub>下标字 sub</sub><br>
<sup>上标字 sup</sup><br>
<ins>插入字 ins</ins><br>
<del>删除字 del</del><br>
<small>小号字 small</small><br>
### 计算机输出
```
<code>		计算机代码
<kbd>		键盘码
<samp>		计算机代码样本
<var>		变量
<pre>		预格式文本---文本通常会保留空格和换行符，呈现为等宽字体。常见用来表示计算机的源代码

```

### 引文, 引用, 及标签
```
<abbr>		缩写
<address>	地址
<bdo>		文字方向
<blockquote>长的引用
<q>			短的引用语
<cite>		引用、引证
<dfn>		一个定义项目
```

<dfn>定义项目 dfn</dfn><br>
<code>一段电脑代码 code</code><br>
<samp>计算机样本 samp</samp><br>
<kbd>键盘输入 kbd</kbd><br>
<var>变量var</var>

## 超链接a
不只是文本可以超链接，图片或其他元素也可以超链接，
`<a href="url/" target=""=>可文本或图片甚至其他元素</a>`
### href 属性
#### 锚点值
* href="#id" 还可以超链接到当前文档某个位置锚点
#### 邮件值
* href="mailto:someone@example.com?cc=someoneelse@example.com&bcc=andsomeoneelse@example.com&subject=Summer%20Party&body=You%20are%20invited%20to%20a%20big%20summer%20party!" 还可以发邮件
#### URL值
* url结尾/是到达子目录下防止服务器自己添加而产生两次http请求
##### 路径
* 绝对路径
* 相对路径 
* 外网路径
* 内网路径
* 本地路径 
	* 当前目录
	* 上级目录
	* 下级目录

### target属性 
*_blank 新窗口打开 
*_top 跳出框架
*_parent 
*_self 此窗口不是新标签


## 媒体图像 img、map、area
```
<img src="_url_" alt="_some_text_">
或者
<img src="xxx.jpg" alt="这是一张xxx图" width="111" height="111" usemap="#mapidxx" loading="lazy">
<map name="mapidxx">  
  <area shape="rect" coords="0,0,111,222" href="part1.htm" alt="刚点击矩形区域内了">  
  <area shape="circle" coords="333,444,3" href="part2.htm" alt="刚点击圆形区域内了">  
  <area shape="poly" coords="x1,y1,x2,y2......" href="p3.htm" alt="多边形区域内了">  
</map>
```
### img
* src  指 "source"源

#### 路径
外部路径 & 内部路径
绝对路径、相对路径、上级路径、同级路径下


* alt  指 替代文本，万一无法加载图片的时候有意义
* width  宽
* height  高
* loading   ="eager|lazy" 加载方式=默认立即加载|延迟加载当鼠标滚动到该图片所在位置才会显示
* usemap  将图像定义为客户端图像映射（图像映射指的是带有可点击区域的图像）
**注意**: 只有当 img 元素不属于 a 或 button 元素的后代时，才允许使用 usemap 属性
### map
* name   对应 img 的 usermap 属性的值
### area
* shape     区域的形状 default默认   rect矩形   circle圆形   poly多边形
* coords   区域的坐标
* href   对应 a 的 href 属性的值 不能是锚点值和邮件值应该是只能url值吧 
* alt   同 img 标签的 alt 属性，如果有area.href就必须有area.alt
* target   同 a 标签的 target 属性 _blank  _parent  _self  _top  _framename_

## 媒体音视频 audio、video
src="音视频地址";  
controls 显示播放控件;  
autoplay 自动播放（部分浏览器不支持音频自动播放）; 
autoplay 自动播放（谷歌浏览器需要配合 muted 静音 播放视频自动播放）
loop 循环播放
支持三种音频格式文件: MP3, Wav, 和 Ogg:
支持三种视频格式： MP4, WebM, 和 Ogg:

## 表格 table
在 HTML5 中，边框 "border" 、对齐“align”等等属性均弃用了

### 标题 caption
直接放置到 `<table>` 标签之后，每个表格只能定义一个标题但浏览器能显示多个
**提示** ：通常这个标题会被**居中**于表格之**上**。然而，CSS 属性 "text-align" 和 "caption-side" 能用来设置标题的对齐方式**左右居中**和显示位置**上下**。

### 列组合 colgroup
在 `<table>` 内，在 `<caption>` 后，在 `<thead>`、`<tbody>`、`<tfoot>`、`<tr>` 前
对列进行组合，方便对列来设置样式

#### col 组合列的属性
`<col span="123" style="background-color: red">`

### 页眉 thead
方便了主体tbody滚动

### 主体 tbody
页眉 thead、主体 tbody、页脚 tfoot  默认不会影响表格的布局

### 页脚 tfoot

### 表格行 tr
不再支持 HTML 4.01 中的任何属性

### 表头单元格 th
通常文本呈现为粗体并且居中

#### headers、scope
这俩属性对于web浏览器没意义，是阅读浏览器用的属性
一级表头，二级表头也可以用 headers 关联一级表头，表头之间的相互关联
是否是列、行、列组或行组的表头`<th scope="col|row|colgroup|rowgroup">`

#### rowspan、colspan
这俩属性同下td 
**合并原则：左上原则**

### 标准单元格 td
不一定是文本
文本通常是普通的左对齐文本

	headers 关联表头。 阅读浏览器用的属性同scope一样对于web浏览器无意义
	与表格单元格相关联的一个或多个表头单元格(多个表头就空格间隔)
	`<td headers="_header_id_">` 

#### rowspan 横跨行数
单元格应该横跨的行数
`<td rowspan="n">`

#### colspan 横跨列数
单元格应该横跨的列数
`<td colspan="n">`

## 列表

### 有序列表 ol li

#### ol

##### type 标记类型
`<ol type="1|a|A|i|I">` 十进制数字\小写字母\大写字母\小写罗马数字\大写罗马数字

##### reversed 倒叙

### 无序列表 ul li

#### ul
type属性主键弃用，改用css样式吧 
	
	disc    默认值。实心圆。
	circle  空心圆。
	square  实心方块。
	none    无标记。
	decimal标记是数字。
	。。。。。。

### 自定义列表 dl 

#### 项目和描述 dt dd

## 区块布局框架
这俩标签都没啥具体含义，就是布局用的

### 块级 div
	block-level

### 内联 span
	inline
	
### 布局
		不建议使用 table 来布局，因为 table 是用来显示数据的
		建议使用 div 来布局

### 内联框架 iframe
`<iframe src="URL" loading="eager|lazy" width="250" height="250"></iframe>`

## 表单
重要的交互，收集输入

### form
action=url

#### enctype
表单数据发送到服务器之前如何对其进行编码 
application/x-www-form-urlencoded
multipart/form-data

### input 控件
常用控件

#### type 属性

##### text 文本框
`<input type="text">` 多数浏览器默认20字符宽

##### password 密码框
`<input type="password">` 不明文而是*替代

##### radio 单选按钮
`<input type="radio" checked="checked">`

##### checkbox 复选按钮
`<input type="checkbox" checked="checked">`

##### button 可点按钮
`<input type="button">`

##### submit 提交按钮
`<input type="submit" formaction="URL" formenctype="multipart/form-data" >` 
	
	formaction   提交时处理输入控件的文件的 URL
	formenctype  提交到服务器时如何编码, 仅适用于 method="post" 的 form 表单并覆盖 form 的enctype 属性
	formmethod   发送的 HTTP 方法get|post，覆盖 form method 属性

##### reset 重置按钮
`<input type="reset">`

##### file 文件按钮
`<input type="file" accept="image|audio|video|_MIME_type_/*" >`

##### hidden 隐藏控件
`<input type="hidden">`

##### 其他
`<input type="email">` 邮件地址
`<input type="tel">` 电话号码
`<input type="url">` URL 
`<input type="search">` 搜索字符串 
`<input type="color">` 拾色器
`<input type="image" src="x" width="x" height="x" alt="x" >` 图片按钮提交
`<input type="number">` 数字
`<input type="date">` 日期
`<input type="date....">` 其他日期
`<input type="time">` 时间
`<input type="time....">` 其他时间

#### value 
`<input value="xxx">`

#### name 
`<input name="yyy">`

#### autocomplete on/off 自动完成
`<input autocomplete="on|off">` 是否 启用 自动完成

#### autofocus autofocus 焦点
`<input autofocus="autofocus">` 是否 自动获得焦点

#### checked checked 选定
`<input checked="checked">` 是否选定 checkbox、radio

#### disabled disabled 禁用
`<input disabled="disabled">` 是否 禁用

#### readonly readonly 只读
`<input readonly="readonly">` 是否 只读

#### pattern regexp 正则
`<input pattern="[5*?]">` 验证元素的值的正则表达式

#### placeholder 提示
`<input placeholder="请输入喜欢的泥是谁">`

#### 其他 

##### form form_id 
`<input form="fx fy">` 归属一个或者多个form的id属性，空格分隔

##### required required 
`<input required="required">` 提交前填写

##### size n 
`<input size="n">`  以n个字符数计的可见宽度
适用于：text、search、tel、url、email 和 password 等 input 类型

##### maxlength n
`<input maxlength="n">` 允许的最大字符数

##### max n
`<input max="n">`
最大值，包含此值，数字框的时候，提交才提示。日期框是默认再大的值不让选

##### min n 
`<input min="n">`
最小值，包含此值，

##### multiple multiple
多个值，比如选择多个文件 

### textarea 控件
可用 cols 和 rows 属性来规定 textarea 的尺寸大小，更推荐用 CSS 的 height 和 width 属性

#### 多行文本输入

	form			form_id		所属的一个或多个表单
	maxlength		number		允许的最大字符数
	autofocus		autofocus	自动获得焦点
	placeholder     text		提示描述
	readonly		readonly	只读
	disabled		disabled	禁用
	required		required	必需的/必填的
	cols			number		可见的宽度
	rows			number		可见的行数
	wrap			hard|soft	提交表单时文本怎样换行

### select 下拉选择
#### optgroup 选项组

#### option 选项
```
<select>
	<optgroup label="one">
		<option value="foo">foo</option>
		<option value="bar">bar</option>
	</optgroup>
	<optgroup label="two">
		<option value="foo2">foo</option>
		<option value="bar2">bar</option>
	</optgroup>
	
</select>
```
multiple	multiple    选择多个选项

### label
`<label for="xxxid">` 联代聚焦

### fieldset
#### legend
```
<fieldset>
	<legend>Personalia:</legend>
	 Name: <input type="text" />
	 Age: <input type="text" />
</fieldset>
```

### button
```
<button type="button">点我!</button>
<button type="submit">提交</button>
<button type="reset">重置</button>
```

## 语义化标签
-   header 网页头部
-   nav 网页导航
-   footer 网页底部
-   aside 网页侧边栏
-   section 网页区块
-   article 网页文章

## 颜色URL字符实体

### 颜色
* RGB
		红色、绿色、蓝色 三种光色混合；**十进制0-255；十六进制00-FF；** 
		数值越大越费电越亮 
* RGBA 
		 阿尔法通道 Red-Green-Blue-Alpha; **透明度0-1;**  0是全透明;
* 颜色名
		曾经 216 种 Web 安全色
		颜色名称 141 个是在 HTML 和 CSS 颜色规范定义的（17标准颜色，再加124）

### URL 
统一资源定位器(Uniform Resource Locators)
URL格式： 协议名 :// 域主机名. 域名 :端口号 /路径名 /路径下的资源名
URL 只能使用 ASCII 字符集来通过因特网进行发送
字符格式："%"跟2位十六进制数 来替换转化成非 ASCII 字符
| ASCII 字符 | URL-编码 |
| --------- | -------- |
| space	| %20 |
| \%  	| %25 |
| \/  	| %2F |
| \=  	| %3D |

### 字符实体 &名 &#数字
HTML预留字符不能被正常显示，只能替换成对应的字符实体才可以正常显示，比如大于号小于号这是标签用的符号是预留字符。 实体名称对大小写敏感！

	 	 空格	 &nbsp;	&#160;
	<	小于号	 &lt;	&#60;
	>   大于号	 &gt;	&#62;
	&	 和号  	 &amp;	&#38;

## 其他

### 常见浏览器及渲染引擎
|浏览器		 |内核		  |
|------------|------------|
|IE			 |Trident	  |
|FireFox	 |Gecko		  |
|Safari		 |Webkit	  |
|Chrome/Opera|Blink		  |

### html、css、js 三者
|html		|css		|js			|
|-----------|-----------|-----------|
|结构		|表现		|行为		|
|页面元素	|页面样式	|页面交互	|

### 标签的兼容实践
`<noscript>抱歉，你的浏览器不支持 JavaScript!</noscript>`
	
