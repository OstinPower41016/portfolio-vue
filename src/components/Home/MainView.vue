<template>
  <section className="home">
    <container>
      <div className="home__grid">
        <div className="home__item home__switch">
          <label htmlFor="switch" className="home__switch-label">
            language:
          </label>
          <input type="checkbox" name="switch" id="switch" className="home__switch-input" />
        </div>
        <div className="home__item">
          <p className="home__subheader">Hi, my name is Nikolay</p>
          <p className="home__header">I’m a web-developer</p>
          <p className="home__subheader">creating modern and responsive Web Application</p>
          <div className="home__backdrop-header"></div>
        </div>
        <div className="home__item">
          <div className="home__icon-wrapper">
            <span className="home__icon"><font-awesome-icon icon="chevron-down"/></span>
          </div>
        </div>
      </div>
    </container>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.home {
  background: center/cover no-repeat url('./images/background.jpg');
  height: 100vh;
  &__grid {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
    color: white;
    height: 100%;
  }
  &__grid > .home__item:first-child {
    justify-self: end;
    align-self: flex-start;
    padding-top: 1.5rem;
  }
  &__grid > .home__item:not(:first-child) {
    justify-self: center;
  }
  &__grid > .home__item:nth-child(2) {
    text-align: center;
    position: relative;
  }
  &__grid > .home__item:nth-child(3) {
    align-self: flex-end;
    padding-bottom: 2rem;
  }
  &__subheader {
    font-size: 1.1rem;
    position: relative;
    z-index: 2;
  }
  &__header {
    font-size: 1.8rem;
    line-height: 3.5rem;
    position: relative;
    z-index: 2;
  }
  &__backdrop-header {
    position: absolute;
    width: calc(100% + 2rem);
    height: calc(100% + 2rem);
    top: -1rem;
    left: -1rem;
    background: rgba(0, 0, 0, 0.25);
    z-index: 1;
    filter: blur(8px);
  }
  &__icon {
    display: block;
    animation: icon-scroll 2s linear infinite;
  }
  &__switch {
    display: flex;
    align-items: center;
    &-label {
      margin-right: 1rem;
    }
    &-input {
      position: relative;
      appearance: none;
      width: 60px;
      height: 30px;
      background: grey;
      border-radius: 15px;

      &::before {
        content: 'en';
        padding-top: 2px;
        text-align: center;
        position: absolute;
        top: 17%;
        left: 7%;
        width: 20px;
        height: 20px;
        border-radius: 15px;
        background: white;
        transition: 0.5s all;
        box-shadow: inset 11px 0px 7px 3px rgb(0 0 0 / 36%);
      }
      &:checked::before {
        content: 'ru';
        text-align: center;
        left: 60%;
      }
    }
  }
}

@keyframes icon-scroll {
  0% {
    transform: translateY(0%);
  }
  25% {
    transform: translateY(100%);
  }
  50% {
    transform: translateY(0%);
  }
  75% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}
</style>
