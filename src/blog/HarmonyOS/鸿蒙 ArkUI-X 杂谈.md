## 鸿蒙ArkUI-X概览
### 是什么
ArkUI-X 是扩展 ArkUI 到多个OS平台（跨端开发类似如uniapp、flutter）
目前支持OpenHarmony、HarmonyOS、Android、 iOS 这 ~~4个~~ 3类平台，后续肯定会增加到也支持其他平台（具体规划还不清楚）想必PC端的Window和Mac

#### 各框架对比
https://blog.csdn.net/qq_35430000/article/details/119346964

0. uni-app x
2015年Dcloud基于Vue的app-vue语法在2016年开始商用uni-app
因为国产且跨端支持良好尤其是小程序一波形成了完善活跃的社区生态。
2023年基于TS的Uts语言发布 uni-app x （非升级而是另开新坑）
路线 doc.dcloud.net.cn/uni-app-x/#一期范围及路线图 
他评 zhihu.com/question/615604129/answer/3209692945
自评 mp.weixin.qq.com/s/j1xuhxiVwOnhEHKx1Hr6VQ

1. flutter
2018年谷歌用Dart语言渲染，
3.7有社区维护flutter支持鸿蒙 gitee.com/openharmony-sig/flutter_flutter

2. ArkUI-x
天生的支持鸿蒙
社区已于2023-12-15发布ArkUI-X-v1.0.0-Release版本, 详情请参考 
gitee.com/arkui-x/docs/blob/master/zh-cn/release-notes/ArkUI-X-v1.0.0-release.md

3. 其他类Vue的
腾讯kbone社区差、
美团Mpvue基本不维护了

4. 其他类React类
react native
2015年Facebook用React开源基因深厚社区生态国外占主流，类似于vue在国内一样是中流砥柱 
Taro 
2018年京东凹凸实验室基于React Native可以使用vue,但最终生产的代码是React 

#### 源码在哪儿
gitee.com/arkui-x 官方主库地址，但实际 github.com/orgs/arkui-x

ArkUI-x的特点优点就是ArkUI的那套说辞：
	声明式的语法；高效的渲染管线并且平台一致的渲染机制；方舟编译器的厉害。。。

### 入门
#### 入门文档
分俩方向：
0. 开发框架 https://gitee.com/arkui-x/docs/blob/master/zh-cn/framework-dev/design/design-overview.md 暂时不看如何造轮子了
1. 开发应用 https://gitee.com/arkui-x/docs/blob/master/zh-cn/application-dev/README.md 这个要看一遍。

#### 入门了解ArkUI-X

