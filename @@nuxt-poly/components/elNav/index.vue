<template>
    <el-menu :default-active="$route.path"
             class="el-menu-demo"
             :mode="mode"
             @select="handleSelect"
             router>
        <el-menu-item index="/">首页</el-menu-item>
        <el-submenu index="/produce/">
            <template slot="title">产品分类</template>
            <el-menu-item index="/produce/solid">素色</el-menu-item>
            <el-menu-item index="/produce/tone">石纹</el-menu-item>
            <el-menu-item index="/produce/wood">木纹</el-menu-item>
            <el-menu-item index="/produce/cloth">布纹&木纹</el-menu-item>

        </el-submenu>

        <el-submenu index="/case/">
            <template slot="title">项目案例</template>
            <el-menu-item index="/case/image">工程案例</el-menu-item>
            <el-menu-item index="/case/article">工程名录</el-menu-item>

        </el-submenu>

        <el-menu-item index="/cert">权威认证</el-menu-item>
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
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },

        },
        props: {
            mode: {type: String, default: 'horizontal'}

        }
    }
</script>