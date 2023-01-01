import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { productDetailSlice } from './productDetail/slice'
import { productSearchSlice } from './productSearch/slice'
import { userSlice } from './user/slice'
import { shoppingCartSlice } from "./shoppingCart/slice";
import { orderSlice } from "./order/slice";

const rootReducer = combineReducers({
  productDetail: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer,
  user: userSlice.reducer,
  shoppingCart: shoppingCartSlice.reducer,
  order: orderSlice.reducer
})
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ['user'],
  // blocklist: ['productDetail', 'productSearch']
};
const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = createStore(rootReducers, applyMiddleware(thunk))
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
    serializableCheck: false,
  })],
  devTools: true,
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>

export default store