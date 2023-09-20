import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  deleteTodo,
  editTodo,
  incrementPersons,
  decrementPersons,
  resetPersons,
} from "../store/todoSlice";

function Task({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  // Check if persons is greater than 0 or less than 0
  const isPersonBlue = task.persons !== 0;

  const handleDelete = () => {
    dispatch(deleteTodo({ id: task.id }));
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    dispatch(editTodo({ id: task.id, text: newText }));
    setIsEditing(false);
  };

  const handleIncrement = () => {
    dispatch(incrementPersons({ id: task.id }));
  };

  const handleDecrement = () => {
    dispatch(decrementPersons({ id: task.id }));
  };

  const handleResetPersons = () => {
    dispatch(resetPersons({ id: task.id }));
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <div>
            <button className="btn btn-secondary mr-2" onClick={handleIncrement}>
              +
            </button>
            <button className="btn btn-secondary mr-2" onClick={handleDecrement}>
              -
            </button>
            <button
              className={`btn ${isPersonBlue ? "btn-info" : "btn-warning"}`}
              onClick={isPersonBlue ? handleResetPersons : handleIncrement}
            >
              Person number {task.persons}
            </button>
          </div>
          <div className="text-left ml-3">
            {isEditing ? (
              <>
                <input
                  type="text"
                  className="form-control mb-2"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                />
                <button className="btn btn-info mr-2" onClick={handleSave}>
                  Save
                </button>
                <button className="btn btn-danger" onClick={handleEdit}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span>{task.text}</span>
                <button className="btn btn-danger ml-2" onClick={handleDelete}>
                  Delete
                </button>
                <button className="btn btn-info ml-2" onClick={handleEdit}>
                  Edit
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
