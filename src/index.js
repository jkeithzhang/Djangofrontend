import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import People from './People';
import Question from './Question';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Question />, document.getElementById('question'));


registerServiceWorker();
