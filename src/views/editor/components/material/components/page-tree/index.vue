<!--页面树-->
<template>
  <el-button type="primary" class="!my-10px !mx-6px" :icon="Plus" @click="addPage">
    添加页面
  </el-button>
  <el-tree :data="pages" 
    :props="defaultProps" 
    node-key="path" 
    highlight-current 
    :current-node-key="currentNodeKey"
    @node-click="handleNodeClick">
    <template #default="{ node }">
      <span class="custom-tree-node">
        <span>
          {{ node.label }}
        </span>
      </span>
    </template>
  </el-tree>
</template>

<script lang="tsx" setup>
import { ElTree } from 'element-plus'
import { Tickets, Plus } from '@element-plus/icons-vue';

defineOptions({
  name: 'PageTree',
  label: '页面',
  order: 1,
  icon: Tickets,
});

const pages = [
  { label: '首页', path: '/' }
]

const defaultProps = {}

const currentNodeKey = '/'

const handleNodeClick = () => {}

const addPage = () => {}

</script>

<style lang="scss" scoped>
.custom-tree-node {
  display: flex;
  padding-right: 8px;
  font-size: 14px;
  flex: 1;
  align-items: center;
  justify-content: space-between;
}
</style>
