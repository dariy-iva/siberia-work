<template>
  <div class=" menu">
    <div class="wrapper">
      <button
        type="button"
        aria-label="close menu"
        class="menu__close-button black-button"/>
      <div class="menu__container">
        <div class="menu__columns">
          <div>
            <p class="menu__legend">Города</p>
            <ul class="menu__list menu__options">
              <li>
                <label
                  :class="`menu__option-label link-hover ${selectedCity === 'all' ? 'menu__option-label_checked' : ''}`">
                  Все
                  <input
                    type="radio"
                    name="cities"
                    value="all"
                    v-model="selectedCity"
                    class="menu__option-input">
                </label>
              </li>
              <li v-for="city in citiesList" :key="`city-${city.id}`">
                <label
                  :class="`menu__option-label link-hover ${selectedCity === city.id ? 'menu__option-label_checked' : ''}`">
                  {{ city.label }}
                  <input
                    type="radio"
                    name="cities"
                    :value="city.id"
                    v-model="selectedCity"
                    class="menu__option-input">
                </label>
              </li>
            </ul>
          </div>

          <div>
            <p class="menu__legend">Рубрики</p>
            <ul class="menu__list menu__options">
              <li v-for="item in categoriesList" :key="`city-${item.name}`">
                <label
                  :class="`menu__option-label link-hover
                  ${selectedCategory === item.name ? 'menu__option-label_checked' : ''}
                  menu__option-label_type_${item.name}`">
                  {{ item.label }}
                  <input
                    type="radio"
                    name="categories"
                    :value="item.name"
                    v-model="selectedCategory"
                    class="menu__option-input">
                </label>
              </li>
            </ul>
          </div>

          <nav>
            <ul class="menu__list menu__navigation">
              <li
                v-for="item in navigationLinks"
                :key="item.title">
                <nuxt-link
                  to="item.link"
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

export default {
  name: "Menu",

  components: {
    Contacts
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 52px 0 94px;
  background-color: inherit;
  color: var(--black-color);
}

.menu__close-button {
  padding: 0;
  width: 16px;
  height: 16px;
  display: block;
  border: none;
  mask-image: url("assets/images/icons/close.svg");
  -webkit-mask-image: url("assets/images/icons/close.svg");
  -webkit-mask-size: cover;
  cursor: pointer;
}

.menu__container {
  margin-top: 62px;
  position: relative;
  overflow: hidden;
  min-height: 656px;
  width: 100%;
}

.menu__container::after {
  content: "";
  display: block;
  position: absolute;
  top: 228px;
  right: -228px;
  overflow: hidden;
  height: 200px;
  width: 656px;
  background: url("assets/images/logos/logo.svg") center / cover no-repeat;
  rotate: 90deg;
}

.menu__columns {
  margin-bottom: 46px;
  display: grid;
  grid-template-columns: repeat(3, 245px);
  grid-column-gap: 91px;
}

.menu__legend {
  margin: 0 0 12px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.58;
  text-transform: uppercase;
}

.menu__list {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.menu__options {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.menu__option-label {
  font-weight: 700;
  font-size: 16px;
  line-height: 1.62;
  cursor: pointer;
}

.menu__option-label_checked {
  color: var(--primary-color);
}

.menu__option-input {
  display: none;
}

.menu__navigation {
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
  -webkit-mask-size: cover;
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
</style>
