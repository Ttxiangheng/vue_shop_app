<template>
  <div>
    我是shoye
    <TypeNav />
    <ListConpenter />
    <Recommer />
    <Rank />
    <Like />
    <Floor v-for="(floor) in floorList" :key="floor.id" :list="floor"/>
    <Brand />
  </div>
</template>

<script>
import ListConpenter from "@/pages/Home/ListConpenter";
import Recommer from "@/pages/Home/Recommer";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";

import { mapState } from "vuex";
export default {
  name: "Home",
  created() {
    this.$store.dispatch("getFloorList");
    this.$store.dispatch('getUserInfo')
  },

  components: {
    ListConpenter,
    Recommer,
    Rank,
    Like,
    Floor,
    Brand,
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
    }),
  },
};
</script>

<style>
</style>