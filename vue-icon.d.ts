declare module '@jamescoyle/vue-icon' {
  import { ComponentOptions } from 'vue'

  export interface SvgIconProps {
    type: string
    path: string
  }

  export const SvgIcon: ComponentOptions
}
