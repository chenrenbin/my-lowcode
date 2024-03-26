import { defineComponent } from 'vue';
import { cloneDeep } from 'lodash-es';
import Draggable from 'vuedraggable';
import { Suitcase } from '@element-plus/icons-vue';
import styles from './index.module.scss';
import type { VisualEditorComponent } from '@/views/editor/editor.utils';
import { createNewBlock } from '@/views/editor/editor.utils';
import containerComponent from '@/packages/container-component';

export default defineComponent({
  name: 'ContainerComponent',
  label: '容器组件',
  icon: Suitcase,
  order: 4,
  setup() {

    const log = (evt) => {
      window.console.log(evt);
    };
    // 克隆组件
    const cloneDog = (comp) => {
      console.log('当前拖拽的组件：', comp);
      const newComp = cloneDeep(comp);
      return createNewBlock(newComp);
    };

    return () => (
      <>
        <Draggable
          sort={false}
          forceFallback={false}
          list={Object.values(containerComponent)}
          group={{ name: 'components', pull: 'clone', put: false }}
          clone={cloneDog}
          item-key="_vid"
          onChange={log}
        >
          {{
            item: ({ element }: { element: VisualEditorComponent }) => (
              <div class={styles['list-group-item']} data-label={element.label}>
                {element.preview()}
              </div>
            ),
          }}
        </Draggable>
      </>
    );
  },
});
