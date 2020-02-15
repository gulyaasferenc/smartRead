import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import analyzer from '@/helpers/ContentAnalyzer'
import { get, keys } from 'idb-keyval'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showMenu: false,
    content: null,
    contentReceived: false,
    getContentStarted: false,
    extracts: [],
    smartStore: null,
    getModal: false,
    modalInput: null
  },
  mutations: {
    setGetModal (state, value) {
      state.getModal = value
    },
    setModalInput (state, value) {
      state.modalInput = value
    },
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
        const setIt = analyzer.contentMaker(doc)
        console.log(analyzer.statisticMaker(doc, setIt))
        commit('setContent', setIt)
      } catch (e) {
        console.error('ERRORRRR', e.message)
        commit('setContent', e.message)
      } finally {
        commit('setGetContentStarted', false)
        commit('setContentReceived', true)
      }
    },
    async getIdbContent ({ commit, state }) {
      const extractionArray = []
      const smartKeys = await keys(state.smartStore)
      for (let x of smartKeys) {
        extractionArray.push(await get(x, state.smartStore))
      }
      commit('setExtracts', extractionArray)
    }
  },
  modules: {
  }
})
