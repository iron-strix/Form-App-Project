import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'

const router = useRouter()
const route = useRoute()

const { auth, user, localUID, isAuthenticated } = useAuth()
const loading = ref(false)
const localUser = ref('')
const forms = ref([])

const localAuth = auth

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  auth: {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD,
  },
})

const getUser = async () => {
  loading.value = true
  localAuth.onAuthStateChanged(async (user) => {
    if (user) {
      // User logged in already or has just logged in.
      localUser.value = user.uid
      const { data } = await api.get(`/users/${localUser.value}`)
      //const { data } = await api.get(`/users/`)
      console.log(localUID)
      localUser.value = data
      loading.value = false
    } else {
      // User not logged in or has just logged out.
    }
  })
}

const getForms = async () => {
  const { data } = await api.get('/forms')
  forms.value = data
}

const getForm = async (id) => {
  const { data } = await api.get(`/forms/${id}`)
  return data
}

const putForm = async (id, body) => {
  console.log(body)
  const res = await api.put(`/forms/${id}`, body)
}

const createForm = async (body) => {
  const res = await api.post('/forms', body)
  return res.data.formId
}

const deleteForm = async (id) => {
  const res = await api.delete(`/forms/${id}`)
}

const useAPI = () => {
  return { loading, getUser, getForms, getForm, putForm, createForm, deleteForm, localUser, forms }
}

export default useAPI
