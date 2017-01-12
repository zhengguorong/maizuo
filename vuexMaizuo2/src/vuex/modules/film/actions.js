import vue from 'vue'
/**
 * Created by zhengguorong on 16/6/22.
 */
/**
 * get请求
 * @param  {String} options.url   api地址
 * @param  {String} options.query query参数
 * @return {Promise}               Promise
 */
const _get = ({ url, query }, commit) => {
  if (commit) commit('START_LOADING')
  let _url
  if (query) {
    _url = `http://localhost:8080/v4/api${url}?${query}`
  } else {
    _url = `http://localhost:8080/v4/api${url}`
  }

  return vue.http.get(_url)
    .then((res) => {
      if (commit) commit('FINISH_LOADING')
      if (res.status >= 200 && res.status < 300) {
        return res.data
      }
      return Promise.reject(new Error(res.status))
    })
}

/**
 * 获取即将开始电影列表
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} page             页数
 * @param  {Number} count             每页数量
 * @return {Promise}                  Promise
 */
export const fetchComingSoonLists = ({ commit }, page, count) => {
  const url = '/film/coming-soon'
  const query = `count=${count}&page=${page}&_t=` + new Date().getTime()
  return _get({url, query}, commit)
    .then((json) => {
      if (json.status === 0) {
        return commit('FETCH_COMING_SOON_SUCCESS', json.data)
      }
      return Promise.reject(new Error('fetchFilmsLists failure'))
    })
    .catch((error) => {
      // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
      return Promise.reject(error)
    })
}
/**
 * 获取正在热映电影列表
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} page             页数
 * @param  {Number} count             每页数量
 * @return {Promise}                  Promise
 */
export const fetchNowPlayingLists = ({ commit }, page, count) => {
  const url = '/film/now-playing'
  const query = `count=${count}&page=${page}&_t=` + new Date().getTime()
  return _get({ url, query }, commit)
    .then((json) => {
      if (json.status === 0) {
        return commit('FETCH_NOW_PLAYING_SUCCESS', json.data)
      }
      return Promise.reject(new Error('FETCH_NOW_PLAYING failure'))
    })
    .catch((error) => {
      // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
      return Promise.reject(error)
    })
}
/**
 * 获取电影详情
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} id             电影id
 * @return {Promise}                  Promise
 */
export const fetchFilmDetail = ({commit}, id) => {
  const url = '/film/' + id
  const query = '_t=' + new Date().getTime()
  return _get({ url, query }, commit)
    .then((json) => {
      if (json.status === 0) {
        return commit('FETCH_DETAIL_SUCCESS', json.data)
      }
      return Promise.reject(new Error('FETCH_DETAIL failure'))
    })
    .catch((error) => {
      // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
      return Promise.reject(error)
    })
}
/**
 * 获取广告
 * @param  {Function} options.commit store对象解构出来的函数，无需手动提供
 * @param  {Number} id             电影id
 * @return {Promise}                  Promise
 */
export const fetchBillboards = ({commit}) => {
  const url = '/billboard/home'
  const query = '_t=' + new Date().getTime()
  return _get({ url, query }, commit)
    .then((json) => {
      if (json.status === 0) {
        return commit('FETCH_BANNER_SUCCESS', json.data)
      }
      return Promise.reject(new Error('FETCH_BANNER_SUCCESS failure'))
    })
    .catch((error) => {
      // commit('FETCH_TOPIC_LISTS_FAILURE', topicTab, page)
      return Promise.reject(error)
    })
}
