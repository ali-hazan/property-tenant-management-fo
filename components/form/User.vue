<template>
  <div class="max-w-4xl mx-auto">
    <el-form
      ref="formRef"
      :model="form"
      label-width="120px"
      label-position="top"
    >
      <el-row :gutter="32">
        <el-col :xs="24" :sm="12">
          <el-form-item
            label="Username"
            prop="username"
            :rules="[{ required: true, message: 'Username is required' }]"
          >
            <el-input v-model="form.username" />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-form-item
            label="Email"
            prop="email"
            :rules="[{ required: true, message: 'Email is required' }]"
          >
            <el-input v-model="form.email" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="32">
        <el-col :xs="24" :sm="12" v-if="!isUpdateForm">
          <el-form-item
            label="Password"
            prop="password"
            :rules="[{ required: true, message: 'Password is required' }]"
          >
            <el-input v-model="form.password" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="32">
        <el-col :xs="24" :sm="12">
          <el-form-item
            label="Role"
            prop="role"
            :rules="[{ required: true, message: 'Role is required' }]"
          >
            <el-select
              v-model="form.role"
              class="w-full"
              placeholder="Select"
              size="medium"
            >
              <el-option
                v-for="role in allRoles"
                :key="role.id"
                :label="role.name"
                :value="role.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item class="mt-12">
        <div class="flex justify-between w-full">
          <el-button @click="$router.push('/users')">Cancel</el-button>
          <el-button type="primary" @click="submitForm(formRef)">{{
            isUpdateForm ? "Update" : "Create"
          }}</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import type { FormInstance } from "element-plus";
import { useVModel } from "@vueuse/core";
import { UploadFilled } from "@element-plus/icons-vue";
import { getUsersPermissionsRole } from "~/graphql/queries/role";

const route = useRoute();
const props = defineProps<{
  modelValue: any;
}>();
const emit = defineEmits(["update:modelValue", "submitForm"]);

const formRef = ref<FormInstance>();
const form = useVModel(props, "modelValue", emit);

const {
  result: roles,
  refetch,
  loading,
} = useQuery(getUsersPermissionsRole, null, {
  fetchPolicy: "network-only",
});

const allRoles = computed(() => {
  return roles.value?.usersPermissionsRoles?.data.map((item) => {
    return {
      id: item.id,
      ...item.attributes,
    };
  });
});

const isUpdateForm = computed(() => {
  return route.params.username ?? false;
});

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate(async (valid) => {
    if (valid) {
      emit("submitForm");
    }
  });
};
</script>
