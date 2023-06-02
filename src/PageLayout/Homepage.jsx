import React from 'react';
import NavigationBar from '../Page/Shared/Navigationbar/Navigationbar';
import { Outlet } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Homepage;