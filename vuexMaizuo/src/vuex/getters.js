/**
 * Created by zhengguorong on 16/6/22.
 * 因为一个应用只有一个state,导致state变得比较大,通过getters获取对应组件的数据,方便管理
 */
export const getComingSoonFilms = state => state.film.comingSoonFilms
export const getNowPlayingFilms = state => state.film.nowPlayingFilms
export const getDetail = state => state.film.detail
export const getBillboards = state => state.film.billboards
export const getLeftNavState = state => state.app.leftNavState
export const getLoading = state => state.app.loading
