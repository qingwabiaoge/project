import Vue from 'vue'
import Router from 'vue-router'

//components--------------
import baseButton from '@/components/baseButton/cs'
import baseCollapseItem from '@/components/baseCollapseItem/cs'
import baseIcon from '@/components/baseIcon/cs'
import baseSlider from '@/components/baseSlider/cs'
import baseTabs from '@/components/baseTabs/cs'
import sliderFull from '@/components/baseSlider/sliderFull'
import listCard from '@/components/listCard/cs'
import gotop from '@/components/gotop/cs'
import loading from '@/components/loading/cs'
import modal from '@/components/modal/cs'
import collapseNav from '@/components/collapseNav/cs'
import listFade from '@/components/listFade/cs'
import transparent_lay from '@/components/transparent_lay/cs'
import offcanvas from '@/components/offcanvas/cs'
import  pagination from '@/components/pagination/cs'
import icolist from'@/components/icolist/cs'
import titleSquare from  '@/components/titleSquare/cs'
import titleUnderline from  '@/components/titleUnderline/cs'
import listScale from  '@/components/listScale/cs'
import titleThroughline from '@/components/titleThroughline/cs'
import pictextSimple from '@/components/pictextSimple/cs'
import pictextThree from '@/components/pictextThree/cs'
import pictextSlider from '@/components/pictextSlider/cs'
import pictextHistory from '@/components/pictextHistory/cs'
import picA from '@/components/picA/cs'
import picB from '@/components/picB/cs'
import footerBlack from '@/components/footerBlack/cs'
import titlebarA from '@/components/titlebarA/cs'
import pictextContact from '@/components/pictextContact/cs'
import headerA from '@/components/headerA/cs'
import articleA from '@/components/articleA/cs'




//module----------------------


//demo-----------------
/*import cssModule from '@/demo/css-module.vue'
import cssModule2 from '@/demo/css-module2.vue'
import cssModule3 from '@/demo/css-module3.vue'*/
import styled from '@/demo/styled.vue'
import img from '@/demo/img.vue'
import treemenu from '@/demo/treemenu.vue'
import less_var from '@/demo/less_var'
import elementUI from '@/demo/element-ui'
import api from '@/demo/api'
import vuetify from '@/demo/vuetify'
import swiper from '@/demo/swiper.vue'
import slider from '@/demo/slider.vue'
import extend from '@/demo/extend.vue'




Vue.use(Router)

export default new Router({
    linkActiveClass :'active',
    routes: [
/*
        //components-------------
        {
            path:'/',
            name:'首頁',
            component:index

        },
        {
            path:'/produce',
            name:'产品页',
            component:produce
        },
        {
            path:'/articles',
            name:'文章列表',
            component:articles
        },
        {
            path:'/article',
            name:'文章页',
            component:article
        },
        {
            path: '/baseButton',
            name: 'baseButton',
            component: baseButton
        },
        {
            path: '/baseCollapseItem',
            name: 'baseCollapseItem',
            component: baseCollapseItem
        },
        {
            path: '/baseIcon',
            name: 'baseIcon',
            component: baseIcon
        },
        {
            path: '/baseSlider',
            name: 'baseSlider',
            component:baseSlider
        },
        {
            path: '/baseTabs',
            name: 'baseTabs',
            component:baseTabs
        },
        {
            path: '/titleSquare',
            name: 'titleSquare',
            component:titleSquare
        },
        {
            path: '/titleUnderline',
            name: 'titleUnderline',
            component:titleUnderline
        },
        {
            path: '/titleThroughline',
            name: 'titleThroughline',
            component:titleThroughline
        },
        {
            path: '/titlebarA',
            name: 'titlebarA',
            component:titlebarA
        },


        {
            path: '/listCard',
            name: 'listCard',
            component: listCard
        },
        {
            path: '/listFade',
            name: ' listFade',
            component: listFade
        },
        {
            path: '/gotop',
            name: 'gotop',
            component: gotop
        },
        {
            path: '/modal',
            name: 'modal',
            component: modal
        },
        {
            path: '/collapseNav',
            name: 'collapseNav',
            component: collapseNav
        },

        {
            path: '/pictextSlider',
            name: 'pictextSlider',
            component:pictextSlider
        },
        {
            path: '/sliderFull',
            name: 'sliderFull',
            component:sliderFull
        },


        {
            path: '/transparent_lay',
            name: 'transparent_lay',
            component: transparent_lay
        },
        {
            path: '/ offcanvas',
            name: ' offcanvas',
            component:  offcanvas
        },
        {
            path: '/pagination',
            name: 'pagination',
            component:pagination
        },
        {
            path: '/icolist',
            name: 'icolist',
            component:icolist
        },





        {
            path: '/listScale',
            name: 'listScale',
            component:listScale
        },
        {
            path: '/picA',
            name: 'picA',
            component: picA
        },
        {
            path: '/picB',
            name: 'picB',
            component: picB
        },


        {
            path: '/pictextSimple',
            name: 'pictextSimple',
            component:pictextSimple
        },
        {
            path: '/pictextThree',
            name: 'pictextThree',
            component:pictextThree
        },
        {
            path: '/pictextHistory',
            name: 'pictextHistory',
            component:pictextHistory
        },
        {
            path: '/footerBlack',
            name: 'footerBlack',
            component:footerBlack
        },
        {
            path: '/pictextContact',
            name: 'pictextContact',
            component:pictextContact
        },

        {
            path: '/articleA',
            name: 'articleA',
            component:articleA
        },



        {
            path: '/headerA',
            name: 'headerA',
            component: headerA
        },*/

        //demo--------------------
        /*{
            path: '/css-module',
            name: 'css-module',
            component: cssModule
            ,meta:{type:'demo'}
        },
        {
            path: '/css-module2',
            name: 'css-module2',
            component: cssModule2
            ,meta:{type:'demo'}
        },
        {
            path: '/css-module3',
            name: 'css-module3',
            component: cssModule3
            ,meta:{type:'demo'}
        },*/
        {
            path: '/styled',
            name: 'styled',
            component: styled
            ,meta:{type:'demo'}
        }
        ,
        {
            path: '/img',
            name: 'img',
            component: img
            ,meta:{type:'demo'}
        }
        ,
        {
            path: '/less_var',
            name: 'less_var',
            component: less_var
            ,meta:{type:'demo'}
        }
        ,
        {
            path: '/treemenu',
            name: 'treemenu',
            component: treemenu
            ,meta:{type:'demo'}
        }
        ,
        {
            path: '/element-ui',
            name: 'elementUI',
            component: elementUI
            ,meta:{type:'demo'}
        }
        ,
        {
            path: '/api',
            name: 'axios挂载',
            component: api
            ,meta:{type:'demo'}
        }
        ,
        {
            path: '/vuetify',
            name: 'vuetify',
            component: vuetify
        },
        {
            path: '/swiper',
            name: 'swiper',
            component: swiper
        },{
            path: '/slider',
            name: 'slider',
            component:slider
        },



    ]
})
