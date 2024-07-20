<template>
  <a-list
    item-layout="horizontal"
    :data-source="data"
  >
    <!--class="demo-loadmore-list"
    :loading="initLoading"
  >
    <template #loadMore>
      <div
        v-if="!initLoading && !loading"
        :style="{ textAlign: 'center', marginTop: '12px', height: '32px', lineHeight: '32px' }"
      >
        <a-button @click="onLoadMore">loading more</a-button>
      </div>
    </template> -->
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
      <!-- <a-list-item>
        <template #actions>
          <a key="list-loadmore-edit">edit</a>
          <a key="list-loadmore-more">more</a>
        </template>
        <a-skeleton avatar :title="false" :loading="!!item.loading" active>
          <a-list-item-meta
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          >
            <template #title>
              <a href="https://www.antdv.com/">{{ item.name.last }}</a>
            </template>
            <template #avatar>
              <a-avatar :src="item.picture.large" />
            </template>
          </a-list-item-meta>
          <div>content</div>
        </a-skeleton>
      </a-list-item> -->
    </template>
  </a-list>
</template>
<script lang="ts">
import {
  defineComponent as OnlineResults,
  type ComponentCustomProperties,
  // onMounted,
  // ref,
  // nextTick
} from 'vue'
// const count = 3;
// const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
// const initLoading = ref(true);
// const loading = ref(false);
// const list = ref([]);
// onMounted(() => {
//   fetch(fakeDataUrl)
//     .then(res => res.json())
//     .then(res => {
//       initLoading.value = false;
//       data.value = res.results;
//       list.value = res.results;
//     });
// });

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

// const onLoadMore = () => {
//   loading.value = true;
//   list.value = data.value.concat(
//     [...new Array(count)].map(() => ({ loading: true, name: {}, picture: {} })),
//   );
//   fetch(fakeDataUrl)
//     .then(res => res.json())
//     .then(res => {
//       const newData = data.value.concat(res.results);
//       loading.value = false;
//       data.value = newData;
//       list.value = newData;
//       nextTick(() => {
//         // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
//         // In real scene, you can using public method of react-virtualized:
//         // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
//         window.dispatchEvent(new Event('resize'));
//       });
//     });
// };

export default OnlineResults({
  setup() {
    return {
      data
    }
  }
})
</script>
