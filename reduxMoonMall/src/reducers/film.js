/**
 * Created by zhengguorong on 16/6/28.
 */
import * as types from '../constants/ActionTypes'

const film=(state={},action) => {
  switch (action.type) {
    case types.FETCH_COMING_SOON_SUCCESS:
      return Object.assign({}, state, {comingSoonFilms:action.comingSoonFilms})
    case types.FETCH_NOW_PLAYING_SUCCESS:
      return Object.assign({}, state, {nowPlayingFilms:action.nowPlayingFilms})
    case types.FETCH_BILLBOARD_SUCCESS:
      return Object.assign({}, state, {billboards:action.billboards})
    case types.FETCH_DETAIL_SUCCESS:
      return Object.assign({}, state, {detail:action.detail})
    default:
      return state
  }
}
export default film
