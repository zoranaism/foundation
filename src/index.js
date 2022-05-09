import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './main-component/App/App';
import * as serviceWorker from './serviceWorker';
import './css/font-awesome.min.css';
import './css/themify-icons.css';
import './css/flaticon.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
