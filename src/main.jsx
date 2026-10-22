import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

const root = document.getElementById('root');
const pathname = window.location.pathname;
if (root.hasChildNodes()) hydrateRoot(root, <App pathname={pathname} />);
else createRoot(root).render(<App pathname={pathname} />);
