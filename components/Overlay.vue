<template>
  <div :class="`overlay ${isVisible ? 'overlay_visible' : ''}`">
    <div class="overlay__container">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Overlay",

  props: {
    isVisible: Boolean
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  visibility: hidden;
  opacity: 0;
  transition: all .3s;
}

.overlay_visible {
  visibility: visible;
  opacity: 1;
  z-index: 100;
}

.overlay__container {
  position: absolute;
  width: 100%;
  max-height: 100%;
  min-height: 100%;
  z-index: 20;
  overflow: auto;
  display: flex;
  background-color: var(--white-color);
  color: var(--black-color);
  box-sizing: border-box;
  transition: all .3s;
}

@media (max-width: 767px) {
  .overlay__container::-webkit-scrollbar {
    display: none;
  }
}
</style>
