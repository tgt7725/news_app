<template>
  <div>
    <!-- <div style="width: 500px; margin: 0 auto"> -->
    <Banner :imgs="imgs" :imgWidth="1080" :imgHeight="400" />
    <!-- </div> -->
    <Channel @change="handleChange" />
    <Loading v-show="isLoading" />
    <NewsList v-show="!isLoading" :news="news" />
  </div>
</template>

<script>
import Banner from "../Banner";
import Channel from "../news/Channel";
import NewsList from "../news/NewsList";
import Loading from "../news/Loading";
import { getNewsChanels, getNews } from "../../services/newsService";
export default {
  components: {
    Banner,
    Channel,
    NewsList,
    Loading,
  },
  methods: {
    async handleChange(id) {
      this.isLoading = true;
      var resp = await getNews(id);
      this.news = resp.contentlist;
      this.isLoading = false;
    },
  },
  data() {
    return {
      imgs: [
        { src: require("../../assets/banners/1.jpg"), link: "#" },
        { src: require("../../assets/banners/2.jpg"), link: "#" },
        { src: require("../../assets/banners/3.jpg"), link: "#" },
        { src: require("../../assets/banners/4.jpg"), link: "#" },
      ],
      news: [],
      isLoading: true,
    };
  },
};
</script>

<style></style>
