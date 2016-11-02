import {
  FETCH_COMING_SOON_SUCCESS,
  FETCH_NOW_PLAYING_SUCCESS,
  FETCH_DETAIL_SUCCESS,
  FETCH_BANNER_SUCCESS}
  from './mutation-type'

const mutations = {
  // 获取即将上映电影列表
  [FETCH_COMING_SOON_SUCCESS] (state, data) {
    state.comingSoonFilms = data.films
  },
  // 获取即将上映电影列表
  [FETCH_NOW_PLAYING_SUCCESS] (state, data) {
    state.nowPlayingFilms = data.films
  },
  // 获取电影详情
  [FETCH_DETAIL_SUCCESS] (state, data) {
    state.detail = data.film
  },
  // 获取广告列表
  [FETCH_BANNER_SUCCESS] (state, data) {
    state.billboards = data.billboards
  }
}

export default mutations
