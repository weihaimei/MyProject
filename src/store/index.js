import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'
import imgAutoPlay from './modules/imgAutoPlay'

Vue.use(Vuex)

const state = {
  index: 0,
  num: 0
}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    imgAutoPlay
  }
})
