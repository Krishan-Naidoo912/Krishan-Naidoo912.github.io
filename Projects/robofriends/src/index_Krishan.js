import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './MyFirstComponent.css'
//import App from './App';
import FirstComponent from './MyFirstComponent.js';
import * as serviceWorker from './serviceWorker';
//Import tachyons style templates
import 'tachyons';

ReactDOM.render(<FirstComponent greeting = {'Welcome to the world of React!'}/>, document.getElementById('root'));
//Write at html footer ReactDOM.render(<code>Hello World!</code>, document.getElementById('root2'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();