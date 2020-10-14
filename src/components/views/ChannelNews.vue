<template>
  <div>
    <div class="type-title">
      {{ channelTitle }}
    </div>
    <Loading v-if="isLoading" />
    <NewsList v-else :news="news" />
    <Page
      :currentPage="currentPage"
      :total="total"
      @pageChange="handleChange"
    />
  </div>
</template>

<script>
import Page from "../../components/Page";
import NewsList from "../news/NewsList";
import Loading from "../../components/news/Loading";
import * as newsService from "../../services/newsService";
export default {
  components: {
    Page,
    NewsList,
    Loading,
  },
  data() {
    return {
      // currentPage: 1,
      // channelTitle: "",
      total: 0,
      limited: 10,
      panelNumber: 10,
      isLoading: true,
      news: [],
    };
  },
  methods: {
    handleChange(newPage) {
      this.$router.push("?page=" + newPage);
      this.setNews();
    },
    // async setChannelName() {
    //   var channel = await newsService.getNewsChanels();
    //   this.channelTitle = channel.find((item) => {
    //     return this.$route.params.id === item.channelId;
    //   }).name;
    // },
    async setNews() {
      this.isLoading = true;
      var news = await newsService.getNews(
        this.$route.params.id,
        this.currentPage,
        this.limited
      );
      // console.log(news);

      this.total = news.allNum;
      this.news = news.contentlist;
      // this.pageNumber = news.allPages;
      this.isLoading = false;
    },
  },
  computed: {
    channelTitle() {
      var channels = this.$store.state.channels.data;
      if (channels.length > 0) {
        return (channels.find((item) => {
          return this.$route.params.id === item.channelId;
        }).name);
      } else return "";
    },
    currentPage() {
      return +this.$route.query.page || 1;
    },
  },
  watch: {
    // 监控某些数据的变化
    "$route.params.id": {
      immediate: true, //一开始的数据也要当做变化
      handler(newId, oldId) {
        // console.log(this.$route);
        // this.setChannelName();
        this.setNews();
      },
    },
  },
};
</script>

<style scoped>
.type-title {
  font-size: 2em;
  color: #888;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
}
</style>
