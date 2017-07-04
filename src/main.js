// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import Buefy from 'buefy'
import vueSmoothScroll from 'vue-smooth-scroll'

Vue.use(Buefy, {
  defaultTooltipAnimated: true
})

Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
