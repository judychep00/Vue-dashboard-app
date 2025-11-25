<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <aside class="w-64 bg-gray-800 text-white flex flex-col p-6">
      <h2 class="text-xl font-bold mb-6">Admin Panel</h2>
      <nav class="flex flex-col gap-4">
        <router-link to="/dashboard" class="hover:text-blue-400">Dashboard</router-link>
        <router-link to="/products" class="hover:text-blue-400">Products</router-link>
        <router-link to="/products/new" class="hover:text-blue-400">Add Product</router-link>
        <button @click="handleLogout" class="text-left hover:text-blue-400">Logout</button>
      </nav>
    </aside>

    <!-- Main content -->
    <div class="flex-1 flex flex-col">
      <header class="bg-white shadow p-4 flex justify-between items-center">
        <h1 class="text-xl font-bold">E‑Commerce Admin</h1>
        <div class="flex items-center gap-4">
          <span class="text-gray-600">Welcome, {{ auth.user?.username }}</span>
          <img :src="auth.user?.image || 'https://via.placeholder.com/40'" alt="User avatar"
               class="w-10 h-10 rounded-full border" />
        </div>
      </header>

      <main class="flex-1 p-6 bg-gray-100">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from './stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

function handleLogout() {
  auth.logout()
  router.push('/login')
}
</script>