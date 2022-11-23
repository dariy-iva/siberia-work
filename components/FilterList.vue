<template>
  <div :class="`filter ${containerClass || ''}`">
    <p
      :class="`filter__title ${titleClass || ''} ${isAbsolutePosition ? 'filter__title_active' : ''}`"
      @click="toggleCollapse"
    >
      {{ title }}

      <span
        aria-label="collapse list"
        :class="`filter__collapse-icon
        ${isMainMenu ? 'filter__collapse-icon_in_main-menu' : ''}
        ${!isCollapsed ? 'filter__collapse-icon_active' : ''}`"
      />
    </p>

    <ul
      :class="listClass"
      :ref="`filter-list-${name}`"
    >
      <li v-if="name === 'cities'">
        <label
          :class="`filter__option-label link-hover
          ${selectedValue === 'all' ? 'filter__option-label_checked' : ''}
          ${isAbsolutePosition ? 'filter__option-label_type_with-checked-icon' : ''}`">
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
import {mapGetters} from "vuex";

export default {
  name: "FilterList",

  props: {
    title: String,
    containerClass: String,
    titleClass: String,
    contentClass: String,
    name: String,
    hasIcon: Boolean,
    defaultValue: String,
    filterItems: Array,
    isAbsolutePosition: Boolean,
    isAloneFilter: Boolean
  },

  data() {
    return {
      isCollapsed: !this.isAloneFilter,
      selectedValue: this.defaultValue || null,
      isFirstCollapse: true
    }
  },

  computed: {
    ...mapGetters({
      isMainMenu: 'menu/isMainMenu',
    }),

    contentElement() {
      return this.$refs[`filter-list-${this.name}`];
    },

    listClass() {
      let contentClass = `filter__list ${this.contentClass || ''}`;

      if (this.isMainMenu) {
        contentClass += ' ' + `${this.isCollapsed ? 'filter__list_in-main-menu_hidden' : 'filter__list_visible'}`
      } else {
        contentClass += ' ' + `${this.isCollapsed ? 'filter__list_hidden' : 'filter__list_visible'}`
      }
      return contentClass;
    }
  },

  methods: {
    toggleCollapse() {
      if (!this.isMainMenu || window.innerWidth < 1024) {
        this.isCollapsed = !this.isCollapsed;

        if (this.isCollapsed) {
          this.contentElement.style.maxHeight = null;
        } else {
          this.contentElement.style.maxHeight = this.contentElement.scrollHeight + "px";
        }
      }
    },

    handleWindowClick(e) {
      const filterElement = document.querySelector(`.${this.containerClass}`);
      if (!filterElement.contains(e.target) && this.isAbsolutePosition && !this.isCollapsed) {
        this.toggleCollapse();
      }
    }
  },

  mounted() {
    if (typeof document !== 'undefined' && this.isFirstCollapse && !this.isCollapsed) {
      this.contentElement.style.maxHeight = this.contentElement.scrollHeight + "px";
      this.isFirstCollapse = false;
    }
  },

  beforeMount() {
    (typeof document !== 'undefined' && this.isAbsolutePosition)
    && document.addEventListener('click', this.handleWindowClick);
  },

  beforeDestroy() {
    (typeof document !== 'undefined' && this.isAbsolutePosition)
    && document.removeEventListener('click', this.handleWindowClick);
  }
}
</script>

<style>
.filter {
  position: relative;
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

.filter__title_active {
  cursor: pointer;
}

.filter__collapse-icon {
  padding: 0;
  display: inline-block;
  width: 22px;
  height: 100%;
  background: url("static/images/icons/collapse.svg") center / 12px 7px no-repeat;
  border: none;
  cursor: pointer;
  transition: rotate .3s;
}

.filter__collapse-icon_in_main-menu {
  display: none;
}

.filter__collapse-icon_active {
  rotate: 180deg;
}

.filter__list {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style-type: none;
  visibility: visible;
  opacity: 1;
  transition: all .4s ease-out;
}

.filter__list_hidden {
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  max-height: 0;
}

.filter__option-label {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.62;
  cursor: pointer;
}

.filter__option-label_checked {
  color: var(--primary-color);
}

.filter__option-label_checked::after {
  content: "";
  display: none;
  width: 24px;
  height: 12px;
  mask-image: url("static/images/icons/checked.svg");
  -webkit-mask-image: url("static/images/icons/checked.svg");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: var(--primary-color);
}

.filter__option-label_checked.filter__option-label_type_with-checked-icon::after {
  display: inline-block;
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
  mask-image: url("static/images/categories/hero.svg");
  -webkit-mask-image: url("static/images/categories/hero.svg");
}

.filter__option-icon_type_top {
  mask-image: url("static/images/icons/arrow.svg");
  -webkit-mask-image: url("static/images/icons/arrow.svg");
  rotate: -90deg;
}

.filter__option-icon_type_trip {
  mask-image: url("static/images/categories/trip.svg");
  -webkit-mask-image: url("static/images/categories/trip.svg");
}

.filter__option-icon_type_workspace {
  mask-image: url("static/images/categories/workspace.svg");
  -webkit-mask-image: url("static/images/categories/workspace.svg");
}

.filter__option-icon_type_experts {
  mask-image: url("static/images/categories/experts.svg");
  -webkit-mask-image: url("static/images/categories/experts.svg");
}

.filter__option-icon_type_keys {
  mask-image: url("static/images/categories/keys.svg");
  -webkit-mask-image: url("static/images/categories/keys.svg");
}

.filter__option-icon_type_trendsetter {
  mask-image: url("static/images/categories/trendsetter.svg");
  -webkit-mask-image: url("static/images/categories/trendsetter.svg");
}

.filter__option-icon_type_projects {
  mask-image: url("static/images/categories/projects.svg");
  -webkit-mask-image: url("static/images/categories/projects.svg");
}

.filter__option-icon_type_review {
  mask-image: url("static/images/categories/review.svg");
  -webkit-mask-image: url("static/images/categories/review.svg");
}

.filter__option-icon_type_corporative {
  mask-image: url("static/images/categories/corporative.svg");
  -webkit-mask-image: url("static/images/categories/corporative.svg");
}

.filter__option-icon_type_index {
  mask-image: url("static/images/categories/index.svg");
  -webkit-mask-image: url("static/images/categories/index.svg");
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
    cursor: pointer;
  }

  .filter__collapse-icon_in_main-menu {
    display: inline-block;
  }

  .filter__list {
    gap: 12px;
  }

  .filter__list_visible {
    margin-top: 18px;
  }

  .filter__list_in-main-menu_hidden {
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    max-height: 0;
  }

  .filter__option-label_checked::after {
    display: inline-block;
  }

}
</style>
