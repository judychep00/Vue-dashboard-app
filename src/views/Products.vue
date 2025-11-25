<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Products</h1>

    <!-- Search bar -->
    <div class="flex justify-between items-center mb-4">
      <input
        v-model="search"
        type="text"
        placeholder="Search products..."
        class="border p-2 rounded w-1/2"
      />
      <button
        @click="fetchProducts"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Refresh
      </button>
    </div>

    <!-- Products table -->
    <table class="min-w-full bg-white border rounded shadow">
      <thead>
        <tr class="bg-gray-100 text-left">
          <th class="p-2">Thumbnail</th>
          <th class="p-2">Title</th>
          <th class="p-2">Category</th>
          <th class="p-2">Price</th>
          <th class="p-2">Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in filteredProducts"
          :key="product.id"
          class="border-t hover:bg-gray-50"
        >
          <td class="p-2">
            <img
              :src="product.thumbnail"
              alt="thumbnail"
              class="w-12 h-12 rounded-full object-cover"
            />
          </td>
          <td class="p-2">
            <div class="font-semibold">{{ product.title }}</div>
            <div class="text-gray-500 text-sm">
              {{ product.description.slice(0, 80) }}...
            </div>
          </td>
          <td class="p-2">{{ product.category }}</td>
          <td class="p-2">${{ product.price }}</td>
          <td class="p-2">{{ product.stock }}</td>
        </tr>
      </tbody>
    </table>

    <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useAuthStore } from '../stores/auth'

const products = ref([])
const search = ref('')
const error = ref('')
const auth = useAuthStore()

async function fetchProducts() {
  try {
    const res = await fetch('https://dummyjson.com/products', {
      headers: {
        Authorization: `Bearer ${auth.token}`, // ✅ use token from login
      },
    })
    const data = await res.json()
    products.value = data.products || []
    error.value = ''
  } catch (err) {
    error.value = 'Failed to load products'
  }
}

const filteredProducts = computed(() =>
  products.value.filter((p) =>
    p.title.toLowerCase().includes(search.value.toLowerCase())
  )
)

onMounted(fetchProducts)
</script>