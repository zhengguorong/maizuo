/**
 * Created by zhengguorong on 16/6/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import film from './modules/film'
import app from './modules/app'
import createLogger from 'vuex/logger';

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  middlewares: debug ? [createLogger()] : [],
  modules: {
    film,
    app
  },
  strict: debug,
})
