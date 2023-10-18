<template>
  <NuxtLayout name="default">
    <el-table :data="allProperties" style="width: 100%">
      <el-table-column prop="propertyId" label="Property Id" width="180" />
      <el-table-column prop="price" label="Price" width="180" />
      <el-table-column prop="status" label="Status" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default="scope">
          <el-button
            type="primary"
            @click="$router.push(`properties/edit/${scope.row.propertyId}`)"
            :icon="Edit"
            circle
          />
        </template>
      </el-table-column>
    </el-table>
    <template #action>
      <el-button>Print</el-button>
      <el-button
        type="primary"
        class="ml-2"
        @click="$router.push('/properties/create')"
        >Add</el-button
      >
    </template>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { getProperties } from "../../graphql/queries/property";
import { Edit } from "@element-plus/icons-vue";

definePageMeta({
  layout: false,
});


const { result: properties } = useQuery(getProperties, null, {
  fetchPolicy: "network-only",
});

const allProperties = computed(() => {
  return properties.value?.properties?.data.map((item) => {
    return {
      ...item.attributes,
    };
  });
});
</script>
