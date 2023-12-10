---
lang: zh-CN
title: TODO
description: 待做之事

index: false
order: 0
icon: check
date: 2023-12-11
category:
  - BUG集合
  - 学习笔记
  - 总结分享
  - 实践解决
tag:
  - todo
---

## Android
现阶段仍有使用 java 开发 Android 的应用
kotlin 也是 jvm 开发语言
哔哩哔哩 动脑学院 讲师合伙人 宁传奇
[2022 最新 Android 基础教程，更新中](https://www.bilibili.com/video/BV19U4y1R7zV/?p=1)
[谷歌官方课程](https://developer.android.google.cn/courses) 

### 1. 开发环境的搭建
介绍Android、
工具AndroidStudio的下载安装、
配置下载SDK、
基本使用-创建项目，
使用内置模拟器、
查看运行日志、
及解决问题

#### 01-前序
安卓（Android）是一种**基于Linux内核**的
自由及开放源代码的操作系统
安装 Android Studio
创建、运行、调式App工程

#### 02-Android发展历程
200508谷歌收购出资，AndyRubin开发的，2011超过塞班系统

##### Android发布版本
每年一个大版本
Android13  202202

##### AndroidStudio发展历程
2013年谷歌推出基于IntellijIDEA演变而来，
之前用Eclipse来开发
201305 AndroidStudio1.0
。。。
202005 AndroidStudio4.0
后来用昆虫动物命名

#### 03-Android开发机器配置要求
16G甚至32G内存

##### 硬件：
至少8G 1.5GHz 10G硬盘 USB插槽甚至无线网卡

##### 软件：
至少Windows7 64位

#### 04-Android Studio与SDK下载安装
[谷歌开发者中文网站](https://developer.android.google.cn/studio) 

##### 下载后安装
中间sdk暂时跳过

##### 下载SDK
Software Development Kit 软件开发包 
将app源码编译为可执行app应用

#### 05-创建工程与创建模拟器

##### 新建工程-空activity

##### 创建内置模拟器
AVD：Android Virtual Device
 
#### 06-观察app运行日志
Log工具

##### 日志级别
	从高到低
 Log.e   error 
 Log.w  warn 
 Log.i    info 
 Log.d   dubug 
 Log.v    verbose 冗余的 能看到如上四个级别
 
##### Logcat窗口
创建过滤器、
设置优先级、
搜索日志
修改消息中显示的信息量、
异常-相关联的堆栈轨迹、
从 Android Studio 2.2 开始**Run** 窗口能看，
但是无法配置的 

#### 07-环境安装可能遇到的问题
在windows或mac系统上，再开linux系统
需要一个虚拟化的支持

##### BIOS Security Virtualization Enabled 
红米笔记本默认是开启的
虚拟机加速需要使用 Hypervisor

##### 其他问题看官网

#### 08-小结-练习一下

### 2. App开发基础
* 开发特点
	* 运行环境-模拟器和真机
	* 开发语言-官方 Java Kotlin 和 其他
	* 连接数据库-内置 SQLite
* 工程结构
	* 目录结构
	* 编译配置 build.gradle
	* 运行配置 AndroidMainfest.xml
* 设计规范
	* 界面设计-利用 XML 标记描绘应用界面
	* 代码逻辑-使用 Java 代码书写程序逻辑
* 活动页面
	* 创建一个界面
	* 快速生成页面源码
	* 页面跳转

#### 09-运行使用真机调试
连上线-有驱动-开发者-USB调试
1、插上usb线
2、电脑自动安装手机的驱动，失败就用第三方手机助手安装好手机的驱动
3、手机系统设置开发者选项，点击多次版本会开启
4、更多设置开发者选项里开启USB调试
原理是 ADB 连接，用手机助手容易占用 ADB 连接导致 AS 连不上手机
WIFI连接：同一无线网络，搭载的是 Android 11 或更高版本

#### 10-开发涉及到的编程语言
两大技术路线

##### 原生开发
好处是渲染快
Java 和 Kotlin

##### 混合开发
好处是不用总更新apk
跨端多平台

##### 其他语言
甚至为了性能还会使用 C++ 比如音视频图像处理 VDK
还有 XML 标记语言也能开发，这是命令式的，未来是声明式 UI 的天下

##### 数据库语言？
已经嵌入 SQLite 数据库语言，因本地省开销

#### 11-工程目录结构
项目-模块-结构目录
Gradle-依赖-打包-部署-各种渠道的差异管理

#### 12-编译配置文件build.gradle
编译 build 利用工具 gradle 构建

##### 项目级别
当前项目级别的编译规则

##### 模块级别
当前模块级别的编译规则

##### 版本兼容性
插件版本号
依赖版本号
Android Studio 版本 和 Gradle 版本 也是对应的
sdk 和 api 也是要大版本对应的
项目也有版本号

#### 13-清单文件AndroidManifest.xml
根目录必备。
App的**配置信息**
主启动 Activity

#### 14-界面显示与逻辑处理
界面设计 和 代码逻辑 分开：
* 方便页面的预览，
* 方便页面的复用，
* 方便逻辑的复用

##### 界面显示
利用XML标记描绘应用界面
相当于 web 的 html

##### 逻辑处理
使用Java代码书写程序逻辑
相当于 web 的 js

#### 15-Activity创建与跳转
##### 三个步骤：
1. 在 layout 目录下创建 XML 文件
2. 创建与 XML 文件对应的 Java 代码
3. 在 AndroidManifest.xml 中注册页面配置

##### 快速生成页面源码
* 右键New-Activity-Empty Activity

#### 16-小结-练习一下
开发前的预备知识

### 3. 简单控件
* 文本显示
	* 内容
	* 大小
	* 颜色、背景
* 视图基础
	* 宽高
	* 间距
	* 对齐方式
* 常用布局
	* 线性布局
	* 相对布局
	* 网格布局
	* 滚动视图
* 按钮触控
	* 按钮空间 Button
	* 点击事件和长按事件
	* 禁用与恢复按钮
* 图像显示
	* 图像视图 ImageView
	* 图像按钮 ImageButton
	* 同时展示文本和图像
* 小结-计算器

#### 17-设置文本的内容
XML android:text
Java setText

#### 18-设置文本的大小
Java setTextSize 默认单位 sp 
XML android:textSize 需要指定字号单位
px  与显屏分辨率有关
dp  只与屏幕尺寸有关
sp  跟随系统设置有关

#### 19-设置文本的颜色
Java setTextColor
XML android:textColor 需要指定字号单位
三原色RGB
透明，Java 默认透明，XML 默认不透明
十六进制 0x，
FF -越亮 越不透，
00 -越暗 越透明

##### 背景 Background
Java setBackgroundColor
Java setBackgroundResource 来源于资源文件
XML android:background

#### 20-设置视图的宽高

##### XML方式
android:layout_width
android:layout_height
match_parent 与上级视图保持一致
warp_content 内容自适应
dp 单位

##### Java方式
单位默认是 px ，需借用工具类把dp转化成px值
首先确保 XML 的宽高属性是 **wrap_content** 
调用控件对象的 **getLayoutParams** 方法，获取该空间的布局参数
修改布局参数的属性 width 宽度、 height 高度
调用控件对象的 **setLayoutParams** 方法，填入修改后的布局参数

#### 21-设置视图的间距
外间距 layout_margin
内间距 padding
含上下左右

#### 22-设置视图的对齐方式

##### layout_gravity 
指定了当前视图相对于上级视图的对齐方式
为了适应阿拉伯从右往左，逐渐用start和end

##### gravity 
指定了下级视图相对于当前视图的对齐方式
含上下左右
还可以用竖线连接，比如 left|top 表示即靠左又靠上

#### 23-LinearLayout
线性布局
默认 **orientation** 属性值为 **horizontal** 内部视图是 水平布局 

##### horizontal
水平

##### vertical 
垂直

##### 线性布局的权重
是线性布局的 下级视图 各自拥有多大比例的宽高
layout_weight 但该属性不再布局节点，而是在布局的下级视图来设置
layout_widht 填 0dp 时，layout_weight 表示水平方向的 宽度 比例
layout_height 填 0dp 时，layout_weight 表示垂直方向的 高度 比例

#### 24-RelativeLayout
相对布局
相对布局的下级视图由其他视图决定
用于确定下级视图位置的参照物分两种
* 与该视图自身平级的视图
* 该视图的上级视图

#### 25-GridLayout
网格布局支持多行多列的表格排列
默认从左到右、从上到下
columnCount 指定了网格的列数
rowCount 指定了网格的行数

#### 26-ScrollView
滚动视图

##### ScrollView 
垂直方向的滚动
layout_width=match_parent,layout_height=wrap_content

##### HorizontalScrollView
水平方向的滚动
layout_height=match_parent,layout_width=wrap_content

#### 27-Button
Button 继承自 TextView
* 默认的按钮背景
* 默认内部文本居中对齐
* 默认英文字母转化成大写

两个属性：
* textAllCaps 默认 true，改成 false 就可以不做大写转化
* onClick 接管点击动作的事件，此方法即将过时

#### 28-点击事件
不推荐 xml 里 onClick 高耦合
推荐使用监听器写法，
可以写一个静态的内部类实现接口重写 onClick 方法
也可以匿名内部类

##### 监听器
专门监听控件的动作行为后触发开关执行对应代码逻辑

##### 点击监听
通过 setOnClickListener 来设置，按钮按住少于 500 毫秒会触发

##### 长按监听
通过 setOnLongClickListener 来设置，按钮被按住超过 500 毫秒会触发

#### 29-长按点击事件
监听器写法：
* 可以写一个静态的内部类实现接口重写 onClick 方法
* 也可以匿名内部类重写 onClick 方法，甚至 lambda 表达式写法

#### 30-禁用与恢复按钮
实际业务中按钮的两种状态
不可用按钮：按钮点击没反应，同时文字为灰色
可用按钮：允许点击触发事件，文字黑色
通过属性 **enabled** 控制，true正常，false不允许

#### 31-ImageView
图像视图展示的图像通常位于 res/drawable*** 目录

##### 设置图片的两种方式
XML  android:src       @drawable/不含扩展名的图片名
Java setImageResource  R.drawable.不含扩展名的图片名

##### 缩放类型
scaleType 默认居中显示 fitCenter

#### 32-ImageButton
图像按钮，继承自 ImageView， 而非继承 Button
Button 即可以显示文本又可以显示图片，ImageButton 只能显示图片
ImageButton 上的图片可以按比例缩放，而 Button 通过背景设置的图像会拉伸变形
Button 只能靠背景显示一张图片，而 ImageButton 可在前景和背景实现叠加效果
有些文本字符无法输入法打出来，就可以利用图片切图实现展示
Imagebutton 有默认按钮背景， ImageView 默认无背景
ImageButton 默认缩放类型为 center， 而 ImageView 默认缩放类型 fitCenter

#### 33-同时展示文本与图像
1. 利用 LinearLayout 对 ImageView 和 TextView 组合布局
2. 通过 Button 的 drawable*** 属性设置文本周围的图标

#### 34-计算器-界面
分析页面结构，总体分为两部分
1. 上方显示框 展示用户输入
2. 下方按钮框 1-9+-*/=等按钮
分析各部分要用到的控件和如何实现

#### 35-计算器-逻辑

#### 36-小结


四大组件
* activity 活动界面
* service 服务
* content provider 内容提供者
* broadcast receiver 广播接收者

### 4.activity
Activity活动
* 启停活动页面
	* Activity的启动和结束
	* Activity的生命周期
	* Activity的启动模式
* 在活动之间传递消息
	* 显式Intent和隐式Intent
	* 向下一个Activity发送消息
	* 向上一个Activity返回数据
* 为活动补充附加信息
	* 利用资源文件配置字符串
	* 利用元数据传递配置信息
	* 给应用页面注册快捷方式

#### 37-Activity启动与结束
* 从当前页面跳转到新页面，跳转代码如下
	* startActivity（new Intent（源页面.this, 目标页面.class））;
* 从当前页面返回上一个页面，相当于关闭当前页面，返回代码如下
	* finish（）； //结束当前活动的页面 页面栈

#### 38-Activity生命周期
生命周期就是从出到死的几种状态

##### 各状态对应的方法
* onCreate
	* 创建活动。页面布局加载进内存，进入初始状态。
* onStart
	* 开始活动。活动页面显示在屏幕，进入就绪状态。
* onResume
	* 恢复活动。活动页面允许能交互，进入活跃状态。
	* 一般动画处理在这里开始，例如响应用户点击、输入等
* onPause
	* 暂停活动。无法与用户正常交互，进入暂停状态。
	* 一般动画处理在这里结束。
* onStop
	* 停止活动。页面将不在屏幕显示，
* onDestroy
	* 销毁活动。回收活动占用的系统资源，把页面从内存中清除
* onRestart
	* 重启活动。重新加载内存中的页面数据。
* onNewIntent
	* 重用已有的活动实例。

##### 各状态之间切换过程
* 打开新页面的方法调用顺序
	* 不存在- onCreate -初始状态- onStart -就绪状态- onResume -活跃状态
* 关闭旧页面的方法调用顺序
	* 活跃状态- onPause -就绪状态- onStop -初始状态- onDestory -不存在

#### 39-Activity启动模式
Activity启动模式 就是 启动方式，压栈方式，也叫任务栈Task栈，
* 可以设置多种启动模式
* 两种设置方法：XML 和 Java 
* 两种方式配合使用，xml是已经配置好，Java是有需要的时候动态配置

##### XML
XML android：launchMode 默认 standard 标准模式

###### 默认启动模式standard
标准

###### 栈顶复用模式singleTOP
栈顶复用
* 适合开启渠道多、多应用开启调用的Activity，可避免已创建过的Activity被重复创建，多数通过动态设置使用

###### 栈内复用模式singleTask
不是栈顶复用，而是栈内就有就复用，复用时会把这个上面的页面都弹出栈
* 适合程序的主界面：肯定不希望主界面创建多次而且主界面退出能退出整个app是最好的效果
* 还适合耗费系统资源的Activity，能减少资源耗费

###### 全局唯一模式singleInstance
会额外启动一个Task且栈内仅有一个页面，
额外的这个Task栈会成位前台栈，
其他Task栈保持不变，但会成后台栈，
每个Task栈返回到内空就会销毁

##### Java 动态设置启动模式
	new Intent(this, BActivity.class)
		.setFlags(
			Intent.FLAG_ACTIVITY_CLEAR_TASK
			|
			Intent.FLAG_ACTIVITY_NEW_TASK
		)
* **FLAG_ACTIVITY_NEW_TASK**
	* 开辟一个新的任务栈
* **FLAG_ACTIVITY_SINGLE_TASK**
	* 
* **FLAG_ACTIVITY_CLEAR_TOP**
	* 当栈中不存在此实例，就压栈添加一个进去。
	* 当栈中存在待跳转的活动实例时，则重新创建该活动实例，并清除原实例上所有实例
		* 如同时设置 **FLAG_ACTIVITY_SINGLE_TOP**,则重用栈内
		* 如没有同时设置，就销毁后重新创建
* **FLAG_ACTIVITY_CLEAR_TASK**
	* 栈中原有实例都被清空，不过这也意味着当前栈没法用了，需要开辟新任务栈
* **FLAG_ACTIVITY_NO_HISTORY**
	* 栈中不保存新启动的活动实例
* 按位运算符 **|** 
	* 0|0=0  * 0|1=1  * 1|0=1  * 1|1=1  * 

#### 40-显示Intent和隐式Intent
Intent（意图）是各个组件之间信息沟通的桥梁，它用于Android各组件之间的通信，主要完成如下工作：
* 标记本次通信请求从哪里来、到哪里去、要怎么走
* 发起方携带本次通信需要的数据内容，接收方从收到的意图中解析数据
* 发起方若想判断接收方的处理结果，意图就要负责让接收方传回应答的数据内容

##### Intent的组成部分
|元素名称 |设置方法 |说明与用途 |
|:--- |:--- |:--- |
|Compent |setComponent |组件，它指示意图的来源与目标 |
|Action |setAction |动作，它指示意图的动作行为 |
|Date |setDate |即Uri，它指示动作要操作的数据路径 |
|Category |addCategory |类别，它指示意图的操作类型 |
|Type |setType |数据类型，它指示消息的数据类型 |
|Extras |putExtras |扩展信息，它指示装载的包裹信息 |
|Flags |setFlags |标志位，它指示活动的启动标志 |

##### 显示Intent
显示Intent，直接指定来源活动与目标活动，
属于精准匹配。它有三种构建方式：
1. Intent构造函数
Intent intent = new Intent(this, TagActivity.class);
2. Intent的setClass方法
intent.setClass(this, TagActivity.class);
3. 调用意图对象的setComponent方法
ComponentName c = new ComponentName(this, TagActivity.class);
ComponentName c = new ComponentName("包名", "类名");
intent.setComponent(this, TagActivity.class);
startActivity(intent);

##### 隐式Intent
没有明确指定要跳转的目标活动，只给出一个动作字符串让系统自动匹配，
属于模糊匹配。常见的系统动作：
|系统动作常量名 |系统动作的常量值 |说明 |
|:--- |:--- |:--- |
|ACTION_MAIN |android.intent.action.MAIN |App启动时的入口 |
|ACTION_VIEW |android.intent.action.VIEW |向用户显示数据 |
|ACTION_SEND |android.intent.action.SEND |分享内容 |
|ACTION_CALL |android.intent.action.CALL |直接拨号 |
|ACTION_DIAL |android.intent.action.DIAL |准备拨号 |
|ACTION_SENDTO |android.intent.action.SENDTO |发送短信 |
|ACTION_ANSWER |android.intent.action.ANSWER |接听电话 |

Intent intent = new Intent();
// 举例1 设置 意图动作是 拨号
String phoneNo = "123456";
intent.setAction(Intent.ACTION_DIAL);
Uri uri = Uri.parse("tel:" + phoneNo);
// 举例2 设置 意图动作是 发短信
intent.setAction(Intent.ACTION_SENDTO);
Uri uri = Uri.parse("smato:" + phoneNo);
intent.setData(uri);
// 举例3 设置 意图动作是 跳到其他自己的应用 // 目标应用的xml的activity设置exported="true", 并设置intent-filter的action和category // 如果有多个应用会提示让选一个
intent.setAction("my action name")
intent.setCategory(Intent.CATEGORY_DEFAULT);
startActivity(intent);

#### 41-向下一个Activity发送数据
Intent 使用 Bundle 对象存放待传递的数据消息
Bundle 对象类似JOSNObject 有getInt putInt
发送消息包裹，调用意图对象的putExtras方法，即可存入消息包裹。
接收消息包裹，调用意图对象的getExtras方法，即可取出消息包裹。

#### 42-向上一个Activity返回数据
步骤：
* 上一个页面打包好请求数据，调用startActivityForResult方法执行跳转动作
* 下一个页面接收并解析请求数据，进行相应处理
* 下一个页面在返回上一个页面时，打包应答数据并调setResult方法返回数据包裹
* 上一个页面重写方法onActivityResult,解析获得下一个页面的返回数据
onActivityResult过时了用registerForActivityResult

#### 43-利用资源文件配置字符串
xml文件不需要编译，比较灵活

#### 44-利用元数据传递配置信息
比如用第三方的sdk，高德地图、友盟、微信登陆等会给一个Token用于人家的验证
getPackageManage().getActivityInfo(getComponentName(), PackageManager.GET_META_DATA).metaData.getString("XxxsdkName");

#### 45-给应用页面注册快捷方式
还能传递复杂的数据，7.0快捷方式菜单shortcuts.xml

#### 46-小结

### 5.中级控件
常见的几种中级控件的用法，主要包括：如何定制几种简单的图形、如何使用几种选择按钮、如何高效的输入文本、如何利用对话框获取交互信息等
* 图形定制
	* 图形Drawable
	* 形状图形
	* 九宫格图片
	* 状态列表图形
* 选择按钮
	* 复选框CheckBox
	* 开关按钮Switch
	* 单选按钮RadioButton
* 文本输入
	* 编辑框EditText
	* 焦点变更监听器
	* 文本变化监听器
* 对话框
	* 提醒对话框AlertDialog
	* 日期对话框DatePickerDialog
	* 时间对话框TimePickerDialog

#### 47-图形Drawable
能够显示的图形都抽象为Drawable类（可绘制的）。这里的图形不止是图片，还包括色块、画板、背景等
包含图片在内的图形文件放在res目录下的drawable目录下，其中drawable目录一般保存描述性的XML文件，而图片文件一般放在具体的分辨率drawable目录下，例如
drawable-ldpi 里放低分辨率dd的图片如240x320，现在基本没这低配手机。
drawable-mdpi 里放中等分辨率320x480，现在手机很少这样的
drawable-hdpi 里放高分辨率480x480，一般4-4.5英寸，视手机分辨率吧
drawable-xhdpi  加高 720x1280 一般5-5.5
drawable-xxhdpi 超高 1080x1920 一般6-6.5
drawable-xxhdpi 超超高 1440x2560 一般7以上的平板电脑啦
基本上，分辨率每加大一级，宽度和高度就要增加二分之一或三分之一像素。
为了适配不同分辨率的硬件
各视图的background属性、ImageView 和 ImageButton 的 src 属性、TextView 和 Button 四个方向的drawable*** 系列都可以引用图形文件

#### 48-形状图形
Shape图形又称形状图形，它用来描述常见的几何形状，包括矩形、圆角矩形、圆形、椭圆等等，可以节省美工不少工作量。
形状图形的定义文件放在drawable目录下，他是以shape标签为根节点的XML描述文件。根节点下定义6个节点：size尺寸、shroke描边、cornners圆角、solid填充、padding间隔、gradient渐变，各节点的属性值主要是长宽、半径、角度以及颜色等
* shape形状
	* 根节点，默认rectangle矩形；椭圆oval此时corners节点失效；直线line此时必须设置stroke节点否则报错；ring圆环
* size尺寸
	* 若无size节点则表示宽高与宿主视图一样大小
	* height 像素类型图形高度
	* width 像素类型图像宽度
* shroke描边
	* 若无则表示不存在描边
	* color 颜色类型，描边颜色
	* dashGap 像素类型，每段虚线之间的间隔
	* dashWidth 像素类型，每段虚线的宽度，若dashGap或dashWidth有一个值为0则描边是实现
	* width 像素类型，描边厚度
* cornners圆角
	* 若无则表示没有圆角
	* bottomLeftRadius 像素类型，左下圆角的半径
	* bottomRightRadius 像素类型，右下圆角的半径
	* topLeftRadius 像素类型，左上圆角的半径
	* topRightRadius 像素类型，右上圆角的半径
	* radius 像素类型，4个圆角的半径
* solid填充
	* 若无则无填充色，color 颜色类型，内部填充色
* padding间隔
	* 与周围边界的间隔，无则无，可以有top、bottom、left、right
* gradient渐变
	* 颜色渐变如ps渐变
	* angle 整型，渐变的起始角度。为0时表示时钟的9点位置，逆时针增大
	* type 字符串类型，渐变类型：默认liner线性、radial放射、sweep滚动渐变即一个线段以某个端点为圆心做360度旋转

#### 49-点9图片
又称九宫格图片
当图片尺寸过小，此时背景自动拉伸填充导致图片变得模糊
xxx.9.png
设置好了之后就xml和java再改padding就不生效了

#### 50-状态列表图形
|状态类型的属性名称 |说明 |适用的控件 |
|:--- |:--- |:--- |
|state_pressed |是否按下 |按钮Button |
|state_checked |是否构选 |复选框CheckBox、单选按钮RadioButton |
|state_focused |是否获取焦点 |文本编辑框EditText |
|state_selected |是否选中 |各控件通用 |

#### 51-复选框CheckBox
xml-CheckBox-android:checked="true"
xml-CheckBox-android:button="@drawable/xxx"
java-setChecked 设置按钮的勾选状态
java-setButtonDrawable 设置左侧构选图标的图形资源
java-setOnCheckedChangeListener 设置勾选状态变化的监听器
java-isChecked 判断按钮是否勾选
CompoundButton继承于Button继承于TextView继承于View

#### 52-开关按钮Switch
实际开发经常使用CheckBox定一个开关，而不是用Switch

#### 53-单选按钮RadioButton
RadioGroup实际是一个布局，若不指定orientation则垂直布局
RadioButton

#### 54-编辑框EditText
属性:
maxLength 文本允许输入的最大长度
hint 文本的内容
textColorHint 文本的颜色

##### inputType类型：
如下若同时使用多种文本类型，则可使用竖线拼接起来
text 文本
textPassword 文本密码
number 整型数
numberSigned 带符号的数字。允许开头带负号-
numberDecimal 带小数的数字
numberPassword 数字密码
datetime 时间日期格式。除了数字外，还允许输入横线、斜杠、空格、冒号
date 日期格式。除了数字外，还允许输入横线和斜杠
time 时间格式。除了数字外，还允许输入冒号

#### 55-焦点变更
编辑框点击一次只触发焦点变更事件，第二次点击才触发点击事件
setOnFocusChangeListener

#### 56-文本变化监听器
addTextChangedListener 编辑框对象的此方法是注册文本监听器
TextWatcher 其接口名
beforeTextChanged 其接口要实现的方法-文本改变前触发
onTextChanged 其接口要实现的方法--文本改变过程中触发
afterTextChanged 其接口要实现的方法--文本改变后触发

#### 57-提醒对话框AlertDialog
提示、确认、选择
标题、内容、否认按钮、肯定按钮
AlertDialog.Builder builder
	= new AlertDialog.Builder(this);
builder.setIcon设置对话框的标题图标；
builder.setTitle("这是标题");
builder.setMessage("这是消息");
builder.setPositiveButton("是,积极的,残忍卸载", (dialog, which) -> {
	
});
builder.setNegativeButton("否,消极的,我再想想", (dialog, which) -> {
	
});
builder.create();
builder.show();

#### 58-日期对话框DatePickerDialog
虽然有 TextView 的类型**type=date**但很少有人这样手动输入完整日期；
虽然也有 DatePicker 日期**选择器**，
但更多时候用的是日期**对话框** DatePickerDialog
xml-DatePicker-
* datePickerMode="spinner" && calendarViewShown="false"
* datePickerMode="calendar" 


