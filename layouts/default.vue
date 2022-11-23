<template>
  <div class="page">
    <Header/>

    <Menu/>

    <main class="content">
      <div class="wrapper">
        <Nuxt/>

        <UpButton/>
      </div>
    </main>

    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Menu from "~/components/Menu";
import UpButton from "~/components/UpButton";

export default {
  name: "default",
  components: {
    Header,
    Menu,
    UpButton,
    Footer
  },
  head() {
    return {
      bodyAttrs: {
        class: 'body'
      }
    }
  },

  beforeCreate() {
    this.$store.dispatch('getCities');
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

.body_hidden {
  overflow: hidden;
}

.body_hidden::-webkit-scrollbar {
  display: none;
  width: 0;
}

.page {
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  --black-color: #000;
  --white-color: #fff;
  --primary-color: #5083F3;
  --light-gray-color: #EEF0F3;
  --middle-gray-color: #DCE2EA;
  --gray-color: #B4C0CF;
  --beige-color: #CBBFAF;
  background-color: var(--white-color);
}

.content {
  position: relative;
  padding: calc(22px + 135px) 0 60px;
  flex-grow: 1;
}

.wrapper {
  max-width: 1328px;
  margin: 0 auto;
}

.black-button {
  background-color: var(--black-color);
  transition: background-color .3s;
}

.black-button:hover {
  background-color: var(--primary-color);
}

.link-hover {
  transition: color .3s;
}

.link-hover:hover {
  color: var(--primary-color);
}

@media (max-width: 1378px) {
  .wrapper {
    padding-left: 30px;
    padding-right: 30px;
  }
}

@media (max-width: 1023px) {
  .content {
    padding: calc(22px + 68px) 0 50px;
  }

  .wrapper {
    padding-left: 16px;
    padding-right: 16px;
  }
}

@media (max-width: 767px) {
  .body::-webkit-scrollbar {
    display: none;
  }
}
</style>
