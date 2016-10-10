import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import configRouter from './routers'
import FastClick from 'fastclick';

window.addEventListener('load', () => {
  FastClick.attach(document.body);
});

Vue.use(VueRouter)
Vue.use(VueResource)
const router = new VueRouter()
configRouter(router)

router.start(Vue.extend(App), '#app')
