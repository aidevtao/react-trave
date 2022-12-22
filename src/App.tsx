import React from 'react';
import { DetailPage, HomePage, NotFoundPage, RegisterPage, SignInPage, SearchPage } from './pages'
import styles from './App.module.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/detail/:touristRouteId' element={<DetailPage />} />
          <Route path='/search/:keywords' element={<SearchPage />} />
          <Route path='/search/' element={<SearchPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
