import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import analyzer from '@/helpers/ContentAnalyzer'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showMenu: false,
    content: null,
    contentReceived: false,
    getContentStarted: false,
    extracts: [],
    smartStore: null
  },
  mutations: {
    setSmartStore (state, value) {
      state.smartStore = value
    },
    setExtracts (state, value) {
      state.extracts = value
      console.log(state.extracts)
    },
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
      try {
        const parser = new DOMParser()
        let content = await axios.get(`${payload}`)
        const doc = parser.parseFromString(content.data, 'text/html')
        const setIt = analyzer(doc)
        commit('setContent', setIt)
      } catch (e) {
        console.error('ERROR', e.message)
        commit('setContent', e.message)
      } finally {
        commit('setGetContentStarted', false)
        commit('setContentReceived', true)
      }
    }
  },
  modules: {
  }
})
