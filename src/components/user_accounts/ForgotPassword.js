// ForgotPasswordPage.js
import React, { useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import '../../css/ForgotPasswordPage.css'
const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                'http://localhost:3001/api/forgot-password',
                { email }
            );
            if (response.data.success) {
                navigate('/reset-password');
            } else {
                alert('Invalid email');
            }
        } catch (error) {
            console.error('Forgot password error', error);
        }
    };
    return (
        <div className="forgot-password-box">
            <form onSubmit={handleSubmit} className="forgot-password-form">
                <label className="forgot-password-label">
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="forgot-password-input"
                    />
                </label>
                <button type="submit" className="forgot-password-button">Reset Password</button>
            </form>
            <div id="login-link-container">Remembered password?
                <Link className="login-link" to="/login"> Login Now</Link>
            </div>
        </div>

    );
};
export default ForgotPasswordPage;