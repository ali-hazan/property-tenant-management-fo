<template>
  <div class="flex justify-between w-full align-items-center">
    <el-button @click="isExpandMenu = !isExpandMenu">
      <el-icon v-if="isExpandMenu"><expand /></el-icon>
      <el-icon v-else><fold /></el-icon
    ></el-button>

    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="User" command="my-account">My Account</el-dropdown-item>
          <el-dropdown-item :icon="Setting" command="settings">Settings</el-dropdown-item>
          <el-dropdown-item :icon="SwitchButton" command="logout">Logout</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script lang="ts" setup>
import { useVModel } from "@vueuse/core";
import {
  Expand,
  Fold,
  User,
  Setting,
  SwitchButton,
} from "@element-plus/icons-vue";
const props = defineProps<{
  modelValue: boolean;
}>();
const emit = defineEmits(["update:modelValue"]);

const isExpandMenu = useVModel(props, "modelValue", emit);
const router = useRouter()

const handleCommand = (command:string) => {
  router.push(`/${command}`)
};
</script>
