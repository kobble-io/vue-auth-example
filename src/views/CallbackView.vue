<script lang="ts">
import { kobbleClient } from '../kobble'
import { ref } from 'vue'
import Card from '@/components/Card.vue'

export default {
  components: { Card },
  setup() {
    const error = ref<string | null>(null)
    return {
      error
    }
  },

  async mounted() {
    try {
      await kobbleClient.handleRedirectCallback()
      this.$router.replace({ name: 'home' })
    } catch (e: any) {
      this.error = e.message
    }
  }
}
</script>

<template>
  <div class="h-screen flex items-center justify-center">
    <h1 v-if="!error" class="text-xl animate-pulse">Authenticating...</h1>
    <div v-else class="">
      <Card class="max-w-lg">
        <p class="text-md mb-5">
          An error occurred while authenticating. This is likely because of a misconfiguration of
          the SDK.
        </p>
        <p class="text-red-500">Error Code: {{ error }}</p>
      </Card>
    </div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
