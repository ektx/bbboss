import { defineStore } from 'pinia'

interface UserInfo {}

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    userInfo: {} as UserInfo
  }),
  actions: {
    setUserInfo(userInfo: UserInfo) {
      this.userInfo = userInfo
    }
  }
})
