<template>
  <section class="what-i-do">
    <container>
      <header-section
        title="This is what i do"
        subtitle="No one lights a lamp in order to hide it behind the door: the purpose of light
is to create more light to open people’s eyes, to reveal the marvels around."
      />
      <what-i-do-cards :cards="cards" />
    </container>
  </section>
</template>

<script>
import HeaderSection from '../HeaderSection.vue';
import WhatIDoCards from './WhatIDoCards.vue';

export default {
  components: {
    HeaderSection,
    WhatIDoCards,
  },
  data() {
    return {
      cards: new Array(3).fill({
        icon: 'file-code',
        title: 'Coding',
        description: `Planning, model development,
                      competent preparation of the
                      development environment,
                      I write high-quality projects`,
      }),
    };
  },
};
</script>

<style lang="scss" scoped>
.what-i-do {
  padding: 2rem 0 4rem;
}
</style>
