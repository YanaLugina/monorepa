import * as React from 'react';
import { render } from 'react-dom';
import { HelloResponse } from '../common/HelloResponse';

const App = () => {
    const [text, setText] = React.useState('');

    React.useEffect(() => {
        fetch('api/hello')
            .then<HelloResponse>(res => res.json())
            .then(res => {
                setText(res.text);
            })
            .catch(err => err);
    }, []);

    return (
        <h1>{ text }</h1>
    );
};

render(<App />, document.getElementById('app'));
