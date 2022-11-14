<template>
  <div class="card">
    <div class="card-text"><p>Example Form Card</p></div>
  </div>
</template>

<style scoped lang="postcss">
.card {
  @apply rounded-md bg-zinc-500 p-4 shadow-md transition duration-300 hover:scale-105 hover:bg-zinc-600 hover:shadow-2xl hover:shadow-zinc-900;
  img {
    @apply m-2 mx-auto rounded-full object-contain shadow-lg shadow-zinc-600 ring-4 ring-zinc-400;
  }

  .card-text {
    @apply flex flex-col pt-2 text-center font-sans text-slate-800;
  }
}
</style>
