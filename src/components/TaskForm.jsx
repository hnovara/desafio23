import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskText.trim() !== '') {
      onAddTask({ id: Date.now(), text: taskText });
      setTaskText('');
    }
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese una nueva tarea"
        value={taskText}
        onChange={handleInputChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TaskForm;