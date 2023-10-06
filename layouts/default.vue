<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="`${isExpandMenu ? 64 : 200}px`" height="100vh"
       style="background-color: aqua;"
        ><Menu :isExpandMenu="isExpandMenu"
      /></el-aside>
      <el-container>
        <el-header style="background-color: aqua">
          <el-button @click="isExpandMenu = !isExpandMenu">
            <el-icon v-if="isExpandMenu"><expand /></el-icon>
            <el-icon v-else><fold /></el-icon
          ></el-button>
        </el-header>
        <el-main><slot /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { Expand, Fold } from "@element-plus/icons-vue";

const isExpandMenu = ref(false);
</script>

<style>
.el-aside{
  transition: width 50ms ease-in;
}
</style>