import React, { useState } from 'react';
import Greeting from './components/Greeting';

const App = () => {
    // setting name to an empty string & initializing the setter as setName
    const [Name, setName] = useState("");
    return (
        <>
            <input
                onChange={({ target: { value } }) => setName(value)} // when any changes occur, take value from that and call setName (applying that value from the input)
                placeholder="Enter your name" // general placeholder
            />
            <Greeting name={Name}/>
        </>
    );
};

export default App;