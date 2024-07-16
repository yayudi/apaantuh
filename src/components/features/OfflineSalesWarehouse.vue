<template>
  <a-list item-layout="horizontal" :data-source="data">
    <template #renderItem="{ item }">
      <a-modal v-model:open="open" title="Title" :confirm-loading="confirmLoading" @ok="handleOk">
        <p>{{ modalText }}</p>
      </a-modal>
      <a-list-item>
        <a-button href="{{ item.noInvoice }}" @click="showModal">Open Modal with async logic</a-button>
          <a-card>
            <a-list-item-meta>
              <template #title>
                <a-row>
                  <a-col :span="16">
                    <a href="#">{{ item.noInvoice }}</a>
                  </a-col>
                  <a-col :span="8">
                    {{ item.statusSales }}
                  </a-col>
                </a-row>
              </template>
            </a-list-item-meta>
            <a-row>
              <a-col :span="12">Sales</a-col>
              <a-col :span="12">{{ item.namaSales }}</a-col>
            </a-row>
            <a-row>
              <a-col :span="12">Customer</a-col>
              <a-col :span="12">{{ item.customer }}</a-col>
            </a-row>
            <a-row>
              <a-col :span="12">Tanggal Order</a-col>
              <a-col :span="12">{{ item.tanggalOrder }}</a-col>
            </a-row>
            <a-row>
              <a-col :span="12">Total Item</a-col>
              <a-col :span="12">{{ item.totalItem }} pcs</a-col>
            </a-row>
          </a-card>
        </a>
      </a-list-item>
    </template>
  </a-list>
  pakai modal biar popup
</template>
<script lang="ts">
import { defineComponent as OfflineResults, type ComponentCustomProperties } from 'vue'
interface DataItem extends ComponentCustomProperties {
  noInvoice: string
  statusSales: string
  namaSales: string
  customer: string
  tanggalOrder: string
  totalItem: number
}
const data: DataItem[] = [
  {
    noInvoice: 'DPS/6322374',
    statusSales: 'Pending',
    namaSales: 'Firman',
    customer: 'Myoeng Soeng',
    tanggalOrder: '2022-03-01 10:00:00',
    totalOrder: 1000
  },
  {
    noInvoice: 'DPS/9804286',
    statusSales: 'Draft',
    namaSales: 'Asep',
    customer: 'Amin',
    tanggalOrder: '2020-03-08 12:05:10',
    totalOrder: 900
  },
  {
    noInvoice: 'DPS/6335123',
    statusSales: '',
    namaSales: 'Yadi',
    customer: 'Paling Serius',
    tanggalOrder: '2024-08-04 19:10:05',
    totalOrder: 150
  }
]
export default OfflineResults({
  setup() {
    return {
      data
    }
  }
})
</script>
