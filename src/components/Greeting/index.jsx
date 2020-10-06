import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import './styles.css';

const Greeting = (props) => {
    // props.name is inheriting the property from greeting
    return (
        <Jumbotron fluid>
            <hr/>
            <header>
                <h1>What's going on youtube, it's ya boy {props.name} here, can I get a poggers in the chat?</h1> 
            </header>
            <p>This was fun!</p>
            <hr/>
        </Jumbotron>
    );
};

export default Greeting; 