import React, { useState } from 'react';
import Child from './Child';

function Parent() {
    const [parentState, setParentState] = useState('');

    const updateState = (newState) => {
        setParentState(newState);
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <p>Parent State: {parentState}</p>
            <Child updateParentState={updateState} />
        </div>
    );
}

export default Parent;
