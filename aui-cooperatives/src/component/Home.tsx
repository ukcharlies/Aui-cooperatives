import React from 'react';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';

const Dashboard: React.FC = () => {
    return (
        <div className="Home">
            <div className="grid-container">
                <div className="grid-item">
                    <Component1 />
                </div>
                <div className="grid-item">
                    <Component2 />
                </div>
                <div className="grid-item">
                    <Component3 />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;