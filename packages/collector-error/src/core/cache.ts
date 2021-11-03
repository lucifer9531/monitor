import { Log } from '@hutool/console'
// @ts-ignore
import { BrowserCollector, Monitor } from '@monitor/collector-browser'

export class Cache {
  // 是否已实例化
  public loaded: boolean = false
  // 实例配置
  public config: { [key: string]: any } = {}
  // 数据收集者实例
  public collector!: BrowserCollector
  // 全局事件监听者实例
  public monitor!: Monitor
  // 存储数据实例
  public storage!: any
  // 日志
  public log!: Log
}

export default new Cache()
