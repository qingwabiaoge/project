





# 块元素(block element) HTML标签分类明细

address - 地址

blockquote - 块引用

center - 举中对齐块

dir - 目录列表

div - 常用块级容易，也是css layout的主要标签

dl - 定义列表

fieldset - form控制组

form - 交互表单 （只能用来容纳其它块元素）

h1 - 大标题

h2 - 副标题

h3 - 3级标题

h4 - 4级标题

h5 - 5级标题

h6 - 6级标题

hr - 水平分隔线

isindex - input prompt

menu - 菜单列表

noframes - frames可选内容，（对于不支持frame的浏览器显示此区块内容

noscript - 可选脚本内容（对于不支持script的浏览器显示此内容）

ol - 排序表单

p - 段落

pre - 格式化文本

table - 表格

ul - 非排序列表

# 内联元素(inline element) HTML标签分类明细

a - 锚点

abbr - 缩写

acronym - 首字

b - 粗体(不推荐)

bdo - bidi override

big - 大字体

br - 换行

cite - 引用

code - 计算机代码(在引用源码的时候需要)

dfn - 定义字段

em - 强调

font - 字体设定(不推荐)

i - 斜体

img - 图片

input - 输入框

kbd - 定义键盘文本

label - 表格标签

q - 短引用

s - 中划线(不推荐)

samp - 定义范例计算机代码

select - 项目选择

small - 小字体文本

span - 常用内联容器，定义文本内区块

strike - 中划线

strong - 粗体强调

sub - 下标

sup - 上标

textarea - 多行文本输入框

tt - 电传文本

u - 下划线

var - 定义变量

◎可变元素 是基于以上两者随环境而变化的，它的基本概念就是根据上下文关 
系确定该元素是块元素还是内联元素。一旦确定了它的类别，它就遵循块元素或 
者内联元素的规则限制。

可变元素   HTML标签分类明细

applet - java applet　　

button - 按钮　　

del - 删除文本　　

iframe - inline frame　　

ins - 插入的文本　　

map - 图片区块(map)　　

object - object对象　　

script - 客户端脚本

---------------------------------------------------------------------- 
----------

但是通过CSS，我们可以摆脱上面表格里HTML标签归类的限制，自由地在不同标 
签/元素上应用我们需要的属性。例如，我们可以对块元素[ ul ]标签加上  
display:inline 属性，让原本垂直的列表水平显示，这在我们设置Blog导航条 
时得到了广泛应用；我们也完全可以把内联元素[ cite ]加上 display:block  
这样的属性，让它也有每次都从新行开始的属性。

