export { domain, getClientInfo } from './source/client'
import { Collector } from './core/collector'
export { Collector as BrowserCollector } from './core/collector'
export { Monitor } from './core/monitor'

export * from './core/cache'
export * from './config/eventType'
export { IBrowserConfig } from './config/plugin'

export default {
  Collector
}
