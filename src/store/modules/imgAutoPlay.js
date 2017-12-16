import * as types from '../mutation-types'

const state = {
  index: 0,
  timer: 1,
  length: 0
}

const mutations = {
  [types.RECEIVE_LENGTH] (state, length) {
    state.length = length
  }
}

// 计时器开始轮播图
const actions = {
  startPlayImage ({commit, state}, el) {
    // clearInterval(state.timer)
    state.timer = setInterval(() => {
      state.index++
      commit(types.ADD_TRANSITION, el)
      let offsetY = -state.index * 20 + 'px'
      commit(types.SET_TRANSLATE, {x: 0, y: offsetY, z: 0, el})
    }, 2000)
  }
}

export default {
  state,
  mutations,
  actions
}
