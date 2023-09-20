// TodoApp.js
import React, { useState, useEffect } from "react";
import TaskList from "./TaskList";
import { useDispatch } from "react-redux";
import { resetPersons, addTodo } from "../store/todoSlice";
import './TodoApp.css'

function TodoApp() {
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleResetPersons = () => {
    dispatch(resetPersons());
  };

  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      dispatch(addTodo({ text: taskText }));
      setTaskText("");
    }
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="navbar-brand">Enter The Task</div>
        <div className="ml-2 flex-grow-1">
          <input
            type="text"
            className="form-control"
            placeholder="Task Name"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
        </div>
        <div className="ml-2">
          <button className="btn btn-primary" onClick={handleAddTask}>
            Add Task
          </button>
        </div>
        <div className="ml-2">
          <button className="btn btn-danger" onClick={handleResetPersons}>
            Reset Number of Persons
          </button>
        </div>
        <div className="ml-3">
          <p className="mt-2 bg-danger text-white thick-border large-text">
            {getCurrentDateTime()}
          </p>
        </div>
      </nav>
      <div className="mt-4">
        <TaskList />
      </div>
    </div>
  );
}

function getCurrentDateTime() {
  const now = new Date();
  return now.toLocaleString();
}

export default TodoApp;
