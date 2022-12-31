import React, { FC, useEffect } from 'react';
import { DetailPage, HomePage, NotFoundPage, RegisterPage, SignInPage, SearchPage, ShoppingCartPage } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styles from './App.module.css';
import { getShoppingCart } from './redux/shoppingCart/slice'
import { useSelector } from './redux/hooks';
import { useDispatch } from 'react-redux';

const App: FC = () => {
  const jwt = useSelector((s) => s.user.token) as string
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getShoppingCart(jwt))
  }, [jwt, dispatch])

  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/detail/:touristRouteId' element={<DetailPage />} />
          <Route path='/search/:keywords' element={<SearchPage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/cart' element={<ShoppingCartPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
