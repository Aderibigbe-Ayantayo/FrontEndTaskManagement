import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TaskForm.css';

function TaskForm({ taskId, onSave }) {
    const [task, setTask] = useState({
        title: '',
        description: '',
        deadline: '',
        status: 'in-progress',
        priority: 1,
    });

    useEffect(() => {
        const token = localStorage.getItem('authToken'); 
        console.log(localStorage)// Get the token from localStorage

        if (taskId && token) {
            axios.get(`http://localhost:5000/tasks/${taskId}`, {
                headers: {
                    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjN2Q3Nzc2NDNhODRlYWZmM2YwNTYzIiwibmFtZSI6IkJvbGFqaSBBZGFtcyJ9LCJpYXQiOjE3MjQzNzI5MjEsImV4cCI6MTcyNDM3NjUyMX0.ewNyXDgMliD6YmrmCQ8IlIGQda3f_Mt979PsTr4zMmY'}`, // Include the token in the request headers
                },
            })
            .then(response => setTask(response.data))
            .catch(error => console.error('Error fetching task:', error));
        }
    }, [taskId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask({ ...task, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('authToken');
            console.log(localStorage) // Get the token from localStorage

            const config = {
                headers: {
                    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjN2Q3Nzc2NDNhODRlYWZmM2YwNTYzIiwibmFtZSI6IkJvbGFqaSBBZGFtcyJ9LCJpYXQiOjE3MjQzNzI5MjEsImV4cCI6MTcyNDM3NjUyMX0.ewNyXDgMliD6YmrmCQ8IlIGQda3f_Mt979PsTr4zMmY'}`, // Include the token in the request headers
                },
            };

            if (taskId) {
                
                await axios.put(`http://localhost:5000/${taskId}`, task, config);
            } else {
                // Create a new task
                await axios.post('http://localhost:5000/tasks', task, config);
            }

            if (onSave && typeof onSave === 'function') {
                onSave(); // Call the onSave function if it exists
            }
        } catch (error) {
            console.error('Error saving task:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="taskform-container">
            <form className='taskForm' onSubmit={handleSubmit}>
                <h1>{taskId ? 'Update Task' : 'Create Task'}</h1>
                <input
                    type="text"
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                    placeholder="Task Title"
                />
                <textarea
                    name="description"
                    value={task.description}
                    onChange={handleChange}
                    placeholder="Task Description"
                />
                <input
                    type="date"
                    name="deadline"
                    value={task.deadline}
                    onChange={handleChange}
                />
                <select name="status" value={task.status} onChange={handleChange}>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <select name="priority" value={task.priority} onChange={handleChange}>
                    <option value={1}>High</option>
                    <option value={2}>Medium</option>
                    <option value={3}>Low</option>
                </select>
                <button type="submit">Save Task</button>
            </form>
        </div>
    );
}

export default TaskForm;




