# is动态组件

vue 用于组件

```

```

小程序用于template,

```
<template name="person"  >

 <view  bindtap='tap' >
  <text> {{name}}-{{age}} </text>
  </view>
</template>
```

 
```
<import src="../../template/person/index"/>

<template is="person" data="{{...item}}"></template>
```