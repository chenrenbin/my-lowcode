<template>
    <el-tabs v-model="activeName" tab-position="left" :class="'material'" class="h-full">
        <template v-for="tabItem in tabs" :key="tabItem.name">
            <el-tab-pane :name="tabItem.name" lazy>
                <template #label>
                    <div class="material-item">
                        <el-icon :size="26"><component :is="tabItem.icon" /></el-icon>
                        <div>{{ tabItem.label }}</div>
                    </div>
                </template>
                <component :is="tabItem.comp" v-bind="$attrs" />
            </el-tab-pane>
        </template>
  </el-tabs>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElTabs, ElTabPane } from 'element-plus'
import components from './components';

defineOptions({ name: 'editorFacory' })

const tabs = Object.entries(components)
    .map(([name, component]) => {
      const { label, icon, order } = component;
      return { label, icon, name, order, comp: component };
    })
    .sort((a, b) => a.order - b.order);

const activeName = ref(tabs[0].name);
</script>

<style lang="scss" scoped>
  .material {
    > :deep(.el-tabs__header) {
      margin-right: 0;
      .el-tabs__item {
        width: 90px;
        height: 90px;
        justify-content: center;
        font-size: 16px;
        text-align: center;
      }
    }
    > :deep(.el-tabs__content) {
      height: 100%;
      overflow-y: auto;
    }
  }
</style>
