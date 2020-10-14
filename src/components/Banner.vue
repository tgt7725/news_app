<template>
  <div class="banner-container" @mouseout="start" @mouseover="end">
    <ul
      class="images"
      :style="{
        width: imgs.length * 100 + `%`,
        marginLeft: -index * 100 + `%`
      }"
    >
      <li v-for="(item, i) in imgs" :key="i">
        <a :href="item.link">
          <img :src="item.src" :width="imgWidth" :height="imgHeight" />
        </a>
      </li>
    </ul>
    <ul class="dots">
      <li
        v-for="(item, i) in imgs"
        :key="i"
        :class="{ active: i === index }"
        @click="index = i"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    imgs: {
      type: Array,
      required: true,
    },
    imgWidth: Number,
    imgHeight: Number,
  },
  data() {
    return {
      index: 0,
      timer: null
    };
  },
  methods:{
      start(){
          this.timer = setInterval(() => {
              this.index = (this.index + 1) % this.imgs.length
          }, 2000);
      },
      end(){
          clearInterval(this.timer);
          this.timer = null;
      }
  },
  created(){
      this.start();
  },
  destroyed(){
      this.end();
  }
};
</script>

<style scoped>
.banner-container {
  overflow: hidden;
  position: relative;
}
.banner-container .images {
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: 0.5s;
}
.banner-container .images li {
  float: left;
}
.banner-container .dots {
  padding: 2px 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

.banner-container .dots li {
  list-style: none;
  width: 10px;
  height: 10px;
  margin: 2px 4px;
  float: left;
  background: #fff;
  border-radius: 50%;
  cursor: pointer;
}

.banner-container .dots li.active {
  background: #f40;
}
</style>
