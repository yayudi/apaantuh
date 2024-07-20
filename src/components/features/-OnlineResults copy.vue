<template>
  <a-list item-layout="horizontal" :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-card>
          <a-list-item-meta>
            <template #title>
              <a href="#">{{ item.noInvoice }}</a>
            </template>
          </a-list-item-meta>
          <!-- <template #extra><a href="#"></a></template> -->
          <a-row>
            <a-col :span="12">Toko</a-col>
            <a-col :span="12">{{ item.namaToko }}</a-col>
          </a-row>
          <a-row>
            <a-col :span="12">Marketplace</a-col>
            <a-col :span="12">{{ item.marketPlace }}</a-col>
          </a-row>
          <a-row>
            <a-col :span="12">Tanggal Order</a-col>
            <a-col :span="12">{{ item.tanggalOrder }}</a-col>
          </a-row>
          <a-row>
            <a-col :span="12">Total Order</a-col>
            <a-col :span="12">{{ item.totalOrder }} order</a-col>
          </a-row>
          <a-row>
            <a-col :span="12">Total Harga</a-col>
            <a-col :span="12">{{ item.totalHarga }}</a-col>
          </a-row>
        </a-card>
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts">
import { defineComponent as OnlineResults, type ComponentCustomProperties } from 'vue'
interface DataItem extends ComponentCustomProperties {
  noInvoice: string
  namaToko: string
  marketPlace: string
  tanggalOrder: string
  totalOrder: number
  totalHarga: number
}
const data: DataItem[] = [
  {
    noInvoice: 'DPS/01/V1/0001',
    namaToko: 'Pusat Pneumatic',
    marketPlace: 'Bukalapak',
    tanggalOrder: '2022-06-05 10:52:00',
    totalOrder: 1000,
    totalHarga: 1000000
  },
  {
    noInvoice: 'DPS/01/V1/0002',
    namaToko: 'Grosir Hidrolik',
    marketPlace: 'Shopee',
    tanggalOrder: '2020-12-07 14:25:10',
    totalOrder: 900,
    totalHarga: 2500000
  },
  {
    noInvoice: 'DPS/01/V1/0003',
    namaToko: 'Hare',
    marketPlace: 'Tokopedia',
    tanggalOrder: '2024-08-01 17:10:05',
    totalOrder: 150,
    totalHarga: 62500000
  }
]
export default OnlineResults({
  setup() {
    return {
      data
    }
  }
})
</script>
