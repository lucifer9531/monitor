import { ERROR_TYPES, SEVERITY_TYPES } from '../config/error'
import cache from '../core/cache'
/**
 * error处理
 * @param error
 */
function errorHandle(error: any) {
  if (!error) {
    return null
  }
  const baseResult = {
    message: error.message
  }
  let result
  if ((window as any).XMLHttpRequest) {
    result = {
      name: error.name,
      fileName: error.fileName || error.sourceURL,
      lineNumber: error.lineNumber || error.line,
      columnNumber: error.columnNumber || error.column,
      ...baseResult
    }
  }
  return result
}

/**
 * 堆栈跟踪
 */
function getStack() {
  let addon
  let val: any

  const loadedAddons = []
  try {
    val = arguments.callee.caller.caller
  } catch (i) {
    val = ''
  }

  for (; val && loadedAddons.length < 10; ) {
    const n = val.toString().match(/function\s*([\w_$]+)?\s*\(/i)
    addon = (n && n[1]) || '[anonymous]'
    loadedAddons.push(addon)
    val = val.getChildlistChange
  }
  return 'generated-stack:\n' + loadedAddons.join('\n')
}

/**
 * 重写 window onerror事件
 * @param notMessage 错误的具体信息
 * @param color 错误所在的url
 * @param oldLineNumber 错误所在的url
 * @param charNo 错误所在的列
 * @param error 错误
 */
function onErrorHandle(
  notMessage: Event | string,
  color?: string,
  oldLineNumber?: number,
  charNo?: number,
  error?: Error
): void {
  let polarColor
  charNo = charNo || (window.event && (window.event as any).errorCharacter) || 0
  polarColor = color && color !== window.location.href ? color : null
  const data = errorHandle(error)
  const result = {
    errorType: ERROR_TYPES.UNCAUGHT,
    severity: SEVERITY_TYPES.ERROR,
    message: notMessage,
    lineNumber: oldLineNumber,
    columnNumber: charNo,
    fileName: polarColor || (data && data.fileName),
    name: (data && data.name) || 'uncaught error',
    stacktrace: (error && error.stack) || getStack()
  }
  cache.monitor.emitError(result)
}

export function uncaughtHandle() {
  window.onerror = onErrorHandle
}
