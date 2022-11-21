<template>
  <div :class="`contacts ${containerClass}`">
    <button
      type="button"
      aria-label="open feedback form"
      class="contacts__feedback button-hover">
      Написать нам
    </button>

    <ul class="socials">
      <li
        v-for="item in socialLinks"
        :key="item.label"
        class="socials__item">

        <a
          :href="item.link"
          target="_blank"
          :title="item.label"
          :class="`social__link
          ${isLight ? 'social__link_color_light' : 'social__link_color_dark'}
          social__link_type_${item.label}`"
        />
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: "Contacts",

  props: {
    isLight: Boolean,
    containerClass: String
  },

  data() {
    return {
      socialLinks: [
        {
          label: 'instagram',
          link: 'https://www.instagram.com/'
        },
        {
          label: 'ok',
          link: 'https://ok.ru/'
        },
        {
          label: 'facebook',
          link: 'https://www.facebook.com/'
        },
        {
          label: 'twitter',
          link: 'https://twitter.com/'
        },
        {
          label: 'pinterest',
          link: 'https://ru.pinterest.com/'
        },
        {
          label: 'spotify',
          link: 'https://www.spotify.com/'
        },
        {
          label: 'vk',
          link: 'https://vk.com/'
        },
        {
          label: 'telegram',
          link: 'https://web.telegram.org/'
        },
        {
          label: 'youtube',
          link: 'https://www.youtube.com/'
        },
        {
          label: 'yandex-music',
          link: 'https://music.yandex.ru/home'
        },
        {
          label: 'subtract',
          link: 'https://minus.social/'
        },
      ],
    }
  },
}
</script>

<style scoped>
.contacts {
  display: flex;
}

.contacts__feedback {
  padding: 12px 40px;
  width: fit-content;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.62;
  text-align: center;
  letter-spacing: .5px;
  color: var(--white-color);
  background-color: var(--primary-color);
  border: none;
  border-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all .3s;
}

.contacts__feedback:hover {
  color: var(--black-color);
  background-color: var(--middle-gray-color);
}

.socials {
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 9px;
  list-style-type: none;
}

.social__link {
  display: block;
  width: 32px;
  height: 32px;
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-position: center;
  -webkit-mask-position: center;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  transition: background-color .3s;
}

.social__link:hover {
  background-color: var(--primary-color);
}

.social__link_color_light {
  background-color: var(--light-gray-color);
}

.social__link_color_dark {
  background-color: var(--black-color);
}

.social__link_type_instagram {
  mask-image: url("assets/images/socials/instagram.svg");
  -webkit-mask-image: url("assets/images/socials/instagram.svg");
}

.social__link_type_ok {
  mask-image: url("assets/images/socials/ok.svg");
  -webkit-mask-image: url("assets/images/socials/ok.svg");
}

.social__link_type_facebook {
  mask-image: url("assets/images/socials/facebook.svg");
  -webkit-mask-image: url("assets/images/socials/facebook.svg");
}

.social__link_type_twitter {
  mask-image: url("assets/images/socials/twitter.svg");
  -webkit-mask-image: url("assets/images/socials/twitter.svg");
}

.social__link_type_pinterest {
  mask-image: url("assets/images/socials/pinterest.svg");
  -webkit-mask-image: url("assets/images/socials/pinterest.svg");
}

.social__link_type_spotify {
  mask-image: url("assets/images/socials/spotify.svg");
  -webkit-mask-image: url("assets/images/socials/spotify.svg");
}

.social__link_type_vk {
  mask-image: url("assets/images/socials/vk.svg");
  -webkit-mask-image: url("assets/images/socials/vk.svg");
}

.social__link_type_telegram {
  mask-image: url("assets/images/socials/telegram.svg");
  -webkit-mask-image: url("assets/images/socials/telegram.svg");
}

.social__link_type_youtube {
  mask-image: url("assets/images/socials/youtube.svg");
  -webkit-mask-image: url("assets/images/socials/youtube.svg");
}

.social__link_type_yandex-music {
  mask-image: url("assets/images/socials/yandex_music.svg");
  -webkit-mask-image: url("assets/images/socials/yandex_music.svg");
}

.social__link_type_subtract {
  mask-image: url("assets/images/socials/subtract.svg");
  -webkit-mask-image: url("assets/images/socials/subtract.svg");
}

@media (max-width: 1023px) {
  .socials {
    justify-content: center;
  }
}

</style>
