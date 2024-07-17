<template>
  <a-button type="primary" style="margin-bottom: 10px"> <LeftOutlined />Back </a-button>
  <a-list item-layout="horizontal" :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>
        <a-card>
          <a-list-item-meta>
            <template #title>
              <a-row>
                <a-col :span="16">
                  <a-typography-paragraph :level="3" copyable strong>
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
            <a-col :span="12">Tanggal Order</a-col>
            <a-col :span="12">{{ item.tanggalOrder }}</a-col>
          </a-row>
          <a-row>
            <a-col :span="12">Total Item</a-col>
            <a-col :span="12">{{ item.totalItem }} item</a-col>
          </a-row>
          <a-list-item>
            <a-row>
              <a-list-item-meta>
                <template #title>
                  <a-typography-paragraph :level="2" strong> product Items </a-typography-paragraph>
                </template>
              </a-list-item-meta>
            </a-row>
            <a-col :span="8">
              <template>
                <a-space :size="12">
                  <a-image
                    :width="200"
                    :src="`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`"
                  >
                    <template #placeholder>
                      <a-image
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                        :width="200"
                        :preview="false"
                      />
                    </template>
                  </a-image>
                  <a-button type="primary" @click="random = Date.now()">reload</a-button>
                </a-space>
              </template>
            </a-col>
            <a-col :span="16">
              <a-row>
                <a-col :span="12">product</a-col>
                <a-col :span="12">{{ item.productItems[].product }}</a-col>
              </a-row>
              <a-row>
                <a-col :span="12">SKU</a-col>
                <a-col :span="12">{{ item.productItems[].SKU }}</a-col>
              </a-row>
              <a-row>
                <a-col :span="12">Quantity</a-col>
                <a-col :span="12">{{ item.productItems[].qty }}</a-col>
              </a-row>
              <a-row>
                <a-col :span="12">Price</a-col>
                <a-col :span="12">Rp. {{ item.productItems[].price }}</a-col>
              </a-row>
            </a-col>
          </a-list-item>
        </a-card>
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts">
import { LeftOutlined } from '@ant-design/icons-vue'
import { defineComponent as OnlineResults, type ComponentCustomProperties, ref } from 'vue'
interface DataItem extends ComponentCustomProperties {
  noInvoice: string
  statusSales: string
  namaToko: string
  marketPlace: string
  namaCustomer: string
  tanggalOrder: string
  totalItem: number
  productItems: object
}
const data: DataItem[] = [
  {
    noInvoice: 'DPS/01/V1/0001',
    statusSales: 'Pending',
    namaToko: 'Pusat Pneumatic',
    marketPlace: 'Bukalapak',
    namaCustomer: 'Sal Priadi',
    tanggalOrder: '2022-06-05 10:52:00',
    totalItem: 1000,
    productItems: [
      {
        product: 'Klem Mikalore 10mm',
        SKU: 'PP0002451',
        qty: 100,
        price: 10000
      },
      {
        product: 'Ball Valve 3 way Type L 10inch',
        SKU: 'PP0002716',
        qty: 10,
        price: 12000000
      },
      {
        product: 'Hose PU 8x13 meteran',
        SKU: 'PP0000241',
        qty: 890,
        price: 1000
      }
    ]
  }
]
export default OnlineResults({
  components: {
    LeftOutlined
  },
  setup() {
    return {
      data,
      random: ref(Date.now())
    }
  }
})
</script>
