<template>

  <v-app>

    <app-bar />
    <v-main>
      <v-container
        fill-height
        :fluid="mdAndDown"
      >
        <router-view />

      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script lang="ts">
  import { useDisplay } from 'vuetify'

  export default {
    setup () {
      const { mdAndDown } = useDisplay()

      return {
        mdAndDown,
      }
    },
  }
</script>
