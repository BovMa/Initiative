import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { StatsProvider } from './contexts/StatsContext';
import { Toaster } from 'react-hot-toast';
import './i18n';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <StatsProvider>
          <App />
          <Toaster position="top-right" />
        </StatsProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);