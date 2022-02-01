import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

import './index.css';
import App from './components/App';
import Reslove from './components/Reslove';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path=':linkId' element={<Reslove />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
