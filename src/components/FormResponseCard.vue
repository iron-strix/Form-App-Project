<script setup>
import { ref } from 'vue'
import useAPI from '@/composables/useAPI'

const { getForm, getUsers } = useAPI()

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
const users = await getUsers()
const computedOwner = ref('')

function computeOwner() {
  users.forEach((user) => {
    console.log(user)
    console.log(user['userUUID'])
    if (user['userUUID'] === props.form.ownerId) {
      //console.log(form.name)
      computedOwner.value = user['email']
    }
  })
}

computeOwner()
</script>

<template>
  <div class="card">
    <RouterLink :to="`/formResponse/${form.formId}`">
      <div class="card-text">
        <p>{{ props.form.name }} owned by {{ computedOwner }}</p>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped lang="postcss">
.card {
  @apply m-4 rounded-md bg-zinc-600 p-4 shadow-md transition duration-100 hover:scale-105 hover:bg-zinc-500 hover:font-bold hover:shadow-2xl hover:shadow-zinc-800;

  .card-text {
    @apply flex flex-col pt-2 text-center font-sans text-gray-200;
  }
}
</style>
