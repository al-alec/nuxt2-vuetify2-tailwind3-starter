import Cookies from 'js-cookie'
import { cookieFromRequest } from '~/utils'

export const actions = {
  nuxtClientInit ({ commit }, context) {
    const token = Cookies.get('token')
    const user = Cookies.get('user')

    if (token) {
      commit('auth/SET_TOKEN', token)
    }

    if (user) {
      commit('auth/UPDATE_USER', JSON.parse(user))
    }

  }
}

export const state = () => ({
  sidebar: false,
});

export const mutations = {
  toggleSidebar(state) {
    state.sidebar = !state.sidebar;
  },
};
