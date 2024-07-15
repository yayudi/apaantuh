<template>
  <a-space direction="vertical">
    <h3>Tanggal</h3>
    <a-range-picker
      :show-time="{ format: 'HH:mm' }"
      format="YYYY-MM-DD HH:mm"
      :placeholder="['Start Time', 'End Time']"
      @change="onChange"
      @ok="onOk"
    />
    <a-divider style="border-color: #7cb305" dashed />
    <h3>Marketplace</h3>
    <a-select
      v-model:value="value"
      show-search
      placeholder="Select Marketplace"
      :options="options"
      @focus="handleFocus"
      @blur="handleBlur"
      @change="handleChange"
    >
    </a-select>
    Status
    <div>
      <a-tag color="success">
        <template #icon>
          <check-circle-outlined />
        </template>
        Selesai
      </a-tag>
      <a-tag color="processing">
        <template #icon>
          <sync-outlined :spin="true" />
        </template>
        Diproses
      </a-tag>
      <a-tag color="error">
        <template #icon>
          <close-circle-outlined />
        </template>
        Batal
      </a-tag>
      <a-tag color="warning">
        <template #icon>
          <exclamation-circle-outlined />
        </template>
        Pending
      </a-tag>
      <a-tag color="default">
        <template #icon>
          <clock-circle-outlined />
        </template>
        Draft
      </a-tag>
    </div>
    Name Toko Marketplace No Sales Order Tanggal Order Total Harga Jenis Sales
  </a-space>
</template>

<script lang="ts">
/* __placeholder__ */
import type { Moment } from 'moment'
import SelectTypes from 'ant-design-vue/es/select'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    // filter date
    const onChange = (value: Moment[], dateString: string[]) => {
      console.log('Selected Time: ', value)
      console.log('Formatted Selected Time: ', dateString)
    }

    const onOk = (value: Moment[]) => {
      console.log('onOk: ', value)
    }

    // filter marketplace
    const options = ref<(typeof SelectTypes)['options']>([
      { value: 'Tokopedia', label: 'Tokopedia' },
      { value: 'Shopee', label: 'Shopee' },
      { value: 'Lazada', label: 'Lazada' }
    ])
    const handleChange = (value: string) => {
      console.log(`selected ${value}`)
    }
    const handleBlur = () => {
      console.log('blur')
    }
    const handleFocus = () => {
      console.log('focus')
    }
    const filterOption = (input: string, option: any) => {
      return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }

    return {
      value: ref<string | undefined>(undefined),
      filterOption,
      handleBlur,
      handleFocus,
      handleChange,
      options,
      onChange,
      onOk
    }
  }
})
</script>
