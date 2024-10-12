<template>
  <div>
    <div class="d-flex justify-space-between">

      <h1 class="mb-4">Daftar Purchase Order</h1>
      <v-dialog
        v-model="dialog"
        max-width="800"
        scrollable
      >
        <template #default>
          <v-card>
            <v-card-title>
              <span class="headline">Tambah Purchase Order</span>
            </v-card-title>
            <v-divider />
            <v-card-text>
              <v-menu
                max-width="290"
              >
                <!-- input text mengaktifkan date-picker -->
                <template #activator="{ props }">
                  <v-text-field
                    label="Tanggal Pembelian"
                    readonly
                    v-bind="props"
                  />
                </template>
                <v-date-picker
                  @input="menu = false"
                >
                  <template #actions>
                    <v-btn
                      color="primary"
                      text
                      @click="menu = false"
                    >
                      Cancel
                    </v-btn>
                    <v-btn
                      color="primary"
                      text
                      @click="menu = false"
                    >
                      OK
                    </v-btn>
                  </template>
                </v-date-picker>
              </v-menu>
              <v-divider class="my-2" />
              <div>
                <h3 class="my-2">Daftar Barang yang sudah Ditambahkan</h3>
                <v-data-table>
                  <template #default>
                    <thead>
                      <tr>
                        <th class="text-left">No</th>
                        <th class="text-left">Nama Barang</th>
                        <th class="text-left">Harga</th>
                        <th class="text-left">Jumlah</th>
                        <th class="text-left">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(detail, index) in [1, 2, 3, 4, 5]" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>Barang {{ index + 1 }}</td>
                        <td>{{ formatCurrency(1000000) }}</td>
                        <td>{{ 1 }}</td>
                        <td>{{ formatCurrency(1000000) }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-data-table>
              </div>
              <v-divider class="my-2" />
              <div class="d-flex justify-space-between align-center">
                <h3 class="my-2">Tambahkan barang baru ke dalam purchase order</h3>
                <v-btn color="success" size="small">Tambahkan barang</v-btn>
              </div>
              <v-row class="my-2">
                <v-col class="pa-1" cols="12" md="6">
                  <v-select
                    density="comfortable"
                    hide-details="auto"
                    :items="['Barang 1', 'Barang 2', 'Barang 3', 'Barang 4', 'Barang 5']"
                    label="Barang"
                  />
                </v-col>
                <v-col class="pa-1" cols="12" md="6">
                  <v-text-field
                    density="comfortable"
                    hide-details="auto"
                    hide-spin-buttons
                    label="Harga Beli"
                    type="number"
                  />
                </v-col>
                <v-col class="pa-1" cols="12" md="6">
                  <v-text-field
                    density="comfortable"
                    hide-details="auto"
                    hide-spin-buttons
                    label="Jumlah"
                    type="number"
                  />
                </v-col>
              </v-row></v-card-text>
            <v-card-actions>
              <v-btn
                color="primary"
                text
                @click="dialog = false"
              >
                Simpan
              </v-btn>
              <v-btn
                color="error"
                text
                @click="dialog = false"
              >
                Batal
              </v-btn>
            </v-card-actions>
          </v-card>

        </template>
        <template #activator="{ props }">
          <v-btn color="success" text="+ Tambah Purchase Order" v-bind="props" />
        </template>
      </v-dialog>
    </div>
    <v-data-table
      class="elevation-1"
      :headers="headers"
      :items="items"
      :items-per-page="5"
    >
      <template #[`item.action`]="{ item }">
        <v-dialog
          max-width="800"
          scrollable
        >
          <template #default>
            <v-card>
              <v-card-title>
                <span class="headline">{{ item.id }}</span>
              </v-card-title>
              <v-divider />
              <v-card-text>
                <div class="my-2">
                  Tanggal Pembelian : {{ formatDate(item.purchase_date) }}
                </div>
                <div class="my-2">
                  Grandtotal : {{ formatCurrency(item.grandtotal) }}
                </div>
                <div class="my-2">
                  Status : <v-chip :color="item.status === 'Selesai' ? 'success' : 'warning'">{{ item.status }}</v-chip>
                </div>
                <v-divider class="my-4" />
                <h3>Detail Purchase Order</h3>
                <v-data-table disable-pagination>
                  <template #default>
                    <thead>
                      <tr>
                        <th class="text-left">No</th>
                        <th class="text-left">Nama Barang</th>
                        <th class="text-left">Harga</th>
                        <th class="text-left">Jumlah</th>
                        <th class="text-left">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(detail, index) in [1, 2, 3, 4, 5]" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>Barang {{ index + 1 }}</td>
                        <td>{{ formatCurrency(1000000) }}</td>
                        <td>{{ 1 }}</td>
                        <td>{{ formatCurrency(1000000) }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
          </template>
          <template #activator="{ props }">
            <v-btn
              color="primary"
              v-bind="props"
            >
              Detail
            </v-btn>
          </template>
        </v-dialog>

      </template>
      <template #[`item.purchase_date`]="{ item }">
        {{ formatDate(item.purchase_date) }}
      </template>
      <template #[`item.grandtotal`]="{ item }">
        {{ formatCurrency(item.grandtotal) }}
      </template>
      <template #[`item.status`]="{ item }">
        <v-chip :color="item.status === 'Selesai' ? 'success' : 'warning'">{{ item.status }}</v-chip>
      </template></v-data-table>
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue'
  import { formatCurrency, formatDate } from '../composables/utils'

  export default {
    setup () {
      const menu = ref(false)
      const dialog = ref(false)
      const headers = ref([
        { title: 'No', value: 'no' },
        { title: 'ID', value: 'id' },
        { title: 'Grand Total', value: 'grandtotal' },
        { title: 'Tanggal pembelian', value: 'purchase_date' },
        { title: 'Status', value: 'status' },
        { title: 'Action', value: 'action' },
      ])

      const items = ref([
        {
          no: 1,
          id: 'PO-2021-0001',
          grandtotal: 1000000,
          purchase_date: '2021-01-01',
          status: 'Dalam proses',
        },
        {
          no: 2,
          id: 'PO-2021-0002',
          grandtotal: 2000000,
          purchase_date: '2021-01-02',
          status: 'Selesai',
        },
        {
          no: 3,
          id: 'PO-2021-0003',
          grandtotal: 3000000,
          purchase_date: '2021-01-03',
          status: 'Dalam proses',
        },
        {
          no: 4,
          id: 'PO-2021-0004',
          grandtotal: 4000000,
          purchase_date: '2021-01-04',
          status: 'Selesai',
        },
        {
          no: 5,
          id: 'PO-2021-0005',
          grandtotal: 5000000,
          purchase_date: '2021-01-05',
          status: 'Dalam proses',
        },
      ])

      return {
        headers,
        items,
        formatCurrency,
        formatDate,
        menu,
        dialog,
      }
    },
  }
</script>
