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
    smartStatStore: null,
    getModal: false,
    modalInput: null,
    statistics: null
  },
  mutations: {
    setStatistics (state, value) {
      state.statistics = value
    },
    setGetModal (state, value) {
      state.getModal = value
    },
    setModalInput (state, value) {
      state.modalInput = value
    },
    setSmartStore (state, value) {
      state.smartStore = value
    },
    setsmartStatStore (state, value) {
      state.smartStatStore = value
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
    async getLinkContent ({ commit }, payload = null) {
      if (payload) {
        commit('setGetContentStarted', true)
        try {
          const parser = new DOMParser()
          let content = await axios.get(`${payload}`)
          const doc = parser.parseFromString(content.data, 'text/html')
          const setIt = analyzer.contentMaker(doc)
          const stat = analyzer.statisticMaker(doc, setIt)
          setIt.origin = payload.split('/')[2]
          setIt.statistics = stat
          console.log(setIt)
          commit('setContent', setIt)
        } catch (e) {
          console.error('ERRORRRR', e.message)
          commit('setContent', e.message)
        } finally {
          commit('setGetContentStarted', false)
          commit('setContentReceived', true)
        }
      } else {

      }
    },
    async getIdbContent ({ commit, state }) {
      const extractionArray = []
      const smartKeys = await keys(state.smartStore)
      for (let x of smartKeys) {
        extractionArray.push(await get(x, state.smartStore))
      }
      commit('setExtracts', extractionArray)
    },
    async getStatistics ({ commit }) {
      const statArray = []
      await (await keys(this.state.smartStatStore)).forEach(async x => {
        statArray.push(await get(x, this.state.smartStatStore))
      })
      commit('setStatistics', statArray)
    }
  },
  modules: {
  }
})
