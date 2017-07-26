// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// IMPORTS
import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
import App from './App'
import Buefy from 'buefy'

// COMPONENTS
import home from './components/home'
import blog from './components/blog'
import docs from './components/docs'

// USES
Vue.use(VueRouter)
Vue.use(Meta, {
  keyName: 'meta'
})
Vue.use(Buefy, {
  defaultTooltipAnimated: true
})

Vue.config.productionTip = false

// ROUTER
const routes = [
  { path: '/', component: home },
  { path: '/blog', component: blog },
  { path: '/docs', component: docs },
  { path: '*', redirect: '/' } // CATCH ALL
]

const router = new VueRouter({
  routes,
  scrollBehavior: function (to, from, savedPosition) {
    if (to.hash) {
      return {selector: to.hash}
    } else {
      return { x: 0, y: 0 }
    }
  },
  mode: 'history'
})

// INIT VUE
new Vue({
  components: {
    App
  },
  router,
  el: '#app',
  render (h) {
    return h('app', {}, {})
  }
})
