# 🎬 Movie Explorer

A responsive movie and TV show explorer built with **React, TypeScript, Tailwind CSS, and DaisyUI**. The application uses the **TVMaze API** to browse and search for movies and TV shows.

## 🌐 Live Demo

https://dummy-movie-explorer.netlify.app

## 📂 GitHub Repository

git clone https://github.com/Iftakharul-Alam-Apurba/Movie-Explorer.git

---

## ✨ Features

* 🏠 Responsive home page with hero section
* 🎬 Featured shows displayed on the home page
* 🔎 Search shows by title
* 📱 Fully responsive design for mobile, tablet, and desktop
* ⭐ Show ratings
* 📅 Release/premiere dates
* 🖼️ Show posters
* 📖 Show details in a modal
* 🎭 Genres, language, status, runtime, and network information
* ⌨️ Close details modal using the Escape key
* 🖱️ Close modal by clicking outside it
* ⏳ Loading state while fetching data
* ❌ Message displayed when no shows are found

## 🛠️ Technologies Used

* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **DaisyUI**
* **TVMaze API**

## 🔌 API

This project uses the **TVMaze API** to fetch show information.

### Get all shows

```text
https://api.tvmaze.com/shows
```

### Search shows

```text
https://api.tvmaze.com/search/shows?q={query}
```

TVMaze API documentation:

https://www.tvmaze.com/api

## 📁 Project Structure

```text
src/
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Footer.tsx
│   ├── SearchBar.tsx
│   ├── MovieCard.tsx
│   └── MovieModal.tsx
│
├── pages/
│   ├── HomePage.tsx
│   └── ListingPage.tsx
│
├── types/
│   └── type.ts
│
├── App.tsx
├── main.tsx
└── index.css
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Go to the project directory

```bash
cd Movie-Explorer
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will run locally using the Vite development server.

### 5. Build for production

```bash
npm run build
```

## 📱 Responsive Design

The application is designed to work across different screen sizes:

* 📱 Mobile — single-column layout
* 💻 Tablet — multi-column layout
* 🖥️ Desktop — four-column movie/show grid

## 👨‍💻 Author

**Iftakharul Alam**

CSE Student | Aspiring Full-Stack Developer

## 📄 License

This project was created for educational purposes as part of a web development assignment.
