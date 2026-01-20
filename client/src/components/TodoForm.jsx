import { useState, useEffect } from 'react';

function TodoForm({ onTodoCreated, initialDate, onCancel, todoToEdit }) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [category, setCategory] = useState('Personal');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (todoToEdit) {
            setTitle(todoToEdit.title);
            setDate(todoToEdit.date);
            setStartTime(todoToEdit.startTime || '');
            setEndTime(todoToEdit.endTime || '');
            setCategory(todoToEdit.category || 'Personal');
        } else if (initialDate) {
            setTitle(''); // Reset title on new content
            setDate(initialDate);
            setStartTime('');
            setEndTime('');
            setCategory('Personal');
        } else {
            // Reset form completely if closed/reopened without initial data
            // Ideally we might want a 'reset' function, but this covers the switching case
        }
    }, [initialDate, todoToEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !date) return;

        setLoading(true);
        try {
            await onTodoCreated({ title, date, startTime, endTime, category });
            setTitle('');
            setDate('');
            setStartTime('');
            setEndTime('');
            setCategory('Personal');
        } catch (error) {
            alert('Error creating todo: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <h2>{todoToEdit ? 'Edit Todo' : 'Create New Todo'}</h2>
            <div className="form-group">
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    placeholder="Enter todo title"
                />
            </div>
            <div className="form-group">
                <label>Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Category:</label>
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{ width: '100%', padding: '10px', borderRadius: '0.5rem', border: '1px solid var(--border-color)' }}
                >
                    <option value="Personal">Personal</option>
                    <option value="Work">Work</option>
                    <option value="Urgent">Urgent</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="form-group-row">
                <div className="form-group">
                    <label>Start Time:</label>
                    <input
                        type="time"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>End Time:</label>
                    <input
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                    />
                </div>
            </div>
            <div className="form-group-row">
                <button type="submit" disabled={loading}>
                    {loading ? 'Saving...' : (todoToEdit ? 'Update Todo' : 'Add Todo')}
                </button>
                {onCancel && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="btn-cancel"
                    >
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
}

export default TodoForm;
