<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import useAPI from '@/composables/useAPI'

const router = useRouter()
const route = useRoute()

const { getForm, createResponse, localUser, getUser } = useAPI()

getUser()
const formResponse = await getForm(route.params.id)
const formRef = ref(formResponse)
const put_title = ref(formRef.value.name)
const put_description = ref(formRef.value.description)
const put_responses = ref([])
const isLoading = ref(false)

const collectResponses = () => {
  isLoading.value = true
  // fillResponses()
  // console.log(put_title.value)
  // console.log('Put responses:', put_responses)
  const putData = {
    ownerId: localUser.value.userUUID,
    parentFormId: formRef.value.formId,
    replies: put_responses.value,
  }
  console.log(putData)
  createResponse(route.params.id, putData).then(reload(), console.log('promise didnt go'))
}

async function reload() {
  await new Promise((r) => setTimeout(r, 500))
  router.push('/submitted/')
}
</script>
<template>
  <div class="card">
    <div class="card-document">
      <div class="card-document-title">
        <div class="form-control-title" :placeholder="formRef.name">{{ put_title }}</div>
      </div>
      <div class="card-document-description">
        <div class="form-control-description" :placeholder="formRef.description">{{ put_description }}</div>
      </div>
      <div v-for="(question, index) in formRef.body" :key="index" :question="question" class="card-document-text">
        <div :id="question.value" class="form-control-question" :placeholder="question">{{ question.value }}</div>
        <div class="font-bold text-gray-400">
          <p v-show="showByIndex == index" class="inline">Response -></p>
          <input
            :id="index"
            v-model="put_responses[index]"
            class="p-4 font-light italic text-black"
            placeholder="Your reponse here!"
            @mouseover="showByIndex = index"
            @mouseleave="showByIndex = null"
          />
        </div>
      </div>
      <button class="card-document-submit" :disabled="isLoading" @click="collectResponses()">Send Form Response</button>
    </div>
  </div>
</template>
<style scoped lang="postcss">
.card {
  @apply container mt-12 min-h-screen w-full flex-col;
  .card-document {
    @apply items-center rounded-lg bg-gray-700/75;

    & label {
      @apply py-2 px-4 text-white;
    }
  }
  .card-document-title {
    @apply relative rounded-lg bg-gray-700 p-4 text-center align-top text-4xl font-thin text-slate-800;
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

  .form-control {
    @apply bg-gray-600 text-white;

    &-title {
      @apply font-bold text-white;
    }

    &-description {
      @apply text-xl italic text-white;
    }

    &-question {
      @apply text-left font-semibold text-white;
    }
  }
}
</style>
