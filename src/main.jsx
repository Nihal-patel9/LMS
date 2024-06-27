import './index.css' 

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-dom/client'
import { Provider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

import App from './App.jsx'
import store from './Redux/store.js'




ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store ={store}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
   
  
)
