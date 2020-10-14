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
          <button>{{isLoading ? "loading" : "登录"}}</button>
        </div>
        <Error :msg="error.server" />
      </div>
    </form>
  </Center>
</template>

<script>
import Center from "../Center";
import Error from "../Error"
export default {
  components: {
    Center,
    Error
  },
  data() {
    return {
      userInfo: {
        loginId: "",
        loginPwd: ""
      },
      error: {
        loginId: "",
        loginPwd: "",
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
    async handleSubmit() {
      if(this.isLoading){// 正在登录中
        return;
      }
      if (
        this.validateEmpty(`loginId`, `账号不能为空`) &
        this.validateEmpty(`loginPwd`, `密码不能为空`) 
      ) {
          // 提交数据
         var result = await this.$store.dispatch("loginUser/login", this.userInfo);
         //登录成功
         if(result){
           this.$router.push({name: "Home"})
         }
         else {
           this.error.server = "账号或密码不正确"
         }
      }
    },
  },
  computed:{
    isLoading(){
      return this.$store.state.loginUser.isLoading;
    }
  }
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
