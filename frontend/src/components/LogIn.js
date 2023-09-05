import React, { useState } from 'react';
import './LogIn.css';
import axios from 'axios';

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const emailSubmit = async () => {
        try {
            if (!isValidEmail(email)) {
                setEmail(''); 
                setError('Please enter a valid email address');
                return;
            }
            const response = await axios.post('http://localhost:3001/api/addemail', {
                email: email,
            });
            console.log(response.data);
            setSuccess(true);
            setError('');
            setEmail(''); 
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="login-container">
            <div className="left-side">
                <div className="app">
                <h1>Subscribe</h1>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={success}
                    />
                    <button onClick={emailSubmit}>Add user</button>
                </div>
                <div>
                    {error && (<p className="error">{error}</p>)}
                </div>
            </div>
            <div className="right-side">
                <h2>Stay current on trading techniques and cryptocurrency trends</h2>
                <img
                    src="./images/LogIn_Register.jpg"
                    alt="Fibonacci Retracements"
                    style={{
                        width: '700px',
                        height: '500px',
                        borderRadius: '10px',
                        marginBottom: '10px',
                    }}
                />
            </div>
        </div>
    );
};

export default LogIn;