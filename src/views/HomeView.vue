<script setup lang="ts">
import { kobbleClient } from '@/kobble'
import Logo from '@/components/Logo.vue'
import Card from '@/components/Card.vue'
import { useKobbleStore } from '@/stores/kobble'
import { ref } from 'vue'

const actionResult = ref<null | string | object>('Not executed yet')

/**
 * The following functions are here to showcase
 * how to use the Kobble SDK in your application.
 */
const login = () => {
  kobbleClient.loginWithRedirect()
}

const refreshToken = () => {
  kobbleClient.refreshAccessToken()
}

const getAccessToken = async () => {
  const token = await kobbleClient.getAccessToken()
  actionResult.value = token
}

const getIdToken = async () => {
  const token = await kobbleClient.getIdToken()
  actionResult.value = token
}

const logout = () => {
  kobbleClient.logout()
}

const getUser = async () => {
  const user = await kobbleClient.getUser()
  actionResult.value = user
}

/**
 * Here we use a very basic store to keep track of the
 * user's authentication user's profile everywhere in the app.
 *
 * See src/kobble/index.ts, where we fill the store when user is updated.
 */
const store = useKobbleStore()
</script>

<template>
  <div class="flex flex-col justify-between items-center w-full">
    <div
      class="flex gap-5 flex-col md:flex-row justify-between items-center max-w-full w-[1080px] pt-20 px-10"
    >
      <div class="rounded-full border border-[#3b3b3b] bg-[#1f1f1f] text-[#fbfbfb] py-3 px-5">
        Get started by editing <code class="font-semibold">src/views/HomeView.vue</code>
      </div>
      <div>
        <Logo />
      </div>
    </div>
    <main class="py-20">
      <span>Available actions:</span>
      <div class="flex items-center gap-2 justify-between mt-5">
        <div v-if="!store.isAuthenticated" class="flex items-center gap-2">
          <button
            @click="login"
            class="rounded-full border border-[#236456] bg-[#112220] text-[#33C6AB] py-1 px-3"
          >
            Login
          </button>
        </div>
        <div v-if="store.isAuthenticated" class="flex items-center gap-2">
          <button
            @click="logout"
            class="rounded-full border border-[#236456] bg-[#112220] text-[#33C6AB] py-1 px-3"
          >
            Logout
          </button>
          <button
            @click="getIdToken"
            class="rounded-full border border-[#236456] bg-[#112220] text-[#33C6AB] py-1 px-3"
          >
            Get Id Token
          </button>
          <button
            @click="getUser"
            class="rounded-full border border-[#236456] bg-[#112220] text-[#33C6AB] py-1 px-3"
          >
            Get User
          </button>

          <button
            @click="getAccessToken"
            class="rounded-full border border-[#236456] bg-[#112220] text-[#33C6AB] py-1 px-3"
          >
            Get Access Token
          </button>
        </div>
      </div>

      <Card class="overflow-x-scroll w-[500px]">
        <span class="font-semibold">Action result</span>
        <pre>{{ JSON.stringify(actionResult) }}</pre>
      </Card>

      <Card class="overflow-x-scroll w-[500px]">
        <span class="font-semibold">User profile</span>
        <pre v-if="store.user">{{ store.user }}</pre>
        <pre v-else>Not logged in</pre>
      </Card>
    </main>
  </div>
</template>
