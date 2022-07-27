import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Button from './components/Button';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div style={{backgroundColor:"pink"}}>
      <Header title="title from index.js as a property" button1="hello"></Header>
    </div>
    <Header />
    <Button one="random" two="red" three="blue" four="steel"
    />

  </React.StrictMode>
);

reportWebVitals();
