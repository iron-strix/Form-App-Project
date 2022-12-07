<script setup>
import { ref } from 'vue'
import useAPI from '@/composables/useAPI'

const { getForm } = useAPI()

const props = defineProps({
  form: {
    type: Object,
    required: true,
    default: () => {
      return {
        createdAt: '2022-01-01',
        formId: '123',
        ownerId: 'John_doe@example.com',
        name: 'Form Name',
        body: {},
        updatedAt: '2022-01-01',
      }
    },
  },
})

const formResponse = await getForm(props.form.formId)
const form = ref(formResponse)
</script>

<template>
  <div class="card">
    <RouterLink :to="`/form/${form.formId}`">
      <div class="card-text">
        <p>{{ props.form.name }}</p>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped lang="postcss">
.card {
  @apply m-4 rounded-md bg-zinc-500 p-4 shadow-md transition duration-300 hover:scale-105 hover:bg-zinc-600 hover:shadow-2xl hover:shadow-zinc-900;

  .card-text {
    @apply flex flex-col pt-2 text-center font-sans text-slate-800;
  }
}
</style>
