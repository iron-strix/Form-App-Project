<script setup>
import { ref } from 'vue'
import useAPI from '@/composables/useAPI'

const { getFormResponse, getForms, forms } = useAPI()

const props = defineProps({
  formResponse: {
    type: Object,
    required: true,
    default: () => {
      return {
        createdAt: '2022-01-01',
        formResponseId: '123',
        ownerId: 'John_doe@example.com',
        parentFormId: '456',
        replies: [],
        updatedAt: '2022-01-01',
      }
    },
  },
})

getForms()

const computedName = ref('')

const formResponseResponse = await getFormResponse(props.formResponse.formResponseId)
const formResponse = ref(formResponseResponse)
computeName()
//console.log(forms.value[0].name)
//console.log(forms.value[props.formResponse.parentFormId])

function computeName() {
  forms.value.forEach((form) => {
    //console.log(form)
    if (form.formId === props.formResponse.parentFormId) {
      //console.log(form.name)
      computedName.value = form.name
    }
  })
}
</script>

<template>
  <div class="card">
    <RouterLink :to="`/viewResponse/${formResponse.formResponseId}`">
      <div class="card-text">
        <p>Reply to {{ computedName }} at {{ props.formResponse.createdAt }}</p>
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
