<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Product Details</h1>

    <div v-if="isLoading" class="text-gray-500">Loading...</div>
    <div v-else-if="error" class="text-red-600">{{ error }}</div>
    <div v-else-if="product" class="bg-white p-6 rounded shadow">
      <img :src="product.thumbnail" alt="Product image" class="w-48 h-48 object-cover mb-4 rounded" />
      <h2 class="text-xl font-semibold mb-2">{{ product.title }}</h2>
      <p class="text-gray-700 mb-4">{{ product.description }}</p>
      <p><strong>Category:</strong> {{ product.category }}</p>
      <p><strong>Price:</strong> ${{ product.price }}</p>
      <p><strong>Stock:</strong> {{ product.stock }}</p>
      <p v-if="product.rating"><strong>Rating:</strong> {{ product.rating }}</p>
      <p v-if="product.discountPercentage"><strong>Discount:</strong> {{ product.discountPercentage }}%</p>

      <div class="mt-6 flex gap-4">
        <router-link to="/products" class="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">Back</router-link>
        <button @click="deleteProduct" class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const product = ref(null)
const isLoading = ref(true)
const error = ref(null)

async function fetchProduct() {
  try {
    const res = await fetch(`https://dummyjson.com/products/${route.params.id}`)
    if (!res.ok) throw new Error('Failed to fetch product')
    product.value = await res.json()
  } catch (err) {
    error.value = err.message
  } finally {
    isLoading.value = false
  }
}

async function deleteProduct() {
  if (!confirm('Are you sure you want to delete this product?')) return
  try {
    const res = await fetch(`https://dummyjson.com/products/${route.params.id}`, {
      method: 'DELETE',
    })
    if (!res.ok) throw new Error('Failed to delete product')
    alert('Product deleted successfully')
    router.push('/products')
  } catch (err) {
    error.value = err.message
  }
}

onMounted(fetchProduct)
</script>