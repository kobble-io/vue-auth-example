import { createKobbleClient } from '@kobbleio/auth-spa-js'
import { useKobbleStore } from '@/stores/kobble'

export const kobbleClient = createKobbleClient({
  domain: import.meta.env.VITE_KOBBLE_DOMAIN,
  clientId: import.meta.env.VITE_KOBBLE_CLIENT_ID,
  redirectUri: import.meta.env.VITE_KOBBLE_REDIRECT_URI
})

/**
 * This callback is triggered everytime the user object changes:
 * - on login
 * - on logout
 * - on access token refreshed
 */
kobbleClient.onAuthStateChanged((data) => {
  const store = useKobbleStore()
  store.setUser(data.user)
})
