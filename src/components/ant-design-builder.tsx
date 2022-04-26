import { type ComponentProps, VueComponent } from 'vue3-oop'
import type { RenderGroupProps } from './query-builder'

class AntDesignGroup extends VueComponent<RenderGroupProps> {
  static defaultProps: ComponentProps<RenderGroupProps> = [
    'depth',
    'fields',
    'onAddGroup',
    'onAddRule',
  ]

  render() {
    return <div></div>
  }
}
