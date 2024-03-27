import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { VisualEditorBlockData } from '@/views/editor/editor.utils';
import baseWidgets from '@/packages/base-widgets';
import containerComponent from '@/packages/container-component';

export default defineComponent({
  name: 'CompRender',
  props: {
    element: {
      type: Object as PropType<VisualEditorBlockData>,
      default: () => ({}),
    },
  },
  setup(props) {
    const packages = {...baseWidgets, ...containerComponent}
    console.log(123, packages, props.element.componentKey)
    return packages[props.element.componentKey].render({
      styles: props.element.styles || {},
      props: props.element.props || {},
      model: {},
      block: props.element,
      custom: {},
    });
  },
});
