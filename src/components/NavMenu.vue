<script setup></script>

<template>
  <nav>
    <RouterLink to="/workspace"><font-awesome-icon icon="fa-solid fa-house" /></RouterLink>
    <RouterLink to="/submitted"><font-awesome-icon icon="fa-solid fa-square-check" /></RouterLink>
    <RouterLink to="/settings"><font-awesome-icon icon="fa-solid fa-bars" /></RouterLink>
    <RouterLink to="/admin"><font-awesome-icon icon="fa-solid fa-screwdriver-wrench" /></RouterLink>
    <RouterLink to="/"><font-awesome-icon icon="fa-solid fa-arrow-right-to-bracket" /></RouterLink>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-4;

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