就是真的简单了解一下即可：

  [了解ArkUI-X开源项目](https://gitee.com/arkui-x/docs/blob/master/zh-cn/ArkUI-X-Overview-zh.md) 
  [术语](https://gitee.com/arkui-x/docs/blob/master/zh-cn/glossary.md)
  [版本说明](https://gitee.com/arkui-x/docs/blob/master/zh-cn/release-notes/README.md)

#### 入门快速开始

快速入门体验一下-

- [开发准备](https://gitee.com/arkui-x/docs/blob/master/zh-cn/application-dev/quick-start/start-overview.md) 参考[社区版本软件和工具配套关系](https://gitee.com/arkui-x/docs/blob/master/zh-cn/release-notes/ArkUI-X-v1.0.0-release.md#%E9%85%8D%E5%A5%97%E5%85%B3%E7%B3%BB)完成DevEco Studio的下载和安装注意IDE的版本比正常ArkTS要高，然后解压后安装、IDE的开发环境比如包管理器和SDK的下载、新建一个项目来体验一下点，点预览器，看看项目目录结构，汉化，调节IDE主题、字体大小等等

```
我是先卸载旧版IDE，双击旧版的安装包可以卸载一部分，剩下就是之前记录的那些目录也都清空一下。如下操作也都留份记录，未来删的时候按照如下目录来删。

这俩包管理的俩目录
C:\Users\RedmiG\node\node-16.20.1
C:\Users\RedmiG\ohpm\ohpm-1.2.5

配置ohpm环境 ohpm_home 并添加到PATH
通过DevEco Studio > File > Settings > Build, Execution, Deployment > Ohpm 查看ohpm home的安装路径

配置ArkUI-X SDK环境 ARKUIX_SDK_HOME 并添加到PATH
通过DevEco Studio > File > Settings > ArkUI-X查看ArkUI-X的安装路径
如果IDE没有集成ArkUI-X，正好赶紧在这里下载ArkUI-X的SDK进行集成：
我通过IDE的设置里把ArkUI-X的SDK安装到如下目录里：
C:\Users\RedmiG\AppData\Local\Huawei\Sdk
顺道集成一下OpenHarmony的SDK - 通过DevEco Studio > File > Settings > SDK > 从HarmonyOS切换到OpenHarmony 然后选个SDK版本号，比如APIversion10

开发环境检查
	ace check (配置sdk的环境变量后，可以在cmd命令行执行即可）
	在IDE终端如果收到微软权限可搜一下如何授权，
	还有右键IDE图标，尽量选一下兼容以管理员身份运行)
详情命令查看
	[ace config命令](https://gitee.com/arkui-x/cli#ace-config)
常用命令参考：
	[ACE Tools使用说明](https://gitee.com/arkui-x/cli/blob/master/README.md)

模拟器第一次安装，文件较大2G多，我的目录如下：
C:\Users\RedmiG\AppData\Local\Huawei\HarmonyOSEmulator\deployed
打开模拟器第一次会给手机模拟器安装系统，多等会，然后开启开发者调试（关于手机点几次版本号，然后返回进入系统和更新的开发人员选项开启USB调试）

真机也是如上开发者模式开启USB调试并且需要登陆华为账号然后签名
C:\Users\RedmiG\.ohos 这个目录如果签名失败，重新签名就清空此目录

安装Git、安装JDK、安装AndroidStudio并下载安卓的v9-v12几个常见版本SDK和SDK Tools里构建工具Build-Tools和命令行工具Command-line Tools最后配置一下环境变量ANDROID_HOME

```

#### 非命令行方式通过IDE方式：

- [ArkUI-X之初体验(IDE)](https://gitee.com/arkui-x/docs/blob/master/zh-cn/application-dev/quick-start/start-with-deveco-studio.md)

打开DevSco Studio，文件-新建-导入-导入示例工程，切换OpenHarmony后就能选择ArkUI-X示例项目了，会远程拉取。
文件-项目结构-签名，然后编译window可选app就是安卓，会把ArkTS代码和资源复制到安卓目录下。可以在.arkui-x\android\app\build\outputs\apk\release看到安卓包apk，当然正常应该去android studio进行导入项目后编译，第一次Gradle比较耗时

#### 命令行方式

- [ArkUI-X之初体验(命令行)](https://gitee.com/arkui-x/docs/blob/master/zh-cn/application-dev/quick-start/start-with-ace-tools.md)

ACE Tools 第一步，用这个命令行脚手架搭建一个空项目

[ACE Tools快速入门](https://gitee.com/arkui-x/docs/blob/master/zh-cn/application-dev/quick-start/start-with-ace-tools.md)

DevEco Studio 第二步，对上面那个空项目进行编写代码，写代码用这个IDE

[DevEco Studio使用说明](https://gitee.com/arkui-x/docs/blob/master/zh-cn/application-dev/tools/how-to-use-deveco-studio.md)

最后回到 ACE 编译打包，安装调试

ACE是除了编码阶段不行需要用到DevEco，其他阶段都用ACE来干活

#### [编写第一个ArkUI-X应用](https://gitee.com/arkui-x/docs/blob/master/zh-cn/application-dev/quick-start/start-with-ets-stage.md)
TODO 把官方组件的UI写成一个Demo出来

### 开发基础知识

- [应用工程结构介绍](https://gitee.com/arkui-x/docs/blob/master/zh-cn/application-dev/quick-start/package-structure-guide.md)
	- 生成的安卓和苹果的代码在哪个目录下
	- 这些代码产物可分为三大类：1.ArkTS源码也就是方舟字节码ArkByteCode、2.ArkUI应用资源也就是Resources资源、3.ArkUI框架资源保证各平台渲染一致。Android平台上通过assets管理、iOS平台上通过Bundle Resources管理。
	- 去Android应用工程结构里看看目录都有哪些
	- 去iOS应用工程结构里看看目录都有哪些
- [ArkUI-X SDK目录结构介绍](https://gitee.com/arkui-x/docs/blob/master/zh-cn/application-dev/quick-start/sdk-structure-guide.md)
	- 略
- [资源分类与访问](https://gitee.com/arkui-x/docs/blob/master/zh-cn/application-dev/quick-start/resource-categories-and-access.md)
- Ability开发说明
    - [Android平台](https://gitee.com/arkui-x/docs/blob/master/zh-cn/application-dev/quick-start/start-with-ability-on-android.md)
    - [iOS平台](https://gitee.com/arkui-x/docs/blob/master/zh-cn/application-dev/quick-start/start-with-ability-on-ios.md)
- 跨语言调用说明
    - [平台桥接(@arkui-x.bridge)](https://gitee.com/arkui-x/docs/blob/master/zh-cn/application-dev/quick-start/platform-bridge-introduction.md)
    - [FFI能力(Node-API)](https://gitee.com/arkui-x/docs/blob/master/zh-cn/application-dev/quick-start/ffi-napi-introduction.md)
- 平台差异化
    - [运行态差异化(@ohos.deviceInfo)](https://gitee.com/arkui-x/docs/blob/master/zh-cn/application-dev/quick-start/platform-different-introduction.md)
- [动态化介绍](https://gitee.com/arkui-x/docs/blob/master/zh-cn/application-dev/quick-start/dynamic-introduction.md)

实践，写一个ArkUI实例库出来 https://gitee.com/svvkcn/arkui_hello_svvkcn 