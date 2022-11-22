<template>
  <footer class="footer">
    <div class="wrapper footer__columns">
      <Logo className="footer__column footer__logo"/>

      <ul class="footer__column footer__nav">
        <li
          v-for="link in navigationLinks"
          :key="link.title">
          <nuxt-link
            :to="link.link"
            no-prefetch
            class="footer__nav-link link-hover">
            {{ link.title }}
          </nuxt-link>
        </li>
      </ul>

      <p class="footer__column footer__copyright">
        &copy; ООО «СИБИРЬ РАБОТАЕТ», 2022. Сообщения и материалы сетевого издания «СИБИРЬ РАБОТАЕТ» (зарегистрировано
        Федеральной службой по надзору в сфере связи, информационных технологий и массовых коммуникаций (Роскомнадзор)
        03.12.2022 за номером ЭЛ №ФС77-82385) сопровождаются пометкой «СИБИРЬ РАБОТАЕТ». Отдельные публикации могут
        содержать информацию, не предназначенную для пользователей до 18 лет.
      </p>

      <Contacts
        :isLight="true"
        containerClass="footer__column footer__socials"/>
    </div>

    <p class="footer__author">сделано в
      <span class="footer__author-logo"/>
    </p>
  </footer>
</template>

<script>
import {navigationLinksFooter} from "assets/constants/navigationLinks";
import Logo from "~/components/Logo";
import Contacts from "~/components/Contacts";

export default {
  name: "Footer",

  components: {
    Logo,
    Contacts
  },

  computed: {
    navigationLinks() {
      return navigationLinksFooter;
    }
  }
}
</script>

<style scoped>
.footer {
  padding: 52px 0 0;
  background-color: var(--black-color);
  box-sizing: border-box;
}

.footer__columns {
  margin-bottom: 48px;
  display: flex;
}

.footer__columns .footer__column:first-child, .footer__columns .footer__column:nth-child(2) {
  margin-right: 9.6%;
}

.footer__columns .footer__column:last-child {
  margin-left: auto;
}

.footer__columns .footer__logo {
  min-width: 96px;
  height: 31px;
  background-image: url("static/images/logos/logo.svg");
}

.footer__nav {
  margin: 0;
  padding: 0;
  max-width: 208px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style-type: none;
}

.footer__nav-link {
  display: block;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  text-transform: uppercase;
  color: var(--middle-gray-color);
}

.footer__copyright {
  margin: 0;
  max-width: 432px;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.67;
  letter-spacing: .3px;
  color: var(--middle-gray-color);
}

.footer__columns .footer__socials {
  max-width: 237px;
  min-width: 190px;
  flex-direction: column;
  align-items: flex-end;
  gap: 72px;
}

.footer__author {
  padding: 16px 0 16px 29px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: .8px;
  color: var(--white-color);
  background-color: rgba(23, 29, 37, .5);
}

.footer__author::after {
  margin-top: 4px;
  content: "";
  display: block;
  width: 15px;
  height: 14px;
  background: url("static/images/icons/heart.svg") center / contain no-repeat;
}

.footer__author-logo {
  display: block;
  width: 91px;
  height: 21px;
  background: url("static/images/logos/alente.svg") center / contain no-repeat;
}

@media (max-width: 1280px) {
  .footer__columns {
    justify-content: space-between;
    gap: 99px;
  }

  .footer__column:first-child, .footer__column:nth-child(2) {
    margin-right: 0;
  }
}

@media (max-width: 1023px) {
  .footer {
    padding-top: 40px;
  }

  .footer__columns .footer__logo {
    margin-bottom: 50px;
  }

  .footer__columns {
    margin-bottom: 20px;
    flex-direction: column;
    align-items: center;
    gap: 0;
  }

  .footer__columns .footer__column:last-child {
    margin: 0 auto;
  }

  .footer__nav {
    margin-bottom: 20px;
    align-items: center;
    text-align: center;
  }

  .footer__copyright {
    order: 1;
    margin-top: 40px;
  }

  .footer__columns .footer__socials {
    align-items: center;
    gap: 40px;
  }
}

</style>
