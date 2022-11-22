<template>
  <aside :class="`aside-horizontal ${containerClass}`">
    <a
      href="#"
      target="_blank"
      class="aside-horizontal__link"
    />

    Рекламный баннер
  </aside>
</template>

<script>
export default {
  name: "AsideHorizontal",

  props: {
    containerClass: String
  }
}
</script>

<style scoped>
.aside-horizontal {
  position: relative;
  padding: 67px 0;
  width: 100%;
  border: 1px solid var(--black-color);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.33;
  text-align: center;
  letter-spacing: .4px;
  color: var(--black-color);
}

.aside-horizontal__link {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}
</style>
