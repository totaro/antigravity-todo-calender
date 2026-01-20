# Todo Calendar App - Final Walkthrough

## Overview
We have built a feature-rich **Todo Calendar App** with modern aesthetics and powerful functionality.

## Features Added
### 1. **Calendar & List View**
- **Monthly Calendar**: View todos distributed across dates.
- **Sidebar List**: Scrollable list of pending tasks.

### 2. **Create & Edit**
- **Modal Popup**: Click any date to open a popup form.
- **Edit Mode**: Click an existing todo to modify its Title, Time, or Category.
- **Click-to-Add**: Quickly create tasks for specific dates.

### 3. **Categories**
- **Color Coded**:
    - <span style="color:#065f46; background:#d1fae5; padding: 2px 6px; border-radius: 4px;">Personal</span>
    - <span style="color:#1e40af; background:#dbeafe; padding: 2px 6px; border-radius: 4px;">Work</span>
    - <span style="color:#991b1b; background:#fee2e2; padding: 2px 6px; border-radius: 4px;">Urgent</span>
    - <span style="color:#374151; background:#f3f4f6; padding: 2px 6px; border-radius: 4px;">Other</span>

### 4. **Interaction**
- **Drag & Drop**: Drag a todo from one day to another to reschedule.
- **Toggle Complete**: Click the checkbox (☑) to mark done.
- **Delete**: Remove tasks easily.

### 5. **Technical Improvements**
- **Persistence**: Data saved to `db.json` via `json-server`.
- **Refactored Code**:
    - Extracted `Modal` component.
    - Clean CSS class usage.
    - Consistent API layer.

## How to Run
1. **Backend**: `npm run dev` in `server/`. (Port 3001)
2. **Frontend**: `npm run dev` in `client/`. (Port 5173/5174)

Enjoy your organized life!
