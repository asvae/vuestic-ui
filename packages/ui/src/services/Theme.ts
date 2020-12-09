import { setGlobalConfig, getGlobalConfig } from './GlobalConfigPlugin'
import Vue from 'vue'
import { Ref } from '@vuestic-ui/docs/types/configTypes'

export type HexColor = string
export type ThemeConfig = {
  primary: HexColor;
  secondary: HexColor;
  success: HexColor;
  info: HexColor;
  danger: HexColor;
  warning: HexColor;
  gray: HexColor;
  dark: HexColor;
  [key: string]: HexColor;
}

// Most default color - fallback when nothing else is found.
export const DEFAULT_COLOR = '#000000'

// This object is intended to be mutable, so that other services can observe it.
const DEFAULT_THEME = {
  primary: '#23e066',
  secondary: '#002c85',
  success: '#40e583',
  info: '#2c82e0',
  danger: '#e34b4a',
  warning: '#ffc200',
  gray: '#b4b6b9',
  dark: '#34495e',
}

export const getDefaultTheme = () => ({ ...DEFAULT_THEME })

export const setTheme = (theme: Record<string, string>): void => {
  setGlobalConfig(config => ({
    ...config,
    theme: { ...config.theme, ...theme },
  }))
}

export const getTheme = (): Record<string, string> | undefined => {
  return getGlobalConfig().theme
}

// Does modifications of themes.
// Note that themes are mutable.
export class ThemeConfigService {
  public ref: Ref<ThemeConfig>

  constructor () {
    this.ref = Vue.observable({ value: getDefaultTheme() })
  }

  setTheme (config: ThemeConfig | ((config: ThemeConfig) => ThemeConfig)): void {
    const configObject = typeof config === 'function' ? config() : config
    this.ref.value = { ...configObject }
  }

  getTheme (): ThemeConfig {
    return this.ref.value
  }
}
