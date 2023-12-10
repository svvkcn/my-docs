# CSS
## 三步学习知识
### 是什么
	Cascading Style Sheets 层叠样式表；
	为结构化文档添加样式，后缀 .css

官网**MDN**

### 怎么做
		语法、规则
		选择器：属性：属性值

### 为什么
		基础必学

## 语法
	内联都已经直接写标签属性里头了，不是选择器，比选择器厉害
	选择器 { 声明1；声明2；... }

### 基本语法

#### 选择器 Selector
	通用*、元素、类、属性、伪类、ID、等等

#### 声明 Declaration
	属性名：属性值
Properties: Property value

##### 声明块
	多个声明

#### 默认 initial
	initial

#### 注释
	`/*这是个注释*/`

#### @规则
##### @charset
 定义样式表使用的字符集
##### @import
告诉 CSS 引擎引入一个外部样式表
##### @namespace
告诉 CSS 引擎必须考虑 XML 命名空间
##### 嵌套 @规则
###### @media
如果满足媒介查询的条件则条件规则组里的规则生效
###### @page
描述打印文档时布局的变化。
###### @font-face
描述将下载的外部的字体

### 引入

#### 1.内联、行内
	`<p style="color:pink">这是一个段落</p>`

#### 2.内部、内嵌
	`<head> <style> p {color: pink;} </style> </head>`

#### 3.外部、外链
	便于维护

#####  链接 link 推荐
	使用 HTML 规则 link 标签 引入外部 CSS 文件；
	HTML文件加载的同时 CSS文件也被加载
	`<head> <link rel="stylesheet" type="text/css" href="style.css"> </head>`

##### 导入 @import 不推荐
	使用 CSS 规则 import 引入外部 CSS 文件；
	HTML页面全部下载完毕后，CSS再被加载。因为后加载，所以导入语句必须写在样式表的开头
	`<style> @import url(style.css); </style>`

### 一、层叠
	首先层叠，
	叠加 || 覆盖

#### all
将除了 unicode-bidi 与 direction 之外的所有属性重设至其初始值，或继承值

### 二、继承 inherit
	其次层叠必然出现继承，
1. 子元素有默认继承父元素样式的特点
```
color 
font-style font-weight font-size font-family 
text-align text-indent
line-height
```
	可继承的常见属性（文字属性都可以继承）
	通过调试工具判断样式是否可继承

2. 继承失效的特殊情况

		如果元素有浏览器默认样式，就不继承父元素属性
		a 标签的 color 会继承失效
		h 标签的 font-size 会继承失效

### 三、优先级
	最后哪怕继承也会有优先级；
	优先级是浏览器判断

**重要程度**  > **优先级** > **资源顺序** 
	同优先级的情况下，才会看资源顺序，后面的覆盖前面的

#### !important
	与优先级无关，能不用尽量**别用**

#### 继承性优先级
	自己本身 > 爸 > 爷
哪怕是自己的 通配符*选择器  都要比  继承而来的 优先级更高 

#### 引入的优先级
	内联 > 内部 > 外部 > 浏览器默认样式

#### 选择器优先级
总结：选择范围越小，优先级越高
**内联样式 > id 选择器 > 类=伪类=属性 > 标签=伪元素 > 通用**

	内联         1000 因为重要程度
	ID选择器     100
	伪类         10
	属性选择器    10
	类选择器      10
	元素标签选择器 1
	通用选择器*   1

## 选择器

### 通配符选择器 *
	*
性能最差的选择器
#### 命名空间
	ns|* - 会匹配`ns`命名空间下的所有元素
	*|*  - 会匹配所有命名空间下的所有元素
	|*   - 会匹配所有没有命名空间的元素

### 类型、类、ID

#### 类型选择器 x
	也叫 元素选择器
	也叫 标签选择器

#### Class类选择器 .
	常用

#### Id选择器 #
	常用
	假如真的页面定义了多个id，浏览器也折扣性的来兼容，尽量避免这样

