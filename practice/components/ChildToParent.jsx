import React from 'react';

const ChildToParent = ({ children }) => {
    return (
        <div>
            <h1>Hello from ChildToParent Component</h1>
            {children}
        </div>
    );
};

export default ChildToParent;
