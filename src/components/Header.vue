<template>
  <div class="header">
    <div class="header-container">
      <div class="container">
        <div class="logo">
          <router-link :to="{ name: `Home` }"
            ><img src="../assets/logo.png" alt=""
          /></router-link>
        </div>
        <ul class="nav">
          <li><router-link :to="{ name: `Home` }">首页</router-link></li>
          <li v-for="item in data.slice(0, 6)" :key="item.channelId">
            <router-link
              :to="{ name: `Channel`, params: { id: item.channelId } }"
              >{{ item.name }}</router-link
            >
          </li>
        </ul>
        <div class="user">
          <span v-if="isLogining">loading……</span>

          <template v-else-if="loginUser">
            <router-link :to="{ name: `Personal` }">{{
              loginUser.nickname
            }}</router-link>
            <a href="" @click.prevent="loginOut">退出登录</a>
          </template>

          <template v-else>
            <router-link :to="{ name: `Login` }">登录</router-link>
            <router-link :to="{ name: `Reg` }">注册</router-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { getNewsChanels } from "../services/newsService";
import { mapState } from "vuex"; // 生成计算属性
var computed = mapState("channels", ["data", "isLoading"]); //第一个参数为命名空间，第二个参数为共享数据名称数组
// console.log(computed);
export default {
  // data() {
  //   return {
  // channel: [],
  // };
  // },
  // async created() {
  //   this.channel = await getNewsChanels();
  // },
  // computed: {
  //   isLoading(){
  //     return this.$store.state.isLoading
  //   }
  // }
  computed: {
    ...computed,
    ...mapState("loginUser", {
      loginUser: "data",
      isLogining: "isLoading",
    }),
  },
  methods: {
    loginOut() {
      this.$store.dispatch("loginUser/loginOut");
      this.$router.push({ name: "Login" });
    },
  },
  // created(){
  //   this.$store.dispatch("channels/fetchDatas")
  // }
};
</script>

<style scoped>
.header {
  height: 60px;
  color: #fff;
}
.header a {
  color: #fff;
}
.header-container {
  height: 60px;
  background: #000;
  color: #fff;
  line-height: 60px;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
}
.container {
  display: flex;
}
.logo a {
  display: flex;
  align-items: center;
  height: 100%;
}
.logo img {
  width: 42px;
  height: 42px;
}
.nav {
  margin: 0 60px;
  display: flex;
  flex-grow: 1;
}
.nav a {
  display: block;
  padding: 0 25px;
}

.router-link-active,
.router-link-exact-active {
  color: #fcb85f !important;
}
.user {
  font-size: 14px;
}
.user * {
  margin-left: 10px;
}
</style>
