<template>
    <div style="width: 300px">
        <collapseNav :navs="navs" class="collapse-nav background-default">

        </collapseNav>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                navs: [
                    {

                        path: '/ui',
                        text: 'ui首页',

                        children: [
                            {    //    /admin 的首页页面
                                path: '/collapseNav',
                                text: 'ui',

                            },
                            {   //文章列表页
                                path: ':id',
                                text: 'list',

                            },
                            {//文章页页路由
                                path: 'article/:id',
                                text: 'article',
                            }

                        ]
                    },
                    {

                        path: '/admin',
                        text: '列表页',
                        children: [
                            {    //    /admin 的首页页面
                                path: '/fengmian',
                                text: '封面页',

                            },
                            {   //文章列表页
                                path: ':id',
                                text: 'list',

                            },
                            {//文章页页路由
                                path: 'article/:id',
                                text: 'article',
                            }

                        ]
                    },
                    {

                        path: '/admin',
                        text: '公司介绍',
                    }
                ]
            }
        }
    }

</script>

<style lang="less" module>
    :global .collapse-nav {
        a {
            //无法在这这里用mixin,因为嵌套也改选择器的名字
            .hover-underline();
            .hover-underline-left();
            display: block;

            padding: 20px;

        }
    }
</style>
