import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { productDetailSlice } from './productDetail/slice'
import { productSearchSlice } from './productSearch/slice'

const rootReducer = combineReducers({
  productDetail: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer
})
// const store = createStore(rootReducers, applyMiddleware(thunk))
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
    serializableCheck: false,
  })],
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>

export default store