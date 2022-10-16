import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Posts from './components/Posts';
import reportWebVitals from './reportWebVitals';
import CryptoSection from './components/Cryptosection';
import Count from './components/Count';
import Time from './components/Time';
import Cryptoanalysis from './components/Cryptoanalysis';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Time />
    <Header />
    <Count />
    <CryptoSection />
    <Cryptoanalysis />
    <Posts />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
