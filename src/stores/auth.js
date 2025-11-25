// src/stores/auth.js
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    user: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    setAuth(token, user) {
      this.token = token
      this.user = user
      localStorage.setItem('auth', JSON.stringify({ token, user }))
    },
    logout() {
      this.token = null
      this.user = null
      localStorage.removeItem('auth')
    },
    restoreSession() {
      const raw = localStorage.getItem('auth')
      if (raw) {
        const { token, user } = JSON.parse(raw)
        this.token = token
        this.user = user
      }
    },
  },
})