export default [{
  path: '/',
  name: 'index',
  component: require('./views/home/index')
}, {
  path: '/login',
  name: 'login',
  component: require('./views/member/login')
}, {
  path: '/film',
  name: 'film',
  component: require('./views/film/film-view')
}, {
  path: '/cinema',
  name: 'cinema',
  component: require('./views/cinema/index')
}, {
  path: '/detail/:id',
  name: 'detail',
  component: require('./views/film/detail')
}, {
  path: '/card',
  name: 'card',
  component: require('./views/card/index')
}, {
  path: '*',
  component: require('./views/home/index')
}]