### 标签属性

#### 属性选择器 【】
	标签属性选择器

##### 交集选择器
	选择器1选择器2: { }
	标签和属性是紧挨着，算是交集选择器

### 伪类伪元素

#### 伪类选择器 ：
	p:first-child

##### 链接a: l v h a
	a:link		正常，未访问过的链接
	a:visited	已访问过的链接
	a:hover		鼠标放在链接上时
	a:active	链接被点击的那一刻
鼠标悬停状态---四个链接状态---hover 伪类选择器

##### 结构伪类选择器
-   作用：根据元素在 HTML 中的结构关系查找元素
-   优势：减少对 HTML 中类的依赖，有利于保持代码整洁
-   场景：常用于查找某父级选择器中的子元素

|选择器					|说明						|
|-						|-							|
|E:first-child			|父元素中的第一个子元素 E		|
|E:last-child			|父元素中的最后一个子元素 E		|
|E:nth-child(n)			|父元素中的第 n 个子元素 E		|
|E:nth-last-child(n)	|父元素中的倒数第 n 个子元素 E	|

n 可以写公式

n 可取值：0 1 2 3 4...

|功能				|公式			|
|-					|-				|
|偶数				|2n even		|
|奇数				|2n+1 2n-1 odd	|
|找到前 5 个			|-n+5			|
|找到从第 5 个往后	|n+5			|

##### 其他：

	:checked		选中了的
	:disabled		禁用了的
	:focus			具有焦点的
	:enabled		启用了的
	:out-of-range	指定范围以外值的
	:in-range		指定了范围内值的
	:valid			有效值的
	:optional		没有"required"了的
	:required		有"required"了的
	:invalid		无效了的
	:read-only		只读属性了的
	:read-write		没有只读属性的
	
	:root		文档的根元素
	
	:empty			没有子元素的
	
	:lang(xx)		元素的lang属性=xx的
	
	:not(selector) 	以外的
	
	:only-child			仅有一个子元素的
	:nth-child(n)		第n个子元素
	:first-child		第一个子元素
	:last-child			最后一个子元素
	:nth-last-child(n)	倒数第n个子元素
	
	:nth-of-type(n)		第n个子元素
	:first-of-type		是其父元素的第一个
	:last-of-type		是其母元素的最后一个
	:nth-last-of-type(n)倒数第n个子元素
	:only-of-type		仅有一个子元素的
	
	:first-letter	第一个字母
	:first-line		第一行
	
	:before		之前插入
	:after		之后插入
	
	:target			当前活动的锚
	:link			未访问的
	:visited		访问过的
	:active			正在活动鼠标点下未松开
	:hover			鼠标放上的状态

#### 伪元素选择器 ：：
	p::first-line
* 元素：HTML 标签
* 伪元素：CSS 模拟出标签效果，装饰性内容

|伪元素		|作用							|
|-			|-								|
|::before	|在父元素内容的最前添加一个伪元素	|
|::after	|在父元素内容的最后添加一个伪元素	|
注意点：
- 必须设置 content 属性才能生效
- 伪元素默认是行内元素

### 运算符（复合选择器）

#### 后代选择器 空格
	父选择器 后代选择器: { }

#### 子代选择器 > 
	父选择器 > 子代选择器: { }

#### 相邻兄弟选择器 + 
	h1 + p

#### 通用兄弟选择器 ~ 
	h1 ~ p

#### 并集分组选择器 ，逗号 空格
	选择器1, 选择器2: { }
> a, b  空格在后

> a ,b  空格在前

> a,
> b  另起一行

	如上三种效果一样，不论a或者b只要写错其一，整条规则失效



## 声明

### 背景 background
	非继承
`background: bg-color   bg-image   bg-position/bg-size   bg-repeat   bg-origin   bg-clip   bg-attachment   initial|inherit;`

