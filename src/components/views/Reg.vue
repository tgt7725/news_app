<template>
  <Center>
    <form class="login-container" @submit.prevent="handleSubmit">
      <div class="form-item">
        <div class="input">
          <label
            >账号：<input
              v-model="userInfo.loginId"
              type="text"
              @input="validateEmpty(`loginId`, `账号不能为空`)"
          /></label>
        </div>
        <Error :msg="error.loginId" />
      </div>
      <div class="form-item">
        <div class="input">
          <label
            >密码：<input
              v-model="userInfo.loginPwd"
              type="password"
              @input="validateEmpty(`loginPwd`, `密码不能为空`)"
          /></label>
        </div>
        <Error :msg="error.loginPwd" />
      </div>
      <div class="form-item">
        <div class="input">
          <label
            >确认密码：<input
              v-model="userInfo.pwdAgain"
              type="password"
              @input="validatePwdAgain"
          /></label>
        </div>
        <Error :msg="error.pwdAgain" />
      </div>
      <div class="form-item">
        <div class="input">
          <label
            >昵称：<input
              v-model="userInfo.nickname"
              type="text"
              @input="validateEmpty(`nickname`, `昵称不能为空`)"
          /></label>
        </div>
        <Error :msg="error.nickname" />
      </div>
      <div class="form-item">
        <div class="input">
          <button>注册</button>
        </div>
        <Error :msg="error.server" />
      </div>
    </form>
  </Center>
</template>

<script>
import Center from "../Center";
import Error from "../Error";
import * as userService  from "../../services/userService"
export default {
  components: {
    Center,
    Error,
  },
  data() {
    return {
      userInfo: {
        loginId: "",
        loginPwd: "",
        pwdAgain: "",
        nickname: "",
      },
      error: {
        loginId: "",
        loginPwd: "",
        pwdAgain: "",
        nickname: "",
        server: "",
      },
    };
  },
  methods: {
    // 非空验证
    validateEmpty(field, msg) {
      if (this.userInfo[field]) {
        this.error[field] = "";
        return true;
      } else {
        this.error[field] = msg;
        return false;
      }
    },
    validatePwdAgain() {
      if (this.validateEmpty("pwdAgain", "密码不能为空")) {
        if (this.userInfo.loginPwd !== this.userInfo.pwdAgain) {
          this.error.pwdAgain = "密码不一致";
          return false;
        } else {
          this.error.pwdAgain = "";
          return true;
        }
      }
    },
    async handleSubmit() {
      if (
        this.validateEmpty(`loginId`, `账号不能为空`) &
        this.validateEmpty(`loginPwd`, `密码不能为空`) &
        this.validatePwdAgain() &
        this.validateEmpty(`nickname`, `昵称不能为空`)
      ) {
          // 提交数据
          var resp = await userService.reg(this.userInfo);
          // console.log(resp);
          if(resp.data){
              // 注册成功
              alert("注册成功！")
              this.$router.push({
                  name: "Login"
              })
          }
          else {
              // 注册失败
              this.error.server = resp.msg;
          }
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  width: 400px;
}
.form-item label {
  width: 250px;
  display: inline-block;
  text-align: right;
  line-height: 41px;
}
.form-item input {
  outline: auto;
}
.form-item button {
  width: 180px;
  height: 30px;
  cursor: pointer;
  margin-left: 70px;
  background: skyblue;
}
</style>
