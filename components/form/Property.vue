<template>
  <div class="max-w-4xl mx-auto">
    <el-form
      ref="formRef"
      :model="form"
      label-width="120px"
      label-position="top"
    >
      <el-row :gutter="32">
        <el-col  :xs="24" :sm="12">
          <el-form-item
            label="Property ID"
            prop="propertyId"
            :rules="[{ required: true, message: 'Property ID is required' }]"
          >
            <el-input v-model="form.propertyId" />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-form-item
            label="Address"
            prop="address"
            :rules="[{ required: true, message: 'Address is required' }]"
          >
            <el-input v-model="form.address" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="32">
        <el-col :xs="24" :sm="12">
          <el-form-item
            label="Status"
            prop="status"
            :rules="[{ required: true, message: 'Status is required' }]"
            class="w-full"
          >
            <el-select v-model="form.status" class="w-full">
              <el-option
                v-for="(status, key) in Enum_Property_Status"
                :key="status"
                :label="key"
                :value="status"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-form-item
            label="Property Type"
            prop="type"
            :rules="[{ required: true, message: 'Property type is required' }]"
          >
            <el-select v-model="form.type" class="w-full">
              <el-option
                v-for="(type, key) in Enum_Property_Type"
                :key="type"
                :label="key"
                :value="type"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="32">
        <el-col :xs="24" :sm="12">
          <el-form-item label="Price" prop="price">
            <el-input-number v-model="form.price" :precision="2" :step="0.1" />
          </el-form-item>
        </el-col>
        <el-col :xs="24" :sm="12">
          <el-form-item
            label="No. of Tenant"
            prop="numberOfTenant"
            :rules="[
              { required: true, message: 'Number of tenant is required' },
            ]"
          >
            <el-input-number v-model="form.numberOfTenant" :min="1" :max="50" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item
        label="Property image"
        prop="images"
        :rules="[{ required: true, message: 'Property image is required' }]"
        class="mt-12"
      >
        <el-upload
          v-model:file-list="form.images"
          drag
          name="files"
          action="http://localhost:1337/api/upload"
          :limit="3"
          multiple
        >
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            Drop file here or <em>click to upload</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
              jpg/png files with a size less than 500kb
            </div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item label="Description" prop="description" class="mt-6">
        <el-input
          v-model="form.description"
          :autosize="{ minRows: 2, maxRows: 4 }"
          type="textarea"
          placeholder="Please enter the details?"
        />
      </el-form-item>
      <el-form-item class="mt-12">
        <div class="flex justify-between w-full">
          <el-button @click="$router.push('/properties')">Cancel</el-button>
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
import { PropertyInput } from "../../graphql/generated/graphql";
import { UploadFilled } from "@element-plus/icons-vue";
import {
  Enum_Property_Status,
  Enum_Property_Type,
} from "../../graphql/generated/graphql";

const route = useRoute();
const props = defineProps<{
  modelValue: PropertyInput;
}>();
const emit = defineEmits(["update:modelValue", "submitForm"]);

const formRef = ref<FormInstance>();
const form = useVModel(props, "modelValue", emit);

const isUpdateForm = computed(() => {
  return route.params.id ?? false;
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
