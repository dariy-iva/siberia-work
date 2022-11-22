<template>
  <section class="news">
    <Breadcrumbs/>

    <div class="news__columns">
      <h1 class="news__title">Новости</h1>

      <FilterList
        title="Выбрать город"
        titleClass="news__city-title"
        name="cities"
        :hasIcon="false"
        defaultValue="all"
        :filterItems="citiesList"
        :isDefaultOpen="false"
      />

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
import NewsDayList from "~/components/NewsDayList";
import AsideVertical from "~/components/AsideVertical";
import FilterList from "~/components/FilterList";
import Breadcrumbs from "~/components/Breadcrumbs";

export default {
  name: 'IndexPage',

  components: {
    Breadcrumbs,
    FilterList,
    NewsDayList,
    AsideVertical
  },

  computed: {
    citiesList() {
      return this.$store.getters['cities'];
    },

    newsList() {
      return this.$store.getters['news'];
    }
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

.filter__title.news__city-title {
  margin-right: 12px;
  align-self: flex-end;
  justify-self: flex-end;
  gap: 5px;
  max-width: max-content;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.62;
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

.news__aside-vertical_slot {
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

  .filter__title.news__city-title {
    align-self: flex-start;
    max-width: 100%;
    width: 100%;
    margin-right: 0;
    letter-spacing: .8px;
  }

  .news__list {
    gap: 50px;
  }

  .news__date {
    font-size: 20px;
    line-height: 1.4;
  }

  .news__aside-horizontal {
    display: none;
  }

  .news__aside-vertical_slot {
    display: flex;
  }

  .news__aside-vertical_column {
    display: none;
  }
}

</style>
