import * as types from './mutation-types'

export const listenTransitionEnd = (context, {el, cb}) => {
  el.addEventListener('webkitTransitionEnd', () => {
    cb && cb()
  })
  el.addEventListener('transitionEnd', () => {
    cb && cb()
  })
}

export const transitionAgain = ({state, commit}, {el, modules}) => {
  if (state[modules].index >= state[modules].length) {
    state[modules].index = 0
    commit(types.REMOVE_TRANSITION, el)
    commit(types.SET_TRANSLATE, {x: 0, y: 0, z: 0, el})
  }
}
