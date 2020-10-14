<template>
  <div id="app">
    <Header />
    <div class="container">
      <!-- <Home></Home> -->
      <!-- 根据不同的访问路径渲染不同的组件 -->
      <router-view ></router-view>

      <!-- <ChannelNews /> -->
    </div>
  </div>
</template>

<script>
// import Home from "./components/views/Home"
import Header from "./components/Header";
// import ChannelNews from "./components/views/ChannelNews"
export default {
  components: {
    // Home,
    Header,
    // ChannelNews
  },
};
</script>
<style scoped>
.container {
  margin-top: 30px;
}
</style>
