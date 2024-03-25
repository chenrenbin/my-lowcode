<template>
    <el-row class="py-3 flex items-center">
        <el-col :span="3">
            <div class="logo"></div>
            <h3 class="font-semibold">H5低代码</h3>
        </el-col>
        <el-col :span="18" class="flex justify-center">
            <template v-for="(toolItem, toolIndex) in tools" :key="toolIndex">
                <div :class="`min-w-10 text-center mx-1`" @click="toolItem.onClick">
                    <el-icon>
                        <component :is="toolItem.icon" />
                    </el-icon>
                    <div class="title">{{ toolItem.title }}</div>
                </div>
            </template>
        </el-col>
        <el-col :span="3" class="flex justify-right">
            <el-icon size="14"><User /></el-icon>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { User } from '@element-plus/icons-vue'
import { useTools } from '../hooks/useTools'

defineOptions({ name: 'editorHeader' })

const tools = useTools()
</script>

<style lang="scss" scoped></style>
