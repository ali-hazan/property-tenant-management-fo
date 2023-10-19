<template>
  <el-page-header @back="onBack" class="mb-8">
    <template #breadcrumb>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="(page, key) in pageArray"
          :key="page.link"
          :to="{ path: `/${useSlice(pageArray,0, key+1).map((item:IPageType)=>item.link).join('/')}` }"
        >
          {{ page.title }} {{}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </template>
    <template #content>
      <span class="text-large font-600 mr-3"> {{ currentPage }} </span>
    </template>
    <template #extra>
      <div class="flex items-center">
        <slot />
      </div>
    </template>
  </el-page-header>
</template>

<script lang="ts" setup>
interface IPageType {
  title: string;
  link: string;
}
const route = useRoute();
const router = useRouter();

const pageArray = computed(() => {
  return route.fullPath
    .split("/")
    .filter((segment) => segment)
    .map((item) => ({ title: useStartCase(item), link: item }));
});

const currentPage = computed(() => {
  return pageArray.value.length
    ? pageArray.value[pageArray.value.length - 1].title
    : "Home";
});

const onBack = () => {
  if (router.options.history.state.back) router.back();
};
</script>
