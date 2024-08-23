import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';
import './SignUp.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        try {
            // const res = await axios.post('/register', formData);
            const res = await axios.post('http://localhost:5000/register', formData); 
            console.log('Registration successful', res.data);
            // Handle successful registration (e.g., redirect to login)
        } catch (err) {
            console.error('Error registering user', err.response.data);
        }
    };

    return (
        <div className="signup-container">
            <div className="signup-form">
                <form onSubmit={onSubmit}>
                    <h2>Sign Up</h2>
                    <input 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={onChange} 
                        placeholder="Your Name" 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={onChange} 
                        placeholder="Email" 
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        value={password} 
                        onChange={onChange} 
                        placeholder="Password" 
                        required 
                    />
                    <button type="submit">Sign Up</button>
                    <p className="login-link">
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
