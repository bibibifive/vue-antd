import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import { message } from 'ant-design-vue'

import './styles/main.scss'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

app.use(router)
app.mount('#app')

app.config.globalProperties.$message = message
