// LoginPage.js
import React, { useState } from 'react';

import { login } from '../navigation/api';
import {Link, useNavigate} from 'react-router-dom';
import '../../css/LoginPage.css'

const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const pullUserData = async (event) => {
        event.preventDefault();
        try {
            await login(username, password);
            navigate('/');
        } catch (error) {
            alert(error.response.data);
        }
    };
    return (
        <div className="login-page">
            <div className="login-box">
                <form onSubmit={pullUserData} className="login-form">
                    <label className="login-label">
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="login-input"
                        />
                    </label>
                    <label className="login-label">
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login-input"
                        />
                    </label>
                    <button type="submit" className="login-button">Login</button>
                </form>

                <div className="forgot-password-link">
                    <Link className="forgot-password-link" to="/forgot_password">Forgot password?</Link>
                </div>
                <div id="register-link-container">New Here?
                    <Link className="register-link" to="/register"> Join Now</Link>
                </div>
            </div>
        </div>


    );
};
export default LoginPage;