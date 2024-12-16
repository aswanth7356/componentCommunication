import React, { useState } from 'react';

function Child({ updateParentState }) {
    const [childState, setChildState] = useState('');

    const handleChange = (e) => {
        setChildState(e.target.value);
    };

    const handleClick = () => {
        updateParentState(childState);
    };

    return (
        <div>
            <h2>Child Component</h2>
            <input
                type="text"
                value={childState}
                onChange={handleChange}
                placeholder="Type something"
            />
            <button onClick={handleClick}>Update Parent State</button>
        </div>
    );
}

export default Child;
