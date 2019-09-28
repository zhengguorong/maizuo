/**
 * Created by zhengguorong on 16/7/5.
 */
import { expect } from 'chai'
import { mutations } from 'src/vuex/modules/film.js'

// 解构 mutations
const { FETCH_COMING_SOON_SUCCESS,FETCH_NOW_PLAYING_SUCCESS,FETCH_DETAIL_SUCCESS,FETCH_BANNER_SUCCESS } = mutations

describe('mutations', () => {
  it('FETCH_COMING_SOON_SUCCESS', () => {
    // 模拟状态
    const state = {}
    // 应用 mutation
    FETCH_COMING_SOON_SUCCESS(state,{films:[{}]})
    // 断言结果
    expect(state.comingSoonFilms.length).to.equal(1)
  })
  it('FETCH_NOW_PLAYING_SUCCESS',()=>{
    const state= {}
    FETCH_NOW_PLAYING_SUCCESS(state,{films:[{}]})
    expect(state.nowPlayingFilms.length).to.equal(2)
  })
})
