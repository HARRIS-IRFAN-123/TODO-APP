import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

function TaskList() {
  const todos = useSelector((state) => state.todos);

  return (
    <div className="mt-4">
      {todos.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
