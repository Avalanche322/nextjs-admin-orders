
# 🧾 Orders Dashboard with Detail View

An admin dashboard built with **Next.js App Router**, TypeScript, and MUI, that fetches and displays customer orders from the [Fake Store API](https://fakestoreapi.com/). The application allows users to view order details, filter, and sort orders dynamically using **Server-Side Rendering (SSR)**.

---

## 🚀 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser:**
   Visit [http://localhost:3000](http://localhost:3000)

5. **Production build:**
   ```bash
   npm run build
   npm start
   ```

6. **Deploy:**
   - Easily deployable via [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/) using GitHub integration.

---

## 🧩 Project Overview

This project is an admin-style **Orders Dashboard** built using **Next.js App Router**, designed to display a list of customer orders with the ability to view detailed information, filter, and sort data. It uses **Server-Side Rendering (SSR)** to fetch and process dynamic data on every request, ensuring the UI reflects up-to-date information.

### 🏗 Architecture

- File-based routing via **App Router**:
   - `app/page.tsx`: Orders list with server-side filtering and sorting
   - `app/orders/[id]/page.tsx`: Order detail page (SSR)
   - `app/orders/loading.tsx`: Loading indicator per route
   - `app/orders/error.tsx`: Error boundary fallback
- Data layer is abstracted in `lib/api.ts` for reusability and clarity.
- Shared layout and components follow modular and composable structure.

### 📡 Data Source

- **Fake Store API**:
   - `/carts`: Returns orders (cart objects)
   - `/products/:id`: Used to fetch price and title of each product in the order
- Prices are dynamically fetched and multiplied by quantity to compute **total price per order** on the server.

### 🧰 Technologies Used

- **Next.js 14** with **App Router**
- **TypeScript**
- **MUI (Material UI)** for responsive UI
- **Server Components** and `fetch(..., { cache: "no-store" })` for SSR
- **Dynamic route handling** with `notFound()`, `loading.tsx`, `error.tsx`

### 🔍 Features

- Responsive table layout for listing orders
- Filter by Order ID or User ID (via query string)
- Detailed product view with quantity and calculated prices
- Server-rendered data for SEO and performance
- Error handling and loading states included

---

## ✏️ Author Notes

This project demonstrates how to build a feature-complete admin dashboard with dynamic data using SSR in Next.js. The architectural focus was on simplicity, modularity, and scalability. MUI was chosen for its responsive components and ease of integration. Query string filtering and sorting were implemented entirely on the server, making the application both SEO-friendly and performant.
