import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Overview from './components/Overview';
import About from './components/About'
import Edit from './components/Edit'

import Layout from './Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
          <Route index element={<Add/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>

          <Route path='/overview' element={<Overview/>}/>
          <Route path='/about' element={<About/>}/>

      </Route>  
    </Routes>
    </BrowserRouter>
);

reportWebVitals();
