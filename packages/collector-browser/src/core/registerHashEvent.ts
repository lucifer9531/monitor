import { isFunction } from '@hutool/utils/lib/basicType/isFunction'
/**
 * @param {Object} element
 * @param {string} type
 * @param {function(...[*])} handler
 * @param {boolean} oldSchool
 * @param {boolean} useCapture
 */
function registerEvent(
  element: any,
  type: string,
  handler: () => any,
  oldSchool?: boolean,
  useCapture?: boolean
) {
  if (!element) {
    console.error('没有提供有效的元素')
    return
  }

  if (element.addEventListener && !oldSchool) {
    element.addEventListener(type, handler, !!useCapture)
  } else {
    const ontype = 'on' + type
    const oldHandlers = element[ontype] // can be undefined
    element[ontype] = makeHandler(element, handler, oldHandlers)
  }
}

function fixEvent(event: any) {
  if (event) {
    event.preventDefault = function() {
      fixEvent.prototype.returnValue = false
    }
    event.stopPropagation = function() {
      fixEvent.prototype.cancelBubble = true
    }
  }
  return event
}

function makeHandler(
  element: any,
  newHandler: (...params: any) => any,
  oldHandlers: (event: any) => any
) {
  return function(event: () => void) {
    event = event || fixEvent(window.event)

    // 这基本上发生在firefox中，只要另一个脚本
    // 覆盖onload回调并且不传递事件
    // 对象先前定义的回调, 所有的浏览器
    // 没有定义window.event实现addEventListener
    // 所以dom_loaded处理程序仍将像往常一样被触发。
    if (!event) {
      return undefined
    }

    let ret = true
    let oldResult, newResult

    if (isFunction(oldHandlers)) {
      oldResult = oldHandlers(event)
    }
    newResult = newHandler.call(element, event)

    if (false === oldResult || false === newResult) {
      ret = false
    }

    return ret
  }
}
export default function(callback: () => any) {
  registerEvent(window, 'hashchange', callback)
}
