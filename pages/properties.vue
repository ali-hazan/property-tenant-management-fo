<template>
  <el-table :data="allProperties" style="width: 100%">
    <el-table-column prop="propertyId" label="Property Id" width="180" />
    <el-table-column prop="price" label="Price" width="180" />
    <el-table-column prop="status" label="Status" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script lang="ts" setup>
import { getProperties } from "../graphql/queries/property";
const { result: properties } = useQuery(getProperties);

const allProperties = computed(() => {
  return properties.value?.properties?.data.map((item) => {
    return {
      ...item.attributes,
    };
  });
});
</script>
