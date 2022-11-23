<template>
  <div class="search">
    <form
      :name="isMenu ? 'search-in-menu' : 'search-in-header'"
      @submit.prevent="handleSearch"
      :class="`search__form
      ${isMenu ? 'search__form_in_menu' : searchIsOpen ? 'search__form_visible' : 'search__form_in_header'}`">
      <label class="search__label">
        <input
          type="search"
          name="search"
          v-model="searchValue"
          minlength="2"
          placeholder="Поиск по сайту"
          class="search__input">

        <button
          type="submit"
          class="search__button black-button search__button_active"
        />
      </label>
    </form>

    <button
      type="button"
      @click="openSearch"
      :class="`search__button black-button
      ${searchIsOpen ? 'search__button_hidden' : ''}
      ${isMenu ? 'search__button_in_menu' : 'search__button_in_header'}`"
    />
  </div>

</template>

<script>
import {toggleBodyOverflow} from "assets/utils/toggleBodyOverflow";
import {mapGetters} from "vuex";

export default {
  name: "SearchInput",

  props: {
    isMenu: Boolean
  },

  data() {
    return {
      searchIsOpen: this.isMenu,
      searchValue: null
    }
  },

  computed: {
    ...mapGetters({
      menuIsOpen: 'menu/isOpen'
    }),
  },

  methods: {
    handleSearch() {
      this.searchValue = null;

      if (this.menuIsOpen) {
        this.$store.dispatch('menu/closeMenu');
      }
    },

    openSearchInHeader() {
      setTimeout(() => this.searchIsOpen = true, 0);
    },

    openSearchInMenu() {
      toggleBodyOverflow();

      this.$store.dispatch({
        type: 'menu/openMenu',
        hasSearch: true,
      });
    },

    openSearch() {
      const windowWidth = typeof window !== 'undefined' ? window.innerWidth : null;

      if (windowWidth > 1023) {
        this.openSearchInHeader();
      } else {
        this.openSearchInMenu();
      }
    },

    handleWindowClick(e) {
      const formElement = document.forms['search-in-header'];

      if (!formElement.contains(e.target) && this.searchIsOpen) {
        this.searchIsOpen = false;
      }
    }
  },

  beforeMount() {
    (typeof document !== 'undefined' && !this.isMenu)
    && document.addEventListener('click', this.handleWindowClick);
  },

  beforeDestroy() {
    (typeof document !== 'undefined' && !this.isMenu)
    && document.removeEventListener('click', this.handleWindowClick);
  }
}
</script>

<style scoped>
.search {
  position: relative;
  display: flex;
  justify-content: flex-end;
}

.search__form {
  display: flex;
  justify-content: flex-end;
  transition: all .4s ease-out;
}

.search__form_in_menu {
  width: 100%;
}

.search__form_in_header {
  width: 0;
  opacity: 0;
}

.search__form_visible {
  width: 320px;
  opacity: 1;
}

.search__label {
  position: relative;
  width: 100%;
}

.search__input {
  padding: 10px calc(22px + 16px) 10px 0;
  width: 100%;
  outline: none;
  border-bottom: 1px solid var(--primary-color);
  border-top: none;
  border-left: none;
  border-right: none;
  color: var(--black-color);
}

.search__input, .search__input::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: .7px;
}

.search__input::placeholder {
  color: var(--gray-color);
}

.search__input::-webkit-search-cancel-button {
  width: 9.5px;
  height: 9.5px;
  content: url("static/images/icons/close.svg");
  -webkit-appearance: none;
}

.search__button {
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
  mask-image: url("static/images/icons/search.svg");
  -webkit-mask-image: url("static/images/icons/search.svg");
  background-color: var(--black-color);
  border: none;
  cursor: pointer;
  transition: all .4s ease-out;
}

.search__button_active {
  background-color: var(--primary-color);
}

.search__button_hidden {
  background-color: var(--primary-color);
  z-index: -1;
}

@media (max-width: 1023px) {
  .search__form_in_header, .search__form_visible {
    display: none;
  }

  .search__button.search__button_in_menu {
    display: none;
  }

  .search__button.search__button_in_header {
    position: static;
    background-color: var(--black-color);
  }
}

</style>
