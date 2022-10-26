import * as React from 'react';
import { render } from 'react-dom';

const App = () => {
    const text = 'hello World from react'
    console.log(text);
    return (
        <h1>{ text }</h1>
    );
};

render(<App />, document.getElementById('app'));
