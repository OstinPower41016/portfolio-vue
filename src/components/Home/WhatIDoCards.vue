<template>
  <div class="cards">
    <base-card class="cards__item" v-for="card of cards" :key="Math.random() + card.title">
      <span><font-awesome-icon :icon="card.icon" class="cards__icon"/></span>
      <h3 class="cards__title">{{ card.title }}</h3>
      <p class="cards__description">{{ card.description }}</p>
    </base-card>
  </div>
</template>

<script>
import BaseCard from '../UI/BaseCard.vue';

export default {
  props: ['cards'],
  components: {
    BaseCard,
  },
};
</script>

<style lang="scss" scoped>
.cards {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  &__item {
    flex: 0 0 32%;
  }
  &__icon {
    font-size: 3rem;
  }
  &__title {
    margin: 1.5rem auto;
    font-size: 1.3rem;
  }
}
</style>
