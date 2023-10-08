<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical"
    :collapse="isExpandMenu"
    :collapse-transition="false"
    @select="onMenuSelected"
  >
    <el-menu-item index="1">
      <el-icon><HomeFilled /></el-icon>
      <template #title>Home</template>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><OfficeBuilding /></el-icon>
      <template #title>Properties</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { OfficeBuilding, HomeFilled } from "@element-plus/icons-vue";

const router = useRouter();

const props = defineProps<{
  isExpandMenu: boolean;
}>();

const onMenuSelected = (index: number) => {
  if (index == 2) {
    router.push("/properties");
  } else {
    router.push("/");
  }
};
</script>

<style lang="scss">
.el-menu-vertical:not(.el-menu--collapse) {
  width: 200px;
}
</style>
