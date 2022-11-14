<template>
  <nav>
    <RouterLink to="/">Login</RouterLink>
    <RouterLink to="/workspace">Workspace</RouterLink>
    <RouterLink to="/submitted">Submitted</RouterLink>
    <RouterLink to="/form">Edit Form</RouterLink>
    <RouterLink to="/settings">Settings</RouterLink>
    <RouterLink to="/admin">Admin Panel</RouterLink>
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
