<template>
  <div id="login">
    <el-card class=" uk-padding-left-lg uk-padding-right-lg uk-box-shadow-medium uk-box-shadow-hover-large">
      <div slot="header">
        <img class="logo" :src="logo" alt="SHENBOMA">
      </div>
      <el-form :model="loginForm" status-icon :rules="$store.state.rules" ref="loginForm" label-width="100px"
               class="demo-ruleForm"
      >
        <el-form-item label="用户名：" prop="username">
          <el-input type="userword" v-model="loginForm.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密   码：" prop="password">
          <el-input type="password" v-model="loginForm.password" auto-complete="off"></el-input>
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


  export default {
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
            this.$store.dispatch('token/get', this.loginForm)
              .then((token) => {
                  if (!token) {
                    return false
                  } else {
                    //首次登陸this.$route.query.redirect不存在推入goods
                    const redirectUrl = decodeURIComponent(this.$route.query.redirect || '/');
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
   computed:{
      logo(){
        return  this.$store.state.global.logo
      }

    },
    mounted() {
      document.getElementById('login').style.height = document.documentElement.clientHeight + 'px'
    }

  };
</script>


<style>


  #login {

    background: #f5f5f5;

    display: flex;
    flex-direction: row; /*主轴方向*/
    flex-wrap: nowrap; /*是否换行*/
    justify-content: center; /*主轴方向排序*/
    align-items: center; /*主轴垂直方向排序*/
  }
</style>
