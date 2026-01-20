# Project Refactoring & Polish

## Goal Description
Review and refactor the codebase to improve readability, maintainability, and code structure without altering functionality.

## Proposed Changes

### Component Extraction
#### [NEW] [components/Modal.jsx](file:///c:/code/antigravitydemo/client/src/components/Modal.jsx)
- Extract the modal overlay and content wrapper from `App.jsx` into a reusable `Modal` component.
- Props: `isOpen` (bool), `onClose` (func), `children` (node).

#### [MODIFY] [App.jsx](file:///c:/code/antigravitydemo/client/src/App.jsx)
- Import `Modal`.
- Replace the inline modal `div`s with `<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}> ... </Modal>`.

### Code Cleanup
#### [MODIFY] [components/TodoForm.jsx](file:///c:/code/antigravitydemo/client/src/components/TodoForm.jsx)
- Remove inline styles from the "Cancel" button.
- Add `.btn-cancel` class to `App.css`.

#### [MODIFY] [components/CalendarView.jsx](file:///c:/code/antigravitydemo/client/src/components/CalendarView.jsx)
- (Optional, if time permits) Extract the specific todo event rendering into a sub-component or helper function to declutter the `renderDays` loop.

### CSS Polish
#### [MODIFY] [App.css](file:///c:/code/antigravitydemo/client/src/App.css)
- Add `.btn-cancel` styles.
- Ensure generic modal classes are robust.

## Verification Plan
1. **Modal Test**: Open/Close modal. Verify animation and layout remain identical.
2. **Form Test**: Check "Cancel" button styling matches previous look (or better).
3. **Functionality**: Ensure adding/editing todos still works through the refactored modal.
