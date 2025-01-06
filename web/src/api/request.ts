import axios from 'axios'
// import router from '@src/router/index'

// pending requests
const pendingRequests: { [key: string]: AbortController } = {}

const removePendingRequest = (url: string | undefined, abort = false): void => {
  // check if pendingRequests contains our request URL
  if (url && pendingRequests[url]) {
    // if we want to abort ongoing call, abort it
    if (abort) {
      pendingRequests[url]?.abort()
    }
    // remove the request URL from pending requests
    delete pendingRequests[url]
  }
}

export const request = axios.create({
  timeout: 5000
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    let token = sessionStorage.getItem('token')

    if (token) config.headers.token = token

    removePendingRequest(config.url, true)

    const abortController = new AbortController()
    config.signal = abortController.signal
    pendingRequests[config.url!] = abortController

    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 响应拦截器
request.interceptors.response.use(
  res => {
    removePendingRequest(URL.parse(res.request.responseURL)?.pathname)

    if (res.data.code !== 200) {
      // // 登录失效
      // if (res.data.code === 403) {
      //   router.push('/login')
      //   sessionStorage.removeItem('token')
      //   return
      // }

      return Promise.reject(res.data)
    } else {
      return res.data.data
    }
  },
  err => {
    return Promise.reject(err)
  }
)

export default request

export interface ResError {
  code: number
  message: string
  data: any
  ok: boolean
}
