<template>
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
          <FilterList title="Города" name="cities" :hasIcon="false" defaultValue="all" :filterItems="citiesList"/>

          <FilterList title="Рубрики" name="categories" :hasIcon="true" :filterItems="categoriesList"/>

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
</template>

<script>
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
      citiesList: [
        {
          id: 1,
          label: 'Красноярск'
        },
        {
          id: 2,
          label: 'Богучаны'
        },
        {
          id: 3,
          label: 'Тайшет'
        },
        {
          id: 4,
          label: 'Шелехов'
        },
        {
          id: 5,
          label: 'Абакан'
        },
        {
          id: 6,
          label: 'Саяногорск'
        },
        {
          id: 7,
          label: 'Дивногорск'
        },
        {
          id: 8,
          label: 'Ачинск'
        },
        {
          id: 9,
          label: 'Иркутск'
        },
        {
          id: 10,
          label: 'Брянск'
        },
        {
          id: 11,
          label: 'Новосибирск'
        },
        {
          id: 12,
          label: 'Омск'
        },
        {
          id: 13,
          label: 'Томск'
        },
        {
          id: 14,
          label: 'Кемерово'
        },
      ],
      categoriesList: [
        {
          label: 'Герой с обложки',
          name: 'hero'
        },
        {
          label: 'Топ',
          name: 'top'
        },
        {
          label: 'Экскурсия',
          name: 'trip'
        },
        {
          label: 'Рабочее место',
          name: 'workspace'
        },
        {
          label: '5 экспертов',
          name: 'experts'
        },
        {
          label: 'Кейс',
          name: 'keys'
        },
        {
          label: 'Трендсеттер недели',
          name: 'trendsetter'
        },
        {
          label: '10 новых проектов недели',
          name: 'projects'
        },
        {
          label: 'Рецензия',
          name: 'review'
        },
        {
          label: 'Корпоративный выход',
          name: 'corporative'
        },
        {
          label: 'Индекс городов',
          name: 'index'
        },
      ],
      navigationLinks: [
        {
          title: 'Популярное',
          link: '/',
        },
        {
          title: 'Новости',
          link: '/',
        },
        {
          title: 'Наши герои',
          link: '/',
        },
      ],
      selectedCity: 'all',
      selectedCategory: null,
    }
  },
}
</script>

<style scoped>
.menu {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 52px 0 94px;
  display: flex;
  background-color: inherit;
  color: var(--black-color);
  visibility: hidden;
  opacity: 0;
  box-sizing: border-box;
  transition: all .3s;
}

.menu_visible {
  visibility: visible;
  opacity: 1;
}

.menu__wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background: url("assets/images/logos/logo_big.svg") top 71px right / 200px 656px no-repeat;
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
  mask-image: url("assets/images/icons/close.svg");
  -webkit-mask-image: url("assets/images/icons/close.svg");
  -webkit-mask-size: cover;
  cursor: pointer;
}

.menu__logo {
  display: none;
  width: 160px;
  height: 16px;
  background-image: url("../assets/images/logos/logo_with_words.svg");
}

.menu__content {
  flex-grow: 1;
  margin-top: 62px;
  position: relative;
  min-height: 656px;
  width: 100%;
}

.menu__columns {
  margin-bottom: 46px;
  display: grid;
  grid-template-columns: repeat(3, 245px);
  grid-column-gap: 91px;
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
  mask-image: url("assets/images/icons/arrow.svg");
  -webkit-mask-image: url("assets/images/icons/arrow.svg");
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

.menu__contacts {
  align-items: center;
  gap: 145px;
}

@media (max-width: 1378px) {
  .menu__wrapper {
    background-position: top 71px right 21px;
  }
}

@media (max-width: 1200px) {
  .menu__wrapper {
    background: none;
  }
}

@media (max-width: 1023px) {
  .menu {
    min-height: 100vh;
    padding: 21px 0 40px;
  }

  .menu__logo {
    display: block;
  }

  .menu__content {
    margin-top: 39px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .menu__columns {
    margin-bottom: 57px;
    grid-template-columns: 1fr;
    grid-row-gap: 38px;
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

  .menu__contacts {
    padding: 0 calc(61px - 16px);
    flex-direction: column;
    gap: 50px;
  }
}
</style>
