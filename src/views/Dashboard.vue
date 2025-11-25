<template>
  <div class="p-6">
    <!-- Page header -->
    <h1 class="text-2xl font-bold mb-1">Dashboard</h1>
    <p class="text-gray-600 mb-6">Manage your inventory and view product performance.</p>

    <!-- Add Product button -->
    <router-link
      to="/products/new"
      class="inline-block bg-[#000080] text-white px-4 py-2 rounded hover:bg-[#000070] mb-6"
    >
      + Add New Product
    </router-link>

    <!-- Stats cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="bg-white p-4 rounded shadow border-l-4 border-blue-500">
        <h2 class="text-lg font-semibold mb-2">Total Products</h2>
        <p class="text-3xl font-bold text-blue-600">25</p>
      </div>

      <div class="bg-white p-4 rounded shadow border-l-4 border-green-500">
        <h2 class="text-lg font-semibold mb-2">Orders Today</h2>
        <p class="text-3xl font-bold text-green-600">8</p>
      </div>

      <div class="bg-white p-4 rounded shadow border-l-4 border-yellow-500">
        <h2 class="text-lg font-semibold mb-2">Low Stock Items</h2>
        <p class="text-3xl font-bold text-yellow-600">3</p>
      </div>

      <div class="bg-white p-4 rounded shadow border-l-4 border-red-500">
        <h2 class="text-lg font-semibold mb-2">Out of Stock</h2>
        <p class="text-3xl font-bold text-red-600">1</p>
      </div>
    </div>

    <!-- Top products table -->
    <div class="bg-white p-6 rounded shadow mb-8">
      <h2 class="text-xl font-semibold mb-4">Top Products</h2>
      <table class="min-w-full text-sm">
        <thead>
          <tr class="bg-gray-100 text-left">
            <th class="p-2">Product</th>
            <th class="p-2">Category</th>
            <th class="p-2">Price</th>
            <th class="p-2">Stock</th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-t hover:bg-gray-50">
            <td class="p-2">Wireless Headphones</td>
            <td class="p-2">Electronics</td>
            <td class="p-2">$199.99</td>
            <td class="p-2">120</td>
          </tr>
          <tr class="border-t hover:bg-gray-50">
            <td class="p-2">Smartwatch Pro</td>
            <td class="p-2">Electronics</td>
            <td class="p-2">$249.00</td>
            <td class="p-2">15</td>
          </tr>
          <tr class="border-t hover:bg-gray-50">
            <td class="p-2">Organic Green Tea</td>
            <td class="p-2">Groceries</td>
            <td class="p-2">$24.50</td>
            <td class="p-2">0</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Recent activity -->
    <div class="bg-white p-6 rounded shadow mb-8">
      <h2 class="text-xl font-semibold mb-4">Recent Activity</h2>
      <ul class="space-y-2 text-gray-700">
        <li>✅ New product "Wireless Headphones" added</li>
        <li>📦 Order #1023 shipped</li>
        <li>⚠️ Stock low for "Smartwatch Pro"</li>
      </ul>
    </div>

    <!-- Sales Overview chart -->
    <div class="bg-white p-6 rounded shadow mt-8">
      <h2 class="text-xl font-semibold mb-4">Sales Overview</h2>
      <canvas id="salesChart"></canvas>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Chart } from 'chart.js/auto'

onMounted(() => {
  const ctx = document.getElementById('salesChart')
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Sales ($)',
        data: [1200, 1900, 3000, 2500, 3200],
        borderColor: '#000080',
        backgroundColor: 'rgba(0, 0, 128, 0.2)',
        fill: true,
      }]
    }
  })
})
</script>