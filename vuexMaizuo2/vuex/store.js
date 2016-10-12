/**
 * Created by zhengguorong on 16/6/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import film from './film'
import app from './app'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  // getters,
  modules: {
    film,
    app
  },
  strict: debug
})
