import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { TaskProvider } from './Components/TaskContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </StrictMode>
);
