<template>
  <FormProperty v-model="form" @submitForm="onSubmitForm" />
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { createProperty } from "~/graphql/mutations/property";
import { PropertyInput } from "~/graphql/generated/graphql";

// do not use same name with ref
const form: PropertyInput = reactive({
  propertyId: "",
  address: "",
  status: undefined,
  type: undefined,
  numberOfTenant: 1,
  description: "",
  images: undefined,
});

const onSubmitForm = async () => {
  const { mutate, error } = useMutation(createProperty, {
    variables: {
      input: {
        propertyId: form.propertyId,
        address: form.address,
        status: form.status,
        type: form.type,
        numberOfTenant: form.numberOfTenant,
        description: form.description,
        images: form.images?.map((item: any) => item.response[0].id),
      },
    },
  });
  try {
    await mutate();
    ElMessage({
      message: "Property added successfully!",
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
