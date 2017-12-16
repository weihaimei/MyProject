import * as types from './mutation-types'

export default {
  [types.ADD_TRANSITION] (state, el) {
    el.style.transition = 'all 0.5s'
    el.style.webkitTransition = 'all 0.5s'
  },
  [types.REMOVE_TRANSITION] (state, el) {
    el.style.transition = 'none'
    el.style.webkitTransition = 'none'
  },
  [types.SET_TRANSLATE] (state, {x, y, z, el}) {
    el.style.transform = `translate3d(${x},${y},${z})`
    el.style.webkitTransform = `translate3d(${x},${y},${z})`
  },
  [types.GET_INDEX] (state, index) {
    state.index = index
  },
  [types.GET_NUM] (state, num) {
    state.num = num
    console.log(state.num)
  }
}
