<template>
  <XyzTransition
    appear-visible
    xyz="fade left-5"
  >
    <div>
      <div class="d-flex justify-space-between">

        <h1 class="mb-4">Daftar Surat Jalan</h1>
        <v-dialog
          v-model="dialog"
          max-width="800"
          scrollable
        >
          <template #default>
            <v-card>
              <v-card-title>
                <span class="headline">Input Surat Jalan</span>
              </v-card-title>
              <v-divider />
              <v-card-text>
                <v-row class="my-2">
                  <v-col class="pa-1" cols="12" md="6">
                    <v-select
                      density="comfortable"
                      hide-details="auto"
                      :items="['PO-2021-0001', 'PO-2021-0002', 'PO-2021-0003', 'PO-2021-0004', 'PO-2021-0005']"
                      label="Purchase Order"
                    />
                  </v-col>
                  <v-col class="pa-1" cols="12" md="6">
                    <v-text-field
                      density="comfortable"
                      hide-details="auto"
                      label="Nomor Surat Jalan"
                    />
                  </v-col>
                  <v-col class="pa-1" cols="12" md="6">
                    <v-text-field
                      density="comfortable"
                      hide-details="auto"
                      label="Tanggal Surat Jalan"
                    />
                  </v-col>
                </v-row>
                <v-divider class="my-2" />
                <div>
                  <h3 class="my-2">Daftar Barang yang sudah Ditambahkan</h3>
                  <v-data-table>
                    <template #default>
                      <thead>
                        <tr>
                          <th class="text-left">No</th>
                          <th class="text-left">Nama Barang</th>
                          <th class="text-left">Jumlah</th>
                          <th class="text-left">Keterangan</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(index) in [1, 2, 3, 4, 5]" :key="index">
                          <td>{{ index + 1 }}</td>
                          <td>Barang {{ index + 1 }}</td>
                          <td>{{ 1 }}</td>
                          <td>Barang ini adalah barang yang sangat bagus</td>
                        </tr>
                      </tbody>
                    </template>
                  </v-data-table>
                </div>
                <v-divider class="my-2" />
                <div class="d-flex justify-space-between align-center">
                  <h3 class="my-2">Tambahkan barang baru ke dalam surat jalan</h3>
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
                      label="Jumlah"
                      type="number"
                    />
                  </v-col>
                  <v-col class="pa-1" cols="12" md="6">
                    <v-textarea
                      density="comfortable"
                      hide-details="auto"
                      label="Keterangan"
                    />
                  </v-col>
                </v-row></v-card-text>
              <v-card-actions>
                <v-btn
                  color="primary"
                  @click="dialog = false"
                >
                  Simpan
                </v-btn>
                <v-btn
                  color="error"
                  @click="dialog = false"
                >
                  Batal
                </v-btn>
              </v-card-actions>
            </v-card>

          </template>
          <template #activator="{ props }">
            <v-btn color="success" text="+ Tambah Surat Jalan" v-bind="props" />
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
                  <span class="headline">{{ item.no }}</span>
                </v-card-title>
                <v-divider />
                <v-card-text>
                  <div class="my-2">
                    Tanggal Surat Jalan : {{ formatDate(item.date) }}
                  </div>

                  <v-divider class="my-4" />
                  <h3>Detail Surat Jalan</h3>
                  <v-data-table disable-pagination>
                    <template #default>
                      <thead>
                        <tr>
                          <th class="text-left">No</th>
                          <th class="text-left">Nama Barang</th>
                          <th class="text-left">Jumlah</th>
                          <th class="text-left">Keterangan</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(index) in [1, 2, 3, 4, 5]" :key="index">
                          <td>{{ index + 1 }}</td>
                          <td>Barang {{ index + 1 }}</td>
                          <td>{{ formatCurrency(1000000) }}</td>
                          <td>Barang ini adalah barang yang sangat bagus</td>
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
        <template #[`item.date`]="{ item }">
          {{ formatDate(item.date) }}
        </template>
        <template #[`item.purchase_order`]="{ item }">
          <v-chip color="primary">{{ item.purchase_order }}</v-chip>
        </template>
      </v-data-table>
    </div>
  </xyztransition>
</template>

<script lang="ts">
  import { ref } from 'vue'
  import { formatCurrency, formatDate } from '../composables/utils'

  export default {
    setup () {
      const menu = ref(false)
      const dialog = ref(false)
      const headers = ref([
        { title: 'No Surat Jalan', value: 'no' },
        { title: 'Tanggal Surat Jalan', value: 'date' },
        { title: 'Purchase Order', value: 'purchase_order' },
        { title: 'Action', value: 'action', sortable: false },
      ])

      const items = ref([
        {
          no: 'SJ-2021-0001',
          date: '2021-01-01',
          purchase_order: 'PO-2021-0001',
          action: true,
        },
        {
          no: 'SJ-2021-0002',
          date: '2021-01-02',
          purchase_order: 'PO-2021-0002',
          action: true,
        },
        {
          no: 'SJ-2021-0003',
          date: '2021-01-03',
          purchase_order: 'PO-2021-0003',
          action: true,
        },
        {
          no: 'SJ-2021-0004',
          date: '2021-01-04',
          purchase_order: 'PO-2021-0004',
          action: true,
        },
        {
          no: 'SJ-2021-0005',
          date: '2021-01-05',
          purchase_order: 'PO-2021-0005',
          action: true,
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
