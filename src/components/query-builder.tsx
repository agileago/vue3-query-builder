import { ComponentProps, VueComponent } from 'vue3-oop'

export interface QueryBuiderLabel {
  /**
   * @default Match Type
   */
  matchType?: string
}

const defaultLabels = {
  matchType: 'Match Type',
  matchTypes: [
    { id: 'all', label: 'All' },
    { id: 'any', label: 'Any' },
  ],
  addRule: 'Add Rule',
  removeRule: '&times;',
  addGroup: 'Add Group',
  removeGroup: '&times;',
  textInputPlaceholder: 'value',
}

export interface QueryBuilderProps {
  /**
   * 规则
   */
  rules?: any[]
  labels?: QueryBuiderLabel
}

export class QueryBuilder extends VueComponent<QueryBuilderProps> {
  static defaultProps: ComponentProps<QueryBuilderProps> = {
    rules: {
      type: Array,
    },
    labels: {
      type: Object,
      default() {
        return defaultLabels
      },
    },
  }

  render() {
    return <div>{this.props.rules}</div>
  }
}
