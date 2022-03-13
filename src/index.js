import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(             //injects App(root component) to index.Html file (HTML root container): what is writing to the screen
    <App />,
  document.getElementById('root')
);

