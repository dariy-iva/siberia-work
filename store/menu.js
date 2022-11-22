export const state = () => ({
  isOpen: false,
  isMainMenu: false,
  hasSearch: false,
  hasCities: false,
  hasCategories: false,
})

export const mutations = {
  setIsOpen(state, payload) {
    state.isOpen = payload;
  },

  setIsMainMenu(state, payload) {
    state.isMainMenu = payload;
  },

  setHasSearch(state, payload) {
    state.hasSearch = payload;
  },

  setHasCities(state, payload) {
    state.hasCities = payload;
  },

  setHasCategories(state, payload) {
    state.hasCategories = payload;
  },

}

export const actions = {
  openMenu({commit}, payload) {
    const {
      isMainMenu = false,
      hasSearch = false,
      hasCities = false,
      hasCategories = false,
    } = payload;

    commit('setIsOpen', true);
    commit('setIsMainMenu', isMainMenu);
    commit('setHasSearch', hasSearch);
    commit('setHasCities', hasCities);
    commit('setHasCategories', hasCategories);
  },

  closeMenu({commit}) {
    commit('setIsOpen', false);
    commit('setIsMainMenu', false);
    commit('setHasSearch', false);
    commit('setHasCities', false);
    commit('setHasCategories', false);
  },
}

export const getters = {
  isOpen: s => s.isOpen,
  isMainMenu: s => s.isMainMenu,
  hasSearch: s => s.hasSearch,
  hasCities: s => s.hasCities,
  hasCategories: s => s.hasCategories,
}
