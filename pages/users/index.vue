<template>
  <div>
    <div class="flex justify-end mb-3">
      <el-button type="primary" @click="$router.push('/users/create')"
        >Add</el-button
      >
    </div>
    <el-table
      :data="allUsers"
      class-name="min-h-[284px]"
      v-loading="loading"
      element-loading-text="Loading..."
    >
      <el-table-column prop="username" label="Username" />
      <el-table-column prop="email" label="Email" />
      <el-table-column prop="phone" label="Phone" />
      <el-table-column fixed="right" label="Actions">
        <template #default="scope">
          <el-button
            type="primary"
            @click="$router.push(`users/edit/${scope.row.username}`)"
            :icon="Edit"
            circle
          />
          <el-button
            type="danger"
            @click="onDelete(scope.row.id, scope.row.username)"
            :icon="Delete"
            circle
          />
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { getUsers } from "../../graphql/queries/user";
import { Edit, Delete } from "@element-plus/icons-vue";
import { deleteUsersPermissionsUser } from "~/graphql/mutations/user";
import type { Action } from "element-plus";

const {
  result: users,
  refetch,
  loading,
} = useQuery(getUsers, null, {
  fetchPolicy: "network-only",
});

const allUsers = computed(() => {
  return users.value?.usersPermissionsUsers?.data.map((item) => {
    return {
      id: item.id,
      ...item.attributes,
    };
  });
});

const onDelete = (id: string, username: String) => {
  ElMessageBox.alert(
    `Do you want to delete the property ${username}?`,
    "Deletion",
    {
      confirmButtonText: "Yes",
      callback: async (action: Action) => {
        if (action === "confirm") {
          const { mutate, error } = useMutation(deleteUsersPermissionsUser, {
            variables: {
              id: id,
            },
          });
          try {
            await mutate();
            ElMessage({
              message: "User deleted successfully!",
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
