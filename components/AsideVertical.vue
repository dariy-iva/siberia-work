<template>
  <aside :class="`aside-vertical ${containerClass}`">
    <a
      href="#"
      target="_blank"
      class="aside-vertical__link"
    />

    <span class="aside-vertical__label">Реклама</span>

    <div class="aside-vertical__info">
      <p class="aside-vertical__title">Insider park </p>

      <p class="aside-vertical__text">Жилой район в Москве</p>
    </div>
  </aside>
</template>

<script>
export default {
  name: "AsideVertical",

  props: {
    containerClass: String
  }
}
</script>

<style>
.aside-vertical {
  position: relative;
  width: 320px;
  height: 380px;
  margin-top: 97px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url("static/images/advertising.webp") center / cover no-repeat;
}

.aside-vertical__link {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}

.aside-vertical__label {
  padding: 0 5px;
  margin: 12px 12px 0;
  display: block;
  width: fit-content;
  font-weight: 400;
  font-size: 9px;
  line-height: 1.82;
  letter-spacing: .05em;
  text-transform: uppercase;
  color: var(--white-color);
  background-color: rgba(0, 0, 0, .2);
  border-radius: 10px;
  box-sizing: border-box;
}

.aside-vertical__info {
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  color: var(--white-color);
}

.aside-vertical__info::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  background-color: rgba(128, 128, 128, .7);
  backdrop-filter: blur(5px);
}

.aside-vertical__title {
  z-index: 2;
  margin: 0 0 8px;
  font-size: 16px;
  line-height: 1.62;
}

.aside-vertical__text {
  z-index: 2;
  margin: 0;
  font-size: 18px;
  line-height: 1.44;
  letter-spacing: -.2px;
}

@media (max-width: 1023px) {
  .aside-vertical {
    margin-top: 0;
  }

  .aside-vertical {
    width: 328px;
  }
}

</style>
