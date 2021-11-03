import 'url-search-params-polyfill'
import { Collector } from './core/collector'
export { Collector as EventCollector } from './core/collector'

import { trackEvent } from './helper'
export * from './helper'
export { IEventConfig } from './config/plugin'

export default {
  Collector,
  trackEvent
}
