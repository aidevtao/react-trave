import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface ProductDetailState {
  loading: boolean,
  error: string | null,
  data: any,
}

const initialState: ProductDetailState = {
  loading: true,
  error: null,
  data: null,
}

export const getProductDetail = createAsyncThunk(
  'productDetail/getProductDetail',
  async (touristRouteId: string | undefined, thunkAPI) => {
    // thunkAPI.dispatch(productDetailSlice.actions.fetchStart())
    // try {
    //   const { data } = await axios.get('https://4c15ac23-f59b-4392-9db2-b9b3193aee9a.mock.pstmn.io')
    //   thunkAPI.dispatch(productDetailSlice.actions.fetchSuccess(data))
    // } catch (error: any) {
    //   thunkAPI.dispatch(productDetailSlice.actions.fetchFail(error))
    // }
    const { data } = await axios.get('https://b9059782-1b4b-4cd9-a826-2f87e5a7fe7e.mock.pstmn.io')
    return data
  }
)

export const productDetailSlice = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {

  },
  extraReducers: {
    [getProductDetail.pending.type]: (state) => {
      state.loading = true
    },
    [getProductDetail.fulfilled.type]: (state, action) => {
      state.data = action.payload
      state.loading = false
    },
    [getProductDetail.rejected.type]: (state, aciton: PayloadAction<string | null>) => {
      state.loading = false
      state.error = aciton.payload
    }
  }
})