#### 背景颜色 background-color
	包括填充和边界（但不包括边距）
	默认 transparent 透明

#### 背景图像 background-image
	`background-image:url('xxx.jpg');`
	可以多个图像
	如果图像不可用，可以显示 background-color ，所以推荐同时设置背景色托底,但浏览器遇到url给放一个空图片占位了

#### 背景图像位置 background-position
	background-position: 水平方向位置 垂直方向位置;

* 3x3=9种组合

		仅指定一个关键字，其他值默认"center"
		left 	top
		left 	center
		left 	bottom
		right 	top
		right 	center
		right 	bottom
		center 	top
		center 	center
		center 	bottom

* x% y%

		X水平Y垂直 默认值左上角0％0％

* x y

		X水平Y垂直 默认值左上角0 0

#### 背景图像重复 background-repeat
	repeat		默认重复
	repeat-x	只水平会重复
	repeat-y	只垂直会重复
	no-repeat	不会重复

#### 背景图像滚动 background-attachment
背景图像是否固定或者随着页面的其余部分滚动 

	scroll	默认,随页面的滚动而滚动
	fixed	不随着页面的滚动而滚动
	local	会随着元素内容的滚动而滚动

#### 背景图像裁剪 background-clip
	border-box 背景延伸至边框外沿
	padding-box 背景延伸至内边距外沿
	content-box 背景被裁剪至内容区外沿
	text 背景被裁剪成文字的前景色
背景图像向外裁剪的绘画区域
[background-clip - CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip)

#### 不常用
	background-size			背景图片的尺寸大小 
	background-origin		背景图像的定位区域，background-position时的参考原点
 

### 文本 text

#### color			        文本颜色
	合理的 背景颜色 才能和 文本颜色 搭配

##### HSL 色相-饱和度-明度
	_HSLA，色相-饱和度-明度-阿尔法（HSLa）_
	举例：hsla(240,100%, 50%,1)   /* 完全不透明 */

#### direction		    文本方向
	ltr			默认 从左到右
	rtl			从右到左

#### letter-spacing	字符间距
	length    固定-带单位
每个字母之间的间距，汉字是每个字

#### word-spacing	单词间距
	length    固定-带单位
每个单词之间的间距，汉字是每个字

#### line-height		行高
	number	  数字-当前的字体尺寸相乘
	length	  固定-带单位
	%		  百分比-当前字体 font-size 的尺寸倍数
> 文本高度 = -   上间距 + 文本高度 + 下间距

##### 单行文本垂直居中
	line-height=元素父元素高度

##### 取消上下间距
	line-height=1

#### white-space		空白的处理
空白 包括 **空格**、**TAB**、**回车**等

	normal		合并空格, 忽略换行, 不会横向滚动条, 默认 
	nowrap		合并空格, 忽略换行, 可以横向滚, 直到br
	pre-line	合并空格, 保留换行, 不会横向滚动条
	pre			保留空格, 保留换行, 可以横向滚, 类pre
	pre-wrap	保留空格, 保留换行，不会横向滚动条

#### text-align		    水平对齐
	left	左对齐，浏览器的默认值
	right	右对齐
	center	居中
	justify	两端对齐,不处理最后一行，所以可以用到伪元素::after

#### text-decoration	文本修饰
##### 线 text-decoration-line
	none			默认，甚至把a的下划线移除
	underline		文本下的一条线|下划线
	overline		文本上的一条线|上划线
	line-through	穿过文本下的一条线|删除线
	blink			闪烁的效果，但浏览器不显示

##### 色 text-decoration-color
	颜色名，颜色值等，这个过时了

##### 形 text-decoration-style
	solid		默认值 单线
	double		双线
	dotted		点状线
	dashed		虚线
	wavy		波浪线

