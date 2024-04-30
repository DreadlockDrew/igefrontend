import React, { useEffect, useState } from 'react';
import '../../css/AccountPage.css';
import { useNavigate } from "react-router-dom";
import {logout, myAccount} from '../navigation/api';
import withAuth from "../navigation/withAuth";


const AccountPage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "Loading...",
        email: "Loading...",
        plan: "Loading..."
    }); // Initial state with default data
    const [loading, setLoading] = useState(true);
    const handleLogoutSubmit = async () => {
        try {
            const data = await logout();
        }
        catch (error) {
            console.log('Account Logout Fail :', error.message);
        }
        finally {
            navigate('/');
        }
    };

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await myAccount();
                setUser(response.data);
                setLoading(false);
            }
            catch (error) {
                console.log(error)
                navigate('/login')
            }
        }
        fetchUserData().then(r => console.log('User data fetched'));
    }, []);

    if(loading)
    {
        return <h1>Loading...</h1>
    }
    return (
        <div className='AccountPage'>
            <h1>Welcome to your account page, {user.username}!</h1>
            {user.email && <p>Your registered email is: {user.email}</p>}
            <p>Your subscription plan is: {user.plan}</p>
            <button onClick={handleLogoutSubmit}>Logout</button>
        </div>
    );
};

export default withAuth(AccountPage);