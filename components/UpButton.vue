<template>
  <button
    type="button"
    @click="handleClick"
    :class="`up-button ${scrollValue < 300 ? 'up-button_hidden' : ''}`"
    aria-label="наверх"
  />
</template>

<script>
export default {
  name: "UpButton",

  data() {
    return {
      scrollValue: 0,
    }
  },

  methods: {
    setScroll(e) {
      this.scrollValue = e.currentTarget.scrollY;
    },

    handleClick() {
      scrollTo(0, 0);
    }
  },

  beforeMount() {
    typeof window !== 'undefined' && window.addEventListener('scroll', this.setScroll)
  },

  beforeDestroy() {
    typeof window !== 'undefined' && window.removeEventListener('scroll', this.setScroll)
  }
}
</script>

<style scoped>
.up-button {
  position: sticky;
  margin-top: -50px;
  margin-left: auto;
  bottom: 60px;
  right: 0;
  width: 50px;
  height: 50px;
  visibility: visible;
  opacity: 1;
  display: flex;
  border-radius: 50%;
  border: 1px solid var(--primary-color);
  background-color: inherit;
  cursor: pointer;
  transition: all .3s;
}

.up-button_hidden {
  visibility: hidden;
  opacity: 0;
}

.up-button::after {
  margin: auto;
  content: "";
  display: inline-block;
  width: 20px;
  height: 18px;
  mask-image: url("assets/images/icons/arrow.svg");
  -webkit-mask-image: url("assets/images/icons/arrow.svg");
  mask-size: cover;
  -webkit-mask-size: cover;
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--primary-color);
  rotate: -90deg;
}

@media (max-width: 1023px) {
  .up-button {
    display: none;
  }
}
</style>
