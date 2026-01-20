# Todo Calendar App Tasks

## Backend
- [x] Add DELETE /todos/:id endpoint to server.js <!-- id: 1 -->
- [x] Update POST /todos in server.js to accept startTime and endTime <!-- id: 9 -->
- [x] Update POST /todos to accept category <!-- id: 22 -->
- [x] Install json-server package <!-- id: 28 -->
- [x] Replace server.js logic with json-server middleware <!-- id: 29 -->
- [x] Create initial db.json <!-- id: 30 -->

## Frontend Logic
- [x] Update api.js with updateTodo and deleteTodo functions <!-- id: 2 -->
- [x] Update App.jsx to handle toggle complete and delete actions <!-- id: 3 -->
- [x] Add visual indicators for completed/deleted todos in the list <!-- id: 4 -->
- [x] (Optional) Add interaction to CalendarView items <!-- id: 5 -->
- [x] Update TodoForm.jsx to include start and end time inputs <!-- id: 10 -->
- [x] Update CalendarView.jsx to display times <!-- id: 11 -->
- [x] Update App.jsx/Sidebar to display times in the list <!-- id: 12 -->
- [x] Update TodoForm to include Category selector <!-- id: 23 -->
- [x] Update App.jsx to pass category data and render with colors <!-- id: 24 -->
- [x] Update CalendarView to color-code events by category <!-- id: 25 -->

## UI Overhaul
- [x] Global Styles: Reset, Typography (Inter/Roboto), Variables <!-- id: 16 -->
- [x] Layout: Modern Card-based layout for Sidebar and Calendar <!-- id: 17 -->
- [x] Components: Styled Buttons, Inputs with focus states <!-- id: 18 -->
- [x] Calendar: Aesthetic grid, headers, and event "pills" <!-- id: 19 -->
- [x] Todo List: Clean list items with subtle hover effects and transitions <!-- id: 20 -->
- [x] Add category styles (colors) to App.css <!-- id: 26 -->

## Drag & Drop Feature
- [x] Add updateDate handler to App.jsx <!-- id: 32 -->
- [x] Implement Drag & Drop logic in CalendarView.jsx <!-- id: 33 -->
- [x] Add visual feedback for drag targets in App.css <!-- id: 34 -->

## Click-to-Add Feature
- [x] Add prefillDate state to App.jsx <!-- id: 36 -->
- [x] Update TodoForm to accept and observe prefillDate prop <!-- id: 37 -->
- [x] Update CalendarView to invoke onDateClick <!-- id: 38 -->

## Modal Form Feature
- [x] Create Modal wrapper component logic (in App.jsx or new file) <!-- id: 40 -->
- [x] Style the Modal overlay and box in App.css <!-- id: 41 -->
- [x] Refactor App.jsx: Move TodoForm inside Modal <!-- id: 42 -->
- [x] Update App.jsx: Show Modal on date click, close on submit/cancel <!-- id: 43 -->

## Edit Todo Features
- [x] Update App.jsx: Add editingTodo state and handleEdit function <!-- id: 45 -->
- [x] Update TodoForm.jsx: key off todoToEdit prop to pre-fill fields <!-- id: 46 -->
- [x] Update App.jsx: Modify handleModalSubmit to update if editing <!-- id: 47 -->
- [x] Update CalendarView.jsx: Change click handler to trigger edit <!-- id: 48 -->
- [x] Verify editing a todo updates it correctly <!-- id: 49 -->

## Refactoring & Polish
- [x] Create generic Modal.jsx component <!-- id: 50 -->
- [x] Refactor App.jsx to use Modal component <!-- id: 51 -->
- [x] Move TodoForm inline styles to App.css <!-- id: 52 -->
- [x] Verify functionality remains unchanged <!-- id: 53 -->

## Verification
- [x] Verify adding a todo persists <!-- id: 6 -->
- [x] Verify completing a todo updates state <!-- id: 7 -->
- [x] Verify deleting a todo removes it <!-- id: 8 -->
- [x] Verify creating a todo with time saves correctly <!-- id: 14 -->
- [x] Verify UI responsiveness and visual consistency <!-- id: 21 -->
- [x] Verify categories are saved and colorful <!-- id: 27 -->
- [x] Verify data persists after server restart <!-- id: 31 -->
- [x] Verify dragging a todo changes its date <!-- id: 35 -->
- [x] Verify clicking a date fills the form <!-- id: 39 -->
- [x] Verify form opens in modal on date click <!-- id: 44 -->
