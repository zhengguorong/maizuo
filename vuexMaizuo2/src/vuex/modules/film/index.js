/**
 * Created by zhengguorong on 16/6/22.
 */
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
  comingSoonFilms: [],
  nowPlayingFilms: [],
  detail: {},
  billboards: []
}

export default{
  state,
  actions,
  getters,
  mutations
}
