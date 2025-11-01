# Sviggi - Food Delivery App

This project is a full-stack web application inspired by the popular food delivery service, Swiggy. It allows users to browse restaurants, view menus, and discover different cuisines.

---

## Features

*   **Browse Restaurants:** View a dynamic grid of available restaurants.
*   **Discover Cuisines:** Explore various food options sorted by cuisine.
*   **Restaurant Menus:** Click on a restaurant to see its detailed menu.
*   **Shimmer UI:** A loading animation provides a better user experience while data is being fetched.
*   **Responsive Design:** Built with Tailwind CSS to ensure a seamless experience on both desktop and mobile devices.

---

## Technologies Used

### Frontend
*   **React**
*   **TypeScript**
*   **Vite**
*   **React Router DOM**
*   **Tailwind CSS**

### Backend
*   **Node.js** A JavaScript runtime built on Chrome's V8 JavaScript engine.
*   **Express.js:** A minimal and flexible Node.js web application framework.
*   **CORS:** A Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or newer)
*   [npm](https://www.npmjs.com/)

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd Sviggi
    ```

2.  **Install dependencies for both frontend and backend:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    The `dev` script conveniently starts both the backend server and the frontend Vite server in parallel.
    ```bash
    npm run dev
    ```
    This will:
    *   Start the backend Express server.
    *   Start the frontend Vite development server and automatically open it in your browser at `http://localhost:5173` (or the next available port).

---

## Available Scripts

*   `npm run dev`: Starts both backend and frontend development servers.
*   `npm run build`: Builds the frontend application for production.
*   `npm run preview`: Previews the production build locally.
*   `npm run clean`: Removes the `dist` directory.

---

## Project Structure

```
Sviggi/
├── backend/            # Node.js/Express backend server
│   └── server.js
├── public/             # Static assets for Vite
├── src/                # Frontend source code (React + TypeScript)
│   ├── components/     # Reusable React components
│   ├── styles/         # Global and Tailwind CSS styles
│   └── utils/          # Custom hooks, constants, and utilities
├── package.json        # Project dependencies and scripts
└── vite.config.ts      # Vite configuration
```
