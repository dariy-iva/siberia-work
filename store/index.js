import {citiesList} from "assets/constants/citiesList";
import {newsList} from "assets/constants/newsList";

export const state = () => ({
  cities: [],
  news: null,
})

export const mutations = {
  setCities(state, payload) {
    state.cities = payload;
  },

  setNews(state, payload) {
    state.news = payload;
  }
}

export const actions = {
  nuxtServerInit({dispatch}) {
    console.log('nuxtServerInit')
  },

  getCities({commit}) {
    commit('setCities', citiesList);
  },

  getNews({commit}) {
    commit('setNews', newsList);
  },
}

export const getters = {
  cities: s => s.cities,
  news: s => s.news,
}
