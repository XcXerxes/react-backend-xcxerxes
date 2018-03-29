import * as types from './action-type'

// 伸缩菜单
export const triggerMenu = (collapsed) => {
  return {
    type: types.TRIGGER_MENU,
    collapsed
  }
}
