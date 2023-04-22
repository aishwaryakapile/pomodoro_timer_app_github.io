import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <BrowserRouter>
  <ChakraProvider>
  <App />
  </ChakraProvider>
  </BrowserRouter>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
const firebaseConfig = {
  apiKey: "AIzaSyDn95inLB3wDES-4rWkbPZBSW8qDNYCWPA",
  authDomain: "pomodrotimerapp.firebaseapp.com",
  projectId: "pomodrotimerapp",
  storageBucket: "pomodrotimerapp.appspot.com",
  messagingSenderId: "784352916772",
  appId: "1:784352916772:web:1e9e6ac28389c94ad1efb1"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
