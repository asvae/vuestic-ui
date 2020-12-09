import _Vue from 'vue'
import { setGlobalConfig, getGlobalConfig } from './GlobalConfigPlugin'

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
    themeConfig: undefined,
    iconConfig: undefined,
    componentConfig: undefined,
  } as GlobalConfig,
})
