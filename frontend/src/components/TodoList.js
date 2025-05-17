import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TodoList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/tasks', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(res.data);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map(task => <li key={task.id}>{task.title}</li>)}
      </ul>
    </div>
  );
}

export default TodoList;
