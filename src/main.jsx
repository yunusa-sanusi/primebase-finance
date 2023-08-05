import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Routes.jsx';
import { LoanProvider } from './contexts/LoanContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoanProvider>
      <RouterProvider router={router} />
    </LoanProvider>
  </React.StrictMode>,
);
