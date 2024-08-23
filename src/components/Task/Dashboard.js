

import React, { useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
    // Retrieve the user's full name from localStorage
    const fullName = localStorage.getItem('userName') || 'User';

    // Extract the first name (first word before any space)
    const firstName = fullName.split(' ')[0];

    // Split the welcome message into letters
    const welcomeMessage = `Welcome ${firstName}!`.split('');

    useEffect(() => {
        const letters = document.querySelectorAll('.welcome-message span');
        letters.forEach((letter, index) => {
            letter.style.animationDelay = `${index * 0.5}s`; // Delay each letter by 0.5 seconds
        });

        // Add the 'transitioned' class to all letters after the initial animation
        setTimeout(() => {
            letters.forEach(letter => {
                letter.classList.add('transitioned');
            });
        }, letters.length * 1000); // Adjust timing as needed
    }, []);

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Task Dashboard</h1>
            <div className="welcome-message">
                {welcomeMessage.map((letter, index) => (
                    <span key={index} className={letter.trim() === '' ? 'empty' : ''}>
                        {letter}
                    </span>
                ))}
            </div>
            <p className="task-message">Master your Tasks</p>
            <h5 className="task-guide">EFFICIENT TASK MANAGEMENT GUIDE</h5>
            <nav className="dashboard-nav">
                <ul>
                    <li>
                        <a href="/tasks" target="_blank" rel="noopener noreferrer">View Task List</a>
                    </li>
                    <li>
                        <a href="/tasks/new" target="_blank" rel="noopener noreferrer">Create a New Task</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Dashboard;
