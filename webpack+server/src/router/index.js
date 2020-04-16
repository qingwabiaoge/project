
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)




import autor from '../page/autor'
import xml from '../page/xml'
import del from '../page/del'
import base64 from '../page/base64'
import formdata from '../page/formdata'
import meta from '../page/meta'


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
        } ,
        {
            path: '/formdata',
            name: 'formdata',
            component: formdata
        }
        ,
        {
            path: '/meta',
            name: 'meta',
            component: meta
        }


    ]
})

export default router