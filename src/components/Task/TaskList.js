
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [status, setStatus] = useState('');
    const [search, setSearch] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [editingTaskId, setEditingTaskId] = useState(null);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const config = {
                    headers: {
                        Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjN2Q3Nzc2NDNhODRlYWZmM2YwNTYzIiwibmFtZSI6IkJvbGFqaSBBZGFtcyJ9LCJpYXQiOjE3MjQzNzI5MjEsImV4cCI6MTcyNDM3NjUyMX0.ewNyXDgMliD6YmrmCQ8IlIGQda3f_Mt979PsTr4zMmY'}`, // Include the token in the Authorization header
                    },
                    params: {
                        status,
                        search,
                        sortBy,
                    },
                };

                const response = await axios.get('http://localhost:5000/tasks', config);
                if (response.data && Array.isArray(response.data)) {
                    console.log('Fetched tasks:', response.data);
                    setTasks(response.data); // Set the tasks in state
                } else {
                    console.error('Unexpected response format:', response);
                }
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    }, [status, search, sortBy]); // Re-fetch tasks when filters change

    const handleEditClick = (taskId) => {
        setEditingTaskId(taskId);
    };

    const handleDeleteClick = async (taskId) => {
        try {
            const token = localStorage.getItem('authToken');
            await axios.delete(`http://localhost:5000/${taskId}`, {
                headers: {
                    Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjN2Q3Nzc2NDNhODRlYWZmM2YwNTYzIiwibmFtZSI6IkJvbGFqaSBBZGFtcyJ9LCJpYXQiOjE3MjQzNzI5MjEsImV4cCI6MTcyNDM3NjUyMX0.ewNyXDgMliD6YmrmCQ8IlIGQda3f_Mt979PsTr4zMmY'}`,
                },
            });
            setTasks(tasks.filter(task => task._id !== taskId));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const handleSave = () => {
        setEditingTaskId(null);

        const fetchTasks = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const config = {
                    headers: {
                        Authorization: `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZjN2Q3Nzc2NDNhODRlYWZmM2YwNTYzIiwibmFtZSI6IkJvbGFqaSBBZGFtcyJ9LCJpYXQiOjE3MjQzNzI5MjEsImV4cCI6MTcyNDM3NjUyMX0.ewNyXDgMliD6YmrmCQ8IlIGQda3f_Mt979PsTr4zMmY'}`,
                    },
                    params: {
                        status,
                        search,
                        sortBy,
                    },
                };

                const response = await axios.get('http://localhost:5000/tasks', config);
                if (response.data && Array.isArray(response.data)) {
                    console.log('Updated tasks:', response.data);
                    setTasks(response.data);
                } else {
                    console.error('Unexpected response format:', response);
                }
            } catch (error) {
                console.error('Error fetching tasks:', error);
            }
        };

        fetchTasks();
    };

    

    return (
        <div className="gradient-background">
            <h1>Task List</h1>
            <div>
                <input
                    type="text"
                    placeholder="Search by title or description"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="">All</option>
                    <option value="completed">Completed</option>
                    <option value="in-progress">In Progress</option>
                </select>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="">Default</option>
                    <option value="deadline">Deadline</option>
                    <option value="priority">Priority</option>
                </select>
            </div>
            <ul className="task-list">
                {tasks.length > 0 ? (
                    tasks.map(task => (
                        <TaskItem
                            key={task._id}
                            task={task}
                            isEditing={editingTaskId === task._id}
                            onEdit={handleEditClick}
                            onDelete={handleDeleteClick}
                            onSave={handleSave}
                        />
                    ))
                ) : (
                    <p>No tasks available</p>
                )}
            </ul>
        </div>
    );
}

export default TaskList;




