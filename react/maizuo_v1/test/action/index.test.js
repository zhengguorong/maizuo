/**
 * Created by zhengguorong on 16/8/4.
 */
import expect from 'expect'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as actions from '../../src/actions/index'
import * as types from '../../src/constants/ActionTypes'
import nock from 'nock'



const middlewares = [ thunk ]

/**
 * 使用中间件模拟 Redux store。
 */
function mockStore(getState, expectedActions, done) {
  if (!Array.isArray(expectedActions)) {
    throw new Error('expectedActions should be an array of expected actions.')
  }
  if (typeof done !== 'undefined' && typeof done !== 'function') {
    throw new Error('done should either be undefined or function.')
  }

  function mockStoreWithoutMiddleware() {
    return {
      getState() {
        return typeof getState === 'function' ?
          getState() :
          getState
      },

      dispatch(action) {
        const expectedAction = expectedActions.shift()

        try {
          expect(action).toEqual(expectedAction)
          if (done && !expectedActions.length) {
            done()
          }
          return action
        } catch (e) {
          done(e)
        }
      }
    }
  }

  const mockStoreWithMiddleware = applyMiddleware(
    ...middlewares
  )(mockStoreWithoutMiddleware)

  return mockStoreWithMiddleware()
}

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates FETCH_TODOS_SUCCESS when fetching todos has been done', (done) => {
    nock('http://m.maizuo.com/v4/api')
      .get('/film/coming-soon')
      .reply(200,{"status":0,"data":{"films":[{"id":3111,"name":"盗墓笔记","cover":{"origin":"http://pic.maizuo.com/usr/100003111/b73c302b84f826d78ccdccce32c69947.jpg"},"poster":{"origin":"http://pic.maizuo.com/usr/100003111/b349a3c1c03c3fa23f3b1c9a1ae1557b.jpg","thumbnail":"http://pic.maizuo.com/usr/100003111/b349a3c1c03c3fa23f3b1c9a1ae1557b.jpg!150x0"},"intro":"转战大银幕 瓶邪党必顶","premiereAt":1470326400000,"grade":"9.4","watchCount":41528,"cinemaCount":0,"scheduleCount":0,"isPromotion":true,"isNowPlaying":"","isComingSoon":true,"isPresold":""},{"id":2903,"name":"夏有乔木 雅望天堂","cover":{"origin":"http://pic.maizuo.com/usr/100002903/8997d51cc291bd2c31891c8bf14a1555.jpg"},"poster":{"origin":"http://pic.maizuo.com/usr/100002903/a6d7108c2b16c7bf285dd0329423835a.jpg","thumbnail":"http://pic.maizuo.com/usr/100002903/a6d7108c2b16c7bf285dd0329423835a.jpg!150x0"},"intro":"吴亦凡韩庚搭档  演绎虐恋纯爱","premiereAt":1470326400000,"grade":"9.5","watchCount":12220,"cinemaCount":0,"scheduleCount":0,"isPromotion":true,"isNowPlaying":"","isComingSoon":true,"isPresold":""},{"id":2852,"name":"我最好朋友的婚礼","cover":{"origin":"http://pic.maizuo.com/usr/100002852/ac45aaa2a04166e9ed1a397d7a5db46e.jpg"},"poster":{"origin":"http://pic.maizuo.com/usr/100002852/e9d17217ddd017d29e65a04eaf0d570d.jpg","thumbnail":"http://pic.maizuo.com/usr/100002852/e9d17217ddd017d29e65a04eaf0d570d.jpg!150x0"},"intro":"美国电影 中国翻拍","premiereAt":1470326400000,"grade":"8.7","watchCount":2279,"cinemaCount":0,"scheduleCount":0,"isPromotion":false,"isNowPlaying":"","isComingSoon":true,"isPresold":""},{"id":2960,"name":"古曼","cover":{"origin":"http://pic.maizuo.com/usr/100002960/597275a30318064044fead8ecab763ed.jpg"},"poster":{"origin":"http://pic.maizuo.com/usr/100002960/4088a63db22f19eb7ca430cd3e3879e3.jpg","thumbnail":"http://pic.maizuo.com/usr/100002960/4088a63db22f19eb7ca430cd3e3879e3.jpg!150x0"},"intro":"泰国古曼童 午夜太惊悚","premiereAt":1470326400000,"grade":"8.5","watchCount":0,"cinemaCount":0,"scheduleCount":0,"isPromotion":false,"isNowPlaying":"","isComingSoon":true,"isPresold":""},{"id":3277,"name":"疯狂侏罗纪","cover":{"origin":"http://pic.maizuo.com/usr/100003277/c8a577e8e25beca367445284b9a1e5eb.jpg"},"poster":{"origin":"http://pic.maizuo.com/usr/100003277/7581ad046c0fd7e728eb24918811158c.jpg","thumbnail":"http://pic.maizuo.com/usr/100003277/7581ad046c0fd7e728eb24918811158c.jpg!150x0"},"intro":"重返侏罗纪 四处遇危机","premiereAt":1470499200000,"grade":"7.5","watchCount":0,"cinemaCount":0,"scheduleCount":0,"isPromotion":false,"isNowPlaying":"","isComingSoon":true,"isPresold":""}],"page":{"total":22,"current":1}},"msg":"ok"})

    const expectedActions = [
      { type: types.FETCH_COMING_SOON_SUCCESS, comingSoonFilms: {} }
    ]
    const store = mockStore({ film: {} }, expectedActions, done)
    store.dispatch(actions.fetchComingSoonLists(1,5))
  })
})
