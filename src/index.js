import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./styles.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
//import bootstrap stuff
import 'bootstrap/dist/css/bootstrap.min.css';
import PreloadImages from './components/PreloadImages';


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  
  <React.StrictMode>

    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
    </head>


  <App />
  <PreloadImages />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
