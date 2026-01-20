import { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import CalendarView from './components/CalendarView';
import Modal from './components/Modal';
import { getTodos, createTodo, updateTodo, deleteTodo } from './api';

function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);
  const [prefillDate, setPrefillDate] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  const fetchTodos = async () => {
    try {
      const data = await getTodos();
      setTodos(data);
      setError(null);
    } catch (err) {
      console.error('Fetch error:', err);
      setError('Failed to load todos via API. Is the backend server running?');
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleTodoCreated = async (todoData) => {
    if (editingTodo) {
      await updateTodo(editingTodo.id, todoData);
      setEditingTodo(null);
    } else {
      await createTodo(todoData);
    }
    await fetchTodos();
  };

  const handleToggleComplete = async (id, currentStatus) => {
    try {
      await updateTodo(id, { completed: !currentStatus });
      await fetchTodos();
    } catch (err) {
      setError('Failed to update todo status.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this todo?')) return;
    try {
      await deleteTodo(id);
      await fetchTodos();
    } catch (err) {
      setError('Failed to delete todo.');
    }
  };

  const handleUpdateDate = async (id, newDate) => {
    try {
      await updateTodo(id, { date: newDate });
      await fetchTodos();
    } catch (err) {
      setError('Failed to update todo date.');
    }
  };

  return (
    <div className="app-container">
      <h1>Todo Calendar App</h1>
      {error && <div className="error-message">{error}</div>}

      <div className="main-content">
        <div className="sidebar">
          <TodoForm onTodoCreated={handleTodoCreated} initialDate={prefillDate} />
          <div className="todos-list-preview">
            <h3>All Todos</h3>
            <ul>
              {todos.map(t => (
                <li key={t.id} className="todo-item">
                  <div className="todo-content">
                    <input
                      type="checkbox"
                      checked={t.completed || false}
                      onChange={() => handleToggleComplete(t.id, t.completed)}
                    />
                    <span className={`category-indicator category-${(t.category || 'Personal').toLowerCase()}`} title={t.category || 'Personal'}></span>
                    <span className={`todo-text ${t.completed ? 'completed' : ''}`}>
                      {t.startTime && t.endTime ? <small>[{t.startTime}-{t.endTime}]</small> : ''}
                      {t.date}: {t.title}
                    </span>
                  </div>
                  <button onClick={() => handleDelete(t.id)} className="delete-btn">
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="calendar-container">
          <CalendarView
            todos={todos}
            onToggle={handleToggleComplete}
            onDelete={handleDelete}
            onUpdateDate={handleUpdateDate}
            onDateClick={(date) => {
              setPrefillDate(date);
              setEditingTodo(null);
              setIsModalOpen(true);
            }}
            onEdit={(todo) => {
              setEditingTodo(todo);
              setPrefillDate(todo.date);
              setIsModalOpen(true);
            }}
          />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TodoForm
          onTodoCreated={async (data) => {
            await handleTodoCreated(data);
            setIsModalOpen(false);
          }}
          initialDate={prefillDate}
          todoToEdit={editingTodo}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
}

export default App;
