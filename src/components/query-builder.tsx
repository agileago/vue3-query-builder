import { type ComponentProps, VueComponent } from 'vue3-oop'

// 分组组件属性
export interface RenderGroupProps {
  /** 当前深度 */
  depth: number
  /** 字段 */
  fields: string[]
  onAddRule?(key: string): void
  onAddGroup?(key: string): void
}
export interface RenderGroupComponent {
  new (...args: any[]): {
    $props: RenderGroupProps
  }
}

// 字段组件
export interface RenderRuleProps {
  depth: number
  fields: string[]
  onAddRule?(key: string): void
  onAddGroup?(key: string): void
}
export interface RenderRuleComponent {
  new (...args: any[]): {
    $props: RenderGroupProps
  }
}

// 规则
export interface QueryBuilderRule extends Record<string, any> {
  /** 规则类型映射为组件 */
  type: any
  /** 字段名 */
  field: string
  /** 显示名称 */
  label: string
  /** 关系符号 */
  operators: string[]
}

// 值
export interface QueryBuilderValue {
  /** 关系符 */
  logicalOperator: 'all' | 'any'
  children: (QueryBuilderGroupValue | QueryBuilderRuleValue)[]
}
export interface QueryBuilderGroupValue {
  /** 关系符 */
  type: 'group'
  query: QueryBuilderValue
}
export interface QueryBuilderRuleValue {
  /** 关系符 */
  type: 'rule'
  query: {
    field: string
    operator: any
    value: any
  }
}

export interface QueryBuilderProps {
  /**
   * 字段及类型
   */
  rules: QueryBuilderRule[]
  /**
   * 当前规则结果
   */
  modelValue?: any
  /**
   * 规则变化事件
   */
  'onUpdate:modelValue'?: (value: any) => void
}

export function createQueryBuilder(
  GroupRender: RenderGroupComponent,
  RuleRender: RenderRuleComponent,
) {
  const QueryBuilder = class extends VueComponent<QueryBuilderProps> {
    static defaultProps: ComponentProps<QueryBuilderProps> = {
      rules: {
        type: Array,
        required: true,
      },
      modelValue: {
        type: Object,
      },
      'onUpdate:modelValue': {
        type: Function,
      },
    }

    constructor() {
      super()
    }

    render() {
      const { props } = this
      if (!props.rules?.length) return

      return <div>{this.props.rules}</div>
    }
  }

  return QueryBuilder
}
