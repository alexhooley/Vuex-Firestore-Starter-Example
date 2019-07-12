import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'
import testData from './testData'

Vue.use(Vuex)

export default new Vuex.Store({
  store: {
    responsiveNav: false
  },
  modules: {
    testData
  },
  mutations: {
    ...vuexfireMutations
  }
})
