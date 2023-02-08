import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';

var root = document.createElement('div');
root.setAttribute('id', 'root');

document.body.appendChild(root);
render(<App />, root);