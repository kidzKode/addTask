import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../redux/reducers';

const TaskItem = ({ task, index }) => {
  const [isEditing, setIsEditing] = useState(false); // State to toggle between view and edit mode
  const [newTask, setNewTask] = useState(task); // State to hold the new task value during editing
  const dispatch = useDispatch(); // Hook to get the dispatch function from Redux

  const handleDelete = () => {
    dispatch(deleteTask(index));// Dispatch the deleteTask action with the task index as payload
  };

  const handleEdit = () => {
    if (isEditing && newTask !== task) {// Check if in edit mode and the new task value has changed
      dispatch(editTask({ index, newTask })); // Dispatch the editTask action with the index and newTask as payload
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="task-item">
      {isEditing ? (
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
        />
      ) : (
        <span>{task}</span>// Display the task if not in edit mode
      )}
      <button className={isEditing ? 'save' : 'edit'} onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button className="delete" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TaskItem;
