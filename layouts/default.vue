<template>
  <div class="page">
    <Header/>
    <Nuxt/>
  </div>
</template>

<script>
import Header from "~/components/Header";

export default {
  name: "default",
  components: {
    Header,
  },
  head () {
    return {
      bodyAttrs: {
        class: 'body'
      }
    }
  }
}
</script>

<style>
.body {
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  --black-color: #000;
  --primary-color: #5083F3;
  --light-gray-color: #EEF0F3;
  --middle-gray-color: #DCE2EA;
  --gray-color: #B4C0CF;
  --beige-color: #CBBFAF;
}

.wrapper {
  max-width: 1328px;
  margin: 0 auto;
}

.button-hover {
  background-color: var(--black-color);
  transition: background-color .3s;
}

.button-hover:hover {
  background-color: var(--primary-color);
}
</style>
