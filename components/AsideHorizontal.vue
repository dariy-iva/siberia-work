<template>
  <aside :class="`aside-horizontal ${containerClass}`">
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
</style>
