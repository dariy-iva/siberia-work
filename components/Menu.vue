<template>
  <Overlay :isVisible="isOpen">
    <div class="wrapper menu">
      <div class="menu__header">
        <button
          type="button"
          @click="closeMenu"
          aria-label="close menu"
          :class="`menu__close-button black-button
          ${isMainMenu && isOpen ? 'menu__close-button_type_cross' : isOpen ? 'menu__close-button_type_arrow' : ''}`"/>

        <Logo className="menu__logo"/>
      </div>

      <div class="menu__content">
        <div class="menu__columns">
          <SearchInput
            v-if="hasSearch"
            :isMenu="true"/>

          <FilterList
            v-if="hasCities"
            title="Города"
            titleClass="menu__column-title"
            name="cities"
            :hasIcon="false"
            defaultValue="all"
            :filterItems="citiesList"
            :isDefaultOpen="true"
          />

          <FilterList
            v-if="hasCategories"
            title="Рубрики"
            titleClass="menu__column-title"
            name="categories"
            :hasIcon="true"
            :filterItems="categoriesList"
            :isDefaultOpen="true"
          />

          <nav v-if="isMainMenu">
            <ul class="menu__nav-list">
              <li
                v-for="item in navigationLinks"
                :key="item.title">
                <nuxt-link
                  :to="item.link"
                  no-prefetch
                  class="menu__nav-link link-hover">
                  {{ item.title }}
                  <span class="menu__nav-arrow"></span>
                </nuxt-link>
              </li>
            </ul>
          </nav>
        </div>

        <Contacts v-if="isMainMenu" :isLight="false" containerClass="menu__contacts"/>
      </div>
    </div>
  </Overlay>

</template>

<script>
import {mapGetters} from 'vuex';
import {navigationLinksMenu} from "assets/constants/navigationLinks";
import {categoriesList} from "assets/constants/categoriesList";
import Overlay from "@/components/Overlay";
import Contacts from "~/components/Contacts";
import Logo from "~/components/Logo";
import FilterList from "~/components/FilterList";
import SearchInput from "@/components/SearchInput";
import {toggleBodyOverflow} from "assets/utils/toggleBodyOverflow";

export default {
  name: "Menu",

  components: {
    Overlay,
    Logo,
    SearchInput,
    FilterList,
    Contacts
  },

  data() {
    return {
      selectedCity: 'all',
      selectedCategory: null,
    }
  },

  computed: {
    ...mapGetters({
      isOpen: 'menu/isOpen',
      isMainMenu: 'menu/isMainMenu',
      hasSearch: 'menu/hasSearch',
      hasCities: 'menu/hasCities',
      hasCategories: 'menu/hasCategories',
      citiesList: 'cities',
    }),

    navigationLinks() {
      return navigationLinksMenu;
    },

    categoriesList() {
      return categoriesList;
    }
  },

  methods: {
    closeMenu() {
      toggleBodyOverflow(this.isOpen);

      this.$store.dispatch('menu/closeMenu');
    }
  }
}
</script>

<style>
.menu {
  padding-top: 52px;
  min-height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.menu__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.menu__close-button {
  padding: 0;
  height: 18px;
  display: block;
  border: none;
  mask-size: cover;
  -webkit-mask-size: cover;
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  cursor: pointer;
}

.menu__close-button_type_cross {
  width: 18px;
  mask-image: url("static/images/icons/close.svg");
  -webkit-mask-image: url("static/images/icons/close.svg");
}

.menu__close-button_type_arrow {
  width: 20px;
  mask-image: url("static/images/icons/arrow.svg");
  -webkit-mask-image: url("static/images/icons/arrow.svg");
  rotate: 180deg;
}

.menu__header .menu__logo {
  display: none;
  width: 160px;
  height: 16px;
  background-image: url("static/images/logos/logo_with_words.svg");
}

.menu__content {
  padding-bottom: 94px;
  padding-top: 62px;
  flex-grow: 1;
  position: relative;
  min-height: 676px;
  width: 100%;
  background: url("static/images/logos/logo_big.svg") top 53px right / 200px 656px no-repeat;
}

.menu__columns {
  margin-bottom: 46px;
  display: grid;
  grid-template-columns: repeat(3, 245px);
  grid-column-gap: 91px;
}

.filter__title.menu__column-title {
  font-weight: 700;
  font-size: 24px;
  line-height: 1.58;
  text-transform: uppercase;
}

.menu__nav-list {
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.menu__nav-link {
  display: flex;
  align-items: baseline;
  text-decoration: none;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.58;
  text-transform: uppercase;
  color: var(--black-color);
}

.menu__nav-arrow::after {
  margin-left: 10px;
  content: "";
  display: block;
  width: 20px;
  height: 18px;
  mask-image: url("static/images/icons/arrow.svg");
  -webkit-mask-image: url("static/images/icons/arrow.svg");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--black-color);
  transition: background-color .3s;
}

.menu__nav-link:hover .menu__nav-arrow::after {
  background-color: var(--primary-color);
}

.menu__content .menu__contacts {
  align-items: center;
  gap: 145px;
}

@media (max-width: 1200px) {
  .menu__content {
    background: none;
  }
}

@media (max-width: 1023px) {
  .menu {
    min-height: 100%;
    padding-top: 21px;
  }

  .menu__header .menu__logo {
    display: block;
  }

  .menu__content {
    min-height: fit-content;
    padding-bottom: 40px;
    padding-top: 39px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .menu__columns {
    margin-bottom: 57px;
    grid-template-columns: 1fr;
    grid-row-gap: 38px;
  }

  .filter__title.menu__column-title {
    font-size: 20px;
    line-height: 1.4;
  }

  .menu__nav-list {
    gap: 36px;
  }

  .menu__nav-link {
    font-size: 20px;
    line-height: 1.4;
  }

  .menu__nav-arrow::after {
    margin-left: 17px;
  }

  .menu__content .menu__contacts {
    padding: 0 calc(61px - 16px);
    flex-direction: column;
    gap: 50px;
  }
}
</style>
