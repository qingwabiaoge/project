# 使用场景:禁用嵌套

```
  <l-form disabled>
    <l-form-item >
      <l-input>

      </l-input>

    </l-form-item>

  </l-form>
```
# 作用

 组件获得父dom节点以及祖先dom组件的数据
 
 (对比作用域插槽: 作用域插槽为组件获得父节点组件的数据)
 
 
# 注意

provide使用父节点组件的数据,是对象才能响应式 普通值不行

