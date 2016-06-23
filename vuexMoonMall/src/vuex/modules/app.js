/**
 * Created by zhengguorong on 16/6/23.
 */
import {
  CHANGE_LEFTNAV_STATE
} from '../mutation-type'

const state = {
  leftNavState:false
}

const mutations = {
  //切换左侧导航的显示状态
  [CHANGE_LEFTNAV_STATE](state,isShow){
      state.leftNavState=isShow
  }
}

export default{
  state,
  mutations
}
