<script setup>
import CheckBox from '@/components/CheckBox.vue'
import { ref } from 'vue'

const darkMode = ref(true)
</script>

<template>
  <main class="flex min-h-screen">
    <div class="settings-container">
      <div class="header">Settings</div>
      <div class="settings-form">
        <div class="settings-form-item">
          <check-box v-model:checked="darkMode" field-id="dark" label="Dark Mode" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
.settings-containter {
  @apply container mx-auto w-full;
}
.header {
  @apply mx-auto w-full p-8 text-start align-top text-4xl text-slate-800;
}
</style>
