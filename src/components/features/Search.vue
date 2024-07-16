<template>
  <a-space direction="vertical">
    <a-input-search
      v-model:value="search"
      placeholder="Masukkan kata kunci..."
      @search="onSearch"
    />
  </a-space>
</template>
<script lang="ts" setup>
import { defineComponent, ref } from 'vue'

const search = ref<string>('')

const onSearch = (searchValue: string) => {
  console.log('use value', searchValue)
  console.log('or use this.value', search.value)
}
</script>
