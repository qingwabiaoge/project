<template>
    <div :class="$style.wrap">
        <nav>
            <div :class="$style.logo">
                <nuxt-link to="/">
                <img src="@/assets/images/logo.jpg" alt="logo">
                </nuxt-link>
            </div>

            <div >

                <el-nav class="hidden-sm-and-down"></el-nav>
                <i class="el-icon-s-fold hidden-md-and-up "  @click="drawer = true" type="primary" style="margin-right: 10px; font-size: 30px">

                </i>
            </div>
        </nav>
        <nuxt/>
        <footer>
           ...没有更多了
        </footer>
        <el-drawer

                :visible.sync="drawer"
                :direction="direction"
               >

            <el-nav mode="vertical">

            </el-nav>
        </el-drawer>

<!--      <el-drawer-->
<!--        title="我是标题"-->
<!--        :visible.sync="drawer"-->
<!--        :with-header="false">-->
<!--        <span>我来啦!</span>-->
<!--      </el-drawer>-->

        <el-backtop target=".infinite-list"></el-backtop>
    </div>
</template>
<script>
    import elNav from '@/components/elNav'
    export default {
        data() {
            return {

                drawer: false,
                direction: 'rtl',
            };
        },

        components:{elNav}
    }
</script>

<style lang="less" module>
    .wrap {

        nav {
            height: 60px;
            background: white;
            display: flex;
            justify-content: space-between;

            div {
                display: flex;
                align-items: center;
                padding-left: 10px
            }
        }
       footer{
           text-align: center;
       }

    }

    /* body {
       background-image: url("../assets/images/bg_white.jpg");
       background-attachment: fixed;
     }*/

</style>


