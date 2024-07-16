<script lang="ts">
// import vue
import { reactive, type CSSProperties, ref } from 'vue'

// import ANTDVue
import { Button, type FlexProps } from 'ant-design-vue'

// import icon
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiLineScan, mdiClose, mdiFilter } from '@mdi/js'

// import feature
import Search from '../features/Search.vue'
import FilterWarehouse from '../features/FilterWarehouse.vue'
import OnlineSalesWarehouse from '../features/OnlineSalesWarehouse.vue'
import OfflineSalesWarehouse from '../features/OfflineSalesWarehouse.vue'

const justifyOptions = reactive<FlexProps['justify'][]>([
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly'
])

const alignOptions = reactive<FlexProps['align'][]>(['flex-start', 'center', 'flex-end'])
const justify = ref(justifyOptions[0])
const alignItems = ref(alignOptions[0])
const boxStyle: CSSProperties = {
  width: '100%',
  height: '120px',
  borderRadius: '6px',
  border: '1px solid #40a9ff'
}

export default {
  name: 'SalesWarehouse-component',
  components: {
    Search,
    FilterWarehouse,
    OnlineSalesWarehouse,
    OfflineSalesWarehouse,
    SvgIcon,
    AButton: Button
    // AButtonGroup: ButtonGroup
  },
  data() {
    return {
      scan: mdiLineScan,
      close: mdiClose,
      filter: mdiFilter,
      activeKey: ref('1')
    }
  }
}
</script>

<template>
  <!-- header -->
  <a-row>
    <a-col :span="12">
      <h1>Report</h1>
    </a-col>
    <a-col :span="4"></a-col>
    <a-col :span="8">
      <a-button>
        <a-flex :style="{ ...boxStyle }" :justify="justify" :align="alignItems">
          <svg-icon type="mdi" :path="scan"></svg-icon>Pindai
        </a-flex>
      </a-button>
    </a-col>
  </a-row>
  <!-- search -->
  <a-row>
    <Search />
  </a-row>
  <!-- filter -->
  <a-row>
    <a-dropdown>
      <a class="ant-dropdown-link" @click.prevent>
        <svg-icon type="mdi" :path="filter"></svg-icon>Filter
        <DownOutlined />
      </a>
      <template #overlay>
        <a-space direction="vertical">
          <FilterWarehouse />
          <a-button type="primary" danger>
            <svg-icon type="mdi" :path="close"></svg-icon>Clear Filter
          </a-button>
        </a-space>
        <!-- <a-card title="Inner card title" :style="{ marginTop: '16px' }">
          <template #extra>
            <a href="#">More</a>
          </template>
          Inner Card content
        </a-card> -->
      </template>
    </a-dropdown>
  </a-row>
  <!-- result -->
  <a-row>
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="Online">
        <OnlineSalesWarehouse />
      </a-tab-pane>
      <a-tab-pane key="2" tab="Offline" force-render>
        <OfflineSalesWarehouse />
      </a-tab-pane>
    </a-tabs>
  </a-row>
</template>
