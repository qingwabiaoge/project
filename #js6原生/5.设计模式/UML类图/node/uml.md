#### 结构元素

结构元素包括，类，对象，接口，用例，参与者。

##### 类图

![img](img/class.jpg)
类图图示

   类图是UML中最基本的元素了吧？根据OO的思想“天下一切皆对象”，而类是对象的抽象。 
   左侧图示为一个类图。顶端“ClassName”表示类名 
   中间部分为该类的属性，其中分别表示为可访问性，属性名，以及属性的数据类型。 
   第三部分为该类的方法，包括方法的可访问性，方法名，方法的参数以及方法的返回值。 
   需要说明的是：

- ​     “#”表示protected 
  ​     “+”表示Public
  ​     “-”表示private
  ​       “i”表示internal



##### 对象图

![img](img/Obj.jpg)

右侧图示为一对象图，该对象为类className类的一个实例对象

该图第一部分说明了该对象为className的一个实例，第二部分指定了该实例的属性值。该图指定的是一个特殊的实例的对象，如果要代表className的所有的对象可省略掉对象名，即为“:ClassName”。

##### 接口

![img](img/Interface.jpg)
类图图示

左图为一个比较简单的接口事例图示。与类图差不多，该图示分为三部分，第一部分为接口名，为了更明确的标明其“接口”的身份通常以“I”开头。第二部分为属性，第三部分为方法。

 

##### 用例与参与者

下图为一简单的用例视图。小人表示参与者，而椭圆表示的是用例。

![img](img/Case.jpg)
用例与参与者图示



##### 包

![img](img/Packbag.jpg)

右侧图示为一包图，该图示为一名称为Utility的工具包。

包用来组织类，被包含在包里的类一般通过如Utility::StrUtility的形式来反应该类的路径。

#### 关系

   关系元素包括了聚集，组成，实现，继承，依赖，关联等。

##### 关联

![img](img/guanlian.jpg)
关联图示

   关联是类之间的联系，如篮球队员与球队之间的关联（下图所示）。其中，关联两边的"employee"和“employer”标示了两者之间的关系，而数字表示两者的关系的限制，是关联两者之间的多重性。通常有“*”（表示所有，不限），“1”（表示有且仅有一个），“0...”（表示0个或者多个），“0，1”（表示0个或者一个），“n...m”(表示n到m个都可以),“m...*”（表示至少m个）。
   在关联中有一种叫“限定关联”，还有一种谓之自身关联。另外，对象之间的关联就没那么复杂，只是将类的关联实例化而已。

##### 依赖

![img](img/ylai.jpg)
依赖图示

依赖是表示一个类中使用了另外一个类，最常用的依赖是在类A的方法中使用了类B，那么A依赖B。如上图所示。

##### 继承

![img](img/jchen.jpg)
继承图示

这里的继承是指子类对父类的关系。理解面向对象的各位对继承应该不陌生。啥也不说，看看图好了。
继承使用空心箭头表示继承的方向，用实线连接。

##### 实现

![img](img/shixian.jpg)
实现图示

实现指的是类对接口的实现。接口实现的表示与继承的表示差不多，只是将实线变为了虚线。

##### 聚集

![img](img/juji.jpg)
聚集图示

一个类可能有几个部分类聚集在一起而成。如：电脑主机由CPU，主板，光驱....等组成。类与类之间是“整体-部分”的关系。

##### 组合

![img](img/zucheng.jpg)
组成图示

组成是强类型的聚集，每个部分体只能属于一个整体。如桌子由桌腿和桌面组成。



# [UML类图关系大全](http://www.cnblogs.com/riky/archive/2007/04/07/704298.html)

1、关联
![img](img/doubleAssoc.JPG)

双向关联：
C1-C2：指双方都知道对方的存在，都可以调用对方的公共属性和方法。

在GOF的设计模式书上是这样描述的：虽然在分析阶段这种关系是适用的，但我们觉得它对于描述设计模式内的类关系来说显得太抽象了，因为在设计阶段关联关系必须被映射为对象引用或指针。对象引用本身就是有向的，更适合表达我们所讨论的那种关系。所以这种关系在设计的时候比较少用到，关联一般都是有向的。

使用ROSE 生成的代码是这样的：

