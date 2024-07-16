<script setup lang="ts">
import SalesWarehouse from './components/views/SalesWarehouse.vue'

import type { CSSProperties } from 'vue'

const contentStyle: CSSProperties = {
  height: '1080px',
  lineHeight: '0px',
  color: '#000',
  backgroundColor: '#ddd',
  marginTop: '40rem'
}
</script>

<template style="max-height: 95vh; max-width: 95vw">
  <a-layout-content :style="contentStyle">
    <a-card>
      <SalesWarehouse />
    </a-card>
  </a-layout-content>
</template>

<style scoped></style>
