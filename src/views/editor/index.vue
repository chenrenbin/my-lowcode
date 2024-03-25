<template>
    <el-container class="app-container">
        <el-header class="app-container_header">
            <Header />
        </el-header>
        <el-container class="app-container_main">
            <el-aside><Material /></el-aside>
            <el-main><Factory /></el-main>
            <el-aside><Attribute /></el-aside>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
defineOptions({ name: 'appEditor' })
import Header from './components/Header.vue'
import Material from './components/Material.vue'
import Factory from './components/Factory.vue'
import Attribute from './components/Attribute.vue'
</script>

<style lang="scss">
.app-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
