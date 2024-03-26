<template>
    <el-row class="editorHeader px-6 py-5 flex items-center">
        <el-col :span="3">
            <h2 class="font-semibold">低代码平台</h2>
        </el-col>
        <el-col :span="18" class="flex justify-center">
            <template v-for="toolItem in tools" :key="toolItem.title">
                <div :class="`min-w-10 text-center mx-1`" @click="toolItem.onClick">
                    <el-icon><component :is="toolItem.icon" /></el-icon>
                    <div class="title">{{ toolItem.title }}</div>
                </div>
            </template>
        </el-col>
        <el-col :span="3" class="flex justify-right">
            <el-icon size="18"><User /></el-icon>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { User } from '@element-plus/icons-vue'
import { useTools } from '../hooks/useTools'

defineOptions({ name: 'editorHeader' })

const tools = useTools()
</script>

<style lang="scss" scoped>
.editorHeader {
    box-shadow: 0 0px 6px #999;
}
</style>
