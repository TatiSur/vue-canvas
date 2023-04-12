import {DEFAULT_THEME} from '@/constants'

const state = {
    theme: localStorage.getItem('theme') || DEFAULT_THEME
}

const mutations = {
    SET_THEME(state, theme) {
        state.theme = theme
        localStorage.setItem('theme', theme)
        document.body.setAttribute('data-theme', theme)
    }
}

const actions = {
    setTheme({ commit }, theme) {
        commit('SET_THEME', theme)
    }
}

export default {
    state,
    mutations,
    actions,
    namespaced: true,
}
