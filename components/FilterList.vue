<template>
  <div class="filter">
    <p :class="`filter__title ${titleClass}`">
      {{ title }}
      <button
        type="button"
        @click="toggleCollapse"
        aria-label="collapse list"
        :class="`filter__collapse-button
        ${isDefaultOpen ? 'filter__collapse-button_hidden' : ''}
        ${!isCollapsed ? 'filter__collapse-button_active' : ''}`"
      />
    </p>

    <ul
      :class="`filter__list
      ${isCollapsed && !isDefaultOpen ? 'filter__list_hidden' : !isCollapsed ? 'filter__list_visible' : ''}`"
      :ref="`filter-list-${name}`"
    >
      <li v-if="name === 'cities'">
        <label
          :class="`filter__option-label link-hover ${selectedValue === 'all' ? 'filter__option-label_checked' : ''}`">
          Все

          <input
            type="radio"
            :name="name"
            value="all"
            v-model="selectedValue"
            class="filter__option-input"
          >
        </label>
      </li>

      <li
        v-for="item in filterItems"
        :key="item.label"
      >
        <label
          :class="`filter__option-label link-hover
          ${selectedValue === item.label ? 'filter__option-label_checked' : ''}`">

          <div
            v-if="hasIcon"
            class="filter__option-label_with-icon">
            <span :class="`filter__option-icon filter__option-icon_type_${item.name}`"/>

            {{ item.label }}
          </div>

          <span v-else>{{ item.label }}</span>

          <input
            type="radio"
            :name="name"
            :value="item.label"
            v-model="selectedValue"
            class="filter__option-input">
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FilterList",

  props: {
    title: String,
    titleClass: String,
    name: String,
    hasIcon: Boolean,
    defaultValue: String,
    filterItems: Array,
    isDefaultOpen: Boolean
  },

  data() {
    return {
      isCollapsed: true,
      selectedValue: this.defaultValue || null
    }
  },

  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed;

      const content = this.$refs[`filter-list-${this.name}`];

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    }
  }
}
</script>

<style scoped>
.filter {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.filter__title {
  margin: 0;
  display: flex;
  align-items: center;
  letter-spacing: -.7px;
}

.filter__collapse-button {
  padding: 0;
  display: inline-block;
  width: 22px;
  height: 100%;
  background: url("assets/images/icons/collapse.svg") center / 12px 7px no-repeat;
  border: none;
  cursor: pointer;
  transition: rotate .3s;
}

.filter__collapse-button_hidden {
  display: none;
}

.filter__collapse-button_active {
  rotate: 180deg;
}

.filter__list {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style-type: none;
  transition: max-height .4s ease-out;
}

.filter__list_hidden {
  overflow: hidden;
  max-height: 0;
}

.filter__option-label {
  font-weight: 700;
  font-size: 16px;
  line-height: 1.62;
  cursor: pointer;
}

.filter__option-label_checked {
  color: var(--primary-color);
}

.filter__option-label_with-icon {
  display: flex;
  align-items: baseline;
  gap: 13px;
}

.filter__option-icon {
  display: block;
  width: 14px;
  height: 14px;
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--black-color);
  transition: background-color .3s;
}

.filter__option-label_checked .filter__option-icon, .filter__option-label_with-icon:hover .filter__option-icon {
  background-color: var(--primary-color);
}

.filter__option-icon_type_hero {
  mask-image: url("assets/images/categories/hero.svg");
  -webkit-mask-image: url("assets/images/categories/hero.svg");
}

.filter__option-icon_type_top {
  mask-image: url("assets/images/icons/arrow.svg");
  -webkit-mask-image: url("assets/images/icons/arrow.svg");
  rotate: -90deg;
}

.filter__option-icon_type_trip {
  mask-image: url("assets/images/categories/trip.svg");
  -webkit-mask-image: url("assets/images/categories/trip.svg");
}

.filter__option-icon_type_workspace {
  mask-image: url("assets/images/categories/workspace.svg");
  -webkit-mask-image: url("assets/images/categories/workspace.svg");
}

.filter__option-icon_type_experts {
  mask-image: url("assets/images/categories/experts.svg");
  -webkit-mask-image: url("assets/images/categories/experts.svg");
}

.filter__option-icon_type_keys {
  mask-image: url("assets/images/categories/keys.svg");
  -webkit-mask-image: url("assets/images/categories/keys.svg");
}

.filter__option-icon_type_trendsetter {
  mask-image: url("assets/images/categories/trendsetter.svg");
  -webkit-mask-image: url("assets/images/categories/trendsetter.svg");
}

.filter__option-icon_type_projects {
  mask-image: url("assets/images/categories/projects.svg");
  -webkit-mask-image: url("assets/images/categories/projects.svg");
}

.filter__option-icon_type_review {
  mask-image: url("assets/images/categories/review.svg");
  -webkit-mask-image: url("assets/images/categories/review.svg");
}

.filter__option-icon_type_corporative {
  mask-image: url("assets/images/categories/corporative.svg");
  -webkit-mask-image: url("assets/images/categories/corporative.svg");
}

.filter__option-icon_type_index {
  mask-image: url("assets/images/categories/index.svg");
  -webkit-mask-image: url("assets/images/categories/index.svg");
}

.filter__option-input {
  display: none;
}

@media (max-width: 1023px) {
  .filter {
    gap: 0;
  }

  .filter__title {
    justify-content: space-between;
  }

  .filter__collapse-button_hidden {
    display: inline-block;
  }

  .filter__list {
    overflow: hidden;
    max-height: 0;
    gap: 12px;
  }

  .filter__list_visible {
    margin-top: 18px;
  }

  .filter__option-label {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .filter__option-label_checked::after {
    content: "";
    display: inline-block;
    width: 24px;
    height: 12px;
    mask-image: url("assets/images/icons/checked.svg");
    -webkit-mask-image: url("assets/images/icons/checked.svg");
    mask-size: contain;
    -webkit-mask-size: contain;
    mask-position: center;
    -webkit-mask-position: center;
    mask-repeat: no-repeat;
    -webkit-mask-repeat: no-repeat;
    background-color: var(--primary-color);
  }

}
</style>
