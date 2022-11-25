<script setup>
import AppDropdown from '@/components/AppDropdown.vue'
import AppDropdownContent from '@/components/AppDropdownContent.vue'
import AppDropdownItem from '@/components/AppDropdownItem.vue'
</script>

<template>
  <main class="flex min-h-screen">
    <div class="admin-container">
      <div class="header">Admin Panel</div>
      <div class="admin-form">
        <AppDropdown>
          <template #toggler>
            <button>Example Dropdown</button>
          </template>
          <AppDropdownContent>
            <AppDropdownItem>Action 1</AppDropdownItem>
            <AppDropdownItem>Action 2</AppDropdownItem>
            <AppDropdownItem>Action 3</AppDropdownItem>
          </AppDropdownContent>
        </AppDropdown>
      </div>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
.admin-containter {
  @apply container mx-auto w-full;
}
.header {
  @apply mx-auto w-full p-8 text-start align-top text-4xl text-slate-800;
}

.admin-form {
  @apply ml-8;
  &-item {
    @apply items-center justify-center;
    & label {
      @apply flex;
    }
  }
}
</style>
