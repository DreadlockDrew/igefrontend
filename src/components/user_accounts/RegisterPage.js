// RegisterPage.js

import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import '../../css/RegisterPage.css'

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registration_code, setRegistration_code] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:3001/auth/register',
                {username,password,registration_code}
            );
            if (response.status === 201) {
                navigate('/login');
            } else {
                throw new Error('No New Data Created! ',response);
            }
        } catch (error) {
            console.error('Registration error', error.response.data);
            alert(error.response.data);
        }
    };

    return (
            <div className="register-page">
        <div className="register-box">
            <form onSubmit={handleSubmit} className="register-form">
                <label className="register-label">
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="register-input"
                    />
                </label>

                <label className="register-label">
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="register-input"
                    />
                </label>

                <label className="register-label">
                    Registration Code:
                    <input
                        type="regisration-code"
                        value={registration_code}
                        onChange={(e) => setRegistration_code(e.target.value)}
                        className="register-input"
                    />
                </label>

                <button type="submit" className="register-button">Register</button>
            </form>
            <div className="login-link-container">
                Already have an account?
                <Link to="/login" className="login-link"> Login</Link>
            </div>
        </div>
            </div>
    );
};

export default RegisterPage;