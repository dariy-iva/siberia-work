<template>
  <ul class="dayNews">
    <li
      v-for="item in itemList.slice(0, 4)"
      :key="item.id">
      <article class="dayNews__item">
        <nuxt-link
          to="/"
          no-prefetch
          class="dayNews__link"
        />
        
        <time class="dayNews__time">
          {{ getTime(item.time) }}
        </time>

        <h3 class="dayNews__title">{{ item.title }}</h3>

        <p class="dayNews__text">{{ item.text }}</p>

        <p class="dayNews__city">{{ item.city }}</p>
      </article>

    </li>

    <li v-if="hasSlot">
      <slot/>
    </li>

    <li
      v-for="item in itemList.slice(4)"
      :key="item.id">
      <article class="dayNews__item">
        <nuxt-link
          to="/"
          no-prefetch
          class="dayNews__link"
        />

        <time class="dayNews__time">
          {{ getTime(item.time) }}
        </time>

        <h3 class="dayNews__title">{{ item.title }}</h3>

        <p class="dayNews__text">{{ item.text }}</p>

        <p class="dayNews__city">{{ item.city }}</p>
      </article>
    </li>
  </ul>

</template>

<script>
import AsideHorizontal from "~/components/AsideHorizontal";
import AsideVertical from "~/components/AsideVertical";

export default {
  name: "NewsDayList",

  components: {
    AsideHorizontal,
    AsideVertical
  },

  props: {
    itemList: Array,
    hasSlot: Boolean
  },

  methods: {
    getTime(unixTime) {
      const date = new Date(unixTime * 1000);
      const hour = date.getHours();
      const min = date.getMinutes();

      return `${hour > 9 ? hour : '0' + hour}:${min > 9 ? min : '0' + min}`;
    }
  }
}
</script>

<style scoped>
.dayNews {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.dayNews__item {
  position: relative;
  padding-bottom: calc(8px + 1px);
  display: grid;
  grid-template-columns: 14.6% 85.4%;
  grid-row-gap: 8px;
  grid-template-areas:
    "time title"
    "time text"
    "time city";
  letter-spacing: .2px;
}

.dayNews__item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  width: 400px;
  height: 1px;
  background-color: var(--middle-gray-color);
}

.dayNews__link {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.dayNews__time {
  grid-area: time;
  padding: 0 10px;
  margin: 0;
  width: fit-content;
  height: fit-content;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.83;
  text-transform: uppercase;
  color: var(--primary-color);
  background-color: var(--light-gray-color);
  border-radius: 20px;
}

.dayNews__title {
  grid-area: title;
  margin: 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.33;
  color: var(--black-color);
}

.dayNews__text {
  grid-area: text;
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: var(--black-color);
}

.dayNews__city {
  grid-area: city;
  margin: 0;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.83;
  text-transform: uppercase;
  color: var(--gray-color);
}

@media (max-width: 1023px) {
  .dayNews__item {
    grid-template-columns: min-content auto;
    grid-template-areas:
    "time city"
    "title title"
    "text text";
    grid-column-gap: 20px;
  }

  .dayNews__item::after {
    width: 61%;
  }
}

</style>
