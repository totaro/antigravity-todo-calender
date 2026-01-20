import { useState } from 'react';

function CalendarView({ todos, onToggle, onDelete, onUpdateDate, onDateClick, onEdit }) {
    const [currentDate, setCurrentDate] = useState(new Date());

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const handlePrevMonth = () => {
        setCurrentDate(new Date(year, month - 1, 1));
    };

    const handleNextMonth = () => {
        setCurrentDate(new Date(year, month + 1, 1));
    };

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const renderDays = () => {
        const days = [];
        // Empty cells for days before the 1st of the month
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        // Days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const daysTodos = todos.filter(todo => todo.date === dateStr);

            days.push(
                <div
                    key={day}
                    className="calendar-day"
                    onDragOver={(e) => {
                        e.preventDefault();
                        e.currentTarget.classList.add('drag-over');
                    }}
                    onDragLeave={(e) => {
                        e.currentTarget.classList.remove('drag-over');
                    }}
                    onDrop={(e) => {
                        e.preventDefault();
                        e.currentTarget.classList.remove('drag-over');
                        const todoId = e.dataTransfer.getData('text/plain');
                        if (onUpdateDate && todoId) {
                            onUpdateDate(todoId, dateStr);
                        }
                    }}
                    onClick={() => onDateClick && onDateClick(dateStr)}
                >
                    <div className="day-number">{day}</div>
                    <div className="day-events">
                        {daysTodos.map(todo => (
                            <div
                                key={todo.id}
                                className={`todo-event cat-${(todo.category || 'Personal').toLowerCase()} ${todo.completed ? 'completed' : ''}`}
                                draggable="true"
                                onDragStart={(e) => {
                                    e.dataTransfer.setData('text/plain', todo.id);
                                    e.dataTransfer.effectAllowed = 'move';
                                }}
                            >
                                <span
                                    className="todo-toggle-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onToggle && onToggle(todo.id, todo.completed);
                                    }}
                                    title="Toggle Complete"
                                    style={{ marginRight: '5px', cursor: 'pointer' }}
                                >
                                    {todo.completed ? '☑' : '☐'}
                                </span>
                                <span
                                    className="todo-event-text"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onEdit && onEdit(todo);
                                    }}
                                    title="Click to edit"
                                >
                                    {todo.startTime && <span className="event-time">{todo.startTime} </span>}
                                    {todo.title}
                                </span>
                                <button
                                    className="calendar-delete-btn"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (onDelete) onDelete(todo.id);
                                    }}
                                    title="Delete"
                                >
                                    &times;
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
        return days;
    };

    return (
        <div className="calendar-view">
            <div className="calendar-header">
                <button onClick={handlePrevMonth}>&lt; Prev</button>
                <h2>{monthNames[month]} {year}</h2>
                <button onClick={handleNextMonth}>Next &gt;</button>
            </div>
            <div className="calendar-grid-header">
                <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
            </div>
            <div className="calendar-grid">
                {renderDays()}
            </div>
        </div>
    );
}

export default CalendarView;
