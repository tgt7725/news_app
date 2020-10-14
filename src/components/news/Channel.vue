<template>
  <div class="news-types">
    <div
      class="item"
      v-for="item in showChannels"
      :key="item.channelId"
      :class="{
        active: item.channelId === currentChannelId,
      }"
      @click="switchTo(item.channelId)"
    >
      <span class="name">{{ item.name }}</span>
    </div>
    <a href="" @click.prevent="isCollapse = !isCollapse">{{
      isCollapse ? "展开" : "收起"
    }}</a>
  </div>
</template>

<script>
import { getNewsChanels, getNews } from "../../services/newsService";
import { mapState } from "vuex";
export default {
  data() {
    return {
      // channels: [],
      isCollapse: true,
      currentChannelId: null,
    };
  },
  computed: {
    // channels(){
    //   return this.$store.state.channels.data;
    // },
    ...mapState("channels", ["data"]),
    showChannels() {
      return this.isCollapse ? this.data.slice(0, 9) : this.channels;
    },
  },
  methods: {
    switchTo(id) {
      this.currentChannelId = id;
      this.$emit("change", id);
    },
  },
  watch: {
    data: {
      immediate: true,
      handler() {
        if (this.data.length > 0) {
          this.switchTo(this.data[0].channelId);
        }
      },
    },
  },
  // async created() {
  //   await getNewsChanels().then((resp) => {
  //     this.channels = resp;
  //     this.switchTo(this.channels[0].channelId);
  //   });
  // },
};
</script>

<style scoped>
.news-types {
  margin: 30px 0;
  border-bottom: 1px solid #ccc;
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  padding-bottom: 15px;
}
.item {
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-right: 15px;
  margin: 7px 15px 7px 0;
  cursor: pointer;
  position: relative;
}
.item:hover {
  background: #ccc;
}
.item.active {
  background: #000;
  color: #fff;
}
.news-types a {
  align-self: flex-end;
  margin-bottom: 20px;
  color: #409eff;
}
</style>
