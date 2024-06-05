import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);// Get tasks from the Redux store



  return (
    <div className="task-list">
      {tasks.length === 0 ? (
        <p>No tasks available</p> // Display a message if there are no tasks
      ) : (
        tasks.map((task, index) => (
          <TaskItem key={index} task={task} index={index} />
        ))
      )}
    </div>
  );
};

export default TaskList;
