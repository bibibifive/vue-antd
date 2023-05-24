import { createApp } from 'vue'
import App from './App.vue'
import router from './routers'
import { message } from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'
import './styles/main.scss'

const app = createApp(App)

app.use(router)
app.mount('#app')

app.config.globalProperties.$message = message
