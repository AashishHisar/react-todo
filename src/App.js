import './App.css';
import React from 'react';
import BrowserRouter from './components/FormComponent.js';
import SuccessComponent from './components/SuccessComponent.js';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import FormComponent from './components/FormComponent.js';

function App() {
  return (
    <div className="container">
      {
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<FormComponent />} />
              <Route path="/success-page" element={<SuccessComponent />} />
            </Routes>
          </BrowserRouter>
      }
    </div>

  );
}

export default App;
