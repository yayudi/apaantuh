<!-- eslint-disable vue/valid-v-for -->
<template>
  <a-button type="primary" style="margin-bottom: 10px"> <LeftOutlined />Back </a-button>
  <a-list
    bordered
    item-layout="horizontal"
    :data-source="data"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <a-skeleton :title="false" :loading="!!item.loading" active>
          <a-list-item-meta>
            <template #title>
              <a-row>
                <a-col :span="16">
                  <a-typography-paragraph :level="3" copyable strong style="margin: 0;">
                    {{ item.noInvoice }}
                  </a-typography-paragraph>
                </a-col>
                <a-col :span="8" class="statusSales">
                  {{ item.statusSales }}
                </a-col>
              </a-row>
            </template>
          </a-list-item-meta>
        </a-skeleton>
      </a-list-item>
      <a-list-item>
        <a-row class="invoiceDetail">
          <a-list-item>
            <a-col>Nama Customer</a-col>
            <a-col>{{ item.namaCustomer }}</a-col>
          </a-list-item>
          <a-list-item>
            <a-col :span="12">Tanggal Order</a-col>
            <a-col :span="12">{{ item.tanggalOrder }}</a-col>
          </a-list-item>
          <a-list-item>
            <a-col :span="12">Toko</a-col>
            <a-col :span="12">{{ item.namaToko }}</a-col>
          </a-list-item>
          <a-list-item>
            <a-col :span="12">Marketplace</a-col>
            <a-col :span="12">{{ item.marketPlace }}</a-col>
          </a-list-item>
          <a-list-item>
            <a-list>
              <a-list-item>
                <a-col :span="12">Total Item</a-col>
                <a-col :span="12">{{ item.totalItem }} item</a-col>
              </a-list-item>
              <a-list v-for="(productItem, index) in item.productItems">
                <a-list-item :index>
                  <!-- <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }"> -->
                  <a-row :gutter="8">
                    <a-col :span="6">
                      <a-image
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                        style="margin-bottom: 2vh"
                      />
                    </a-col>
                    <a-col :span="17" class="listItem">
                      <a-row>
                        <a-row>
                          <a-col :span="24">
                            <a-typography-text strong>
                              {{ productItem.product }}
                            </a-typography-text>
                          </a-col>
                        </a-row>
                      </a-row>
                      <a-row>
                        <a-col :span="6">SKU</a-col>
                        <a-col :span="18">{{ productItem.SKU }}</a-col>
                      </a-row>
                      <a-row>
                        <a-col :span="6">Quantity</a-col>
                        <a-col :span="18">{{ productItem.qty }} unit</a-col>
                      </a-row>
                    </a-col>
                    <a-col :span="1" class="itemQuantity">
                      <!-- <a-input-number
                        v-model:value="pickingAll"
                        :min="1"
                        :max="10000"
                        :formatter="(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                        :parser="(value) => value.replace(/\$\s?|(,*)/g, '')"
                        @change="onChange"
                        :key="index"
                      /> -->
                      <!-- <a-button type="primary" class="btnPickingAll"> <CheckOutlined /> Picking All </a-button> -->

                      <!-- <a-input-number 
                      v-model="pickingAll"  -->
                      <a-input-number 
                      :min="1" :max="10000" />
                      <a-button type="primary" class="btnPickingAll" @click="productItem.qty">
                        <CheckOutlined />
                      </a-button>
                      <!-- <a-button type="primary" class="btnPickingAll" @click="setQuantityToMax"
                        >Picking All</a-button> -->
                      <a-button type="primary" danger>
                        <CloseOutlined />
                      </a-button>
                    </a-col>
                  </a-row>
                </a-list-item>
              </a-list>
            </a-list>
          </a-list-item>
        </a-row>
      </a-list-item>
      <a-list-item class="actionButtons">
        <a-button type="primary"> <GoldFilled /> Konfirmasi Pengambilan</a-button>
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
  CloseCircleOutlined,
  CloseOutlined,
  CheckOutlined
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
    CloseCircleOutlined,
    CloseOutlined,
    CheckOutlined
  },
  data() {
    return {
      // checkedList: []
      checked: []
    }
  },
  methods: {
    // onChange(checkedValues) {
    //   console.log('checked = ', checkedValues)
    // }
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
.listItem .ant-row .ant-col:nth-child(1) {
  text-align: left;
}
.invoiceDetail .ant-col:nth-child(2),
.listItem .ant-row .ant-col:nth-child(2) {
  text-align: right;
}
.actionButtons {
  display: block;
}
.actionButtons button,
.itemQuantity button {
  width: 100%;
  height: auto;
  padding: 0.5rem;
}

.actionButtons button {
  margin: 0.5rem 2rem;
}

.itemQuantity {
  padding: 0 0!important;
}
.itemQuantity button {
  text-align: center;
  width: 50px;
  margin: 0.25rem 0;
}

.statusSales{
  text-align: right;
}

/*.invisible-checkboxes .ant-checkbox {
  display: none;
}

.color-box {
  width: 100px;
  height: 100px;
  background-color: red;
  transition: background-color 250ms ease-out;
}

.color-box.checked {
  background-color: green;
}

.invisible-checkboxes input[type=checkbox]{
display: none;
 margin-right: -20px;
position: relative;
z-index: 2; 
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
}*/
</style>