#### vertical-align 垂直对齐
	baseline	默认 元素垂直对齐父元素的基线上
	sub			垂直对齐文本的下标
	super		垂直对齐文本的上标
	top			把元素的顶端与行中最高元素的顶端对齐
	text-top	把元素的顶端与父元素字体的顶端对齐
	middle		父元素的中部
	bottom		元素及其后代元素的底部与整行的底部对齐
	text-bottom	底端与父元素字体的底端对齐
	length		升降指定的高度
	%			行高的百分比

#### text-shadow 文本阴影
	text-shadow: h-shadow v-shadow blur color;
_h-shadow_水平阴影位置   _blur_模糊距离 

#### text-indent 首行缩进
	length	固定的缩进
	%		基于父元素宽度百分比缩进

#### text-transform	文本转换
	none		默认
	capitalize	大写字母开头
	uppercase	仅有大写字母
	lowercase	仅有小写字母

#### unicode-bidi	或返回文本是否被重写 
	与 direction 属性一起使用，来设置或返回文本是否被重写，以便在同一文档中支持多种语言

### 字体 font
	font: { 
		font-style 
		font-variant 
		font-weight 
		font-size/line-height 
		font-family 
	}
在线配置 font 简写形式
[https://developer.mozilla.org/en-US/docs/Web/CSS/font#live_sample](https://developer.mozilla.org/en-US/docs/Web/CSS/font#live_sample)

#### font-style 字体样式
	normal	默认值 标准
	italic	斜体
	oblique	倾斜
同 html 中的 i 标签 

#### font-variant 小型大写字母
	默认          normal
	小型大写字母   small-caps

#### font-weight 字体粗细
	normal	默认
	bold	粗体
	bolder	更粗
	lighter	更细
	100-900 100-900 

#### font-size 字体大小
**浏览器默认字体大小 16px**
```
/* <absolute-size>，绝对大小值 */ 
font-size: xx-small; 
font-size: x-small; 
font-size: small; 
font-size: medium; 
font-size: large; 
font-size: x-large; 
font-size: xx-large; 

/* <relative-size>，基于父元素 相对大小值 */ 
font-size: larger; 
font-size: smaller; 

/* <length>，长度值 */ 
font-size: 12px; 
font-size: 0.8em; 

/* <percentage>，基于父元素 百分比值 */ 
font-size: 80%; 

font-size: inherit;
```

#### font-family 字体
|系列				|特点			|场景		|栗子		|
|-----------|-----------|-----------|-----------|
|无衬线字体sans-serif	|粗细均匀、首尾无装饰	|网页	|黑体、Arial	|
|衬线字体 serif		|粗细不均匀、首尾有装饰	|报刊书籍|宋体、Times New Roman|
|等宽字体 monospace	|每个字的宽度相等		|代码编写|Consolas、 fira Code|
多项、应变、后备

### 列表 
```
去掉列表前的符号
ul {
  list-style: none;
}
```

#### list-style
	list-style: { list-style-type, list-style-position, list-style-image.}

##### list-style-type
	disc默认实心圆|none无标记|circle空心圆|square实心方块|decimal数字。。。

##### list-style-position
	inside | outside默认

##### list-style-image
	none默认| URL

### 表格 
边框 border
折叠边框 border-collapse:collapse;
width:100%;
height:50px;
vertical-align:bottom;
text-align:right;
等等

### 盒子模型
由外到内：  Margin    Border    Padding    Content
对应四个边界 Edge 均有宽高

#### content 内容

##### box-sizing 盒子模型
	影响 Content 的最终尺寸计算方式，排除margin因名义上是元素外
	{ box-sizing: content-box | border-box }

###### content-box 标准盒
	默认值，W3C标准盒子模型
	width = content + border + padding;
> 盒子最终宽度 = width(content) + padding + border

###### border-box 怪异盒
	IE怪异盒子模型
	content = width - border - padding;
> 盒子最终宽度 = width = padding + border + content

##### 尺寸-宽高
	不止是content有宽高，其他很多元素也有宽高属性

###### width宽
	width
	min-width
	max-width

###### height高
	height
	min-height
	max-height

#### padding 内边距、填充
	length | %

##### 简写顺序：上右下左
	up\right\bottom\left 顺时针
受到元素背景颜色的填充

#### 边框  border 简写

##### 简写：宽、样、色
	border： { border-width border-style border-color }

###### 简写顺序：上右下左 
	up\right\bottom\left 顺时针
	举例：border-top|border-top-width|border-top-style|border-top-color

##### border-width
	thin细 | medium中等 | thick粗 | length自定义宽度

##### border-style
	none		无边框
	hidden		隐藏边框，可解决表的边框冲突
	dotted		圆点状虚线
	dashed		短方矩形虚线
	solid		实线
	double		双实线
	groove		凹槽3D边框，雕刻效果，与 ridge 相反
	ridge		垄状3D边框，浮雕效果，与 groove 相反
	inset		嵌入3D边框，陷入效果，与 outset 相反
	outset		外凸3D边框，突出效果，与 inset 相反

###### 简写顺序：上右下左 
	使用方式同 padding 和 margin 类似可以设置 1-4 个值

##### 边框图像 border-image
	border-image: source slice width outset repeat|initial|inherit;
	border-image-source: url(xxx.png)
	border-image-slice: number | % | fill;

##### 圆角 border-radius
	border-radius: 1-4 length|% / 1-4 length|%;
圆形/椭圆半径

###### 顺序：上左，上右，下右，下左
top-left | bottom-right

#### margin 外边距
	length | %

##### 上右下左
	up\right\bottom\left 顺时针

##### 水平居中
	margin: 0 auto;

##### 外边距重叠折叠：合并、塌陷
> 块级 | 兄弟的上下margin 会合并
> 块级 | 父子的margin-top导致父元素一起下移

###### 合并现象
	场景：垂直布局的块级元素，上下的 margin 会合并
	结果：最终两者距离为 margin 的最大值
	解决方法：只给其中一个盒子设置 margin

###### 塌陷现象
	场景：相互嵌套的块级元素，子元素的 margin-top 会作用在父元素上
	结果：导致父元素一起往下移动
	解决方法：
	1.  给父元素设置 border-top 或者 padding-top(分隔父子元素的 margin-top)
	2.  给父元素设置 overflow:hidden;
	3.  转换为行内块元素
	4.  设置浮动

##### 行内标签垂直使用行高才生效
	行内标签的 margin/pading垂直方向不生效，使用行高 line-height 实现
> 行内 | 垂直方向不生效

#### 轮廓 outline
	不占空间不增加宽高，边框外围，宽度样式颜色，突出的作用
	outline：{ outline-color, outline-style, outline-width }

##### 轮廓不是盒子模型的概念

### 布局模式
**表格布局**：以2D数据为中心，表格形式的布局
**行内布局**：以文本为中心，不仅是数据，文本形式的内联布局
**块布局**：以文档为中心，不止文本甚至图视音频动画等。例如利用float布局
**定位布局**：以定位元素为中心，例如position

#### 弹性布局 flex
	柔性布局：弹性容器 + 弹性子元素们
	display：flex|inline-flex
	
弹性布局display: flex|inline-flex
主轴排列flex-direction: row横向|row-reverse反转横向|column纵向|column-reverse反转纵向
主轴对齐justify-content: flex-start头紧挨 | flex-end尾紧挨 | center居中紧挨 | space-between平均分布两头不留紧挨 | space-around平均分布两头留半不紧挨
侧轴对齐align-items: flex-start | flex-end | center | baseline | stretch接近行高
元素换行flex-wrap: nowrap默认单行可能溢出|wrap多行溢出断行|wrap-reverse反转 wrap 排列|initial|inherit;
各行对齐align-content: flex-start默认 | flex-end | center | space-between | space-around | stretch

排序order数值小的排在前面可以为负值
侧轴对齐align-self: auto | flex-start | flex-end | center | baseline | stretch

`flex: auto | initial | none | inherit |  [ flex-grow ] || [ flex-shrink ] || [ flex-basis ]`

#### 网格布局 gred

### 布局相关

#### Display 显示模式

##### 块级
* 独占一行; 
* 宽度默认为父元素 100%；高度默认由元素撑开
* 可以设置宽度和高度
> 代表标签：div p h ul li dl dt dd form header nav footer

##### 行内
* 一行显示多个
* 宽度和高度默认由内容撑开
* 不可以设置宽度和高度
> 代表标签 a span b u i s strong ins em del

##### 行内块
* 一行显示多个
* 可以设置宽度和高度
> 代表标签 input textarea button select
 特例：img 有 行内块 特征，但浏览器控制台提示是 inline 

#### Display 显示模式转换
|属性值			|效果	|
|---			|---	|
|block			|块级	|
|inline			|内联	|
|inline-block	|行内块	|


##### Display 显示 Visibility 可见性

* display:none 不占空间

* visibility:hidden 影响布局

		visible  默认可见
		hidden   不可见
		collapse 表格删除行列且不影响布局非表格不可见

#### 定位 Position
absolute 绝对定位，相对于 static 定位以外的第一个父元素进行定位
fixed 固定定位，相对于浏览器窗口进行定位
relative 相对定位，相对于其正常位置进行定位 
static	默认 没有定位，元素出现在正常的流中
sticky 粘性定位，该定位基于用户滚动的位置 它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置

##### 标准流
标准流：又称为文档流，浏览器排列元素的规则

###### 排版规则
1. 块级元素：
	- 从上往下，垂直布局，独占一行
2. 行内元素或行内块元素：
	- 从左往右，水平布局，空间不够自动折行

#### 溢出 Overflow
	visible	默认值不折叠如果溢出就框外
	hidden	折叠，溢出不可见
	scroll	折叠，溢出都滚动条
	auto	折叠，溢出才滚动条
##### BFC

#### 浮动 Float
	早期用于图文环绕
左浮动left | 右浮动right  | 默认不浮动none

##### 浮动的特点
-   浮动的标签默认顶对齐，可使用 margin-top 修改距离顶部距离
-   浮动元素会脱离标准流（脱标），在标准流中不占用位置
-   浮动元素比标准流高半个级别，可以覆盖标准流中的元素
-   浮动找浮动，下一个浮动元素会在上一个浮动元素后面，左右浮动
-   浮动标签具备行内块特点：
	1.  一行显示多个
	2.  可设置宽高
-   浮动之后盒子水平居中不生效 margin: 0 auto;

##### clear
左不允许浮动left 
右不允许浮动right 
不允许浮动两侧both 
默认允许浮动两侧none

## 规则

### emmet语法
VS Code已经内置，快速生成标签

#### html 
标签名 类 id 交集  div.class#id1 子代> {文本}  +同级
创建多个ul>li*3
创建自增ul>li{$}*3

#### css 
fw == font-weight
bgc == backgroud-color
w == width
h == height
w300+h200 == width: 300px;height: 200px;

### 简写规则

#### 省略属性
```
	background-color: red;
	background: url(images/bg.gif) no-repeat left top;
```
以上样式不会将 background 的 color 值设置为 red，
而是 background-color 的默认值 transparent。

#### 属性顺序
边界是 上右下左 顺时针
角是 上左上右下右下左 顺时针

### 可替换元素
这些元素是一种**外部**对象，它们外观的渲染，是独立于 CSS 的
例如 `<iframe>`  `<video>` `<img>` `<embed>`元素

	特殊情况下，比如"image" 类型的 `<input>` 元素就像 `<img>` 一样被替换

	用 CSS content 属性插入的对象是匿名的可替换元素。它们并不存在于 HTML 标记中，因此是“匿名的”。

### 值

#### 初始值 

#### 计算值 

#### 解析值 

#### 指定值 

#### 应用值 

#### 实际值 