![img](img/None.gif)class C1 
![img](img/ExpandedBlockStart.gif)![img](img/ContractedBlock.gif)...{
![img](img/InBlock.gif)public:
![img](img/InBlock.gif)  C2* theC2;
![img](img/InBlock.gif)
![img](img/ExpandedBlockEnd.gif)};
![img](img/None.gif)
![img](img/None.gif)class C2 
![img](img/ExpandedBlockStart.gif)![img](img/ContractedBlock.gif)...{
![img](img/InBlock.gif)public:
![img](img/InBlock.gif)  C1* theC1;
![img](img/InBlock.gif)
![img](img/ExpandedBlockEnd.gif)};

双向关联在代码的表现为双方都拥有对方的一个指针，当然也可以是引用或者是值。



![img](img/uniAssoc.JPG)

单向关联:
C3->C4：表示相识关系，指C3知道C4，C3可以调用C4的公共属性和方法。没有生命期的依赖。一般是表示为一种引用。

生成代码如下：

![img](img/None.gif)class C3 
...{
![img](img/InBlock.gif)public:
![img](img/InBlock.gif)  C4* theC4;
![img](img/InBlock.gif)
![img](img/ExpandedBlockEnd.gif)};
![img](img/None.gif)
![img](img/None.gif)class C4 
![img](img/ExpandedBlockStart.gif)![img](img/ContractedBlock.gif)...{
![img](img/InBlock.gif)
![img](img/ExpandedBlockEnd.gif)};

单向关联的代码就表现为C3有C4的指针，而C4对C3一无所知。



![img](img/selfAssoc.JPG)

自身关联（反身关联）：
自己引用自己，带着一个自己的引用。

代码如下：

![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)class C14 
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ExpandedBlockStart.gif)![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ContractedBlock.gif)...{
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/InBlock.gif)public:
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/InBlock.gif)  C14* theC14;
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/InBlock.gif)
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ExpandedBlockEnd.gif)};

就是在自己的内部有着一个自身的引用。

2、聚合/组合

当类之间有整体-部分关系的时候，我们就可以使用组合或者聚合。

![img](img/Aggregation.JPG)

聚合：表示C9聚合C10，但是C10可以离开C9而独立存在（独立存在的意思是在某个应用的问题域中这个类的存在有意义。这句话怎么解，请看下面组合里的解释）。

代码如下：

![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)class C9 
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ExpandedBlockStart.gif)![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ContractedBlock.gif)...{
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/InBlock.gif)public:
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/InBlock.gif)  C10 theC10;
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/InBlock.gif)
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ExpandedBlockEnd.gif)};
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)class C10 
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ExpandedBlockStart.gif)![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ContractedBlock.gif)...{
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/InBlock.gif)
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ExpandedBlockEnd.gif)};
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)

 

![img](img/Composition.JPG)

组合（也有人称为包容）：一般是实心菱形加实线箭头表示，如上图所示，表示的是C8被C7包容，而且C8不能离开C7而独立存在。但这是视问题域而定的，例如在关心汽车的领域里，轮胎是一定要组合在汽车类中的，因为它离开了汽车就没有意义了。但是在卖轮胎的店铺业务里，就算轮胎离开了汽车，它也是有意义的，这就可以用聚合了。在《敏捷开发》中还说到，A组合B，则A需要知道B的生存周期，即可能A负责生成或者释放B，或者A通过某种途径知道B的生成和释放。

他们的代码如下：

![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)class C7 
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ExpandedBlockStart.gif)![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ContractedBlock.gif)...{
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/InBlock.gif)public:
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/InBlock.gif)  C8 theC8;
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/InBlock.gif)
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ExpandedBlockEnd.gif)};
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)class C8 
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ExpandedBlockStart.gif)![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ContractedBlock.gif)...{
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ExpandedBlockEnd.gif)};

可以看到，代码和聚合是一样的。具体如何区别，可能就只能用语义来区分了。

3、依赖

![img](img/Dependancy.JPG)

依赖:
指C5可能要用到C6的一些方法，也可以这样说，要完成C5里的所有功能，一定要有C6的方法协助才行。C5依赖于C6的定义，一般是在C5类的头文件中包含了C6的头文件。ROSE对依赖关系不产生属性。

注意，要避免双向依赖。一般来说，不应该存在双向依赖。

