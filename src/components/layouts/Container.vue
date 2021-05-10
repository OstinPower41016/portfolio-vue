<template>
  <div className="container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
}
</style>
