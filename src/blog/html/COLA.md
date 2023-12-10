
https://github.com/alibaba/COLA


# COLA
## COLA 1
https://blog.csdn.net/significantfrank/article/details/85785565
因为系统变的复杂臃肿，最终形成了COLA，一个基于扩展点+元数据+CQRS+DDD的应用架构；
## 系统复杂性来源四个方面：
### 可扩展性差
扩展点（Extension Point），或者叫插件（Plug-in）的设计。
字段扩展。
### 面向过程
工程师要具备业务Sense，产品Sense，数据Sense，算法Sense，还要有工程能力。
不了解SOLID原则，不懂设计模式，不会画UML图，或者从来不会运实践。
（抽象能力，设计模式，架构模式，UML，以及阅读优秀框架源码）
不会进行领域建模
研读一下Eric Evans的《领域驱动设计》，升级认知。
DDD将业务语义显现化了。
	Programs must be written for people to read, and only incidentally for machines to execute
### 分层不合理
	All problems in computer science can be solved by another level of indirection
分层最大的好处就是分离关注点，让每一层只解决该层关注的问题，从而将复杂的问题简化，起到分而治之的作用。
### 随心所欲
缺少规范和约束
	Just because you can, doesn’t mean you should
架构的约束毕竟有限，更多的还是要靠Code Review
## 复杂性应对之道
### 扩展点设计
抽象的扩展点机制
#### 身份识别
TODO
#### 扩展点
TODO
### 面向对象
	SOLID是单一职责原则(SRP)，开闭原则(OCP)，里氏替换原则(LSP)，接口隔离原则(ISP)和依赖倒置原则(DIP)的缩写**，原则是要比模式（Design Pattern）更基础更重要的指导准则，是面向对象设计的Bible
#### 单一职责
反面就是上帝类揽一堆功能，导致内聚性差，难被复用，只能复制
#### 依赖倒置
#### 领域建模
	DDD不是一个架构，而是思想和方法论
[复杂性应对之道 - 领域建模](https://blog.csdn.net/significantfrank/article/details/79614915)
[事务脚本 vs 领域模型](https://blog.csdn.net/weixin_36380516/article/details/132614118)
强烈建议使用DDD代替事务脚本（TS: Transaction Script）。因为TS的贫血模式，里面只有数据结构，完全没有对象（数据+行为）的概念，这也是为什么我们叫它是面向过程的原因。

然而DDD是面向对象的，是一种知识丰富的设计（Knowledge Rich Design），怎么理解？，就是通过领域对象（Domain Object），领域语言（Ubiquitous Language）将核心的领域概念通过代码的形式表达出来，从而增加代码的可理解性。这里的领域核心不仅仅是业务里的“名词”，所有的业务活动和规则如同实体一样，都需要明确的表达出来。
##### 业务语义显性化
好的代码不仅要让程序员能读懂，还要能让领域专家也能读懂。
##### 通用语言
### 分层设计
三个大的层次，分别是App层，Domain层和Infrastructure层
### 规范设计
#### 放对位置
#### 贴好标签
##### 类名约定
##### 方法名约定
##### 错误码约定
主要分为**系统异常和业务异常**
系统异常是指不可预期的系统错误，如网络连接，服务调用超时等，是可以retry的；而业务异常是指有明确业务语义的错误，再细分的话，又可以分为参数异常和业务逻辑异常，参数异常是指用户过来的请求不准确，逻辑异常是指不满足系统约束，比如客户已存在。业务异常是不需要retry的。

|错误类型|错误码约定|举例|
|---|---|---|
|参数异常|P_XX_XX|P_CAMPAIGN_NameNotNull: 运营活动名不能为空|
|业务异常|B_XX_XX|B_CAMPAIGN_NameAlreadyExist: 运营活动名已存在|
|系统异常|S_XX_ERROR|S_DATABASE_ERROR: 数据库错误|

##### Domain Event约定





- service prodiver端即服务提供者；
- service facade端即服务消费端（按照J2EE的标准称呼叫facade，还有人喜欢叫proxy端，消费端是中国人的说法）；