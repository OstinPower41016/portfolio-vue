<template>
  <section class="my-works">
    <container>
      <header-section title="My Works" />
    </container>
  </section>
</template>

<script>
import HeaderSection from '../HeaderSection.vue';

export default {
  components: {
    HeaderSection,
  },
};
</script>

<style lang="scss" scoped>
.my-works {
  background: white;
  padding: 2rem 0 4rem;
}
</style>
