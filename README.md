# Проект Todo list (тестовое задание)

[Ссылка на проект на Firebase](https://todo-list-dar-iva-7890.web.app/)

<img src="./static/promo.webp" alt="promo_img" />

## Описание задания

Написать todo-лист.

### Функционал:

✔ создание, просмотр, редактирование (изменение полей или статус выполнения задачи), удаление задачи;  
✔ возможность прикрепления файлов к записи;  
✔ поля в задаче: заголовок, описание, дата завершения, прикрепленные файлы;  
✔ если дата завершения истекла или задача выполнена, это должно быть визуально отмечено;  
✔ откомментировать код в JSDoc.

### Обязательные технические требования:
✔ использовать React;  
✔ использовать функциональные компоненты;  
✔ использовать хуки.

### Опциональные технические требования:
✔ использовать dayjs для работы с датами;  
— использовать firebase.google.com как Back-end;  
✔ использовать firebase.google.com или now.sh как хостинг клиенской части;  
✔ использовать less, если потребуется писать стили;  
✔ не использовать никаких библиотек, кроме необходимых для общения с backend.

### Стек:

* JS
* React
* HTML
* CSS, Less

## Директории

`/components` — компоненты приложения  
`/context` — глобальные стейты приложения    
`/hooks` - кастомные хуки приложения  
`/less` - общие стили приложения  
`/utils` - переиспользуемые функции, переменные    
`/images` - папка с изображениями


## Установка зависимостей и запуск проекта

##### `npm i` – установить зависимости

##### `npm start` – запуск devServer на localhost

##### `npm build` – production сборка проекта








# siberia-work

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
