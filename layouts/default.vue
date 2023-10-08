<template>
    <el-container>
      <el-aside :width="`${isExpandMenu ? 64 : 200}px`" height="100vh"
        ><Menu :isExpandMenu="isExpandMenu"
      /></el-aside>
      <el-container>
        <el-header>
          <el-button @click="isExpandMenu = !isExpandMenu">
            <el-icon v-if="isExpandMenu"><expand /></el-icon>
            <el-icon v-else><fold /></el-icon
          ></el-button>
        </el-header>
        <el-main><slot /></el-main>
      </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import { Expand, Fold } from "@element-plus/icons-vue";

const isExpandMenu = ref(false);
</script>

<style lang="scss" scoped>
.el-container{
  min-height:100vh;
}
.el-aside{
  border-right: solid 1px var(--el-menu-border-color);
}
</style>