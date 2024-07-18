<!-- eslint-disable vue/valid-v-for -->
<template>
  <a-button type="primary" style="margin-bottom: 10px"> <LeftOutlined />Back </a-button>
  <a-list item-layout="horizontal" :data-source="data">
    <template #renderItem="{ item }">
      <a-list-item>
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
      </a-list-item>
      <a-list-item>
        <a-list>
          <a-list-item>
            <a-row>
              <a-col :span="12">Tanggal Order</a-col>
              <a-col :span="12">{{ item.tanggalOrder }}</a-col>
            </a-row>
          </a-list-item>
          <a-list-item>
            <a-row>
              <a-col :span="12">Toko</a-col>
              <a-col :span="12">{{ item.namaToko }}</a-col>
            </a-row>
          </a-list-item>
          <a-list-item>
            <a-row>
              <a-col :span="12">Marketplace</a-col>
              <a-col :span="12">{{ item.marketPlace }}</a-col>
            </a-row>
          </a-list-item>
          <a-list-item>
            <a-card>
              <a-list-item>
                <a-row>
                  <a-col :span="12">Total Item</a-col>
                  <a-col :span="12">{{ item.totalItem }} item</a-col>
                </a-row>
              </a-list-item>
              <a-list v-for="(productItem, index) in item.productItems">
                <a-list-item :index>
                  <a-row>
                    <a-col :span="6">
                      <a-image
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style="margin-bottom: 2vh;"
                      />
                    </a-col>
                    <a-col :span="14" class="listItem">
                      <a-row>
                        <a-col :span="6">product</a-col>
                        <a-col :span="18">{{ productItem.product }}</a-col>
                      </a-row>
                      <a-row>
                        <a-col :span="6">SKU</a-col>
                        <a-col :span="18">{{ productItem.SKU }}</a-col>
                      </a-row>
                      <a-row>
                        <a-col :span="6">Quantity</a-col>
                        <a-col :span="18">{{ productItem.qty }} unit</a-col>
                      </a-row>
                      <a-row>
                        <a-col :span="6">Price</a-col>
                        <a-col :span="18">Rp. {{ productItem.price }}</a-col>
                      </a-row>
                    </a-col>
                    <a-col :span="4" class="invisible-checkboxes" v-model="checkedList" @change="onChange" :key="value">
                      <a-checkbox :value="value" />
                      <label class="checkbox-alias" />
                    </a-col>
                  </a-row>
                </a-list-item>
              </a-list>
            </a-card>
          </a-list-item>
        </a-list>
      </a-list-item>
      <a-list-item class="actionButton">
        <a-button type="primary">
          <GoldFilled /> Pengambilan Produk
        </a-button>
        <a-button type="primary">
          <DropboxOutlined /> Pengemasan Produk
        </a-button>
        <a-button type="primary" style="background: LimeGreen">
          <CarFilled /> Request Pickup
        </a-button>
        <a-button type="primary" danger>
          <CloseCircleOutlined /> Cancel
        </a-button>
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts">
import {
  LeftOutlined,
  GoldFilled,
  DropboxOutlined,
  CarFilled,
  CloseCircleOutlined
} from '@ant-design/icons-vue'
import { defineComponent as DetailSalesWarehouse, type ComponentCustomProperties, ref } from 'vue'

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

export default DetailSalesWarehouse({
  components: {
    LeftOutlined,
    GoldFilled,
    DropboxOutlined,
    CarFilled,
    CloseCircleOutlined
  },
  data() {
    return {
      checkedList: []
    };
  },
  methods: {
    onChange(checkedValues) {
      console.log('checked = ', checkedValues);
    },
  },
  setup() {
    return {
      data,
      checked: ref(false),
      random: ref(Date.now())
    }
  }
})
</script>

<style scoped>
.listItem .ant-row .ant-col:nth-child(2){
  text-align: right;
}
.actionButton .ant-btn {
  display: block;
  width: 150px;
  position: relative;
}



.invisible-checkboxes input[type=checkbox]{
display: none;
/*   margin-right: -20px;
position: relative;
z-index: 2; */
}

.invisible-checkboxes input[type=checkbox]:checked + .checkbox-alias{
  background-color: green;
}

.checkbox-alias{
  background-color: red;
  display: inline-block;
  width: 100px;
  height: 100px;
  z-index: 1;
  position: relative;
  transition: all 250ms ease-out;
  cursor: pointer;
}

.invisible-checkboxes .ant-checkbox-inner {
  display: none;
}

.invisible-checkboxes .ant-checkbox-inner:checked + .checkbox-alias {
  background-color: green;
}
</style>