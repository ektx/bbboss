<template>
  <div class="login-view">
    <h1>{{ title }}</h1>

    <el-button type="primary" @click="onClick">Login</el-button>

    <RouterLink to="/home">Home</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import request from '@src/api/request'

const title = ref('login')

const onClick = () => {
  console.log('login')
  request.get('/api/test/hello').then(res => {
    console.log(res)
  })
}
</script>
