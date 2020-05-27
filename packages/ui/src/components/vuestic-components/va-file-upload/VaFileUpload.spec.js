import Vue from 'vue'

import { ColorThemePlugin } from '../../../services/ColorThemePlugin'
import { testIsContextableComponent } from '../../context-test/context-provide/testIsContextableComponent'
import VaFileUpload from './VaFileUpload'

// TODO Everything should work without this plugin.
Vue.use(ColorThemePlugin)

describe('VaFileUpload', () => {
  it('is contextable', () => {
    const props = {
      type: 'gallery',
      fileTypes: 'png',
      dropzone: true,
      value: [],
      color: 'danger',
      disabled: true,
    }
    expect(() => testIsContextableComponent(VaFileUpload, props)).not.toThrow()
  })
})
