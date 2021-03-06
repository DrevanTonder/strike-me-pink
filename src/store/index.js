import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)

const state = {
  edit: false
}

const mutations = {
  setEdit (state, edit) {
    state.edit = edit
  }
}

const actions = {
  setEdit (context, edit) {
    context.commit('setEdit', edit)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  strict: process.env.NODE_ENV !== 'production'
})
