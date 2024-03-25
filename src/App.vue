<template>
    <el-config-provider :locale="zhCn">
        <router-view #="{ Component, route }">
            <component :is="Component" :key="route.path" />
        </router-view>
    </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// import { provide } from 'vue'
// import { initVisualData, injectKey, localKey } from '@/visual-editor/hooks/useVisualData';
// const visualData = initVisualData();
//   // 注入可视化编辑器所有配置
//   provide(injectKey, visualData);
//   const { jsonData } = visualData;
//   window.addEventListener('beforeunload', () => {
//     sessionStorage.setItem(localKey, JSON.stringify(jsonData));
//   });
</script>
