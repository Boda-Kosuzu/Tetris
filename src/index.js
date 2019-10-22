import Vue from 'vue'
import index from './index.vue'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { index },
  template: '<Index/>'
})
