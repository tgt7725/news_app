<template>
  <div class="pager">
    <a
      href=""
      class="pager-item"
      :class="{ disabled: currentPage === 1 }"
      @click.prevent="handleChange(1)"
      >首页</a
    >
    <a
      href=""
      class="pager-item"
      :class="{ disabled: currentPage === 1 }"
      @click.prevent="handleChange(currentPage - 1)"
      >上一页</a
    >

    <a
      v-for="n in numbers"
      :key="n"
      href=""
      class="pager-item"
      :class="{ active: currentPage === n }"
      @click.prevent = "handleChange(n)"
    >{{n}}</a>

    <a
      href=""
      class="pager-item"
      :class="{ disabled: currentPage === pageNumber }"
      @click.prevent="handleChange(currentPage + 1)"
      >下一页</a
    >
    <a
      href=""
      class="pager-item"
      :class="{ disabled: currentPage === pageNumber }"
      @click.prevent="handleChange(pageNumber)"
      >尾页</a
    >

    <span class="pager-text">
      <i>{{ currentPage }}</i>
      /
      <i>{{ pageNumber }}</i>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      // 当前页数
      type: Number,
      default: 1,
    },
    total: {
      // 总的新闻数
      type: Number,
      default: 0,
    },
    limited: {
      // 每页显示的新闻数
      type: Number,
      default: 10,
    },
    panelNumber: {
      // 最多显示的数字页码
      type: Number,
      default: 10,
    },
  },
  computed: {
    pageNumber() {
      return Math.ceil(this.total / this.limited);
    },
    numbers() {
        var min = this.currentPage - this.panelNumber / 2;
        if(min < 1){
            min = 1;
        }
        var max = min + this.panelNumber - 1;
        if(max > this.pageNumber){
          max = this.pageNumber;
          min = max - this.panelNumber;
          // console.log(max , min);
        }
        var arr = [];
        for(var i = 0; i < this.panelNumber;i++){
            arr[i] = min + i;
        }
      return arr;
    },
  },
  methods: {
    handleChange(newPage) {
      if (newPage < 1) {
        newPage = 1;
      }
      if (newPage > this.pageNumber) {
        newPage = this.pageNumber;
      }
      if (newPage === this.currentPage) {
        return;
      }
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style scoped>
.pager {
  text-align: center;
  margin: 20px 0;
}
.pager .pager-item {
  display: inline-block;
  padding: 5px 7px;
  border: 1px solid #ccc;
  margin: 8px;
  cursor: pointer;
  color: rgb(96, 96, 224);
}
.pager .pager-item.disabled {
  color: #ccc;
  cursor: not-allowed;
}
.pager .pager-item.active {
  color: #f40;
  border: none;
  cursor: auto;
}
</style>
