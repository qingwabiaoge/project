
1. 组件的css都默认加了scope
2. page组件默认可以使用global-css
3. 非页面组件使用global-global-css

```

Component({
  options: {
    addGlobalClass: true,//组件内部使用全局的css
  }})
```
* 父组件标签上的css不能向子组件渗透,会出现问题不建议使用




