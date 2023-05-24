<script setup>
import { ref } from 'vue'
import { InsertRowAboveOutlined, BarsOutlined } from '@ant-design/icons-vue'
import flipClock from '@/views/components/flipClock.vue'

import { Layout, Menu } from 'ant-design-vue'
const { Sider, Content } = Layout
const { Item: MenuItem } = Menu

const collapsed = ref(false)
const selectedKeys = ref(['1'])

const antIcon = {
  InsertRowAboveOutlined,
  BarsOutlined,
}

const routes = [
  // {
  //   to: '/',
  //   value: 'home',
  //   iconName: 'home',
  //   title: '首页',
  // },
  {
    to: '/page',
    value: 'page',
    iconName: 'InsertRowAboveOutlined',
    title: '分页',
  },
  {
    to: '/todolist',
    value: 'todolist',
    iconName: 'BarsOutlined',
    title: '待办',
  },
  // {
  //   to: '/searchForQQ',
  //   value: 'searchForQQ',
  //   iconName: 'logo-qq',
  //   title: 'searchForQQ',
  // },
]
</script>

<template>
  <Layout>
    <Sider
      width="215px"
      style="height: 100vh"
      v-model:collapsed="collapsed"
      :trigger="null"
      collapsible
      theme="light"
    >
      <Menu
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        style="margin-top: 10px"
      >
        <flipClock />
        <router-link
          v-for="(route, i) in routes"
          :to="route.to"
          style="color: var(--theme-text)"
        >
          <MenuItem :key="i">
            <component :is="antIcon[route.iconName]" />
            <span>{{ route.title }}</span>
          </MenuItem>
        </router-link>
      </Menu>
    </Sider>

    <Layout>
      <Content
        :style="{
          margin: '0 16px',
          minHeight: '280px',
        }"
        class="theme"
      >
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </Content>
    </Layout>
  </Layout>
</template>

<style lang="scss" scoped></style>
