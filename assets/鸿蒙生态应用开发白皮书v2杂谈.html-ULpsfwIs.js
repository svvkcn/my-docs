import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as e,f as r}from"./app-302Urp1_.js";const h={},d=r('<h1 id="鸿蒙生态应用开发白皮书v2杂谈" tabindex="-1"><a class="header-anchor" href="#鸿蒙生态应用开发白皮书v2杂谈" aria-hidden="true">#</a> 鸿蒙生态应用开发白皮书v2杂谈</h1><h2 id="开局先吹三个大饼" tabindex="-1"><a class="header-anchor" href="#开局先吹三个大饼" aria-hidden="true">#</a> 开局先吹三个大饼</h2><h3 id="未来的大饼1-万物互联" tabindex="-1"><a class="header-anchor" href="#未来的大饼1-万物互联" aria-hidden="true">#</a> 未来的大饼1：万物互联</h3><p><strong>万物互联</strong>（手机单设备 -&gt; 全场景LOT物联网多设备）时代即将来临</p><p>这样理解：一个远超于旧时代因特网的数量级</p><h3 id="未来的大饼2-智能ai" tabindex="-1"><a class="header-anchor" href="#未来的大饼2-智能ai" aria-hidden="true">#</a> 未来的大饼2：智能AI</h3><p><strong>智能AI</strong>（云端服务器 -&gt; PC -&gt; 移动 -&gt; 智能终端）边缘计算的时代来临</p><p>这样理解：一个可以弱网甚至离线的识别文字语音视频的个人助理吧</p><h3 id="未来的大饼3-轻量化" tabindex="-1"><a class="header-anchor" href="#未来的大饼3-轻量化" aria-hidden="true">#</a> 未来的大饼3：轻量化</h3><p><strong>轻量化app</strong>：这剧情类似屠龙少年的未来，毕竟小程序这路走的通</p><p>这样理解：新系统就是比老安卓要优秀（开发语法、用户体验、商业生态）</p><h3 id="总结这三个大饼趋势" tabindex="-1"><a class="header-anchor" href="#总结这三个大饼趋势" aria-hidden="true">#</a> 总结这三个大饼趋势：</h3><p>a.单设备到多设备协同（比如卫星协同你的手机打电话）</p><p>b.大app到小卡片元服务（比如提供相同服务的 app和小程序）</p><p>c.软硬结合的高性能</p><p>d.更加专业的ai智慧场景</p><p>这三大饼<strong>方向上</strong>不厉害，但是从<strong>矢量上</strong>的四点足够有深度，那确实遥遥领先。</p><h2 id="响亮的口号1-一次开发-多端部署" tabindex="-1"><a class="header-anchor" href="#响亮的口号1-一次开发-多端部署" aria-hidden="true">#</a> 响亮的口号1：一次开发，多端部署</h2><p>新建一个代码项目工程（俗称的新建个文件夹）即可，</p><p>然后一次（统一）上架的审核如果能通过的话，</p><p>多端（硬件端暂支持一两个，软件端暂时支持一两个）按需部署。</p><h3 id="_1-1开发环境-俗称ide" tabindex="-1"><a class="header-anchor" href="#_1-1开发环境-俗称ide" aria-hidden="true">#</a> 1.1开发环境-俗称IDE：</h3><p>a.预览-低配版的模拟器（比真机快，大部分api都可以实时预览）</p><p>b.调试-打断点</p><p>c.调优-显示各步骤性能用来分析</p><p>d.超级终端-高配版的模拟器</p><p>e.低代码-简单页面很好用，页面复杂度超一个一个阈值，复杂度指数级翻倍</p><p>这五点前都加俩字“多端”，然后确实也不简单了，挺遥遥领先了</p><h3 id="_1-2开发能力-框架组件api" tabindex="-1"><a class="header-anchor" href="#_1-2开发能力-框架组件api" aria-hidden="true">#</a> 1.2开发能力-框架组件api：</h3><p>a.屏幕逻辑抽象：</p><p>虚拟像素 vp，超小xs&lt;360vp穿戴设备，小sm&lt;600vp折叠屏的折叠态和手机，中md&lt;840vp折叠屏的展开态和平板，大lg智慧屏</p><p>布局的自适应和响应式</p><p>视觉的分层、多态、主题</p><p>b.交互事件归一：归一就是都支持</p><p>c.设备能力抽象：把设备的传感器抽象成api</p><p>这三点的前头也都加上“多端”俩字，毕竟是新的，嗯，遥遥领先</p><h3 id="_1-3多端分发机制-俗称打多个包" tabindex="-1"><a class="header-anchor" href="#_1-3多端分发机制-俗称打多个包" aria-hidden="true">#</a> 1.3多端分发机制-俗称打多个包</h3><p>a.多设备按需分发：</p><p>实在无法归一的就按模块分打多包（包名相同）分发组合</p><p>b.多入口按需分发：</p><p>1+8个入口，扫码语音碰一碰负一屏桌面点击都能启动服务</p><h2 id="响亮的口号2-可分可合-自由流转" tabindex="-1"><a class="header-anchor" href="#响亮的口号2-可分可合-自由流转" aria-hidden="true">#</a> 响亮的口号2：可分可合，自由流转</h2><p>可分可合的前提是开发前期先把代码分好模块。</p><p>元服务的前提应用程序静默安装好的。</p><p>触手可及的前提是系统推荐展示给用户。</p><p>服务直达的前提就是元服务的前提已经静默安装过了。万能卡片也暂时前提是元服务，自由流转也是前提元服务，分为跨端迁移和多端协同。</p><p>一切的前提都是元服务，前提的前提是开发代码的时候分模块来开发！！！</p><p>所以这一点没啥好说的再说一遍 - 分模块 ！！！</p><h2 id="响亮的口号3-统一生态-原生智能" tabindex="-1"><a class="header-anchor" href="#响亮的口号3-统一生态-原生智能" aria-hidden="true">#</a> 响亮的口号3：统一生态，原生智能</h2><p>比丁春秋还要大的<s>野</s>雄心，这里主要讨论跨端俩字，比如鸠摩智使用小无相功来跨端使用少林绝技一样。这里必须扯一下主流跨平台框架uni-app x的生态确实越来越好了，这个框架即将实现支持苹果，说不准下一步就是该实现支持方舟。 其他主流框架正在由各大企业来主动适配，其中京东的trao做的挺早的，但是做得早也以为这更新快了容易受到背刺呀。马上35岁面临优化的人，如果穿越到慈禧时代不妨进宫当个太监熬一两年混到中关村，反正没几年蹦跶了。49蒋台逻辑类似前提是自己老了蹦跶不动。</p><p>下半句原生智能，这是百度陆奇那时的寻常寻常燕，现在飞入了百姓家。我本人是强烈推荐</p><p>没啥好总结的，年轻就all in梭哈，赌对了就单车变摩托，然后考个摩托证即可，年轻有的是资本。</p><h2 id="生态-官网" tabindex="-1"><a class="header-anchor" href="#生态-官网" aria-hidden="true">#</a> 生态-官网</h2><p>一个生态好不好，首先看主角，官网按照学习设计开发测试上架分发运维层层递进，我愿称之为一条龙服务。</p><p><strong>1鸿蒙生态应用开发白皮书</strong>：</p><p>这篇文章就是用自己的视角来解读它，难免片面，自己觉得挺赌到。白皮书的核心是说了三个大饼（趋势）和三句口号（理念）篇幅在前头的约五分一（24页），剩下的五分之四（总共128页）我就按照关键词（术语）来理解了</p><p>------------------分割线-------------------</p><p><strong>2Codelabs</strong>：理解成代码demo就行了，高级点的demo</p><p><strong>3视频课程、4技术文章、5指南、6ux设计、7API参考、8FAQ</strong>：官方文档很全面</p><p>这8点都是赋能套件</p><p>以下4点是开发套件</p><p>HarmonyOS Design 设计套件</p><p>DevEco Studio 开发IDE工具套件</p><p>DevEco Testing 测试套件（测试标准和测试工具）</p><p>AppGallery Connect 分发测试和运维分析套件</p><p>其他开放能力： 1.UI框架-ArkUI：声明式的很多组件和能力，理解成html里头的标签组件</p><p>2.Ability：能力很多可都是依赖这个单位，理解成化学课本里头的分子</p><p>3.分布式服务-总线-通信-文件数据库-多硬件成超级终端-多传感器感知：理解成家庭地板就是主板，地板上的很多设备分别是网卡内存硬盘等，这地板牛掰不</p><p>4.安全-浅度理解就是有权限有限制就安全，深度理解就是实现的复杂高就安全</p><p>5.方舟编译器（ArkCompiler），理解成java的jvm虚拟机有编译成字节码，后续运行的是字节码</p><p>6.通用的基础软件服务括多媒体、通信、图形、文件存储、升级、无障碍等</p><p>7.硬件服务包括电源、USB、泛sensor(传感器) 和位置服务(定位)等外设</p><p>8.App Service：理解成华为官方提供的账号推送支付广告等能力</p><p>三方库：这才是真的生态，越多生态越好，个人和组织贡献的越多越好</p><p>开发者支持平台：社区（论坛或群）、学堂（在线考华为的那个证）、成长计划（组织的活动）、技术支持（工单）</p><p>剩下的建议看一遍看原文，去搜《鸿蒙生态应用开发白皮书》，有版权声明不贴链接了</p><p>剩下的也是对三个大饼和三个口号的具体实现。挺细的值得一看，一遍即可。 真正经常看的还是官方的文档指南和API</p><p>再多一嘴，如下3个链接，1还能用，2华为持续维护，3是开放鸿蒙才最值得学</p><p>1鸿蒙官网 https://developer.harmonyos.com/</p><p>2华为官网 - 开发者联盟 https://developer.huawei.com/consumer/cn/doc/</p><p>3开放原子的OpenHarmony官网 https://www.openharmony.cn/docs/zh-cn/overview</p>',81),n=[d];function i(t,o){return a(),e("div",null,n)}const l=p(h,[["render",i],["__file","鸿蒙生态应用开发白皮书v2杂谈.html.vue"]]);export{l as default};
