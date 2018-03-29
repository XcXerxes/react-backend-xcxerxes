import * as types from './action-type'

// 切换menu
export const menus = (state = {collapsed: false}, action) => {
  switch (action.type) {
    case types.TRIGGER_MENU:
      return {...state, ...{collapsed: action.collapsed}}
    default:
      return state
  }
}