ROSE生成的代码如下：

![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)// C5.h
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)#include "C6.h"
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)class C5 
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ExpandedBlockStart.gif)![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ContractedBlock.gif)...{
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/InBlock.gif)
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ExpandedBlockEnd.gif)};
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)// C6.h
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)#include "C5.h"
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)class C6
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ExpandedBlockStart.gif)![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ContractedBlock.gif)...{
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/InBlock.gif)
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ExpandedBlockEnd.gif)};
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)

虽然ROSE不生成属性，但在形式上一般是A中的某个方法把B的对象作为参数使用(假设A依赖于B)。如下：

![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)#include "B.h"
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)class A
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ExpandedBlockStart.gif)![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ContractedBlock.gif)...{
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/InBlock.gif)     void Func(B &b);
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ExpandedBlockEnd.gif)}

那依赖和聚合\组合、关联等有什么不同呢？

关联是类之间的一种关系，例如老师教学生，老公和老婆，水壶装水等就是一种关系。这种关系是非常明显的，在问题领域中通过分析直接就能得出。

依赖是一种弱关联，只要一个类用到另一个类，但是和另一个类的关系不是太明显的时候（可以说是“uses”了那个类），就可以把这种关系看成是依赖，依赖也可说是一种偶然的关系，而不是必然的关系，就是“我在某个方法中偶然用到了它，但在现实中我和它并没多大关系”。例如我和锤子，我和锤子本来是没关系的，但在有一次要钉钉子的时候，我用到了它，这就是一种依赖，依赖锤子完成钉钉子这件事情。

组合是一种整体-部分的关系，在问题域中这种关系很明显，直接分析就可以得出的。例如轮胎是车的一部分，树叶是树的一部分，手脚是身体的一部分这种的关系，非常明显的整体-部分关系。

上述的几种关系（关联、聚合/组合、依赖）在代码中可能以指针、引用、值等的方式在另一个类中出现，不拘于形式，但在逻辑上他们就有以上的区别。

这里还要说明一下，所谓的这些关系只是在某个问题域才有效，离开了这个问题域，可能这些关系就不成立了，例如可能在某个问题域中，我是一个木匠，需要拿着锤子去干活，可能整个问题的描述就是我拿着锤子怎么钉桌子，钉椅子，钉柜子；既然整个问题就是描述这个，我和锤子就不仅是偶然的依赖关系了，我和锤子的关系变得非常的紧密，可能就上升为组合关系（让我突然想起武侠小说的剑不离身，剑亡人亡...）。这个例子可能有点荒谬，但也是为了说明一个道理，就是关系和类一样，它们都是在一个问题领域中才成立的，离开了这个问题域，他们可能就不复存在了。


4、泛化（继承）

![img](img/inheri.jpg)

泛化关系：如果两个类存在泛化的关系时就使用，例如父和子，动物和老虎，植物和花等。
ROSE生成的代码很简单，如下：

![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)#include "C11.h"
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)class C12 : public C11
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ExpandedBlockStart.gif)![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ContractedBlock.gif)...{
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ExpandedBlockEnd.gif)};


5、这里顺便提一下模板

![img](img/Template.jpg)

上面的图对应的代码如下：

![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)template<int>
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)class C13 
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ExpandedBlockStart.gif)![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ContractedBlock.gif)...{
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/ExpandedBlockEnd.gif)};
![img](http://images.csdn.net/syntaxhighlighting/OutliningIndicators/None.gif)

这里再说一下重复度，其实看完了上面的描述之后，我们应该清楚了各个关系间的关系以及具体对应到代码是怎么样的，所谓的重复度，也只不过是上面的扩展，例如A和B有着“1对多”的重复度，那在A中就有一个列表，保存着B对象的N个引用，就是这样而已。

好了，到这里，已经把上面的类图关系说完了，希望你能有所收获了，我也费了不少工夫啊（画图、生成代码、截图、写到BLOG上，唉，一头大汗）。不过如果能让你彻底理解UML类图的这些关系，也值得了。:)

+++++++++++++++++++++++++++++++++++++++++++++++++++++

在UML建模中，对类图上出现元素的理解是至关重要的。开发者必须理解如何将类图上出现的元素转换到Java中。以java为代表结合网上的一些实例，下面是个人一些基本收集与总结：

 

