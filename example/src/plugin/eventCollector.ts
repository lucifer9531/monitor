import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import EventCollector from '@monitor/collector-track'

// @ts-ignore
const eventCollector = new EventCollector.Collector('xxx', {
  Vue,
  router,
  debug: true,
  eventUrl: 'http://localhost:8080/create'
})
// Vue.use(Monitor, {
//   token: 'aaaaaaaaaa',
//   uid: () => store.getters.fullPath,
//   debug: true,
//   router
// })

// trackEvent('buy', { price: '￥123', id: 'xxxx-xxxx-xxxx' })
