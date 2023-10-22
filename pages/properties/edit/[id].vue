<template>
  <FormProperty v-model="form" @submitForm="onSubmitForm" />
</template>

<script lang="ts" setup>
import { updateProperty } from "~/graphql/mutations/property";
import { PropertyInput } from "../../../graphql/generated/graphql";
import { getPropertyByPropertyId } from "~/graphql/queries/property";

// do not use same name with ref
const form: Ref<PropertyInput> = ref({
  propertyId: "",
  address: "",
  status: undefined,
  type: undefined,
  numberOfTenant: 1,
  description: "",
  price: undefined,
  images: undefined,
});
const propertyId = ref();

const route = useRoute();

const { data: properties, refresh } = await useAsyncQuery(
  getPropertyByPropertyId,
  {
    id: route.params.id.toString(),
  }
);
if (
  (route.params.id,
  properties.value?.properties?.data && route.params.id,
  properties.value?.properties?.data.length)
) {
  const property = properties.value?.properties?.data[0].attributes;
  propertyId.value = properties.value.properties.data[0]?.id;

  form.value = {
    propertyId: property?.propertyId,
    address: property?.address,
    status: property?.status,
    type: property?.type,
    numberOfTenant: property?.numberOfTenant,
    description: property?.description,
    price: property?.price,
    images: property?.images?.data.map((item) => ({
      name: item.attributes?.name,
      url: item.attributes?.url,
      id: item.id,
    })),
  };
}

const onSubmitForm = async () => {
  const { mutate, error } = useMutation(updateProperty, {
    variables: {
      id: propertyId.value,
      input: {
        propertyId: form.value.propertyId,
        address: form.value.address,
        status: form.value.status,
        type: form.value.type,
        numberOfTenant: form.value.numberOfTenant,
        description: form.value.description,
        price: form.value.price,
        images: form.value.images?.map((item: any) => {
          if (item.response && item.response[0].id) {
            return item.response[0].id;
          } else {
            return item.id;
          }
        }),
      },
    },
  });
  try {
    await mutate();
    ElMessage({
      message: "Property updated successfully!",
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
