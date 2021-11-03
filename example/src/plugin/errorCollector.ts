import ErrorCollector from '@monitor/collector-error'
import Vue from 'vue'

// @ts-ignore
// const errorCollector = new ErrorCollector.Collector('xxx', { debug: true, Vue })

// import ErrorCollector from '../../../packages/collector-error/src/index'
const errorCollector = new ErrorCollector.Collector('xxx', {
    errorUrl: 'http://localhost:9827/report/create'
})

// window.addEventListener('unhandledrejection', function(e) {
//   e.preventDefault()
//   console.log('我知道 promise 的错误了')
//   console.log(e.reason)
//   return true
// })
// Promise.reject('promise error')
