<template>

    <ul :class="$style['page-bar']">
        <li class="pagedown" v-if="current>1">
            <nuxt-link :to="firstPageUrl">上一页</nuxt-link>
        </li>
        <li v-if="current===1"><a class="banclick">上一页</a></li>
        <li v-for="page in pages" v-bind:class="{ 'active': current === page}">
            <nuxt-link :to='path+"?page="+page'>{{ page }}</nuxt-link>
        </li>
        <li v-if="current!==pageCount">
            <nuxt-link :to="lastPageUrl">下一页</nuxt-link>
        </li>
        <li v-if="current === pageCount"
            class="pageup"><a class="banclick">下一页</a></li>
        <li><a>共<i>{{pageCount}}</i>页</a></li>
    </ul>

</template>
<script>
    export default {
        props: ['total', 'current', 'path', 'pageSize'],
        /*
          * @total:文章条数
          * @page-size:所有文章数
          * @path:当前路由
          * @current:当前页码
          * */


        computed: {
            pageCount() {//页码总数
                return Math.ceil(this.total / this.pageSize)
            },
            pages: function () {//导航中要显示的页码
                let left = 1;
                let right = this.pageCount;
                let pages = [];
                if (this.pageCount >= 5) {
                    if (this.current > 3 && this.current < this.pageCount - 2) {
                        left = this.current - 2
                        right = this.current + 2
                    } else {
                        if (this.current <= 3) {
                            left = 1
                            right = 5
                        } else {
                            right = this.pageCount
                            left = this.pageCount - 4
                        }
                    }
                }
                while (left <= right) {
                    pages.push(left)
                    left++
                }
                return pages
            }
            ,
            firstPageUrl() {//第一页链接

                return this.path + '?page=' + this.pages[0]
            },
            lastPageUrl() {//最有一页链接
                return this.path + '?page=' + this.pages[this.pages.length - 1]
            }
        }
    }
</script>

<style lang="less" module>
    .page-bar {

        li {
            display: inline-block;
            a {
                display: inline-block;
                padding: 5px 8px;
                background: #fff;
                margin: 3px;
            }
        }
        :global(.active) {
            color: @global-color-gray;
        }
        :global(.router-link-exact-active) {
            background:@global-color-primary;
            color:#fff
        }
        i {
            color: @global-color-primary
        }

    }

</style>
