<template>
    <el-menu :default-active="$route.path"
             class="el-menu-demo"
             :mode="mode"
             @select="handleSelect"
             router>
        <el-menu-item index="/" > <span @click="editLink($event)" >首页</span></el-menu-item>
        <el-menu-item index="/advantage/">产品简介</el-menu-item>
        <el-submenu index="/produce/"   >
            <template slot="title"><nuxt-link to="/produce/">产品分类</nuxt-link></template>

            <el-menu-item index="/produce/solid">素色</el-menu-item>
            <el-menu-item index="/produce/tone">石纹</el-menu-item>
            <el-menu-item index="/produce/wood">木纹</el-menu-item>
            <el-menu-item index="/produce/cloth">布纹</el-menu-item>
            <el-menu-item index="/produce/abstract">抽象</el-menu-item>
            <el-menu-item index="/produce/bamboo">免漆竹饰面</el-menu-item>
            <el-menu-item index="/produce/no-paint-wood">免漆真木皮</el-menu-item>
            <el-menu-item index="/produce/science-wood">科技木皮</el-menu-item>
        </el-submenu>

        <el-submenu index="/case/">
            <template slot="title">项目案例</template>
            <el-menu-item index="/case/ship">船舶案例</el-menu-item>
            <el-menu-item index="/case/image">工程案例</el-menu-item>
            <el-menu-item index="/case/article">工程名录</el-menu-item>

        </el-submenu>

        <el-submenu index="/honor/">
            <template slot="title">权威认证</template>
            <el-menu-item index="/honor/prize">奖项</el-menu-item>
            <el-menu-item index="/honor/cert">证书</el-menu-item>

        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
            }
        },
        methods: {
            editLink($event){
              $event.preventDefault &&  $event.preventDefault();
            },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        props: {
            mode: {type: String, default: 'horizontal'}

        }
    }
</script>
