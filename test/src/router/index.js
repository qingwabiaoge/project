
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)




import autor from '../page/autor'
import xml from '../page/xml'
import del from '../page/del'
import base64 from '../page/base64'



const router = new VueRouter({
    linkActiveClass: 'active',
    routes: [

    
        {
            path: '/del',
            name: 'del',
            component: del
        },
        {
            path: '/autor',
            name: 'autor',
            component: autor
        },
        {
            path: '/xml',
            name: 'xml',
            component: xml
        }

        ,
        {
            path: '/base64',
            name: 'base64',
            component: base64
        }



    ]
})

export default router