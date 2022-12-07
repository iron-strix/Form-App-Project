<script setup>
import { ref } from 'vue'
import FormCard from '@/components/FormCard.vue'
import { useRouter, useRoute } from 'vue-router'
import useAPI from '@/composables/useAPI'

const router = useRouter()
const route = useRoute()

const { localUser, getUser, getForms, createForm, deleteForm, forms } = useAPI()
</script>
<template>
  <main class="flex min-h-screen items-center justify-center bg-gray-600 text-center">
    <div class="wrapper">
      <div>Hello World, this is FormList.vue</div>
    </div>
  </main>
</template>
