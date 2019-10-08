<template>
  <div id="login">

    <el-card class=" uk-padding-left-lg uk-padding-right-lg uk-box-shadow-medium uk-box-shadow-hover-large">
      <div slot="header">
        <img class="logo"
             :src="$store.state.global.global.logo"
             :alt="$store.state.global.global.title">
      </div>
      <el-form :model="loginForm"
               status-icon
               :rules="$store.state.rules"
               ref="loginForm"
               label-width="100px"
               class="demo-ruleForm">
        <el-form-item label="用户名："
                      prop="username">
          <el-input type="text"
                    v-model="loginForm.username"
                    auto-complete="off">
          </el-input>
        </el-form-item>
        <el-form-item label="密   码：" prop="password">
          <el-input type="password"
                    v-model="loginForm.password"
                    auto-complete="off">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>

  </div>
</template>
<script>
  import mixin from '@/mixins/map-mixin'
  export default {
    name: 'login',
   layout: 'login',
    data() {
      return {
        logo: '',
        loginForm: {},
      };
    },
    props: {value: Boolean},
    methods: {
      //提交表单
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) { //验证通过
            this.$store.dispatch('user/login', this.loginForm)
              .then((token) => {
                  if (!token) {
                    return false
                  } else {
                    //首次登陸this.$route.query.redirect不存在推入produce
                    const redirectUrl = decodeURIComponent(this.$route.query.redirect || '/admin');
                    this.$router.push({
                      path: redirectUrl
                    });
                  }
                }
              )
          }
        });
      },
      //重置表单style
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },

    mounted() {
      if (process.client) {
        document.getElementById('login').style.height = document.documentElement.clientHeight + 'px'
      }
    },
    mixins:[mixin]
  };
</script>

<style>
  #login {
    display: flex;
    flex-direction: row; /*主轴方向*/
    flex-wrap: nowrap; /*是否换行*/
    justify-content: center; /*主轴方向排序*/
    align-items: center; /*主轴垂直方向排序*/
  }
</style>
