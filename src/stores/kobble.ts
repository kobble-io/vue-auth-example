import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@kobbleio/auth-spa-js'

export const useKobbleStore = defineStore('kobble', () => {
  const user = ref<User | null | string>('Hello')
  const isAuthenticated = computed(() => !!user.value)

  function setUser(value: User | null) {
    user.value = value
  }

  return { setUser, isAuthenticated, user }
})
