<script setup>
import { ref, render } from 'vue'
import FormCard from '@/components/FormCard.vue'
import { useRouter, useRoute } from 'vue-router'
import useAPI from '@/composables/useAPI'

const router = useRouter()
const route = useRoute()

const { localUser, getUser, getForms, createForm, deleteForm, forms } = useAPI()
getForms()
getUser()

const componentKey = ref(0)
const render_forms = ref([])

const forceRerender = () => {
  componentKey.value += 1
}

function removeForm(formId, index) {
  console.log(formId)
  deleteForm(formId)
  forms.value.splice(index, 1)
  forceRerender()
}

function respondForm() {
  // console.log('Repond form click!')
  router.push('/formList/')
}

async function newForm() {
  // console.log(localUser.value.userUUID)
  const body = {
    ownerId: localUser.value.userUUID,
    name: 'Place your title here!',
    description: 'Place your description here!',
    body: [
      {
        value: 'Example question one',
      },
      { value: 'Example question two' },
    ],
  }
  const res = createForm(body).then((value) => {
    // console.log(value)
    load(value)
  })

  async function load(path) {
    await new Promise((r) => setTimeout(r, 1000))
    // console.log(path)
    router.push(`/form/${path}`)
  }
}
async function computeForms() {
  await new Promise((r) => setTimeout(r, 500))

  const result = forms.value.filter((obj) => {
    return obj.ownerId === localUser.value.userUUID
  })
  render_forms.value = result
  console.log(render_forms)
}

computeForms()
</script>
<template>
  <main class="flex min-h-screen items-center justify-center">
    <div class="wrapper">
      <Suspense>
        <div class="grid w-auto content-center items-center justify-center bg-violet-600">
          <button class="new-form-button" @click="newForm()">Create New Form</button>
          <button class="respond-form-button" @click="respondForm()">Respond to a Form</button>
          <h1 v-if="localUser.email">{{ localUser.email }}'s Owned Forms</h1>
          <div class="sub-wrapper">
            <div v-for="(form, index) in render_forms" :key="form.ownerId" class="form-card" :form="form">
              <FormCard :key="componentKey" :form="form" />
              <button
                class="relative -top-24 left-40 -bottom-4 rounded-full bg-red-500 px-3 py-1 text-xs hover:bg-white"
                @click="removeForm(form.formId, index)"
              >
                DEL
              </button>
            </div>
          </div>
        </div>
        <template #fallback><div>Loading...</div></template>
      </Suspense>
    </div>
  </main>
</template>

<style scoped lang="postcss">
.form-card {
  @apply relative;
}
.new-form-button {
  @apply m-4 w-auto content-center rounded-md bg-gray-700 p-4 text-center text-white;
}

.respond-form-button {
  @apply m-4 w-auto content-center rounded-md bg-gray-700 p-4 text-center text-white;
}
.wrapper {
  @apply container mx-auto w-full;

  & h1 {
    @apply p-8 text-center align-top text-4xl font-thin text-slate-800;
  }
}
.sub-wrapper {
  @apply grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
}
</style>
