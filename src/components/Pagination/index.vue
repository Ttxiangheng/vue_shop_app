<template>
  <div class="pagination">
    <button v-if="pageNo!==1" @click="$emit('getPage',pageNo-1)" >上一页</button>
    <button v-if="startPageAndEndPage.start>1" @click="$emit(getPage,1)" :class="{active:pageNo==1}">1</button>
    <button v-if="startPageAndEndPage.start>2">···</button>

    <button
      v-for="(page, index) in startPageAndEndPage.end"
      :key="index"
      @click="$emit('getPage',page)"
      v-if="page>=startPageAndEndPage.start"
      :class="{active:pageNo==page}"
    >
      {{ page }}
    </button>

    <button v-if="startPageAndEndPage.end<this.totalPages-1">···</button>
    <button v-if="startPageAndEndPage.end<this.totalPages" @click="$emit('getPage',totalPages)" :class="{active:pageNo==totalPages}">{{this.totalPages}}</button>
    <button v-if="pageNo!=this.totalPages" @click="$emit('getPage',pageNo+1)">下一页</button>

    <button style="margin-left: 30px">共{{ this.total}}条</button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    totalPages() {
      return Math.ceil(this.total / this.pageSize);
    },
    startPageAndEndPage() {
       const {continues, pageNo, totalPages} = this
      let start = 0;
      let end = 0;
      if ( continues> totalPages ) {
        start = 1;
        end = totalPages;
      } else {
        start = pageNo - Math.floor(continues / 2);
        end = pageNo + Math.floor(continues / 2);
        if (start < 1) {
          start = 1;
          end =continues;
        }
        if (end > totalPages) {
          start = totalPages - continues + 1;
          end = totalPages;
        }
      }
      return { start, end };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>