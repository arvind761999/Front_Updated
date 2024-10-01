import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './App.css';
import './index.css';

function App() {
  return (
   <BrowserRouter>
     <Layout />
   </BrowserRouter>
  );
}

export default App;
