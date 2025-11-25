<template>
  <div class="max-w-lg mx-auto bg-white p-6 rounded shadow">
    <h1 class="text-2xl font-bold mb-4">Add New Product</h1>
    <form @submit.prevent="submitProduct" class="space-y-4">
      <input v-model="name" type="text" placeholder="Product Name"
             class="w-full border rounded px-3 py-2" />
      <input v-model="category" type="text" placeholder="Category"
             class="w-full border rounded px-3 py-2" />
      <input v-model="price" type="number" placeholder="Price"
             class="w-full border rounded px-3 py-2" />
      <input v-model="stock" type="number" placeholder="Stock"
             class="w-full border rounded px-3 py-2" />
      <button type="submit"
              class="w-full bg-[#000080] text-white py-2 rounded hover:bg-[#000070]">
        Save Product
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const category = ref('')
const price = ref('')
const stock = ref('')

function submitProduct() {
  console.log('New product:', { name: name.value, category: category.value, price: price.value, stock: stock.value })
  alert('Product added successfully!')
}
</script>