<template>
  <div class="breadcrumbs">
    <span class="breadcrumbs__item">Главная</span>

    <span class="breadcrumbs__item">Новости</span>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs"
}
</script>

<style scoped>
.breadcrumbs {
  position: relative;
  padding-bottom: 8px;
  display: flex;
}

.breadcrumbs::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: -1px;
  display: block;
  width: 91.5%;
  border-bottom: 1px solid var(--primary-color);
}

.breadcrumbs__item {
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
}

.breadcrumbs__item:not(:first-of-type)::before {
  margin: 0 8px 0 9px;
  content: "";
  display: block;
  width: 11.5px;
  height: 6.5px;
  background: url("assets/images/icons/collapse.svg");
  rotate: -90deg;
}

.breadcrumbs__item:not(:last-of-type) {
  color: var(--primary-color);
}

.breadcrumbs__item:last-of-type {
  color: var(--gray-color);
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
