import { setGlobalConfig, getGlobalConfig } from './GlobalConfigPlugin'

// Most default color - fallback when nothing else is found.
export const DEFAULT_COLOR = '#000000'

// This object is intended to be mutable, so that other services can observe it.
export const DEFAULT_THEME = {
  primary: '#23e066',
  secondary: '#002c85',
  success: '#40e583',
  info: '#2c82e0',
  danger: '#e34b4a',
  warning: '#ffc200',
  gray: '#b4b6b9',
  dark: '#34495e',
}

export const setTheme = (theme: Record<string, string>): void => {
  setGlobalConfig(config => ({
    ...config,
    theme: { ...config.theme, ...theme },
  }))
}

export const getTheme = (): Record<string, string> | undefined => {
  return getGlobalConfig().theme
}
