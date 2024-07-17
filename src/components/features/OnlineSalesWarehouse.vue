<template>
  <a-list item-layout="horizontal" :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>
        <a href="{{ item.noInvoice }}">
          <a-card>
            <a-list-item-meta>
              <template #title>
                <a-row>
                  <a-col :span="16">
                    <a-typography-paragraph copyable strong>
                      {{ item.noInvoice }}
                    </a-typography-paragraph>
                  </a-col>
                  <a-col :span="8">
                    {{ item.statusSales }}
                  </a-col>
                </a-row>
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
              <a-col :span="12">Nama Customer</a-col>
              <a-col :span="12">{{ item.namaCustomer }}</a-col>
            </a-row>
            <a-row>
              <a-col :span="12">Tanggal Order</a-col>
              <a-col :span="12">{{ item.tanggalOrder }}</a-col>
            </a-row>
            <a-row>
              <a-col :span="12">Total Item</a-col>
              <a-col :span="12">{{ item.totalItem }} item</a-col>
            </a-row>
          </a-card>
        </a>
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts">
import { defineComponent as OnlineResults, type ComponentCustomProperties } from 'vue'
interface DataItem extends ComponentCustomProperties {
  noInvoice: string
  statusSales: string
  namaToko: string
  marketPlace: string
  namaCustomer: string
  tanggalOrder: string
  totalItem: number
}
const data: DataItem[] = [
  {
    noInvoice: 'DPS/01/V1/0001',
    statusSales: 'Pending',
    namaToko: 'Pusat Pneumatic',
    marketPlace: 'Bukalapak',
    namaCustomer: 'Sal Priadi',
    tanggalOrder: '2022-06-05 10:52:00',
    totalItem: 1000
  },
  {
    noInvoice: 'DPS/01/V1/0002',
    statusSales: 'Draft',
    namaToko: 'Grosir Hidrolik',
    marketPlace: 'Shopee',
    namaCustomer: 'Randy Orton',
    tanggalOrder: '2020-12-07 14:25:10',
    totalItem: 900
  },
  {
    noInvoice: 'DPS/01/V1/0003',
    statusSales: 'Selesai',
    namaToko: 'Hare',
    marketPlace: 'Tokopedia',
    namaCustomer: 'Wakabayashi Genzo',
    tanggalOrder: '2024-08-01 17:10:05',
    totalItem: 150
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
