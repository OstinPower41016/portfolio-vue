<template>
  <main-view></main-view>
  <nav-bar class="sticky"></nav-bar>
  <what-i-do></what-i-do>
  <my-works />
</template>

<script>
import MainView from '@/components/Home/MainView.vue';
import NavBar from '@/components/NavBar.vue';
import WhatIDo from '@/components/Home/WhatIDo.vue';
import MyWorks from '@/components/Home/MyWorks.vue';

export default {
  components: {
    MainView,
    NavBar,
    WhatIDo,
    MyWorks,
  },
};
</script>

<style lang="scss" scoped>
.sticky {
  position: sticky;
  top: 0;
}
</style>
