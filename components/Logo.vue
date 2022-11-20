<template>
  <nuxt-link
    exact
    to="/"
    :class="`logo ${className}`">
  </nuxt-link>
</template>

<script>
export default {
  name: "Logo",

  props: {
    className: String
  }
}
</script>

<style scoped>
.logo {
  display: block;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
