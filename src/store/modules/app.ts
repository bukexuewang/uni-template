import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    user: {} as AnyObject
  }),
  getters: {
    phone: state => state.user.phone
  },
  actions: {
    setUser(obj: AnyObject) {
      this.user = obj
    }
  }
})
