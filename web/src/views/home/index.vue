<template>
  <div class="main-view">
    <h1>{{ title }}</h1>
    <RouterLink to="/login">Login</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Home')
</script>
