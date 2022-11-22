<template>
  <div :class="`overlay ${isOpen ? 'overlay_visible' : ''}`">
    <div :class="`menu ${isOpen ? 'menu_visible' : ''}`">
      <div class="wrapper menu__wrapper">
        <div class="menu__header">
          <button
            type="button"
            @click="onClose"
            aria-label="close menu"
            class="menu__close-button black-button"/>

          <Logo className="menu__logo"/>
        </div>

        <div class="menu__content">
          <div class="menu__columns">
            <FilterList
              title="Города"
              titleClass="menu__column-title"
              name="cities"
              :hasIcon="false"
              defaultValue="all"
              :filterItems="citiesList"
              :isDefaultOpen="true"
            />

            <FilterList
              title="Рубрики"
              titleClass="menu__column-title"
              name="categories"
              :hasIcon="true"
              :filterItems="categoriesList"
              :isDefaultOpen="true"
            />

            <nav>
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

          <Contacts :isLight="false" containerClass="menu__contacts"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {navigationLinksMenu} from "assets/constants/navigationLinks";
import {categoriesList} from "assets/constants/categoriesList";
import Contacts from "~/components/Contacts";
import Logo from "~/components/Logo";
import FilterList from "~/components/FilterList";

export default {
  name: "Menu",

  components: {
    Logo,
    FilterList,
    Contacts
  },

  props: {
    isOpen: Boolean,
    onClose: Function
  },

  data() {
    return {
      selectedCity: 'all',
      selectedCategory: null,
    }
  },

  computed: {
    citiesList() {
      return this.$store.getters['cities'];
    },

    navigationLinks() {
      return navigationLinksMenu;
    },

    categoriesList() {
      return categoriesList;
    }
  },
}
</script>

<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 15;
  visibility: hidden;
  opacity: 0;
  transition: all .3s;
}

.menu {
  position: absolute;
  width: 100%;
  max-height: 100%;
  min-height: 100%;
  z-index: 20;
  overflow: auto;
  display: flex;
  background-color: var(--white-color);
  color: var(--black-color);
  box-sizing: border-box;
  transition: all .3s;
}

.overlay_visible {
  visibility: visible;
  opacity: 1;
}

.menu__wrapper {
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
  width: 18px;
  height: 18px;
  display: block;
  border: none;
  mask-image: url("static/images/icons/close.svg");
  -webkit-mask-image: url("static/images/icons/close.svg");
  -webkit-mask-size: cover;
  cursor: pointer;
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
  .menu__wrapper {
    min-height: 100%;
    padding-top: 21px;
  }

  .menu::-webkit-scrollbar {
    display: none;
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
