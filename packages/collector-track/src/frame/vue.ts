import { trackEvent } from '../helper'

export function vueInstall(Vue: any) {
  Vue.prototype.$trackEvent = trackEvent
}
