import '@abraham/reflection'
import { createApp } from 'vue'
import { QueryBuilder } from 'vue3-query-builder'

function App() {
  return <QueryBuilder></QueryBuilder>
}

const app = createApp(App)
app.mount('#app')
