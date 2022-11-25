<template>
  <div class="card">
    Example Document
    <div class="card-document">
      <div class="card-document-title">Example Title</div>
      <div class="card-document-text">Example Text</div>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.card {
  @apply container mt-24 min-h-screen w-full flex-col bg-red-600;
  .card-document {
    @apply bg-green-700;
  }
  .card-document-title {
    @apply relative bg-green-600 p-8 text-center align-top text-2xl font-thin text-slate-800;
  }
}
</style>
