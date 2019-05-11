<template>
    <div>
        <h4 v-if="item.children ">
            <nuxt-link :to="{path: item.path}"
                    @click.prevent.stop="open=!open"
            >
                <div class="title flex flex-between">
                    <!--下文 判断有没有子级,如果有进一步判断是否open状态和设置符号-->
                    <span> {{item.text}} </span> <span class="text-small">{{item.children ? (open? 'v':'>') : '' }}</span>
                </div>
            </nuxt-link>
        </h4>
        <h4 v-else>
            <nuxt-link :to="{ path: item.path}">
                {{item.text}}
            </nuxt-link>
        </h4>

        <ul v-show="open">
            <li v-for="item in item.children">
                <nuxt-link :to="{ path: item.path}">
                    {{item.text}}
                </nuxt-link>

            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        /*
        item的格式为
                    {
                    path: '/admin',
                    text: '列表页
                      children: [
                      {    //    /admin 的首页页面
                        path: '/fengmian',
                        text: '封面页',

                      }]
                      }
         */
        props: ['item'],
        data() {
            return {open: false}
        },
        computed: {},
        created() {
            const router = this.$route.fullPath
            //因为有些菜单没有thildren所以this.item.children可能为undifine,用三目||[]
            //必须加括号要不它会先计算[].some
            const hasRouter = (this.item.children || []).some(item => item.path === router)
            if (hasRouter) {
                this.open = true
            }

        }
    }

</script>

