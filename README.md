
# Vue Admin Panel

A simple admin dashboard built with **Vue 3, Vite, Pinia, and Tailwind CSS**.  
It demonstrates authentication, protected routes, a dashboard with stats and charts, product management, and an add product form.

##  Features
- Authentication with Pinia store
- Route guards for protected pages
- Dashboard with stats and Chart.js visualization
- Products listing and Add Product form
- Sidebar navigation with logout

## Login Credentials
For testing, you can use either:
- Mock login:
  - **Username:** emilys  
  - **Password:** emilyspass
- DummyJSON API login:
  - **Username:** kminchelle  
  - **Password:** 0lelplR

## 🛠 Setup & Run
Clone the repository, install dependencies, and start the development server:

```bash
git clone https://github.com/judychep00/Vue-dashboard-app.git
cd Vue-dashboard-app
npm install
npm run dev

Project Structure
src/
  stores/auth.js      # Pinia store for authentication

  views/Login.vue     # Login page

  views/Dashboard.vue # Dashboard with stats + chart

  views/Products.vue  # Products listing

  views/AddProduct.vue# Add product form
  App.vue
Hosting

Deployed on GitHub Pages:

https://judychep00.github.io/Vue-dashboard-app/








