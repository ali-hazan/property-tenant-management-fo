<template>
  <el-container>
    <el-aside :width="`${isExpandMenu ? 64 : 200}px`" height="100vh">
      <Menu :isExpandMenu="isExpandMenu" />
    </el-aside>
    <el-container>
      <el-header>
        <Header v-model="isExpandMenu" />
      </el-header>
      <el-main>
        <Breadcrumbs>
          <slot name="action" />
        </Breadcrumbs>
        <slot />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
const isExpandMenu = ref(false);
</script>

<style lang="scss" scoped>
.el-container {
  min-height: 100vh;
}

.el-aside {
  border-right: solid 1px var(--el-menu-border-color);
}

.el-header {
  display: flex;
  align-items: center;
}
</style>
