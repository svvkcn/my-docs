import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as h,c as o,a as e,b as a,d,f as r}from"./app-302Urp1_.js";const c={},l=r(`<h1 id="css" tabindex="-1"><a class="header-anchor" href="#css" aria-hidden="true">#</a> CSS</h1><h2 id="三步学习知识" tabindex="-1"><a class="header-anchor" href="#三步学习知识" aria-hidden="true">#</a> 三步学习知识</h2><h3 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么" aria-hidden="true">#</a> 是什么</h3><pre><code>Cascading Style Sheets 层叠样式表；
为结构化文档添加样式，后缀 .css
</code></pre><p>官网<strong>MDN</strong></p><h3 id="怎么做" tabindex="-1"><a class="header-anchor" href="#怎么做" aria-hidden="true">#</a> 怎么做</h3><pre><code>	语法、规则
	选择器：属性：属性值
</code></pre><h3 id="为什么" tabindex="-1"><a class="header-anchor" href="#为什么" aria-hidden="true">#</a> 为什么</h3><pre><code>	基础必学
</code></pre><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><pre><code>内联都已经直接写标签属性里头了，不是选择器，比选择器厉害
选择器 { 声明1；声明2；... }
</code></pre><h3 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h3><h4 id="选择器-selector" tabindex="-1"><a class="header-anchor" href="#选择器-selector" aria-hidden="true">#</a> 选择器 Selector</h4><pre><code>通用*、元素、类、属性、伪类、ID、等等
</code></pre><h4 id="声明-declaration" tabindex="-1"><a class="header-anchor" href="#声明-declaration" aria-hidden="true">#</a> 声明 Declaration</h4><pre><code>属性名：属性值
</code></pre><p>Properties: Property value</p><h5 id="声明块" tabindex="-1"><a class="header-anchor" href="#声明块" aria-hidden="true">#</a> 声明块</h5><pre><code>多个声明
</code></pre><h4 id="默认-initial" tabindex="-1"><a class="header-anchor" href="#默认-initial" aria-hidden="true">#</a> 默认 initial</h4><pre><code>initial
</code></pre><h4 id="注释" tabindex="-1"><a class="header-anchor" href="#注释" aria-hidden="true">#</a> 注释</h4><pre><code>\`/*这是个注释*/\`
</code></pre><h4 id="规则" tabindex="-1"><a class="header-anchor" href="#规则" aria-hidden="true">#</a> @规则</h4><h5 id="charset" tabindex="-1"><a class="header-anchor" href="#charset" aria-hidden="true">#</a> @charset</h5><p>定义样式表使用的字符集</p><h5 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> @import</h5><p>告诉 CSS 引擎引入一个外部样式表</p><h5 id="namespace" tabindex="-1"><a class="header-anchor" href="#namespace" aria-hidden="true">#</a> @namespace</h5><p>告诉 CSS 引擎必须考虑 XML 命名空间</p><h5 id="嵌套-规则" tabindex="-1"><a class="header-anchor" href="#嵌套-规则" aria-hidden="true">#</a> 嵌套 @规则</h5><h6 id="media" tabindex="-1"><a class="header-anchor" href="#media" aria-hidden="true">#</a> @media</h6><p>如果满足媒介查询的条件则条件规则组里的规则生效</p><h6 id="page" tabindex="-1"><a class="header-anchor" href="#page" aria-hidden="true">#</a> @page</h6><p>描述打印文档时布局的变化。</p><h6 id="font-face" tabindex="-1"><a class="header-anchor" href="#font-face" aria-hidden="true">#</a> @font-face</h6><p>描述将下载的外部的字体</p><h3 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h3><h4 id="_1-内联、行内" tabindex="-1"><a class="header-anchor" href="#_1-内联、行内" aria-hidden="true">#</a> 1.内联、行内</h4><pre><code>\`&lt;p style=&quot;color:pink&quot;&gt;这是一个段落&lt;/p&gt;\`
</code></pre><h4 id="_2-内部、内嵌" tabindex="-1"><a class="header-anchor" href="#_2-内部、内嵌" aria-hidden="true">#</a> 2.内部、内嵌</h4><pre><code>\`&lt;head&gt; &lt;style&gt; p {color: pink;} &lt;/style&gt; &lt;/head&gt;\`
</code></pre><h4 id="_3-外部、外链" tabindex="-1"><a class="header-anchor" href="#_3-外部、外链" aria-hidden="true">#</a> 3.外部、外链</h4><pre><code>便于维护
</code></pre><h5 id="链接-link-推荐" tabindex="-1"><a class="header-anchor" href="#链接-link-推荐" aria-hidden="true">#</a> 链接 link 推荐</h5><pre><code>使用 HTML 规则 link 标签 引入外部 CSS 文件；
HTML文件加载的同时 CSS文件也被加载
\`&lt;head&gt; &lt;link rel=&quot;stylesheet&quot; type=&quot;text/css&quot; href=&quot;style.css&quot;&gt; &lt;/head&gt;\`
</code></pre><h5 id="导入-import-不推荐" tabindex="-1"><a class="header-anchor" href="#导入-import-不推荐" aria-hidden="true">#</a> 导入 @import 不推荐</h5><pre><code>使用 CSS 规则 import 引入外部 CSS 文件；
HTML页面全部下载完毕后，CSS再被加载。因为后加载，所以导入语句必须写在样式表的开头
\`&lt;style&gt; @import url(style.css); &lt;/style&gt;\`
</code></pre><h3 id="一、层叠" tabindex="-1"><a class="header-anchor" href="#一、层叠" aria-hidden="true">#</a> 一、层叠</h3><pre><code>首先层叠，
叠加 || 覆盖
</code></pre><h4 id="all" tabindex="-1"><a class="header-anchor" href="#all" aria-hidden="true">#</a> all</h4><p>将除了 unicode-bidi 与 direction 之外的所有属性重设至其初始值，或继承值</p><h3 id="二、继承-inherit" tabindex="-1"><a class="header-anchor" href="#二、继承-inherit" aria-hidden="true">#</a> 二、继承 inherit</h3><pre><code>其次层叠必然出现继承，
</code></pre><ol><li>子元素有默认继承父元素样式的特点</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>color 
font-style font-weight font-size font-family 
text-align text-indent
line-height
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>可继承的常见属性（文字属性都可以继承）
通过调试工具判断样式是否可继承
</code></pre><ol start="2"><li><p>继承失效的特殊情况</p><pre><code> 如果元素有浏览器默认样式，就不继承父元素属性
 a 标签的 color 会继承失效
 h 标签的 font-size 会继承失效
</code></pre></li></ol><h3 id="三、优先级" tabindex="-1"><a class="header-anchor" href="#三、优先级" aria-hidden="true">#</a> 三、优先级</h3><pre><code>最后哪怕继承也会有优先级；
优先级是浏览器判断
</code></pre><p><strong>重要程度</strong> &gt; <strong>优先级</strong> &gt; <strong>资源顺序</strong> 同优先级的情况下，才会看资源顺序，后面的覆盖前面的</p><h4 id="important" tabindex="-1"><a class="header-anchor" href="#important" aria-hidden="true">#</a> !important</h4><pre><code>与优先级无关，能不用尽量**别用**
</code></pre><h4 id="继承性优先级" tabindex="-1"><a class="header-anchor" href="#继承性优先级" aria-hidden="true">#</a> 继承性优先级</h4><pre><code>自己本身 &gt; 爸 &gt; 爷
</code></pre><p>哪怕是自己的 通配符*选择器 都要比 继承而来的 优先级更高</p><h4 id="引入的优先级" tabindex="-1"><a class="header-anchor" href="#引入的优先级" aria-hidden="true">#</a> 引入的优先级</h4><pre><code>内联 &gt; 内部 &gt; 外部 &gt; 浏览器默认样式
</code></pre><h4 id="选择器优先级" tabindex="-1"><a class="header-anchor" href="#选择器优先级" aria-hidden="true">#</a> 选择器优先级</h4><p>总结：选择范围越小，优先级越高 <strong>内联样式 &gt; id 选择器 &gt; 类=伪类=属性 &gt; 标签=伪元素 &gt; 通用</strong></p><pre><code>内联         1000 因为重要程度
ID选择器     100
伪类         10
属性选择器    10
类选择器      10
元素标签选择器 1
通用选择器*   1
</code></pre><h2 id="选择器" tabindex="-1"><a class="header-anchor" href="#选择器" aria-hidden="true">#</a> 选择器</h2><h3 id="通配符选择器" tabindex="-1"><a class="header-anchor" href="#通配符选择器" aria-hidden="true">#</a> 通配符选择器 *</h3><pre><code>*
</code></pre><p>性能最差的选择器</p><h4 id="命名空间" tabindex="-1"><a class="header-anchor" href="#命名空间" aria-hidden="true">#</a> 命名空间</h4><pre><code>ns|* - 会匹配\`ns\`命名空间下的所有元素
*|*  - 会匹配所有命名空间下的所有元素
|*   - 会匹配所有没有命名空间的元素
</code></pre><h3 id="类型、类、id" tabindex="-1"><a class="header-anchor" href="#类型、类、id" aria-hidden="true">#</a> 类型、类、ID</h3><h4 id="类型选择器-x" tabindex="-1"><a class="header-anchor" href="#类型选择器-x" aria-hidden="true">#</a> 类型选择器 x</h4><pre><code>也叫 元素选择器
也叫 标签选择器
</code></pre><h4 id="class类选择器" tabindex="-1"><a class="header-anchor" href="#class类选择器" aria-hidden="true">#</a> Class类选择器 .</h4><pre><code>常用
</code></pre><h4 id="id选择器" tabindex="-1"><a class="header-anchor" href="#id选择器" aria-hidden="true">#</a> Id选择器</h4><pre><code>常用
假如真的页面定义了多个id，浏览器也折扣性的来兼容，尽量避免这样
</code></pre><h3 id="标签属性" tabindex="-1"><a class="header-anchor" href="#标签属性" aria-hidden="true">#</a> 标签属性</h3><h4 id="属性选择器-【】" tabindex="-1"><a class="header-anchor" href="#属性选择器-【】" aria-hidden="true">#</a> 属性选择器 【】</h4><pre><code>标签属性选择器
</code></pre><h5 id="交集选择器" tabindex="-1"><a class="header-anchor" href="#交集选择器" aria-hidden="true">#</a> 交集选择器</h5><pre><code>选择器1选择器2: { }
标签和属性是紧挨着，算是交集选择器
</code></pre><h3 id="伪类伪元素" tabindex="-1"><a class="header-anchor" href="#伪类伪元素" aria-hidden="true">#</a> 伪类伪元素</h3><h4 id="伪类选择器" tabindex="-1"><a class="header-anchor" href="#伪类选择器" aria-hidden="true">#</a> 伪类选择器 ：</h4><pre><code>p:first-child
</code></pre><h5 id="链接a-l-v-h-a" tabindex="-1"><a class="header-anchor" href="#链接a-l-v-h-a" aria-hidden="true">#</a> 链接a: l v h a</h5><pre><code>a:link		正常，未访问过的链接
a:visited	已访问过的链接
a:hover		鼠标放在链接上时
a:active	链接被点击的那一刻
</code></pre><p>鼠标悬停状态---四个链接状态---hover 伪类选择器</p><h5 id="结构伪类选择器" tabindex="-1"><a class="header-anchor" href="#结构伪类选择器" aria-hidden="true">#</a> 结构伪类选择器</h5><ul><li>作用：根据元素在 HTML 中的结构关系查找元素</li><li>优势：减少对 HTML 中类的依赖，有利于保持代码整洁</li><li>场景：常用于查找某父级选择器中的子元素</li></ul><table><thead><tr><th>选择器</th><th>说明</th></tr></thead><tbody><tr><td>E:first-child</td><td>父元素中的第一个子元素 E</td></tr><tr><td>E:last-child</td><td>父元素中的最后一个子元素 E</td></tr><tr><td>E:nth-child(n)</td><td>父元素中的第 n 个子元素 E</td></tr><tr><td>E:nth-last-child(n)</td><td>父元素中的倒数第 n 个子元素 E</td></tr></tbody></table><p>n 可以写公式</p><p>n 可取值：0 1 2 3 4...</p><table><thead><tr><th>功能</th><th>公式</th></tr></thead><tbody><tr><td>偶数</td><td>2n even</td></tr><tr><td>奇数</td><td>2n+1 2n-1 odd</td></tr><tr><td>找到前 5 个</td><td>-n+5</td></tr><tr><td>找到从第 5 个往后</td><td>n+5</td></tr></tbody></table><h5 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他：</h5><pre><code>:checked		选中了的
:disabled		禁用了的
:focus			具有焦点的
:enabled		启用了的
:out-of-range	指定范围以外值的
:in-range		指定了范围内值的
:valid			有效值的
:optional		没有&quot;required&quot;了的
:required		有&quot;required&quot;了的
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
</code></pre><h4 id="伪元素选择器" tabindex="-1"><a class="header-anchor" href="#伪元素选择器" aria-hidden="true">#</a> 伪元素选择器 ：：</h4><pre><code>p::first-line
</code></pre><ul><li>元素：HTML 标签</li><li>伪元素：CSS 模拟出标签效果，装饰性内容</li></ul><table><thead><tr><th>伪元素</th><th>作用</th></tr></thead><tbody><tr><td>::before</td><td>在父元素内容的最前添加一个伪元素</td></tr><tr><td>::after</td><td>在父元素内容的最后添加一个伪元素</td></tr><tr><td>注意点：</td><td></td></tr></tbody></table><ul><li>必须设置 content 属性才能生效</li><li>伪元素默认是行内元素</li></ul><h3 id="运算符-复合选择器" tabindex="-1"><a class="header-anchor" href="#运算符-复合选择器" aria-hidden="true">#</a> 运算符（复合选择器）</h3><h4 id="后代选择器-空格" tabindex="-1"><a class="header-anchor" href="#后代选择器-空格" aria-hidden="true">#</a> 后代选择器 空格</h4><pre><code>父选择器 后代选择器: { }
</code></pre><h4 id="子代选择器" tabindex="-1"><a class="header-anchor" href="#子代选择器" aria-hidden="true">#</a> 子代选择器 &gt;</h4><pre><code>父选择器 &gt; 子代选择器: { }
</code></pre><h4 id="相邻兄弟选择器" tabindex="-1"><a class="header-anchor" href="#相邻兄弟选择器" aria-hidden="true">#</a> 相邻兄弟选择器 +</h4><pre><code>h1 + p
</code></pre><h4 id="通用兄弟选择器" tabindex="-1"><a class="header-anchor" href="#通用兄弟选择器" aria-hidden="true">#</a> 通用兄弟选择器 ~</h4><pre><code>h1 ~ p
</code></pre><h4 id="并集分组选择器-逗号-空格" tabindex="-1"><a class="header-anchor" href="#并集分组选择器-逗号-空格" aria-hidden="true">#</a> 并集分组选择器 ，逗号 空格</h4><pre><code>选择器1, 选择器2: { }
</code></pre><blockquote><p>a, b 空格在后</p></blockquote><blockquote><p>a ,b 空格在前</p></blockquote><blockquote><p>a, b 另起一行</p></blockquote><pre><code>如上三种效果一样，不论a或者b只要写错其一，整条规则失效
</code></pre><h2 id="声明" tabindex="-1"><a class="header-anchor" href="#声明" aria-hidden="true">#</a> 声明</h2><h3 id="背景-background" tabindex="-1"><a class="header-anchor" href="#背景-background" aria-hidden="true">#</a> 背景 background</h3><pre><code>非继承
</code></pre><p><code>background: bg-color bg-image bg-position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;</code></p><h4 id="背景颜色-background-color" tabindex="-1"><a class="header-anchor" href="#背景颜色-background-color" aria-hidden="true">#</a> 背景颜色 background-color</h4><pre><code>包括填充和边界（但不包括边距）
默认 transparent 透明
</code></pre><h4 id="背景图像-background-image" tabindex="-1"><a class="header-anchor" href="#背景图像-background-image" aria-hidden="true">#</a> 背景图像 background-image</h4><pre><code>\`background-image:url(&#39;xxx.jpg&#39;);\`
可以多个图像
如果图像不可用，可以显示 background-color ，所以推荐同时设置背景色托底,但浏览器遇到url给放一个空图片占位了
</code></pre><h4 id="背景图像位置-background-position" tabindex="-1"><a class="header-anchor" href="#背景图像位置-background-position" aria-hidden="true">#</a> 背景图像位置 background-position</h4><pre><code>background-position: 水平方向位置 垂直方向位置;
</code></pre><ul><li><p>3x3=9种组合</p><pre><code>  仅指定一个关键字，其他值默认&quot;center&quot;
  left 	top
  left 	center
  left 	bottom
  right 	top
  right 	center
  right 	bottom
  center 	top
  center 	center
  center 	bottom
</code></pre></li><li><p>x% y%</p><pre><code>  X水平Y垂直 默认值左上角0％0％
</code></pre></li><li><p>x y</p><pre><code>  X水平Y垂直 默认值左上角0 0
</code></pre></li></ul><h4 id="背景图像重复-background-repeat" tabindex="-1"><a class="header-anchor" href="#背景图像重复-background-repeat" aria-hidden="true">#</a> 背景图像重复 background-repeat</h4><pre><code>repeat		默认重复
repeat-x	只水平会重复
repeat-y	只垂直会重复
no-repeat	不会重复
</code></pre><h4 id="背景图像滚动-background-attachment" tabindex="-1"><a class="header-anchor" href="#背景图像滚动-background-attachment" aria-hidden="true">#</a> 背景图像滚动 background-attachment</h4><p>背景图像是否固定或者随着页面的其余部分滚动</p><pre><code>scroll	默认,随页面的滚动而滚动
fixed	不随着页面的滚动而滚动
local	会随着元素内容的滚动而滚动
</code></pre><h4 id="背景图像裁剪-background-clip" tabindex="-1"><a class="header-anchor" href="#背景图像裁剪-background-clip" aria-hidden="true">#</a> 背景图像裁剪 background-clip</h4><pre><code>border-box 背景延伸至边框外沿
padding-box 背景延伸至内边距外沿
content-box 背景被裁剪至内容区外沿
text 背景被裁剪成文字的前景色
</code></pre>`,141),s={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip",target:"_blank",rel:"noopener noreferrer"},p=r(`<h4 id="不常用" tabindex="-1"><a class="header-anchor" href="#不常用" aria-hidden="true">#</a> 不常用</h4><pre><code>background-size			背景图片的尺寸大小 
background-origin		背景图像的定位区域，background-position时的参考原点
</code></pre><h3 id="文本-text" tabindex="-1"><a class="header-anchor" href="#文本-text" aria-hidden="true">#</a> 文本 text</h3><h4 id="color-文本颜色" tabindex="-1"><a class="header-anchor" href="#color-文本颜色" aria-hidden="true">#</a> color 文本颜色</h4><pre><code>合理的 背景颜色 才能和 文本颜色 搭配
</code></pre><h5 id="hsl-色相-饱和度-明度" tabindex="-1"><a class="header-anchor" href="#hsl-色相-饱和度-明度" aria-hidden="true">#</a> HSL 色相-饱和度-明度</h5><pre><code>_HSLA，色相-饱和度-明度-阿尔法（HSLa）_
举例：hsla(240,100%, 50%,1)   /* 完全不透明 */
</code></pre><h4 id="direction-文本方向" tabindex="-1"><a class="header-anchor" href="#direction-文本方向" aria-hidden="true">#</a> direction 文本方向</h4><pre><code>ltr			默认 从左到右
rtl			从右到左
</code></pre><h4 id="letter-spacing字符间距" tabindex="-1"><a class="header-anchor" href="#letter-spacing字符间距" aria-hidden="true">#</a> letter-spacing 字符间距</h4><pre><code>length    固定-带单位
</code></pre><p>每个字母之间的间距，汉字是每个字</p><h4 id="word-spacing单词间距" tabindex="-1"><a class="header-anchor" href="#word-spacing单词间距" aria-hidden="true">#</a> word-spacing 单词间距</h4><pre><code>length    固定-带单位
</code></pre><p>每个单词之间的间距，汉字是每个字</p><h4 id="line-height行高" tabindex="-1"><a class="header-anchor" href="#line-height行高" aria-hidden="true">#</a> line-height 行高</h4><pre><code>number	  数字-当前的字体尺寸相乘
length	  固定-带单位
%		  百分比-当前字体 font-size 的尺寸倍数
</code></pre><blockquote><p>文本高度 = - 上间距 + 文本高度 + 下间距</p></blockquote><h5 id="单行文本垂直居中" tabindex="-1"><a class="header-anchor" href="#单行文本垂直居中" aria-hidden="true">#</a> 单行文本垂直居中</h5><pre><code>line-height=元素父元素高度
</code></pre><h5 id="取消上下间距" tabindex="-1"><a class="header-anchor" href="#取消上下间距" aria-hidden="true">#</a> 取消上下间距</h5><pre><code>line-height=1
</code></pre><h4 id="white-space空白的处理" tabindex="-1"><a class="header-anchor" href="#white-space空白的处理" aria-hidden="true">#</a> white-space 空白的处理</h4><p>空白 包括 <strong>空格</strong>、<strong>TAB</strong>、<strong>回车</strong>等</p><pre><code>normal		合并空格, 忽略换行, 不会横向滚动条, 默认 
nowrap		合并空格, 忽略换行, 可以横向滚, 直到br
pre-line	合并空格, 保留换行, 不会横向滚动条
pre			保留空格, 保留换行, 可以横向滚, 类pre
pre-wrap	保留空格, 保留换行，不会横向滚动条
</code></pre><h4 id="text-align-水平对齐" tabindex="-1"><a class="header-anchor" href="#text-align-水平对齐" aria-hidden="true">#</a> text-align 水平对齐</h4><pre><code>left	左对齐，浏览器的默认值
right	右对齐
center	居中
justify	两端对齐,不处理最后一行，所以可以用到伪元素::after
</code></pre><h4 id="text-decoration文本修饰" tabindex="-1"><a class="header-anchor" href="#text-decoration文本修饰" aria-hidden="true">#</a> text-decoration 文本修饰</h4><h5 id="线-text-decoration-line" tabindex="-1"><a class="header-anchor" href="#线-text-decoration-line" aria-hidden="true">#</a> 线 text-decoration-line</h5><pre><code>none			默认，甚至把a的下划线移除
underline		文本下的一条线|下划线
overline		文本上的一条线|上划线
line-through	穿过文本下的一条线|删除线
blink			闪烁的效果，但浏览器不显示
</code></pre><h5 id="色-text-decoration-color" tabindex="-1"><a class="header-anchor" href="#色-text-decoration-color" aria-hidden="true">#</a> 色 text-decoration-color</h5><pre><code>颜色名，颜色值等，这个过时了
</code></pre><h5 id="形-text-decoration-style" tabindex="-1"><a class="header-anchor" href="#形-text-decoration-style" aria-hidden="true">#</a> 形 text-decoration-style</h5><pre><code>solid		默认值 单线
double		双线
dotted		点状线
dashed		虚线
wavy		波浪线
</code></pre><h4 id="vertical-align-垂直对齐" tabindex="-1"><a class="header-anchor" href="#vertical-align-垂直对齐" aria-hidden="true">#</a> vertical-align 垂直对齐</h4><pre><code>baseline	默认 元素垂直对齐父元素的基线上
sub			垂直对齐文本的下标
super		垂直对齐文本的上标
top			把元素的顶端与行中最高元素的顶端对齐
text-top	把元素的顶端与父元素字体的顶端对齐
middle		父元素的中部
bottom		元素及其后代元素的底部与整行的底部对齐
text-bottom	底端与父元素字体的底端对齐
length		升降指定的高度
%			行高的百分比
</code></pre><h4 id="text-shadow-文本阴影" tabindex="-1"><a class="header-anchor" href="#text-shadow-文本阴影" aria-hidden="true">#</a> text-shadow 文本阴影</h4><pre><code>text-shadow: h-shadow v-shadow blur color;
</code></pre><p>_h-shadow_水平阴影位置 _blur_模糊距离</p><h4 id="text-indent-首行缩进" tabindex="-1"><a class="header-anchor" href="#text-indent-首行缩进" aria-hidden="true">#</a> text-indent 首行缩进</h4><pre><code>length	固定的缩进
%		基于父元素宽度百分比缩进
</code></pre><h4 id="text-transform文本转换" tabindex="-1"><a class="header-anchor" href="#text-transform文本转换" aria-hidden="true">#</a> text-transform 文本转换</h4><pre><code>none		默认
capitalize	大写字母开头
uppercase	仅有大写字母
lowercase	仅有小写字母
</code></pre><h4 id="unicode-bidi或返回文本是否被重写" tabindex="-1"><a class="header-anchor" href="#unicode-bidi或返回文本是否被重写" aria-hidden="true">#</a> unicode-bidi 或返回文本是否被重写</h4><pre><code>与 direction 属性一起使用，来设置或返回文本是否被重写，以便在同一文档中支持多种语言
</code></pre><h3 id="字体-font" tabindex="-1"><a class="header-anchor" href="#字体-font" aria-hidden="true">#</a> 字体 font</h3><pre><code>font: { 
	font-style 
	font-variant 
	font-weight 
	font-size/line-height 
	font-family 
}
</code></pre>`,47),b={href:"https://developer.mozilla.org/en-US/docs/Web/CSS/font#live_sample",target:"_blank",rel:"noopener noreferrer"},u=r(`<h4 id="font-style-字体样式" tabindex="-1"><a class="header-anchor" href="#font-style-字体样式" aria-hidden="true">#</a> font-style 字体样式</h4><pre><code>normal	默认值 标准
italic	斜体
oblique	倾斜
</code></pre><p>同 html 中的 i 标签</p><h4 id="font-variant-小型大写字母" tabindex="-1"><a class="header-anchor" href="#font-variant-小型大写字母" aria-hidden="true">#</a> font-variant 小型大写字母</h4><pre><code>默认          normal
小型大写字母   small-caps
</code></pre><h4 id="font-weight-字体粗细" tabindex="-1"><a class="header-anchor" href="#font-weight-字体粗细" aria-hidden="true">#</a> font-weight 字体粗细</h4><pre><code>normal	默认
bold	粗体
bolder	更粗
lighter	更细
100-900 100-900 
</code></pre><h4 id="font-size-字体大小" tabindex="-1"><a class="header-anchor" href="#font-size-字体大小" aria-hidden="true">#</a> font-size 字体大小</h4><p><strong>浏览器默认字体大小 16px</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/* &lt;absolute-size&gt;，绝对大小值 */ 
font-size: xx-small; 
font-size: x-small; 
font-size: small; 
font-size: medium; 
font-size: large; 
font-size: x-large; 
font-size: xx-large; 

