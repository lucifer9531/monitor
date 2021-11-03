import { extend } from '@hutool/utils/lib/methods/object'
// @ts-ignore
import Browser, { BrowserCollector, IBrowserConfig } from '@monitor/collector-browser'
// @ts-ignore
import Error, { ErrorCollector, IErrorConfig } from '@monitor/collector-error'
// @ts-ignore
import Event, { EventCollector, IEventConfig } from '@monitor/collector-track'

interface IConfig extends IBrowserConfig, IErrorConfig, IEventConfig {
  // 是否开启事件采集模块
  event?: boolean
  // 是否开启错误采集模块
  error?: boolean
  // 是否开启所有模块
  open?: boolean
}
export class Engine {
  public browserCollector!: BrowserCollector
  public errorCollector!: ErrorCollector
  public eventCollector!: EventCollector
  public config: any = {
    eventUrl: '',
    errorUrl: '',
    // 是否开启事件采集模块
    event: true,
    // 是否开启错误采集模块
    error: true,
    // 是否开启所有模块
    open: true
  }
  constructor(token: string, config?: IConfig) {
    this.config = extend({}, this.config, config)
    if (!this.config.open) {
      return
    }
    this.browserCollector = new Browser.Collector(token, this.config)
    if (this.config.event) {
      this.eventCollector = new Event.Collector(token, this.config)
    }
    if (this.config.error) {
      this.errorCollector = new Error.Collector(token, this.config)
    }
  }
}
