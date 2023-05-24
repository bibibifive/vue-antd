<template>
  <Table
    :columns="columns"
    :data-source="data"
    @change="handleChange"
    style="height: 100%"
  >
    <template #customFilterIcon>
      <SearchOutlined />
    </template>
    <template
      #customFilterDropdown="{
        setSelectedKeys,
        selectedKeys,
        confirm,
        clearFilters,
        column,
      }"
    >
      <div style="padding: 8px">
        <Input
          ref="searchInput"
          :placeholder="`Search ${column.dataIndex}`"
          :value="selectedKeys[0]"
          style="width: 188px; margin-bottom: 8px; display: block"
          @change="e => setSelectedKeys(e.target.value ? [e.target.value] : [])"
          @pressEnter="handleSearch(selectedKeys, confirm, column.dataIndex)"
        />
        <Button
          type="primary"
          size="small"
          style="width: 90px; margin-right: 8px"
          @click="handleSearch(selectedKeys, confirm, column.dataIndex)"
        >
          <template #icon><SearchOutlined /></template>
          Search
        </Button>
        <Button
          size="small"
          style="width: 90px"
          @click="handleReset(clearFilters)"
        >
          Reset
        </Button>
      </div>
    </template>
  </Table>
</template>

<script setup>
import { Table, Input, Button } from 'ant-design-vue'
import { SearchOutlined } from '@ant-design/icons-vue'

import { ref, reactive } from 'vue'

const searchInput = ref()

const handleChange = () => {
  console.log(1)
}

const state = reactive({
  searchText: '',
  searchedColumn: '',
})

const handleSearch = (selectedKeys, confirm, dataIndex) => {
  confirm()
  state.searchText = selectedKeys[0]
  state.searchedColumn = dataIndex
}
const handleReset = clearFilters => {
  clearFilters({
    confirm: true,
  })
  state.searchText = ''
}

const baseArr = kind =>
  Array(35)
    .fill('')
    .map((_, i) => ({
      index: i,
      number: i + 1,
      kind,
      status: i % 2 == 0 ? 'Pass' : 'Fail',
      createTime: new Date(
        `2022-${((Math.random() * 12) | 0) + 1}-${
          ((Math.random() * 31) | 0) + 1
        }`
      ),
    }))

const data = [...baseArr('bread'), ...baseArr('nut'), ...baseArr('banana')]

const columns = [
  {
    title: '单号',
    dataIndex: 'number',
    sorter: {
      compare: (a, b) => a.number - b.number,
      multiple: 1,
    },
  },
  {
    title: '种类',
    dataIndex: 'kind',
    customFilterDropdown: true,
    onFilter: (value, record) =>
      record.kind.toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => {
          searchInput.value.focus()
        }, 100)
      }
    },
  },
  {
    title: '审批状态',
    dataIndex: 'status',
    filters: [
      {
        text: 'Pass',
        value: 'Pass',
      },
      {
        text: 'Fail',
        value: 'Fail',
      },
    ],
    onFilter: (value, record) => record.status.indexOf(value) === 0,
  },
  {
    title: '申请时间',
    dataIndex: 'createTime',
    sorter: {
      compare: (a, b) => a.createTime - b.createTime,
      multiple: 2,
    },
    customRender: ({ text, record, index }) =>
      `${text.getFullYear()}-${text.getMonth() + 1}-${text.getDate()}`,
  },
]
</script>

<style lang="scss" scoped></style>
