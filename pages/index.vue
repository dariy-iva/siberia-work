<template>
  <section class="news">
    <Breadcrumbs/>

    <div class="news__columns">
      <h1 class="news__title">Новости</h1>

      <FilterList
        title="Город"
        titleClass="news__city-title"
        containerClass="news__city-container"
        contentClass="news__city-content"
        name="cities"
        :hasIcon="false"
        defaultValue="all"
        :filterItems="citiesList"
        :isAbsolutePosition="true"
      />

      <button
        type="button"
        @click="openMenu"
        class="news__city-title news__city-button"
        aria-label="раскрыть список городов">
        Выбрать город
        <span class="news__city-icon"/>
      </button>

      <ul class="news__list">
        <li
          v-for="(value, key) of newsList"
          :key="key">
          <h2 class="news__date">
            {{ getDateText(key) }}
          </h2>

          <NewsDayList
            :itemList="value"
            :hasSlot="Object.keys(newsList)[0] === key"
          >
            <AsideHorizontal containerClass="news__aside-horizontal"/>

            <AsideVertical containerClass="news__aside-vertical_slot"/>
          </NewsDayList>
        </li>
      </ul>

      <AsideVertical containerClass="news__aside-vertical_column"/>
    </div>
  </section>
</template>

<script>
import {mapGetters} from 'vuex';
import NewsDayList from "~/components/NewsDayList";
import AsideVertical from "~/components/AsideVertical";
import FilterList from "~/components/FilterList";
import Breadcrumbs from "~/components/Breadcrumbs";
import {toggleBodyOverflow} from "assets/utils/toggleBodyOverflow";

export default {
  name: 'IndexPage',

  components: {
    Breadcrumbs,
    FilterList,
    NewsDayList,
    AsideVertical
  },

  computed: {
    ...mapGetters({
      citiesList: 'cities',
      newsList: 'news',
      menuIsOpen: 'menu/isOpen'
    }),
  },

  methods: {
    getDateText(date) {
      const monthsOnRu = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'
      ];
      const [year, month, day] = date.split('-');
      const nowDay = (new Date()).toLocaleDateString();

      return nowDay === `${day}.${month}.${year}`
        ? 'Сегодня'
        : `${day} ${monthsOnRu[month - 1]}`
    },

    openMenu() {
      toggleBodyOverflow(this.menuIsOpen);

      this.$store.dispatch({
        type: 'menu/openMenu',
        isMainMenu: false,
        hasCities: true,
      });
    }
  },

  beforeCreate() {
    this.$store.dispatch('getNews');
  }

}
</script>

<style>
.news {
  display: flex;
  flex-direction: column;
}

.news__columns {
  margin-top: 47px;
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, max-content));
  justify-content: space-between;
}

.news__title {
  margin: 0;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.58;
  text-transform: uppercase;
  color: var(--black-color);
}

.filter.news__city-container {
  max-width: fit-content;
  justify-self: flex-end;
}

.filter__title.news__city-title, .news__city-title {
  font-weight: 500;
  font-size: 16px;
  line-height: 1.62;
}

.filter__title.news__city-title {
  margin-right: 12px;
  align-self: flex-end;
  justify-self: flex-end;
  gap: 5px;
  max-width: max-content;
}

.filter__list.news__city-content {
  position: absolute;
  top: 33px;
  right: 0;
  z-index: 20;
  min-width: calc(260px - 32px - 2px);
  background-color: var(--white-color);
  border-radius: 5px;
}

.filter__list_visible.news__city-content {
  padding: 16px;
  border: 1px solid var(--primary-color);
}

.news__city-button {
  display: none;
}

.news__list {
  max-width: 768px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 0;
  margin: 40px 0 0;
  list-style-type: none;
}

.news__date {
  margin: 0 0 20px;
  font-weight: 700;
  font-size: 24px;
  line-height: 1.58;
  color: var(--black-color);
}

.aside-vertical.news__aside-vertical_slot {
  display: none;
}

@media (max-width: 1200px) {
  .news__columns {
    grid-column-gap: 40px;
  }
}

@media (max-width: 1023px) {
  .news__columns {
    margin-top: 32px;
    grid-template-columns: 1fr;
  }

  .news__title {
    margin-bottom: 18px;
    font-size: 20px;
    line-height: 1.4;
  }

  .filter.news__city-container {
    display: none;
  }

  .news__city-button {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: none;
    border: none;
    cursor: pointer;
    transition: color .3s;
  }

  .news__city-button:hover {
    color: var(--primary-color);
  }

  .news__city-icon {
    content: "";
    display: block;
    width: 22px;
    height: 22px;
    mask-size: 12px 7px;
    -webkit-mask-size: 12px 7px;
    mask-position: center;
    -webkit-mask-position: center;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    mask-image: url("static/images/icons/collapse.svg");
    -webkit-mask-image: url("static/images/icons/collapse.svg");
    background-color: var(--black-color);
    rotate: -90deg;
    transition: background-color .3s;
  }

  .news__city-button:hover .news__city-icon {
    background-color: var(--primary-color);
  }

  .news__list {
    max-width: 100%;
    gap: 50px;
  }

  .news__date {
    font-size: 20px;
    line-height: 1.4;
  }

  .aside-horizontal.news__aside-horizontal {
    display: none;
  }

  .aside-vertical.news__aside-vertical_slot {
    display: flex;
  }

  .aside-vertical.news__aside-vertical_column {
    display: none;
  }
}

</style>
