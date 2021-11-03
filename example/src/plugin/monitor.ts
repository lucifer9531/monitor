import Monitor from '@monitor/engine'
import Vue from 'vue'
import router from '@/router'
import store from '@/store'
import EventCollector from '@monitor/collector-track'

// @ts-ignore
const monitor = new Monitor('4444', {
  Vue,
  router,
  debug: true,
  errorUrl: 'http://localhost:9527/create',
  eventUrl: 'http://localhost:9528/create',
  uid: () => '123' || ''
})
