<template>
  <div class="main-view">
    <h1>{{ title }}</h1>

    <div class="menu-list">
      <RouterLink to="/home">家</RouterLink>
      <RouterLink to="/newArticle">拼音</RouterLink>
      <RouterLink to="/newArticle">算术</RouterLink>
      <RouterLink to="/newArticle">英语</RouterLink>
      <RouterLink to="/login">登录</RouterLink>
    </div>

    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const title = ref('家')
const router = useRouter()

if (!sessionStorage.getItem('token')) {
  router.push('/login')
}

onMounted(() => {
  console.log('Home Mounted')
})
</script>
