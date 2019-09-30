import Vue from 'vue'

const test = {

  color: '红色',
  button: "more+",
  href: "/produces/快时尚",
  image: "/images/image.jpg",
  map: "/images/image.jpg",
  subtitle: "快时尚 ",
  description: '稻城女款单层冲锋衣 OSY-TEX高度防水透气薄膜面料,精密磨砂质感方格图案表面;YKK 耐用顺滑高端拉链;全衣3D立体裁剪;全',
  title: 'Fast',
  info: '这是描述信息',
  content: '稻城女款单层冲锋衣 OSY-TEX高度防水透气薄膜面料,精密磨砂质感方格图案表面;YKK 耐用顺滑高端拉链;全衣3D立体裁剪;全稻城女款单层冲锋衣 OSY-TEX高度防水透气薄膜面料,精密磨砂质感方格图案表面;YKK 耐用顺滑高端拉链;全衣3D立体裁剪;全'
  ,
  children:
    [
      {
        color: '红色',
        button: "more+",
        href: "/produces/快时尚",
        image: "/images/image.jpg",
        subtitle: "快时尚 ",
        description: '稻城女款单层冲锋衣 OSY-TEX高度防水透气薄膜面料,精密磨砂质感方格图案表面;YKK 耐用顺滑高端拉链;全衣3D立体裁剪;全',
        title: 'Fast',
        info: '这是描述信息',
        content: '稻城女款单层冲锋衣 OSY-TEX高度防水透气薄膜面料,精密磨砂质感方格图案表面;YKK 耐用顺滑高端拉链;全衣3D立体裁剪;全稻城女款单层冲锋衣 OSY-TEX高度防水透气薄膜面料,精密磨砂质感方格图案表面;YKK 耐用顺滑高端拉链;全衣3D立体裁剪;全'
      },
      {
        color: '红色',
        button: "more+",
        href: "/produces/快时尚",
        image: "/images/image2.jpg",
        subtitle: "快时尚 ",
        description: '稻城女款单层冲锋衣 OSY-TEX高度防水透气薄膜面料,精密磨砂质感方格图案表面;YKK 耐用顺滑高端拉链;全衣3D立体裁剪;全',
        title: 'fashion',
        info: '这是描述信息',
        content: '稻城女款单层冲锋衣 OSY-TEX高度防水透气薄膜面料,精密磨砂质感方格图案表面;YKK 耐用顺滑高端拉链;全衣3D立体裁剪;全稻城女款单层冲锋衣 OSY-TEX高度防水透气薄膜面料,精密磨砂质感方格图案表面;YKK 耐用顺滑高端拉链;全衣3D立体裁剪;全'

      },
      {
        color: '红色',
        button: "more+",
        href: "/produces/快时尚",
        image: "/images/image3.jpg",
        subtitle: "快时尚 ",
        description: '稻城女款单层冲锋衣 OSY-TEX高度防水透气薄膜面料,精密磨砂质感方格图案表面;YKK 耐用顺滑高端拉链;全衣3D立体裁剪;全',
        title: '标题',
        info: '这是描述信息',
        content: '稻城女款单层冲锋衣 OSY-TEX高度防水透气薄膜面料,精密磨砂质感方格图案表面;YKK 耐用顺滑高端拉链;全衣3D立体裁剪;全稻城女款单层冲锋衣 OSY-TEX高度防水透气薄膜面料,精密磨砂质感方格图案表面;YKK 耐用顺滑高端拉链;全衣3D立体裁剪;全'
      }
    ]
}


//把mixin挂载在vue实例
export default {
  props: {data: {type: [Object, Array], default: test}, inverse: Boolean},

  mounted() {

    if (this.$el && this.data) {
      console.log(1)

      this.$el.style.background = `${this.data.bg} url(${this.data.background}) 0% 0% / cover  fixed`
      /*   if (!this.data.fullpage&&this.data.type==="component") {

           this.$el.className += " container"
         }*/
    }
  }

}

