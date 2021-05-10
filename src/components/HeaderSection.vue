<template>
  <header className="header">
    <container>
      <h2 className="header__title">{{ title }}</h2>
      <span class="header__divider"></span>
      <p class="header__subtitle">{{ subtitle }}</p>
    </container>
  </header>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: {
      type: String,
      require: false,
      default: `No one lights a lamp in order to hide it behind the door: the purpose of light
                  is to create more light to open people’s eyes, to reveal the marvels around.`,
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  text-align: center;
  padding-top: 4rem;
  &__title {
    font-size: 1.8rem;
  }
  &__subtitle {
    margin: 0 auto;
    max-width: 560px;
    color: rgba($color: #000, $alpha: 0.3);
  }
  &__divider::after {
    content: '';
    width: 200px;
    height: 1px;
    background: black;
    margin: 1.5rem auto;
    display: block;
  }
}
</style>
