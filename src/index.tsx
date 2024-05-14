import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import './index.css';
import AppRoutes from './Routes';

import 'semantic-ui-css/semantic.min.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <AppRoutes />
);
reportWebVitals();
