<template>
  <FormUser v-model="form" @submitForm="onSubmitForm" />
</template>

<script lang="ts" setup>
import { updateUsersPermissionsUser } from "~/graphql/mutations/user";
import { getUserByUsername } from "~/graphql/queries/user";

// do not use same name with ref
const form: Ref<any> = ref({
  username: "",
  email: "",
  role:""
});
const userId = ref();

const route = useRoute();

const { data: users, refresh } = await useAsyncQuery(getUserByUsername, {
  username: route.params.username.toString(),
});
if (
  (route.params.username,
  users.value?.usersPermissionsUsers?.data && route.params.username,
  users.value?.usersPermissionsUsers?.data.length)
) {
  const user = users.value?.usersPermissionsUsers?.data[0].attributes;
  userId.value = users.value.usersPermissionsUsers.data[0]?.id;

  form.value = {
    username: user?.username,
    email: user?.email,
    role: user?.role?.data?.id
  };
}

const onSubmitForm = async () => {
  const { mutate, error } = useMutation(updateUsersPermissionsUser, {
    variables: {
      id: userId.value,
      input: {
        username: form.value.username,
        email: form.value.email,
        role: form.value.role
      },
    },
  });
  try {
    await mutate();
    ElMessage({
      message: "User updated successfully!",
      type: "success",
    });
    refresh();
  } catch {
    if (error.value) {
      ElMessage({
        message: error.value.message,
        type: "error",
      });
    }
  }
};
</script>
