<script lang="ts">
// import vue
import { reactive, type CSSProperties, ref, defineComponent as SalesWarehouse } from 'vue'

// import ANTDVue
import { Button, type FlexProps } from 'ant-design-vue'

// import icons
import { CloseOutlined, FilterOutlined, ScanOutlined } from '@ant-design/icons-vue'

// import feature
import Search from '../features/Search.vue'
import FilterWarehouse from '../features/FilterWarehouse.vue'
import OnlineSalesWarehouse from '../features/OnlineSalesWarehouse.vue'
import OfflineSalesWarehouse from '../features/OfflineSalesWarehouse.vue'
import DetailSalesWarehouse from '../features/DetailSalesWarehouse.vue'
import StatusSales from '../features/StatusSales.vue'

const justifyOptions = reactive<FlexProps['justify'][]>([
  'flex-start',
  'center',
  'flex-end',
  'space-between',
  'space-around',
  'space-evenly'
])
const alignOptions = reactive<FlexProps['align'][]>(['flex-start', 'center', 'flex-end'])

const justify = ref(justifyOptions[5])
const alignItems = ref(alignOptions[1])
const boxStyle: CSSProperties = {
  width: '100%',
  height: '120px',
  borderRadius: '6px',
  border: '1px solid #40a9ff'
}

export default SalesWarehouse({
  name: 'SalesWarehouse-component',
  components: {
    Search,
    FilterWarehouse,
    OnlineSalesWarehouse,
    OfflineSalesWarehouse,
    DetailSalesWarehouse,
    CloseOutlined,
    FilterOutlined,
    ScanOutlined,
    StatusSales,
    AButton: Button
    // AButtonGroup: ButtonGroup
  },
  data() {
    return {
      activeKey: ref('1')
    }
  }
})
</script>

<template>
  <!-- header -->
  <a-row>
    <a-col :span="12">
      <h1>Sales</h1>
    </a-col>
    <a-col :span="4"></a-col>
    <a-col :span="8">
      <a-button>
        <a-flex :style="{ ...boxStyle }" :justify="justify" :align="alignItems">
          <ScanOutlined />Pindai
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
        <FilterOutlined />Filter
        <DownOutlined />
      </a>
      <template #overlay>
        <a-space direction="vertical">
          <FilterWarehouse />
          <a-button type="primary" danger> <CloseOutlined />Clear Filter </a-button>
        </a-space>
      </template>
    </a-dropdown>
  </a-row>
  <!-- result -->
  <a-row>
    <StatusSales />
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="Online">
        <OnlineSalesWarehouse />
      </a-tab-pane>
      <a-tab-pane key="2" tab="Offline" force-render>
        <OfflineSalesWarehouse />
      </a-tab-pane>
      <a-tab-pane key="3" tab="Detail" force-render>
        <DetailSalesWarehouse />
      </a-tab-pane>
    </a-tabs>
  </a-row>
</template>