/* &lt;relative-size&gt;，基于父元素 相对大小值 */ 
font-size: larger; 
font-size: smaller; 

/* &lt;length&gt;，长度值 */ 
font-size: 12px; 
font-size: 0.8em; 

/* &lt;percentage&gt;，基于父元素 百分比值 */ 
font-size: 80%; 

font-size: inherit;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="font-family-字体" tabindex="-1"><a class="header-anchor" href="#font-family-字体" aria-hidden="true">#</a> font-family 字体</h4><table><thead><tr><th>系列</th><th>特点</th><th>场景</th><th>栗子</th></tr></thead><tbody><tr><td>无衬线字体sans-serif</td><td>粗细均匀、首尾无装饰</td><td>网页</td><td>黑体、Arial</td></tr><tr><td>衬线字体 serif</td><td>粗细不均匀、首尾有装饰</td><td>报刊书籍</td><td>宋体、Times New Roman</td></tr><tr><td>等宽字体 monospace</td><td>每个字的宽度相等</td><td>代码编写</td><td>Consolas、 fira Code</td></tr><tr><td>多项、应变、后备</td><td></td><td></td><td></td></tr></tbody></table><h3 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>去掉列表前的符号
ul {
  list-style: none;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="list-style" tabindex="-1"><a class="header-anchor" href="#list-style" aria-hidden="true">#</a> list-style</h4><pre><code>list-style: { list-style-type, list-style-position, list-style-image.}
</code></pre><h5 id="list-style-type" tabindex="-1"><a class="header-anchor" href="#list-style-type" aria-hidden="true">#</a> list-style-type</h5><pre><code>disc默认实心圆|none无标记|circle空心圆|square实心方块|decimal数字。。。
</code></pre><h5 id="list-style-position" tabindex="-1"><a class="header-anchor" href="#list-style-position" aria-hidden="true">#</a> list-style-position</h5><pre><code>inside | outside默认
</code></pre><h5 id="list-style-image" tabindex="-1"><a class="header-anchor" href="#list-style-image" aria-hidden="true">#</a> list-style-image</h5><pre><code>none默认| URL
</code></pre><h3 id="表格" tabindex="-1"><a class="header-anchor" href="#表格" aria-hidden="true">#</a> 表格</h3><p>边框 border 折叠边框 border-collapse:collapse; width:100%; height:50px; vertical-align:bottom; text-align:right; 等等</p><h3 id="盒子模型" tabindex="-1"><a class="header-anchor" href="#盒子模型" aria-hidden="true">#</a> 盒子模型</h3><p>由外到内： Margin Border Padding Content 对应四个边界 Edge 均有宽高</p><h4 id="content-内容" tabindex="-1"><a class="header-anchor" href="#content-内容" aria-hidden="true">#</a> content 内容</h4><h5 id="box-sizing-盒子模型" tabindex="-1"><a class="header-anchor" href="#box-sizing-盒子模型" aria-hidden="true">#</a> box-sizing 盒子模型</h5><pre><code>影响 Content 的最终尺寸计算方式，排除margin因名义上是元素外
{ box-sizing: content-box | border-box }
</code></pre><h6 id="content-box-标准盒" tabindex="-1"><a class="header-anchor" href="#content-box-标准盒" aria-hidden="true">#</a> content-box 标准盒</h6><pre><code>默认值，W3C标准盒子模型
width = content + border + padding;
</code></pre><blockquote><p>盒子最终宽度 = width(content) + padding + border</p></blockquote><h6 id="border-box-怪异盒" tabindex="-1"><a class="header-anchor" href="#border-box-怪异盒" aria-hidden="true">#</a> border-box 怪异盒</h6><pre><code>IE怪异盒子模型
content = width - border - padding;
</code></pre><blockquote><p>盒子最终宽度 = width = padding + border + content</p></blockquote><h5 id="尺寸-宽高" tabindex="-1"><a class="header-anchor" href="#尺寸-宽高" aria-hidden="true">#</a> 尺寸-宽高</h5><pre><code>不止是content有宽高，其他很多元素也有宽高属性
</code></pre><h6 id="width宽" tabindex="-1"><a class="header-anchor" href="#width宽" aria-hidden="true">#</a> width宽</h6><pre><code>width
min-width
max-width
</code></pre><h6 id="height高" tabindex="-1"><a class="header-anchor" href="#height高" aria-hidden="true">#</a> height高</h6><pre><code>height
min-height
max-height
</code></pre><h4 id="padding-内边距、填充" tabindex="-1"><a class="header-anchor" href="#padding-内边距、填充" aria-hidden="true">#</a> padding 内边距、填充</h4><pre><code>length | %
</code></pre><h5 id="简写顺序-上右下左" tabindex="-1"><a class="header-anchor" href="#简写顺序-上右下左" aria-hidden="true">#</a> 简写顺序：上右下左</h5><pre><code>up\\right\\bottom\\left 顺时针
</code></pre><p>受到元素背景颜色的填充</p><h4 id="边框-border-简写" tabindex="-1"><a class="header-anchor" href="#边框-border-简写" aria-hidden="true">#</a> 边框 border 简写</h4><h5 id="简写-宽、样、色" tabindex="-1"><a class="header-anchor" href="#简写-宽、样、色" aria-hidden="true">#</a> 简写：宽、样、色</h5><pre><code>border： { border-width border-style border-color }
</code></pre><h6 id="简写顺序-上右下左-1" tabindex="-1"><a class="header-anchor" href="#简写顺序-上右下左-1" aria-hidden="true">#</a> 简写顺序：上右下左</h6><pre><code>up\\right\\bottom\\left 顺时针
举例：border-top|border-top-width|border-top-style|border-top-color
</code></pre><h5 id="border-width" tabindex="-1"><a class="header-anchor" href="#border-width" aria-hidden="true">#</a> border-width</h5><pre><code>thin细 | medium中等 | thick粗 | length自定义宽度
</code></pre><h5 id="border-style" tabindex="-1"><a class="header-anchor" href="#border-style" aria-hidden="true">#</a> border-style</h5><pre><code>none		无边框
hidden		隐藏边框，可解决表的边框冲突
dotted		圆点状虚线
dashed		短方矩形虚线
solid		实线
double		双实线
groove		凹槽3D边框，雕刻效果，与 ridge 相反
ridge		垄状3D边框，浮雕效果，与 groove 相反
inset		嵌入3D边框，陷入效果，与 outset 相反
outset		外凸3D边框，突出效果，与 inset 相反
</code></pre><h6 id="简写顺序-上右下左-2" tabindex="-1"><a class="header-anchor" href="#简写顺序-上右下左-2" aria-hidden="true">#</a> 简写顺序：上右下左</h6><pre><code>使用方式同 padding 和 margin 类似可以设置 1-4 个值
</code></pre><h5 id="边框图像-border-image" tabindex="-1"><a class="header-anchor" href="#边框图像-border-image" aria-hidden="true">#</a> 边框图像 border-image</h5><pre><code>border-image: source slice width outset repeat|initial|inherit;
border-image-source: url(xxx.png)
border-image-slice: number | % | fill;
</code></pre><h5 id="圆角-border-radius" tabindex="-1"><a class="header-anchor" href="#圆角-border-radius" aria-hidden="true">#</a> 圆角 border-radius</h5><pre><code>border-radius: 1-4 length|% / 1-4 length|%;
</code></pre><p>圆形/椭圆半径</p><h6 id="顺序-上左-上右-下右-下左" tabindex="-1"><a class="header-anchor" href="#顺序-上左-上右-下右-下左" aria-hidden="true">#</a> 顺序：上左，上右，下右，下左</h6><p>top-left | bottom-right</p><h4 id="margin-外边距" tabindex="-1"><a class="header-anchor" href="#margin-外边距" aria-hidden="true">#</a> margin 外边距</h4><pre><code>length | %
</code></pre><h5 id="上右下左" tabindex="-1"><a class="header-anchor" href="#上右下左" aria-hidden="true">#</a> 上右下左</h5><pre><code>up\\right\\bottom\\left 顺时针
</code></pre><h5 id="水平居中" tabindex="-1"><a class="header-anchor" href="#水平居中" aria-hidden="true">#</a> 水平居中</h5><pre><code>margin: 0 auto;
</code></pre><h5 id="外边距重叠折叠-合并、塌陷" tabindex="-1"><a class="header-anchor" href="#外边距重叠折叠-合并、塌陷" aria-hidden="true">#</a> 外边距重叠折叠：合并、塌陷</h5><blockquote><p>块级 | 兄弟的上下margin 会合并 块级 | 父子的margin-top导致父元素一起下移</p></blockquote><h6 id="合并现象" tabindex="-1"><a class="header-anchor" href="#合并现象" aria-hidden="true">#</a> 合并现象</h6><pre><code>场景：垂直布局的块级元素，上下的 margin 会合并
结果：最终两者距离为 margin 的最大值
解决方法：只给其中一个盒子设置 margin
</code></pre><h6 id="塌陷现象" tabindex="-1"><a class="header-anchor" href="#塌陷现象" aria-hidden="true">#</a> 塌陷现象</h6><pre><code>场景：相互嵌套的块级元素，子元素的 margin-top 会作用在父元素上
结果：导致父元素一起往下移动
解决方法：
1.  给父元素设置 border-top 或者 padding-top(分隔父子元素的 margin-top)
2.  给父元素设置 overflow:hidden;
3.  转换为行内块元素
4.  设置浮动
</code></pre><h5 id="行内标签垂直使用行高才生效" tabindex="-1"><a class="header-anchor" href="#行内标签垂直使用行高才生效" aria-hidden="true">#</a> 行内标签垂直使用行高才生效</h5><pre><code>行内标签的 margin/pading垂直方向不生效，使用行高 line-height 实现
</code></pre><blockquote><p>行内 | 垂直方向不生效</p></blockquote><h4 id="轮廓-outline" tabindex="-1"><a class="header-anchor" href="#轮廓-outline" aria-hidden="true">#</a> 轮廓 outline</h4><pre><code>不占空间不增加宽高，边框外围，宽度样式颜色，突出的作用
outline：{ outline-color, outline-style, outline-width }
</code></pre><h5 id="轮廓不是盒子模型的概念" tabindex="-1"><a class="header-anchor" href="#轮廓不是盒子模型的概念" aria-hidden="true">#</a> 轮廓不是盒子模型的概念</h5><h3 id="布局模式" tabindex="-1"><a class="header-anchor" href="#布局模式" aria-hidden="true">#</a> 布局模式</h3><p><strong>表格布局</strong>：以2D数据为中心，表格形式的布局 <strong>行内布局</strong>：以文本为中心，不仅是数据，文本形式的内联布局 <strong>块布局</strong>：以文档为中心，不止文本甚至图视音频动画等。例如利用float布局 <strong>定位布局</strong>：以定位元素为中心，例如position</p><h4 id="弹性布局-flex" tabindex="-1"><a class="header-anchor" href="#弹性布局-flex" aria-hidden="true">#</a> 弹性布局 flex</h4><pre><code>柔性布局：弹性容器 + 弹性子元素们
display：flex|inline-flex
</code></pre><p>弹性布局display: flex|inline-flex 主轴排列flex-direction: row横向|row-reverse反转横向|column纵向|column-reverse反转纵向 主轴对齐justify-content: flex-start头紧挨 | flex-end尾紧挨 | center居中紧挨 | space-between平均分布两头不留紧挨 | space-around平均分布两头留半不紧挨 侧轴对齐align-items: flex-start | flex-end | center | baseline | stretch接近行高 元素换行flex-wrap: nowrap默认单行可能溢出|wrap多行溢出断行|wrap-reverse反转 wrap 排列|initial|inherit; 各行对齐align-content: flex-start默认 | flex-end | center | space-between | space-around | stretch</p><p>排序order数值小的排在前面可以为负值 侧轴对齐align-self: auto | flex-start | flex-end | center | baseline | stretch</p><p><code>flex: auto | initial | none | inherit | [ flex-grow ] || [ flex-shrink ] || [ flex-basis ]</code></p><h4 id="网格布局-gred" tabindex="-1"><a class="header-anchor" href="#网格布局-gred" aria-hidden="true">#</a> 网格布局 gred</h4><h3 id="布局相关" tabindex="-1"><a class="header-anchor" href="#布局相关" aria-hidden="true">#</a> 布局相关</h3><h4 id="display-显示模式" tabindex="-1"><a class="header-anchor" href="#display-显示模式" aria-hidden="true">#</a> Display 显示模式</h4><h5 id="块级" tabindex="-1"><a class="header-anchor" href="#块级" aria-hidden="true">#</a> 块级</h5><ul><li>独占一行;</li><li>宽度默认为父元素 100%；高度默认由元素撑开</li><li>可以设置宽度和高度</li></ul><blockquote><p>代表标签：div p h ul li dl dt dd form header nav footer</p></blockquote><h5 id="行内" tabindex="-1"><a class="header-anchor" href="#行内" aria-hidden="true">#</a> 行内</h5><ul><li>一行显示多个</li><li>宽度和高度默认由内容撑开</li><li>不可以设置宽度和高度</li></ul><blockquote><p>代表标签 a span b u i s strong ins em del</p></blockquote><h5 id="行内块" tabindex="-1"><a class="header-anchor" href="#行内块" aria-hidden="true">#</a> 行内块</h5><ul><li>一行显示多个</li><li>可以设置宽度和高度</li></ul><blockquote><p>代表标签 input textarea button select 特例：img 有 行内块 特征，但浏览器控制台提示是 inline</p></blockquote><h4 id="display-显示模式转换" tabindex="-1"><a class="header-anchor" href="#display-显示模式转换" aria-hidden="true">#</a> Display 显示模式转换</h4><table><thead><tr><th>属性值</th><th>效果</th></tr></thead><tbody><tr><td>block</td><td>块级</td></tr><tr><td>inline</td><td>内联</td></tr><tr><td>inline-block</td><td>行内块</td></tr></tbody></table><h5 id="display-显示-visibility-可见性" tabindex="-1"><a class="header-anchor" href="#display-显示-visibility-可见性" aria-hidden="true">#</a> Display 显示 Visibility 可见性</h5><ul><li><p>display:none 不占空间</p></li><li><p>visibility:hidden 影响布局</p><pre><code>  visible  默认可见
  hidden   不可见
  collapse 表格删除行列且不影响布局非表格不可见
</code></pre></li></ul><h4 id="定位-position" tabindex="-1"><a class="header-anchor" href="#定位-position" aria-hidden="true">#</a> 定位 Position</h4><p>absolute 绝对定位，相对于 static 定位以外的第一个父元素进行定位 fixed 固定定位，相对于浏览器窗口进行定位 relative 相对定位，相对于其正常位置进行定位 static 默认 没有定位，元素出现在正常的流中 sticky 粘性定位，该定位基于用户滚动的位置 它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置</p><h5 id="标准流" tabindex="-1"><a class="header-anchor" href="#标准流" aria-hidden="true">#</a> 标准流</h5><p>标准流：又称为文档流，浏览器排列元素的规则</p><h6 id="排版规则" tabindex="-1"><a class="header-anchor" href="#排版规则" aria-hidden="true">#</a> 排版规则</h6><ol><li>块级元素： <ul><li>从上往下，垂直布局，独占一行</li></ul></li><li>行内元素或行内块元素： <ul><li>从左往右，水平布局，空间不够自动折行</li></ul></li></ol><h4 id="溢出-overflow" tabindex="-1"><a class="header-anchor" href="#溢出-overflow" aria-hidden="true">#</a> 溢出 Overflow</h4><pre><code>visible	默认值不折叠如果溢出就框外
hidden	折叠，溢出不可见
scroll	折叠，溢出都滚动条
auto	折叠，溢出才滚动条
</code></pre><h5 id="bfc" tabindex="-1"><a class="header-anchor" href="#bfc" aria-hidden="true">#</a> BFC</h5><h4 id="浮动-float" tabindex="-1"><a class="header-anchor" href="#浮动-float" aria-hidden="true">#</a> 浮动 Float</h4><pre><code>早期用于图文环绕
</code></pre><p>左浮动left | 右浮动right | 默认不浮动none</p><h5 id="浮动的特点" tabindex="-1"><a class="header-anchor" href="#浮动的特点" aria-hidden="true">#</a> 浮动的特点</h5><ul><li>浮动的标签默认顶对齐，可使用 margin-top 修改距离顶部距离</li><li>浮动元素会脱离标准流（脱标），在标准流中不占用位置</li><li>浮动元素比标准流高半个级别，可以覆盖标准流中的元素</li><li>浮动找浮动，下一个浮动元素会在上一个浮动元素后面，左右浮动</li><li>浮动标签具备行内块特点： <ol><li>一行显示多个</li><li>可设置宽高</li></ol></li><li>浮动之后盒子水平居中不生效 margin: 0 auto;</li></ul><h5 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear</h5><p>左不允许浮动left 右不允许浮动right 不允许浮动两侧both 默认允许浮动两侧none</p><h2 id="规则-1" tabindex="-1"><a class="header-anchor" href="#规则-1" aria-hidden="true">#</a> 规则</h2><h3 id="emmet语法" tabindex="-1"><a class="header-anchor" href="#emmet语法" aria-hidden="true">#</a> emmet语法</h3><p>VS Code已经内置，快速生成标签</p><h4 id="html" tabindex="-1"><a class="header-anchor" href="#html" aria-hidden="true">#</a> html</h4><p>标签名 类 id 交集 div.class#id1 子代&gt; {文本} +同级 创建多个ul&gt;li*3 创建自增ul&gt;li{$}*3</p><h4 id="css-1" tabindex="-1"><a class="header-anchor" href="#css-1" aria-hidden="true">#</a> css</h4><p>fw == font-weight bgc == backgroud-color w == width h == height w300+h200 == width: 300px;height: 200px;</p><h3 id="简写规则" tabindex="-1"><a class="header-anchor" href="#简写规则" aria-hidden="true">#</a> 简写规则</h3><h4 id="省略属性" tabindex="-1"><a class="header-anchor" href="#省略属性" aria-hidden="true">#</a> 省略属性</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>	background-color: red;
	background: url(images/bg.gif) no-repeat left top;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以上样式不会将 background 的 color 值设置为 red， 而是 background-color 的默认值 transparent。</p><h4 id="属性顺序" tabindex="-1"><a class="header-anchor" href="#属性顺序" aria-hidden="true">#</a> 属性顺序</h4><p>边界是 上右下左 顺时针 角是 上左上右下右下左 顺时针</p><h3 id="可替换元素" tabindex="-1"><a class="header-anchor" href="#可替换元素" aria-hidden="true">#</a> 可替换元素</h3><p>这些元素是一种<strong>外部</strong>对象，它们外观的渲染，是独立于 CSS 的 例如 <code>&lt;iframe&gt;</code> <code>&lt;video&gt;</code> <code>&lt;img&gt;</code> <code>&lt;embed&gt;</code>元素</p><pre><code>特殊情况下，比如&quot;image&quot; 类型的 \`&lt;input&gt;\` 元素就像 \`&lt;img&gt;\` 一样被替换

用 CSS content 属性插入的对象是匿名的可替换元素。它们并不存在于 HTML 标记中，因此是“匿名的”。
</code></pre><h3 id="值" tabindex="-1"><a class="header-anchor" href="#值" aria-hidden="true">#</a> 值</h3><h4 id="初始值" tabindex="-1"><a class="header-anchor" href="#初始值" aria-hidden="true">#</a> 初始值</h4><h4 id="计算值" tabindex="-1"><a class="header-anchor" href="#计算值" aria-hidden="true">#</a> 计算值</h4><h4 id="解析值" tabindex="-1"><a class="header-anchor" href="#解析值" aria-hidden="true">#</a> 解析值</h4><h4 id="指定值" tabindex="-1"><a class="header-anchor" href="#指定值" aria-hidden="true">#</a> 指定值</h4><h4 id="应用值" tabindex="-1"><a class="header-anchor" href="#应用值" aria-hidden="true">#</a> 应用值</h4><h4 id="实际值" tabindex="-1"><a class="header-anchor" href="#实际值" aria-hidden="true">#</a> 实际值</h4>`,144);function f(x,g){const t=i("ExternalLinkIcon");return h(),o("div",null,[l,e("p",null,[a("背景图像向外裁剪的绘画区域 "),e("a",s,[a("background-clip - CSS（层叠样式表） | MDN (mozilla.org)"),d(t)])]),p,e("p",null,[a("在线配置 font 简写形式 "),e("a",b,[a("https://developer.mozilla.org/en-US/docs/Web/CSS/font#live_sample"),d(t)])]),u])}const y=n(c,[["render",f],["__file","CSS.html.vue"]]);export{y as default};
