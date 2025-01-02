<template>
  <div class="login-view">
    <div class="login-box">
      <h1>{{ t('login.title') }}</h1>

      <vc-form ref="form" :model="formData" labelWidth="0%">
        <vc-form-item prop="name">
          <vc-input v-model="formData.name" placeholder="用户" />
        </vc-form-item>
        <vc-form-item prop="name">
          <vc-input v-model="formData.name" placeholder="密码" />
        </vc-form-item>
        <vc-form-item>
          <vc-button theme="primary" @click="onSubmit">登录</vc-button>
        </vc-form-item>
      </vc-form>
    </div>

    <!-- <vc-button type="primary" @click="onClick">Login</vc-button>
    <vc-button type="primary" @click="onToggleLang">切换语言</vc-button>

    <RouterLink to="/home">Home</RouterLink> -->
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
const formData = ref({
  name: '',
  passwd: ''
})

const onClick = () => {
  console.log('login')
  request.get('/api/test/hello').then(res => {
    console.log(res)
  })
}

const onSubmit = () => {
  console.log('login')
}
</script>

<style scoped>
.login-view {
  height: 100vh;
  align-content: center;

  h1 {
    margin: 0 0 20px;
    text-align: center;
  }

  .login-box {
    width: 80vw;
    margin: 0 auto;

    :deep(.vc-form-item__label) {
      display: none;
    }

    .vc-button {
      width: 100%;
    }
  }
}
</style>
