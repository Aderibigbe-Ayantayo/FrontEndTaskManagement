import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Auth/SignUp';
import Login from './components/Auth/Login';
import Dashboard from './components/Task/Dashboard';
import TaskList from './components/Task/TaskList';
import TaskForm from './components/Task/TaskForm';
import TaskItem from './components/Task/TaskItem';





function App() {
    return (
        <Router>
            <div>
                <Routes>
                    {/* <Route path="/" element={<h1 style={{
            color: 'white', // Text color
            padding: '100px',
            background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for text
            borderRadius: '10px'
          }}>Home Page</h1>} /> */}
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/" index element={<Login />} />
                    <Route path="/tasks" element={<TaskList />} />
                    <Route path="/tasks/new" element={<TaskForm />} />
                    <Route path="/tasks/item" element={<TaskItem />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
