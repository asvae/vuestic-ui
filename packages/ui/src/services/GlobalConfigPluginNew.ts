import _Vue, { VueConstructor } from 'vue'
import { ThemeConfigService } from './Theme'

declare module 'vue/types/vue' {
  interface Vue {
    $vaGlobalConfig?: {
      value: ComponentConfig;
    };
  }
}

export type VaComponentName = string
export type VaComponentProp = string
export type VaComponentDefault = any

export type GlobalConfig = {
  themeConfig: 'ThemeConfig'; // take from theme
}

export type ComponentConfig = Record<VaComponentName, Record<VaComponentProp, VaComponentDefault> | undefined>

/**
 * The global configuration reference
 */
export const globalConfigRef = _Vue.observable({
  value: {
    themeConfig: new ThemeConfigService(),
    iconConfig: undefined,
    componentConfig: undefined,
  } as GlobalConfig,
})

/**
 * The global configuration's setter
 */
export const setGlobalConfig = (updater: ComponentConfig | ((config: ComponentConfig) => ComponentConfig)) => {
  if (typeof updater === 'function') {
    globalConfigRef.value = { ...updater(globalConfigRef.value) }
  } else {
    globalConfigRef.value = { ...globalConfigRef.value, ...updater }
  }
}

/**
 * The global configuration's getter
 */
export const getGlobalConfig = () => {
  return globalConfigRef.value
}

/**
 * Plugin provides global config to Vue component through prototype
 */
const GlobalConfigPlugin = {
  install (Vue: VueConstructor, config: ComponentConfig = {}) {
    setGlobalConfig(config)

    Object.defineProperty(Vue.prototype, '$vaGlobalConfig', {
      configurable: true,
      get () {
        return globalConfigRef.value
      },
    })
  },
}

export default GlobalConfigPlugin
