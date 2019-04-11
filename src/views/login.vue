<template>
  <div id="login">
    <el-card class="box-card">

      <div slot="header" class="clearfix">
        <span>系统登陆</span>
      </div>

      <div class="text login-form">

        <el-form :model="loginForm" :rules="loginRules" ref="loginForm">
          <el-form-item label="账号" prop="username">
            <el-input v-model="loginForm.username" />
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="loginForm.password" type="password" />
          </el-form-item>
          <el-form-item>
            <el-button @click="submitForm('loginForm')" type="primary" style="width: 100%">登陆</el-button>
          </el-form-item>
        </el-form>

      </div>
    </el-card>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
  import equipmentType from '@/utils/equipmentType';
  export default {
    name: 'login',
    data() {
      return {
        loginForm: {
          username: '',
          password: ''
        },
        loginRules: {
          username: [
            {type: 'string', required: true, message: '请输入账号', trigger: 'blur'}
          ],
          password: [
            {type: 'string', required: true, message: '请输入密码', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      ...mapActions([
        'goLogin'
      ]),
      submitForm(name) {
        this.$refs[name].validate(valid => {
          if (valid) {
            this.goLogin(this.loginForm).then(data => {
              console.log(data);
              equipmentType();
            })

          }
        })
      }
    }
  }
</script>

<style scoped lang="less">
  #login {
    position: relative;
    .box-card {
      width: 360px;
      position: absolute;
      top: 100px;
      left: 50%;
      margin-left: -180px;
      .text {
        font-size: 14px;
      }

      .clearfix:before,
      .clearfix:after {
        display: table;
        content: "";
      }
      .clearfix:after {
        clear: both
      }
    }
  }

</style>
