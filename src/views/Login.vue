<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const username = ref('')
const password = ref('')
const errorMessage = ref('')
const router = useRouter()
const auth = useAuthStore()

async function handleLogin() {
  errorMessage.value = ''

  // Mock login for emilys
  if (username.value === 'emilys' && password.value === '1234') {
    auth.setAuth('fake-token', { username: 'emilys', image: 'https://dummyjson.com/icon/emilys/128' })
    router.push('/dashboard')
    return
  }

  // Real DummyJSON login
  try {
    const res = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    })

    const data = await res.json()
    console.log(res.status, data)

    if (!res.ok) {
      errorMessage.value = data.message || 'Login failed. Please check your credentials.'
      return
    }

    auth.setAuth(data.token || data.accessToken, data)
    router.push('/dashboard')
  } catch (err) {
    errorMessage.value = 'Something went wrong. Try again.'
  }
}
</script>

<template>
  <div class="max-w-sm mx-auto mt-20 bg-white p-6 rounded shadow">
    <h1 class="text-xl font-bold mb-4">Login</h1>
    <form @submit.prevent="handleLogin" class="space-y-4">
      <input v-model="username" type="text" placeholder="Username"
             class="w-full border rounded px-3 py-2" />
      <input v-model="password" type="password" placeholder="Password"
             class="w-full border rounded px-3 py-2" />
      <button type="submit"
              class="w-full bg-[#000080] text-white py-2 rounded hover:bg-[#000070]">
        Login
      </button>
    </form>
    <p v-if="errorMessage" class="text-red-600 mt-4">{{ errorMessage }}</p>
  </div>
</template>