import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultLayout from './components/layout/DefaultLayout';
import Dashboard from './pages/dashboard/Dashboard.page';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  {/* <App /> */}
  <DefaultLayout>
  <Dashboard/>
  </DefaultLayout>
  </BrowserRouter>
    
  </React.StrictMode>
);


