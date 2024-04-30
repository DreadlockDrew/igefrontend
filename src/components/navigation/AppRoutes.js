import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../HomePage';
import LoginPage from '../user_accounts/LoginPage';
import AccountPage from '../user_accounts/AccountPage';

import RegisterPage from "../user_accounts/RegisterPage";
import UnderConstruction from "../under_construction/UnderConstruction";
import ForgotPassword from "../user_accounts/ForgotPassword";
import ProblemGrid from "../user_practice/ProblemGrid";
import PracticePage from "../user_practice/PracticePage";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/forgot-password" element={<UnderConstruction/>} />
            <Route path="/admin" element={<UnderConstruction/>}/>
            <Route path="/testing" element={<UnderConstruction/>}/>
        </Routes>
    );
}

export default AppRoutes;