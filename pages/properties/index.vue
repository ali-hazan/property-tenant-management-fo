<template>
  <NuxtLayout name="default">
    <el-table
      :data="allProperties"
      class-name="min-h-[284px]"
      v-loading="loading"
      element-loading-text="Loading..."
    >
      <el-table-column prop="propertyId" label="Property Id" width="180" />
      <el-table-column prop="price" label="Price" width="180" />
      <el-table-column prop="status" label="Status" width="180" />
      <el-table-column prop="address" label="Address" />
      <el-table-column fixed="right" label="Actions" width="120">
        <template #default="scope">
          <el-button
            type="primary"
            @click="$router.push(`properties/edit/${scope.row.propertyId}`)"
            :icon="Edit"
            circle
          />
          <el-button
            type="danger"
            @click="onDelete(scope.row.id, scope.row.propertyId)"
            :icon="Delete"
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
import { Edit, Delete } from "@element-plus/icons-vue";
import { deleteProperty } from "~/graphql/mutations/property";
import type { Action } from "element-plus";

definePageMeta({
  layout: false,
});

const {
  result: properties,
  refetch,
  loading,
} = useQuery(getProperties, null, {
  fetchPolicy: "network-only",
});

const allProperties = computed(() => {
  return properties.value?.properties?.data.map((item) => {
    return {
      id: item.id,
      ...item.attributes,
    };
  });
});

const onDelete = (id: string, propertyId: String) => {
  ElMessageBox.alert(
    `Do you want to delete the property ${propertyId}?`,
    "Deletion",
    {
      confirmButtonText: "Yes",
      callback: async (action: Action) => {
        if (action === "confirm") {
          const { mutate, error } = useMutation(deleteProperty, {
            variables: {
              id: id,
            },
          });
          try {
            await mutate();
            ElMessage({
              message: "Property deleted successfully!",
              type: "success",
            });
            refetch();
          } catch {
            if (error.value) {
              ElMessage({
                message: error.value.message,
                type: "error",
              });
            }
          }
        }
      },
    }
  );
};
</script>
