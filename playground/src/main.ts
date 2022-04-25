import { createApp, h } from 'vue'
import { add } from 'lib-starter'

function App() {
  return h('div', add(1, 2))
}

const app = createApp(App)
app.mount('#app')
