<template>
  <XyzTransition
    appear-visible
    xyz="fade left-5"
  >
    <div>
      <div class="d-flex justify-space-between">

        <h1 class="mb-4">Daftar Barang</h1>
        <v-dialog
          v-model="dialog"
          max-width="800"
          scrollable
        >
          <template #default>
            <v-card>
              <v-card-title>
                <span class="headline">Tambah Barang baru</span>
              </v-card-title>
              <v-divider />
              <v-card-text>
                <v-row class="my-2">
                  <v-col class="pa-1" cols="12" md="6">
                    <v-text-field
                      density="comfortable"
                      hide-details="auto"
                      label="Nama barang"
                    />
                  </v-col>
                  <v-col class="pa-1" cols="12" md="6">
                    <v-text-field
                      density="comfortable"
                      hide-details="auto"
                      hide-spin-buttons
                      label="Harga jual"
                      type="number"
                    />
                  </v-col>
                  <v-col class="pa-1" cols="12" md="6">
                    <v-textarea
                      density="comfortable"
                      hide-details="auto"
                      label="Deskripsi"
                    />
                  </v-col>
                  <v-col class="pa-1" cols="12" md="6">
                    <v-text-field
                      density="comfortable"
                      hide-details="auto"
                      hide-spin-buttons
                      label="Stok"
                      type="number"
                    />
                  </v-col>
                </v-row>

              </v-card-text>
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
            <v-btn color="success" text="+ Tambah Barang" v-bind="props" />
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
                  <span class="headline">{{ item.name }}</span>
                </v-card-title>
                <v-divider />
                <v-card-text>
                  <h3 class="my-2">Detail Barang</h3>
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="item.name"
                        hide-details="auto"
                        label="Nama Barang"
                        readonly
                      />
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="item.price"
                        hide-details="auto"
                        label="Harga Jual"
                        readonly
                      />
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-textarea
                        v-model="item.description"
                        hide-details="auto"
                        label="Deskripsi"
                        readonly
                      />
                    </v-col>
                    <v-col cols="12" md="6">
                      <v-text-field
                        v-model="item.stock"
                        hide-details="auto"
                        label="Stok"
                        readonly
                      />
                    </v-col>
                  </v-row>

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
        <template #[`item.price`]="{ item }">
          {{ formatCurrency(item.price) }}
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
        { title: 'No', value: 'no' },
        { title: 'Nama Barang', value: 'name' },
        { title: 'Harga Jual', value: 'price' },
        { title: 'Stok', value: 'stock' },
        { title: 'Action', value: 'action' },
      ])

      const items = ref([
        {
          no: 1,
          name: 'Barang 1',
          price: 1000000,
          stock: 10,
          description: 'Barang ini adalah barang yang sangat bagus',
        },
        {
          no: 2,
          name: 'Barang 2',
          price: 2000000,
          stock: 20,
          description: 'Barang ini adalah barang yang sangat bagus',
        },
        {
          no: 3,
          name: 'Barang 3',
          price: 3000000,
          stock: 30,
          description: 'Barang ini adalah barang yang sangat bagus',
        },
        {
          no: 4,
          name: 'Barang 4',
          price: 4000000,
          stock: 40,
          description: 'Barang ini adalah barang yang sangat bagus',
        },
        {
          no: 5,
          name: 'Barang 5',
          price: 5000000,
          stock: 50,
          description: 'Barang ini adalah barang yang sangat bagus',
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
