/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
import VueAnimXYZ from '@animxyz/vue3'
import '@animxyz/core'

// Composables
import { createApp } from 'vue'

const app = createApp(App)
app.use(VueAnimXYZ)
registerPlugins(app)

app.mount('#app')
