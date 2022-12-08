<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import useAPI from '@/composables/useAPI'

const router = useRouter()
const route = useRoute()

const { getForm, putForm } = useAPI()

const formResponse = await getForm(route.params.id)
const formRef = ref(formResponse)
const put_title = ref(formRef.value.name)
const put_description = ref(formRef.value.description)
const put_questions = ref([])
const isLoading = ref(false)

function fillQuestions() {
  formRef.value.body.forEach((v) => {
    console.log(v)
    put_questions.value.push(v)
  })
}

const collectForm = () => {
  isLoading.value = true
  fillQuestions()
  console.log(put_title.value)
  console.log('Put questions:', put_questions)
  const putData = {
    name: put_title.value,
    description: put_description.value,
    body: put_questions.value,
  }
  putForm(route.params.id, putData).then(reload(), console.log('promise didnt go'))
}

async function reload() {
  await new Promise((r) => setTimeout(r, 500))
  router.go(`/form/${route.params.id}`)
}

const removeQuestion = (questionId) => formRef.value.body.splice(questionId, 1)
const addRR = () => formRef.value.body.push({ value: 'NewData' })
</script>
<template>
  <div class="card">
    <div class="card-document">
      <div class="card-document-title">
        <label>Title:</label>
        <input v-model="put_title" type="text" class="form-control" :placeholder="formRef.name" />
      </div>
      <div class="card-document-description">
        <label>Description:</label>
        <input v-model="put_description" type="text" class="form-control" :placeholder="formRef.description" />
      </div>
      <div v-for="(question, index) in formRef.body" :key="index" :question="question" class="card-document-text">
        <label>Row {{ index + 1 }}:</label>
        <input :id="question" v-model="question.value" type="text" class="form-control" :placeholder="question" />
        <button class="card-document-text-remove" @click="removeQuestion(index)">X</button>
      </div>
      <button class="card-document-submit" :disabled="isLoading" @click="collectForm()">Save Changes</button>
      <button class="card-document-add" @click="addRR">Add a Row</button>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.card {
  @apply container mt-12 min-h-screen w-full flex-col;
  .card-document {
    @apply items-center justify-start rounded-lg bg-gray-700/75;

    & label {
      @apply py-2 px-4 text-white;
    }
  }
  .card-document-title {
    @apply relative  p-4 text-center align-top text-2xl font-thin text-slate-800;
    & input {
      @apply rounded-lg text-2xl;
    }
  }

  .card-document-description {
    @apply relative p-2 text-center align-top text-2xl font-thin text-slate-800;

    & input {
      @apply w-10/12 rounded-lg text-2xl;
    }
  }
  .card-document-text {
    @apply relative p-2 text-center align-top text-2xl font-thin text-slate-800;

    & input {
      @apply w-4/5 rounded-md;
    }
  }
  .card-document-submit {
    @apply m-2 rounded-md bg-green-500 px-4 py-2 transition duration-100 hover:scale-105 hover:bg-emerald-600 focus:cursor-wait;
  }

  .card-document-add {
    @apply m-2 rounded-md bg-amber-400 px-4 py-2 transition duration-100 hover:scale-105 hover:bg-amber-500;
  }

  .card-document-text-remove {
    @apply relative -top-1 left-2 rounded-lg bg-red-500 px-2 py-2 text-xs font-bold transition duration-100 hover:scale-105 hover:bg-yellow-400;
  }
}
</style>
