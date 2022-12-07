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
        <div type="text" class="form-control" :placeholder="formRef.name">{{ put_title }}</div>
      </div>
      <div class="card-document-description">
        <div type="text" class="form-control" :placeholder="formRef.description">{{ put_description }}</div>
      </div>
      <div v-for="(question, index) in formRef.body" :key="index" :question="question" class="card-document-text">
        <div :id="question.value" type="text" class="form-control" :placeholder="question">{{ question.value }}</div>
        <input :id="index" v-model="put_responses[index]" />
      </div>
    </div>
    <button class="card-document-submit" :disabled="isLoading" @click="collectResponses()">Submit</button>
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
