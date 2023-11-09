<template>
  <FormUser v-model="form" @submitForm="onSubmitForm" />
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { createUsersPermissionsUser } from "~/graphql/mutations/user";

// do not use same name with ref
const form: any = reactive({
  username: "",
  email: "",
  password: "",
  role: undefined,
});

const onSubmitForm = async () => {
  const { mutate, error } = useMutation(createUsersPermissionsUser, {
    variables: {
      input: {
        username: form.username,
        email: form.email,
        password: form.password,
        role: form.role,
      },
    },
  });
  try {
    await mutate();
    ElMessage({
      message: "User added successfully!",
      type: "success",
    });
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
