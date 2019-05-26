import Vue from 'vue'
export default {

 async nuxtServerInit (ctx,ctx2) {
   ctx.commit('SET_SOME', 10)
    const {goods}=await this.$axios.getGoodss()
    console.log(goods)
   //此處的this=ctx.$store而非ctx
   console.log('----------store对象---------------')
   console.log(Object.keys(this))
   console.log('----------ctx---------------')
   console.log(Object.keys(ctx))
   console.log('----------ctx.rootState---------------')
   console.log(Object.keys(ctx.rootState))
   console.log('----------ctx.rootGetters---------------')
   console.log(Object.keys(ctx.rootGetters))
   console.log('----------ctx2---------------')
   console.log(Object.keys(ctx2))
   console.log(ctx2.app)

  },
  async axios(){
    const {goods}=await this.$axios.getGoodss()
    console.log(goods)
  }

}
