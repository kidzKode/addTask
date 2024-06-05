import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/reducers';


const TaskInput = () => {
  const [task, setTask] = useState('');// State to hold the current task input
  const dispatch = useDispatch();// Hook to get the dispatch function from Redux


  const handleAddTask = () => {
    if (task.trim()) { // Check if the task input is not empty or just whitespace
      dispatch(addTask(task)); // Dispatch the addTask action with the task as payload
      setTask(''); // Clear the input field after adding the task
    }
  };

  return (
    <div className="task-input">
      <input 
        type="text" 
        value={task} // Bind the input value to the task state
        onChange={(e) => setTask(e.target.value)} // Update the task state on input change
        placeholder="Add a new task" // Placeholder text for the input
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
