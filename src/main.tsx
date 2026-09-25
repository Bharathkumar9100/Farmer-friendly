import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log('Main.tsx starting...');
const rootElement = document.getElementById('root');
console.log('Root element:', rootElement);

if (rootElement) {
  const testMsg = document.getElementById('test-msg');
  if (testMsg) testMsg.remove();
  
  createRoot(rootElement).render(
    <App />
  );
  console.log('Render called');
} else {
  console.error('Root element not found!');
}
