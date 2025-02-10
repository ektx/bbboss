<template>
  <div class="main-view">
    <h1>{{ title }}</h1>
    <RouterLink to="/login">Login</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const title = ref('Home')
const router = useRouter()

if (!sessionStorage.getItem('token')) {
  router.push('/login')
}

onMounted(() => {
  console.log('Home Mounted')
})
</script>
