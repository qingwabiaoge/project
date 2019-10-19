import Vue from 'vue'
export default function () {
  console.log('head()-run')
  console.log(this instanceof Vue)
  return {
    //只是表达式 声明函数时间会提前计算
    title: this.title,
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description',
        name: 'description',
        //只是表达式 声明函数时间会提前计算
        content: this.description
      }
    ],
  }
}


