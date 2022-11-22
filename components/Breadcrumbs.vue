<template>
  <ul class="breadcrumbs">
    <li class="breadcrumbs__item">
      <nuxt-link to="/" no-prefetch class="breadcrumbs__link breadcrumbs__text">Главная</nuxt-link>
    </li>

    <li class="breadcrumbs__item breadcrumbs__text">Новости</li>
  </ul>
</template>

<script>
export default {
  name: "Breadcrumbs"
}
</script>

<style scoped>
.breadcrumbs {
  position: relative;
  margin: 0;
  padding-left: 0;
  padding-bottom: 8px;
  display: flex;
}

.breadcrumbs::after {
  content: "";
  position: absolute;
  top: 100%;
  bottom: -1px;
  display: block;
  width: 91.5%;
  border-bottom: 1px solid var(--primary-color);
}

.breadcrumbs__item {
  display: flex;
  align-items: center;
}

.breadcrumbs__item:not(:first-of-type)::before {
  margin: 0 8px 0 9px;
  content: "";
  display: block;
  width: 11.5px;
  height: 6.5px;
  background: url("static/images/icons/collapse.svg");
  rotate: -90deg;
}

.breadcrumbs__item:last-of-type {
  color: var(--gray-color);
}

.breadcrumbs__text {
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
}

.breadcrumbs__link {
  text-decoration: none;
  color: var(--primary-color);
}

@media (max-width: 1023px) {
  .breadcrumbs::after {
    max-width: 83%;
  }

  .breadcrumbs__item:not(:first-of-type)::before {
    margin: 0 9px 0 8px;
    rotate: 90deg;
  }

  .breadcrumbs__item:not(:last-of-type) {
    display: none;
  }
}

</style>
