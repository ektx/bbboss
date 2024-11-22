<template>
  <div class="login-view">
    <h1>{{ t('login.title') }}</h1>

    <vc-button type="primary" @click="onClick">Login</vc-button>
    <vc-button type="primary" @click="onToggleLang">切换语言</vc-button>

    <RouterLink to="/home">Home</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import request from '@src/api/request'
import { useI18n } from 'vue-i18n'
import type { MessageSchema, Language } from '@src/i18n/schema'

const { t, locale } = useI18n<{ message: MessageSchema }, Language>({})

const onToggleLang = () => {
  locale.value = locale.value === 'en' ? 'cn' : 'en'
}

const onClick = () => {
  console.log('login')
  request.get('/api/test/hello').then(res => {
    console.log(res)
  })
}
</script>
