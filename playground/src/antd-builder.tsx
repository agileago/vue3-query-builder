import { type ComponentProps, VueComponent } from 'vue3-oop'
import type { RenderGroupProps } from 'vue3-query-builder'
import { Card } from 'ant-design-vue'

class AntDesignGroup extends VueComponent<RenderGroupProps> {
  static defaultProps: ComponentProps<RenderGroupProps> = [
    'depth',
    'fields',
    'onAddGroup',
    'onAddRule',
  ]

  render() {
    return <Card></Card>
  }
}
