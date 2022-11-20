<template>
  <ul class="socials">
    <li
      v-for="item in socialLinks"
      :key="item.label"
      class="socials__item">
      <a
        :href="item.link"
        target="_blank"
        :class="`social__link ${isLight ? 'social__link_light' : ''} social__link_type_${item.label}`">
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SocialList",

  props: {
    isLight: Boolean
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
  transition: background-color .3s;
}

.social__link:hover {
  background-color: var(--primary-color);
}

.social__link_light {
  background-color: var(--light-gray-color);
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

@media (max-width: 767px) {
  .socials {
    justify-content: center;
  }
}

</style>
