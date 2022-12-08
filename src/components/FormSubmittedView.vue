<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import useAPI from '@/composables/useAPI'

//const router = useRouter()
const route = useRoute()

const { getFormResponses, getFormResponse, getForm } = useAPI()

const formResponse = await getFormResponse(route.params.id)
const formRef = ref(formResponse)
const form = await getForm(formRef.value.parentFormId)

//console.log(form)
//console.log('formRef value -- ', formRef.value)
//console.log(formRef.value['replies'][0])

const put_title = ref(form.name)
const put_description = ref(form.description)
const responses = ref(formRef.value['replies'])
//const isLoading = ref(false)

getFormResponses()
//getUser()

//const put_title = ref()
//const put_description = ref(formRef.value.description)
//const put_responses = ref([])
//const isLoading = ref(false)
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
      <div v-for="(question, index) in form.body" :key="index" :question="question" class="card-document-text">
        <div :id="question.value" class="form-control-question" :placeholder="question">
          {{ question.value }}
        </div>
        <div :id="index" class="form-control-reply">-> {{ responses[index] }}</div>
      </div>
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
    @apply m-0;

    &-title {
      @apply font-bold text-white;
    }

    &-description {
      @apply text-xl italic text-white;
    }

    &-question {
      @apply text-left font-semibold text-white;
    }

    &-reply {
      @apply rounded-lg bg-gray-600/50 pl-8 text-left text-lg italic text-gray-400;
    }
  }
}
</style>
