// withAuth.js
import React from 'react';
import {Navigate, useNavigate} from 'react-router-dom';

export function isLoggedIn() {
    return !!localStorage.getItem('accessToken');
}
function withAuth(Component) {
    return function AuthenticatedComponent(props) {
        const loggedIn = isLoggedIn();

        //AUTOLOGIN if (!loggedIn) {
        //     return <Navigate to="/login" />;
        // }
        return <Component {...props} />;
    };
}



export default withAuth;