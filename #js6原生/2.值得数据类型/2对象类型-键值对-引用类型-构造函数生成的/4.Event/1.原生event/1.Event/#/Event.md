# 自定义事件

熟悉jquery的童鞋都知道在jq中有一个方法可以自动触发事件，那就是trigger（），那么通过原生js又怎么模拟触发呢？

js中添加一个主动触发事件的方法有dispatch。该方法能模拟用户行为，如点击（click）操作等。 标准使用dispatchEvent方法，IE6/7/8则使用fireEvent方法。

dispatchEvent() 方法给节点分派(分给)一个==合成事件==。

### 流程：

creatEvent-------initEvent--------dispatchEvent

##### 1. createEvent（eventType）

该方法将创建一种新的事件类型，该类型由参数 *eventType* 指定。注意，该参数的值不是要创建的事件接口的名称，而是定义那个接口的 DOM 模块的名称。

参数：eventType 共5种类型：
  Events ：包括所有的事件.

```
     HTMLEvents：包括 'abort', 'blur', 'change', 'error', 'focus', 'load', 'reset', 'resize', 'scroll', 'select',
                  'submit', 'unload'. 事件
     UIEevents ：包括 'DOMActivate', 'DOMFocusIn', 'DOMFocusOut', 'keydown', 'keypress', 'keyup'.
                 间接包含 MouseEvents.
     MouseEvents：包括 'click', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup'.
     MutationEvents:包括 'DOMAttrModified', 'DOMNodeInserted', 'DOMNodeRemoved',
                   'DOMCharacterDataModified', 'DOMNodeInsertedIntoDocument',
                   'DOMNodeRemovedFromDocument', 'DOMSubtreeModified'.
```

```
 
  onload 事件会在页面或图像加载完成后立即发生
    支持onload事件的标签 <body>, <frame>, <frameset>, <iframe>, <img>, <link>, <script>
    
```



##### 2.在createEvent后必须初始化，为大家介绍5种对应的初始化方法

  HTMLEvents 和 通用 Events：
     **initEvent**( 'type', bubbles, cancelable )
  UIEvents ：
      **initUIEvent**( 'type', bubbles, cancelable, windowObject, detail )
  MouseEvents：
      **initMouseEvent**( 'type', bubbles, cancelable, windowObject, detail, screenX, screenY,
          clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget )
  MutationEvents ：
      **initMutationEvent**( 'type', bubbles, cancelable, relatedNode, prevValue, newValue, attrName, attrChange )

##### 3. dispatchEvent(eventObj),

​               btn.dispatchEvent(event) 触发谁的事件

​               eventObj 参数是一个描述事件的 ActionScript 对象

==还可用自定义函数控制谁触发==


在调用 dispatchEvent() 方法之前，必须在代码中对其进行声明，此外，还必须创建一个事件对象以传递给 dispatchEvent()。该事件对象包含侦听器可用来处理该事件的有关信息。

### 例子：

```js
var rect={   dispatch : function(el ,type){

        try{

            if(el.dispatchEvent){

                var evt = document.createEvent('Event');

                evt.initEvent(type,true,true);

                el.dispatchEvent(evt);

            }else if(el.fireEvent){

                el.fireEvent('on'+type);

            }

        }catch(e){};

    }};
```
