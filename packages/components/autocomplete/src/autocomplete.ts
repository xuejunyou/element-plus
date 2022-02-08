import { NOOP } from '@vue/shared'
import { buildProps, definePropType } from '@element-plus/utils/props'
import { UPDATE_MODEL_EVENT } from '@element-plus/utils/constants'
import { isNumber, isString } from '@element-plus/utils/util'
import { useTooltipContentProps } from '@element-plus/components/tooltip'
import { inputEmits } from '../../input'
import type { ExtractPropTypes } from 'vue'

export const autocompleteProps = buildProps({
  valueKey: {
    type: String,
    default: 'value',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  debounce: {
    type: Number,
    default: 300,
  },
  placement: {
    type: String,
    values: [
      'top',
      'top-start',
      'top-end',
      'bottom',
      'bottom-start',
      'bottom-end',
    ],
    default: 'bottom-start',
  },
  fetchSuggestions: {
    type: definePropType<
      (queryString: string, callback: (data: any[]) => void) => void
    >(Function),
    default: NOOP,
  },
  popperClass: {
    type: String,
    default: '',
  },
  triggerOnFocus: {
    type: Boolean,
    default: true,
  },
  selectWhenUnmatched: {
    type: Boolean,
    default: false,
  },
  hideLoading: {
    type: Boolean,
    default: false,
  },
  popperAppendToBody: {
    type: Boolean,
    default: undefined,
  },
  teleported: useTooltipContentProps.teleported,
  highlightFirstItem: {
    type: Boolean,
    default: false,
  },
} as const)
export type AutocompleteProps = ExtractPropTypes<typeof autocompleteProps>

export const autocompleteEmits = {
  [UPDATE_MODEL_EVENT]: inputEmits[UPDATE_MODEL_EVENT],
  input: inputEmits.input,
  change: inputEmits.change,
  focus: inputEmits.focus,
  blur: inputEmits.blur,
  clear: inputEmits.clear,
  select: ({ value }: { value: AutocompleteProps['modelValue'] }) =>
    isString(value) || isNumber(value),
}
export type AutocompleteEmits = typeof autocompleteEmits
