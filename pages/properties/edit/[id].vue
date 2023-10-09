<template>
  <el-form ref="formRef" :model="form" label-width="120px" label-position="top">
    <el-row>
      <el-col :span="11">
        <el-form-item
          label="Property ID"
          prop="propertyId"
          :rules="[{ required: true, message: 'Property ID is required' }]"
        >
          <el-input v-model="form.propertyId" />
        </el-form-item>
      </el-col>
      <el-col :span="1" />
      <el-col :span="11">
        <el-form-item
          label="Address"
          prop="address"
          :rules="[{ required: true, message: 'Address is required' }]"
        >
          <el-input v-model="form.address" />
        </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="11">
        <el-form-item
          label="Status"
          prop="status"
          :rules="[{ required: true, message: 'Status is required' }]"
        >
          <el-select v-model="form.status">
            <el-option
              v-for="(status, key) in Enum_Property_Status"
              :key="status"
              :label="key"
              :value="status"
            />
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="1" />
      <el-col :span="11">
        <el-form-item
          label="Property Type"
          prop="type"
          :rules="[{ required: true, message: 'Property type is required' }]"
        >
          <el-select v-model="form.type">
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
    <el-form-item
      label="No. of Tenant"
      prop="numberOfTenant"
      :rules="[{ required: true, message: 'Number of tenant is required' }]"
    >
      <el-input-number v-model="form.numberOfTenant" :min="1" :max="50" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(formRef)">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import type { FormInstance } from "element-plus";
import {
  Enum_Property_Status,
  Enum_Property_Type,
} from "../../../graphql/generated/graphql";

// do not use same name with ref
const form = reactive({
  propertyId: "",
  address: "",
  status: "",
  type: "",
  numberOfTenant: 1,
  description: "",
});
const formRef = ref<FormInstance>();

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
</script>
