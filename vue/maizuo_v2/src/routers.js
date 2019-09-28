export default (router) => router.map({
  '/': {
    name: 'index',
    component: require('./views/home/index')
  },
  '/login': {
    name: 'login',
    component: require('./views/member/login')
  },
  '/film': {
    name: 'film',
    component: require('./views/film/film-view'),
    // subRoutes: {
    //   '/detail/:id':{
    //     name:'detail',
    //     component: require('./views/film/detail')
    //   }
    // }
  },
  '/detail/:id':{
    name:'detail',
    component:require('./views/film/detail')
  },
  '/cinema': {
    name:'cinema',
    component: require('./views/cinema/index')
  },
  '/card': {
    name: 'card',
    component: require('./views/card/index')
  },
  '*': {
    component: require('./views/home/index'),
  }
})

