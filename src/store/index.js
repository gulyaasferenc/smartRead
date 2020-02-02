import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showMenu: false,
    content: null,
    contentReceived: false,
    getContentStarted: false
  },
  mutations: {
    setShowMenu (state, value) {
      state.showMenu = value
    },
    setContent (state, value) {
      state.content = value
    },
    setContentReceived (state, value) {
      state.contentReceived = value
    },
    setGetContentStarted (state, value) {
      state.getContentStarted = value
    }
  },
  actions: {
    async getLinkContent ({ commit }, payload) {
      commit('setGetContentStarted', true)
      let contentResponse = await fetch(`${payload}`)
      let content = await contentResponse.text()
      console.log('CONTENT', content)
      commit('setContent', content)
      commit('setGetContentStarted', false)
      commit('setContentReceived', true)
    }
  },
  modules: {
  }
})
