<template>
  <header class="header">
    <div class="wrapper header__container">
      <button
        type="button"
        @click="openMenu"
        class="header__menu-button black-button"
        aria-label="menu"
      />

      <Logo className="header__logo"/>

      <SearchInput/>
    </div>
  </header>
</template>

<script>
import Logo from "~/components/Logo";
import SearchInput from "@/components/SearchInput";
import {toggleBodyOverflow} from "assets/utils/toggleBodyOverflow";

export default {
  name: "Header",

  components: {
    Logo,
    SearchInput
  },

  methods: {
    openMenu() {
      toggleBodyOverflow(this.$store.getters['menu/isOpen']);

      this.$store.dispatch({
        type: 'menu/openMenu',
        isMainMenu: true,
        hasCities: true,
        hasCategories: true,
      });
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
  z-index: 50;
  padding: 39px;
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
  mask-image: url("static/images/icons/menu.svg");
  -webkit-mask-image: url("static/images/icons/menu.svg");
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
  background-image: url("static/images/logos/logo_with_words.svg");
}

@media (max-width: 1023px) {
  .header {
    padding: 19px 0;
    border-width: 8px;
  }

  .header__container .header__logo {
    width: 160px;
    height: 16px;
  }
}
</style>
