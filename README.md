# 🌲 Stavchanske.GIS

A modern web platform for visualizing, managing, and exploring forestry data of the Stavchanske forestry in Ukraine. Designed for forestry professionals, researchers, and conservation partners, it streamlines access to geospatial and tabular data on flora, fauna, and protected areas—supporting sustainable forest management and ecological research.

---

## 🌟 Key Features

- **Interactive Map Visualization**
  Explore forestry data on a dynamic map with clustering, filtering, and detailed popups for each forest plot.
- **Advanced Data Table**
  Browse, filter, and sort comprehensive forestry datasets in a responsive, customizable table.
- **Secure Admin Panel**
  Manage forestry records, plot coordinates, and related entities via an authenticated interface.
- **Rich Filtering & Search**
  Multi‑criteria search and filtering for both map and table views, enabling quick data discovery.
- **Modern UI/UX**
  Clean, accessible, and responsive design using MUI, Tailwind CSS, and custom components.

---

## 🧱 Technologies & Architecture

### 🖥️ Frontend

- **React 18** + **Vite** for fast, modular development
- **TypeScript** throughout for end‑to‑end type safety
- **React‑Leaflet** & **Leaflet** for geospatial visualization
- **React‑Admin** for the admin interface
- **@tanstack/react‑query** for efficient data fetching & caching
- **Zustand** for lightweight state management
- **Tailwind CSS** & **MUI** for styling and UI consistency

### 🗄️ Backend

- **NestJS** (TypeScript) for a robust, modular REST API
- **Prisma ORM** + **PostgreSQL** for type‑safe, scalable data modeling
- Endpoints for plants, coordinates, and forestry plots
- Secure CORS configuration and environment‑based settings

---

## 📂 Project Structure

- `/client` # React + Vite frontend (map, table, admin UI)
- `/server` # NestJS + Prisma backend API
- Modular code organization for scalability and maintainability

## Why It Matters

Stavchanske.GIS empowers forestry teams and partners to make data-driven decisions, monitor ecological changes, and collaborate on conservation efforts—all through a seamless, modern web interface.
