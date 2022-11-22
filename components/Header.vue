<template>
  <header class="header">
    <div class="wrapper header__container">
      <button
        type="button"
        @click="openMenu"
        :class="`header__menu-button black-button ${searchIsOpen ? 'header__menu-button_hidden' : ''}`"
        aria-label="menu"
      />

      <Logo :className="`header__logo ${searchIsOpen ? 'header__logo_hidden' : ''}`"/>

      <label class="header__search-label">
        <input
          type="search"
          placeholder="Поиск по сайту"
          :class="`header__search-input ${searchIsOpen ? 'header__search-input_active' : ''}`">

        <button
          type="button"
          :class="`header__search-button black-button ${searchIsOpen ? 'header__search-button_active' : ''}`"
          @click="handleSearchButtonClick"
        />
      </label>
    </div>
  </header>
</template>

<script>
import Logo from "~/components/Logo";

export default {
  name: "Header",

  components: {
    Logo
  },

  props: {
    openMenu: Function
  },

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
  right: 0;
  z-index: 1;
  padding: 45px 0 39px;
  border-bottom: 16px solid var(--black-color);
  box-sizing: border-box;
  background-color: inherit;
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
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  cursor: pointer;
}

.header__container .header__logo {
  width: 302px;
  height: 30px;
  background-image: url("../assets/images/logos/logo_with_words.svg");
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
  letter-spacing: .7px;
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
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  mask-image: url("assets/images/icons/search.svg");
  -webkit-mask-image: url("assets/images/icons/search.svg");
  border: none;
  cursor: pointer;
}

.header__search-button_active {
  background-color: var(--primary-color);
}

@media (max-width: 1023px) {
  .header {
    padding: 19px 0 9px;
    border-width: 8px;
  }

  .header__menu-button_hidden {
    display: none;
  }

  .header__container .header__logo {
    width: 160px;
    height: 16px;
  }

  .header__container .header__logo_hidden {
    display: none;
  }
}
</style>
