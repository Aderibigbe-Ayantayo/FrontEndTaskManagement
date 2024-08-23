import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


    const onSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/login', formData);
            console.log('Login successful', res.data);
    
            // Save token and user name in localStorage
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('userName', res.data.name); // Save user name
    
            // Redirect based on new user status or existing user
            if (res.data.isNewUser) {
                window.open('/signup', '_blank');
            } else {
                window.open('/dashboard', '_blank');
            }
            
            setFormData({ email: '', password: '' });
        } catch (err) {
            console.error('Error logging in', err.response.data);
        }
    };
    

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={onSubmit}>
                <h2>Login</h2>
                <input 
                    type="email" 
                    name="email" 
                    className="login-input"
                    value={email} 
                    onChange={onChange} 
                    placeholder="Email" 
                    required 
                />
                <input 
                    type="password" 
                    name="password" 
                    className="login-input"
                    value={password} 
                    onChange={onChange} 
                    placeholder="Password" 
                    required 
                />
                <button type="submit" className="login-button">Login</button>
                <p className="signup-link">
                    Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;







// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate from react-router-dom
// import axios from 'axios';
// import './Login.css';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });
//     const navigate = useNavigate(); // useNavigate for redirecting after login

//     const { email, password } = formData;

//     const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//     const onSubmit = async e => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('http://localhost:5000/login', formData);
//             console.log('Login successful', res.data);

//             // Save token in localStorage
//             localStorage.setItem('token', res.data.token);

//             // Redirect or update state
//             navigate('/dashboard'); // Redirect to a dashboard or another route after login
//         } catch (err) {
//             console.error('Error logging in', err.response.data);
//         }
//     };

//     return (
//         <div className="login-container">
//             <form className="login-form" onSubmit={onSubmit}>
//                 <h2>Login</h2>
//                 <input 
//                     type="email" 
//                     name="email" 
//                     className="login-input"
//                     value={email} 
//                     onChange={onChange} 
//                     placeholder="Email" 
//                     required 
//                 />
//                 <input 
//                     type="password" 
//                     name="password" 
//                     className="login-input"
//                     value={password} 
//                     onChange={onChange} 
//                     placeholder="Password" 
//                     required 
//                 />
//                 <button type="submit" className="login-button">Login</button>
//                 <p className="signup-link">
//                     Don't have an account? <Link to="/signup">Sign up</Link>
//                 </p>
//             </form>
//         </div>
//     );
// };

// export default Login;




// import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom
// import axios from 'axios';
// import './Login.css';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });

//     const { email, password } = formData;

//     const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//     const onSubmit = async e => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('/login', formData);
//             console.log('Login successful', res.data);
//             localStorage.setItem('token', res.data.token); // Save token
//             // Redirect or update state
//         } catch (err) {
//             console.error('Error logging in', err.response.data);
//         }
//     };
    
//     // const onSubmit = async e => {
//     //     e.preventDefault();
//     //     try {
//     //         // const res = await axios.post('/login', formData);
//     //         const res = await axios.post('http://localhost:5000/login', formData);
//     //         console.log('Login successful', res.data);
//     //         // Handle successful login (e.g., store token, redirect to dashboard)
//     //     } catch (err) {
//     //         console.error('Error logging in', err.response.data);
//     //     }
//     // };

//     return (
//         <div className="login-container">
//             <form className="login-form" onSubmit={onSubmit}>
//                 <h2>Login</h2>
//                 <input 
//                     type="email" 
//                     name="email" 
//                     className="login-input"
//                     value={email} 
//                     onChange={onChange} 
//                     placeholder="Email" 
//                     required 
//                 />
//                 <input 
//                     type="password" 
//                     name="password" 
//                     className="login-input"
//                     value={password} 
//                     onChange={onChange} 
//                     placeholder="Password" 
//                     required 
//                 />
//                 <button type="submit" className="login-button">Login</button>
//                 <p className="signup-link">
//                     Don't have an account? <Link to="/signup">Sign up</Link>
//                 </p>
//             </form>
//         </div>
//     );
// };

// export default Login;



// import React, { useState } from 'react';
// import axios from 'axios';
// import './Login.css';

// const Login = () => {
//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//     });

//     const { email, password } = formData;

//     const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

//     const onSubmit = async e => {
//         e.preventDefault();
//         try {
//             const res = await axios.post('/login', formData);
//             console.log('Login successful', res.data);
//             // Handle successful login (e.g., store token, redirect to dashboard)
//         } catch (err) {
//             console.error('Error logging in', err.response.data);
//         }
//     };

//     return (
//         <div className="login-container">
//         <form className= "login-form" onSubmit={onSubmit}>
//             <h2>Login</h2>
//             <input 
//                 type="email" 
//                 name="email" 
//                 className="login-input"
//                 value={email} 
//                 onChange={onChange} 
//                 placeholder="Email" 
//                 required 
//             />
//             <input 
//                 type="password" 
//                 name="password" 
//                 className="login-input"
//                 value={password} 
//                 onChange={onChange} 
//                 placeholder="Password" 
//                 required 
//             />
//             <button type="submit" className="login-button">Login</button>
//         </form>
//         </div>
//     );
// };

// export default Login;
