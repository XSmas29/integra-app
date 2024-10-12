<template>
  <v-app-bar
    color="primary"
    flat
  >

    <!-- <template #prepend>
      <v-icon icon="mdi-magnifying-glass"></v-icon>
    </template> -->

    <template #extension>
      <v-tabs
        v-model="currentTab"
        align-tabs="center"
        grow
        hide-slider
        show-arrows
      >
        <v-tab
          text="Home"
          :value="1"
          @click="() => $router.push('/')"
        />
        <v-tab
          text="Purchase Order"
          :value="2"
          @click="() => $router.push('/purchase-order')"
        />
        <v-tab
          text="Surat Jalan"
          :value="3"
          @click="() => $router.push('/surat-jalan')"
        />
        <v-tab
          text="Barang"
          :value="4"
          @click="() => $router.push('/barang')"
        />
        <!-- <v-tab
          :value="6"
          text="Support"
        /> -->
        <!-- <v-tab
          :value="7"
          text="Support Silversmith"
        />
        <v-tab
          :value="8"
          text="Blog"
        /> -->
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
  import { ref } from 'vue'

  export default {
    setup () {
      const currentTab = ref(1)

      return {
        currentTab,
      }
    },
  }
</script>
