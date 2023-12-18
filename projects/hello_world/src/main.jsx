import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import ButtonCount from './conponents/button-count.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
        <ButtonCount/>
        <ButtonCount/>
        <ButtonCount/>
        <ButtonCount/>
    </React.StrictMode>
);
