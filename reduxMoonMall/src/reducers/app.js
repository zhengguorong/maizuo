/**
 * Created by zhengguorong on 16/6/28.
 */
import * as types from '../constants/ActionTypes'

const app = (state = {}, action) => {
  switch (action.type) {
    case types.START_LOADING:
      return {
        loading: true
      }
    case types.FINISH_LOADING:
      return {
        loading: false
      }
    case types.CUR_TAB:
      return {
        curTab: action.curTab
      }
    case types.CHANGE_LEFTNAV_STATE:
      return {
        showLeftNav:action.showLeftNav
      }
    default:
      return state
  }
}
export default app
