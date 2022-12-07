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
    <button @click="addRR">add</button>
    <div class="card-document">
      <div class="card-document-title">
        <input v-model="put_title" type="text" class="form-control" :placeholder="formRef.name" />
      </div>
      <div class="card-document-description">
        <input v-model="put_description" type="text" class="form-control" :placeholder="formRef.description" />
      </div>
      <div v-for="(question, index) in formRef.body" :key="index" :question="question" class="card-document-text">
        <input :id="question" v-model="question.value" type="text" class="form-control" :placeholder="question" />
        <p>{{ question }}</p>
        <button class="bg-red-500 px-4 py-2" @click="removeQuestion(index)">X</button>
      </div>
    </div>
    <button class="card-document-submit" :disabled="isLoading" @click="collectForm()">Submit</button>
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

  .card-document-description {
    @apply relative bg-green-600 p-2 text-center align-top text-2xl font-thin text-slate-800;

    & input {
      @apply w-full;
    }
  }
  .card-document-text {
    @apply relative bg-green-600 p-2 text-center align-top text-2xl font-thin text-slate-800;

    & input {
      @apply w-full;
    }
  }
  .card-document-submit {
    @apply bg-white focus:cursor-wait;
  }
}
</style>
