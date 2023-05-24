<template>
  
</template>
<script setup>
import flipClock from '@/views/components/flipClock.vue'
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons-vue'

import { ref } from 'vue'

const selectedKeys = ref(['1'])
const collapsed = ref(false)

const routes = [
  {
    to: '/',
    value: 'home',
    iconName: 'home',
    title: '首页',
  },
  {
    to: '/page',
    value: 'page',
    iconName: 'order-adjustment-column',
    title: '分页',
  },
  {
    to: '/todolist',
    value: 'todolist',
    iconName: 'bulletpoint',
    title: '待办',
  },
  {
    to: '/searchForQQ',
    value: 'searchForQQ',
    iconName: 'logo-qq',
    title: 'searchForQQ',
  },
  {
    to: '/flex',
    value: 'flex',
    iconName: 'logo-windows',
    title: '布局',
  },
  {
    to: '/stock',
    value: 'stock',
    iconName: 'chart-stock',
    title: 'echart',
    origin: 'iconpark',
  },
]
</script>

<style lang="scss" scoped>
#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
}
</style>
