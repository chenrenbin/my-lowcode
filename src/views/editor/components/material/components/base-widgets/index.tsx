import { defineComponent, ref } from 'vue';
import { cloneDeep } from 'lodash-es';
import { Edit } from '@element-plus/icons-vue';
import styles from './index.module.scss';
import { createNewBlock } from '@/views/editor/editor.utils';
import DraggableTransitionGroup from '@/views/editor/components/DraggableTransitionGroup.vue';
import baseWidgets from '@/packages/base-widgets';

export default defineComponent({
  name: 'BaseWidgets',
  label: '基本组件',
  order: 3,
  icon: Edit,
  setup() {
    const components = ref(Object.values(baseWidgets))

    console.log(111, styles)
    const log = (evt) => {
      window.console.log('onChange:', evt);
    };
    // 克隆组件
    const cloneDog = (comp) => {
      console.log('当前拖拽的组件：', comp);
      const newComp = cloneDeep(comp);
      return createNewBlock(newComp);
    };

    return () => (
      <>
        <DraggableTransitionGroup
          class={styles.listGroup}
          v-model={components.value}
          group={{ name: 'components', pull: 'clone', put: false }}
          clone={cloneDog}
          onChange={log}
          itemKey={'key'}
        >
          {{
            item: ({ element }) => (
              <div class={styles['list-group-item']} data-label={element.label}>
                {element.preview()}
              </div>
            ),
          }}
        </DraggableTransitionGroup>
      </>
    );
  },
});
