<template>
  <el-row justify="space-between">
    <el-col
      >
      <el-button @click="isExpandMenu = !isExpandMenu">
        <el-icon v-if="isExpandMenu"><expand /></el-icon>
        <el-icon v-else><fold /></el-icon
      ></el-button>
    </el-col>
    <el-col></el-col>
  </el-row>
</template>
<script lang="ts" setup>
import { useVModel } from "@vueuse/core";
import { Expand, Fold } from "@element-plus/icons-vue";
const props = defineProps<{
  modelValue: boolean;
}>();
const emit = defineEmits(["update:modelValue"]);

const isExpandMenu = useVModel(props, "modelValue", emit);
</script>
