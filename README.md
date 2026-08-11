# React Project Management App

A multi-page project management application with a dashboard, task manager, and wiki — built as a dark-themed single-page app using React and React Router.

![screenshot](assets/screenshots/pm-dashboard.png)

## Live Demo

**HTML Version (no install needed):**
Open `react-project-management_index.html` directly in your browser, or deploy to GitHub Pages:
```
https://[your-github-username].github.io/react-project-management/
```

> A full React/Vite version is also included for local development (see below).

## Features

- **Homepage** — Project overview and status summary
- **Dashboard** — Visual project tracking with charts (Recharts)
- **Task Manager** — Create, assign, and track tasks
- **Wiki** — Internal knowledge base / documentation hub
- Persistent state via React Context
- Dark UI with Tailwind CSS (gray-900 theme)
- Fully responsive layout

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Routing | React Router DOM 6 |
| Charts | Recharts |
| Icons | Lucide React |
| Build | Vite 6 |
| Styling | Tailwind CSS |

## React Version — Local Setup

**Prerequisites:** Node.js 18+

```bash
npm install
npm run dev
```

## Project Structure

```
├── App.tsx                  # Router + layout shell
├── components/
│   ├── layout/
│   │   └── Navigation.tsx   # Top nav bar
│   └── pages/
│       ├── Homepage.tsx
│       ├── Dashboard.tsx
│       ├── TaskManager.tsx
│       └── Wiki.tsx
├── context/
│   └── ProjectContext.tsx   # Global state management
└── data/
    ├── initialData.ts       # Seed project + task data
    └── initialState.ts      # Default app state
```

## About

Built by Kareem Bullard as part of the King Projects portfolio — demonstrating full-stack React architecture, routing, and state management patterns for project management tooling.
