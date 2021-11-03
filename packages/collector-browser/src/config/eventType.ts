/**
 * 事件类型
 * 事件分为：系统事件和业务事件
 */
export const EVENT_TYPES = {
  // 系统事件类型
  SYSTEM_EVENT_TYPE: 'se',
  // 业务事件类型
  BUSINESS_EVENT_TYPE: 'be'
}

// 系统事件列表
export const SYSTEM_EVENTS = {
  // 会话开始事件
  SESSION_START: 'sessionStart',
  // 会话结束事件
  SESSION_CLOSE: 'sessionClose',
  // PV事件
  PV: 'pv',
  // 用户首次访问网站事件
  ACTIVATE: 'activate',
  // 异常错误事件
  ERROR: 'error',
  // spa change事件
  SPA_CHANGE: 'spaChange'
}
