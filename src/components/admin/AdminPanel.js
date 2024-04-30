import React from 'react';
import '../../css/AdminPanel.css';

const AdminPanel = () => {
    return (
        <div className="admin-panel">
            <div className="sidebar">
                <h3>Admin Panel</h3>
                <ul>
                    <li>Dashboard</li>
                    <li>User Management</li>
                    <li>Settings</li>
                </ul>
            </div>
            <div className="content">
                <h2>Welcome to the Admin Panel</h2>
                {/* Content Goes Here */}
            </div>
        </div>
    );
};

export default AdminPanel;