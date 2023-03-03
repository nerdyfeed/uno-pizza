import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';

import './scss/app.scss';

const Cart = React.lazy(() => import('./pages/Cart'));
const NotFound = React.lazy(() => import('./pages/NotFound'));


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={
            <Suspense fallback={<div>Загружаем корзину...</div>}>
              <Cart />
            </Suspense>
           } />
          <Route path="*" element={
          <Suspense fallback={<div>Загружаем...</div>}>
              <NotFound />
            </Suspense>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;
