<template>
    <el-container class="app-container">
        <el-header class="app-container_header">
            <Header />
        </el-header>
        <el-container class="app-container_main">
            <el-aside class="left"><Material /></el-aside>
            <el-main class="center"><Factory /></el-main>
            <el-aside class="right"><Attribute /></el-aside>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
defineOptions({ name: 'appEditor' })
import Header from './components/header/index.vue'
import Material from './components/material/index.vue'
import Factory from './components/factory/index.vue'
import Attribute from './components/Attribute.vue'
</script>

<style lang="scss">
.app-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    &_header{
        height: auto;
        padding: 0;
    }
    &_main{
        overflow: hidden;
        .center{
            padding: 0;
            background-color: #F5F5F5;
        }
    }
}
</style>
