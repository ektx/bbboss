<template>
  <div class="login-view">
    <div class="login-box">
      <h1>{{ t('login.title') }}</h1>

      <vc-form ref="form" :model="formData" labelWidth="0%">
        <vc-form-item prop="name">
          <vc-input v-model="formData.name" placeholder="用户" />
        </vc-form-item>
        <vc-form-item prop="name">
          <vc-input
            type="password"
            v-model="formData.passwd"
            placeholder="密码"
          />
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
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import request from '@src/api/request'
import { login } from '@src/api/'
import { useI18n } from 'vue-i18n'
import type { MessageSchema, Language } from '@src/i18n/schema'

const { t, locale } = useI18n<{ message: MessageSchema }, Language>({})

const onToggleLang = () => {
  locale.value = locale.value === 'en' ? 'cn' : 'en'
}
const formData = reactive({
  name: 'admin',
  passwd: 'admin'
})
const router = useRouter()

const onClick = () => {
  console.log('login')
  request.get('/api/test/hello').then(res => {
    console.log(res)
  })
}

const onSubmit = () => {
  console.log('login', formData)
  const voices = window.speechSynthesis.getVoices()
  console.warn(voices)
  const utterance = new SpeechSynthesisUtterance('你好呀，我是婷婷')
  // @ts-ignore
  // utterance.voice = voices.find((voice) => voice.name === "Microsoft Yunxi Online (Natural) - Chinese (Mainland)");
  utterance.voice = voices.find(
    voice =>
      voice.name === 'Microsoft HiuMaan Online (Natural) - Chinese (Hong Kong)'
  )
  utterance.rate = 1.2 // 语速稍快
  utterance.pitch = 1 // 默认音调
  utterance.volume = 0.8 // 音量稍低
  window.speechSynthesis.speak(utterance)

  login(formData)
    .then((res: any) => {
      sessionStorage.setItem('token', res.token)
      router.push('/')
    })
    .catch(err => {
      console.error(err)
    })
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
