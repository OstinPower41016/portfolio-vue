<template>
  <nav class="navbar">
    <container>
      <div class="navbar__items">
        <h3 class="navbar__item-logo">Nikolay Larionov</h3>
        <ul class="navbar__items-links">
          <li class="navbar__link navbar__link--active"><a href="#">Home</a></li>
          <li class="navbar__link"><a href="#">About</a></li>
          <li class="navbar__link"><a href="#">Skills</a></li>
          <li class="navbar__link"><a href="#">Blog</a></li>
          <li class="navbar__link"><a href="#">Works</a></li>
          <li class="navbar__link"><a href="#">Services</a></li>
          <li class="navbar__link"><a href="#">Contact</a></li>
        </ul>
      </div>
    </container>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  background: white;
  padding: 1rem 0;
  &__items {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__items-links {
    display: flex;
  }
  &__items-links > li:not(:first-child) {
    margin-left: 2rem;
  }
  &__link > a {
    color: black;
    text-decoration: none;
  }
  &__item-logo {
    font-size: 1.1rem;
  }
  &__link--active > a {
    color: #b73b3b;
    text-decoration: underline;
    text-decoration-color: #b73b3b;
  }
}
</style>
