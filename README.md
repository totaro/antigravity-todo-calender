# Todo Calendar App

A persistent Todo application with a Calendar view, drag-and-drop rescheduling, and category management.

## Project Structure
- **client/**: React frontend (Vite)
- **server/**: Node.js backend (json-server)

## How to Run

### 1. Start the Backend
The backend runs on port `3001` and handles data persistence in `server/db.json`.

```bash
cd server
npm run dev
```

### 2. Start the Frontend
The frontend runs on port `5173` (by default).

```bash
cd client
npm run dev
```

Open your browser to the URL shown in the client terminal (usually http://localhost:5173).

## Features
- **Create/Edit Todos**: Title, Date, Time Range, Category.
- **Drag & Drop**: Drag events on the calendar to reschedule.
- **Categories**: Color-coded categories (Work, Personal, Urgent, Other).
- **Persistence**: Data is saved automatically to `server/db.json`.
