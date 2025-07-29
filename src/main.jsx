import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/index.css';
import { CRMProvider } from './CRMContext';
import { AuthProvider } from './AuthContext'; // 👈

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <CRMProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CRMProvider>
    </AuthProvider>
  </React.StrictMode>
);
