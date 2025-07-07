# Stavchanske.GIS

A modern web platform for visualizing, managing, and exploring forestry data of the Stavchanske forestry in Ukraine. Designed for forestry professionals, researchers, and conservation partners, it streamlines access to geospatial and tabular data on flora, fauna, and protected areas, supporting sustainable forest management and ecological research.

## Key Features

- **Interactive Map Visualization**
  Explore forestry data on an interactive map with clustering, filtering, and detailed popups for each forest plot.

- **Advanced Data Table**
  Browse, filter, and sort comprehensive forestry datasets in a responsive, customizable table.

- **Admin Panel**
  Secure admin interface for managing forestry records, coordinates, and related entities, with authentication.

- **Rich Filtering & Search**
  Powerful search and multi-criteria filtering for both map and table views, enabling quick data discovery.

- **Modern UI/UX**
  Clean, accessible, and responsive design using MUI, Tailwind CSS, and custom UI components.

## Technologies & Architecture

- **Frontend**
  - **React 18** with **Vite** for fast, modular development
  - **TypeScript** throughout for type safety
  - **React-Leaflet** and **Leaflet** for geospatial visualization
  - **React-Admin** for the admin interface
  - **@tanstack/react-query** for efficient data fetching and caching
  - **Tailwind CSS** and **MUI** for styling and UI consistency
  - **Zustand** for lightweight state management

- **Backend**
  - **NestJS** (TypeScript) for a robust, modular API
  - **Prisma ORM** with **PostgreSQL** for type-safe, scalable data access
  - RESTful endpoints for plants, coordinates, and forestry plots
  - Secure CORS configuration and environment-based settings

- **Database Schema**
  - Models for forestry plots, coordinates, and plant species
  - Relational structure optimized for geospatial queries and reporting

- **Project Structure**
  - `/client`: Frontend app (React, Vite, Tailwind, MUI, React-Admin)
  - `/server`: Backend API (NestJS, Prisma, PostgreSQL)
  - Modular code organization for scalability and maintainability

## Why It Matters

Stavchanske.GIS empowers forestry teams and partners to make data-driven decisions, monitor ecological changes, and collaborate on conservation efforts—all through a seamless, modern web interface.
