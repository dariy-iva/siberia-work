<template>
  <header class="header">
    <div class="wrapper header__container">
      <button
        type="button"
        class="header__menu-button button-hover"
        aria-label="menu"/>
      <nuxt-link
        exact
        to="/">
        <img
          src="../assets/images/logos/logo_with_words.svg"
          alt="logo"
          class="header__logo"></nuxt-link>
      <label class="header__search-label">
        <input
          type="search"
          placeholder="Поиск по сайту"
          :class="`header__search-input ${searchIsOpen ? 'header__search-input_active' : ''}`">
        <button
          type="button"
          :class="`header__search-button button-hover ${searchIsOpen ? 'header__search-button_active' : ''}`"
          @click="handleSearchButtonClick"/>
      </label>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",

  data() {
    return {
      searchIsOpen: false,
    }
  },

  methods: {
    handleSearchButtonClick() {
      this.searchIsOpen = !this.searchIsOpen;
    }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  padding: 45px 0;
  border-bottom: 16px solid var(--black-color);
  box-sizing: border-box;
}

.header__container {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
}

.header__menu-button {
  width: 23px;
  height: 22px;
  border: none;
  mask-image: url("assets/images/icons/menu.svg");
  -webkit-mask-image: url("assets/images/icons/menu.svg");
  cursor: pointer;
}

.header__logo {
  display: block;
  width: 302px;
  height: 30px;
}

.header__search-label {
  position: relative;
  justify-self: end;
}

.header__search-input {
  padding: 10px 0;
  width: 0;
  opacity: 0;
  outline: none;
  border-bottom: 1px solid var(--primary-color);
  border-top: none;
  border-left: none;
  border-right: none;
  color: var(--black-color);
  transition: all .4s;
}

.header__search-input, .header__search-input::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
}

.header__search-input::placeholder {
  color: var(--gray-color);
}

.header__search-input_active {
  padding-right: calc(22px + 16px);
  width: 320px;
  opacity: 1;
}

.header__search-input::-webkit-search-cancel-button {
  width: 9.5px;
  height: 9.5px;
  content: url("assets/images/icons/close.svg");
  -webkit-appearance: none;
}

.header__search-button {
  position: absolute;
  right: 0;
  bottom: 9px;
  padding: 0;
  width: 22px;
  height: 22px;
  mask-image: url("assets/images/icons/search.svg");
  -webkit-mask-image: url("assets/images/icons/search.svg");
  border: none;
  cursor: pointer;
}

.header__search-button_active {
  background-color: var(--primary-color);
}

</style>
