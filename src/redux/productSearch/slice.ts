import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface ProductSearchState {
  loading: boolean;
  error: string | null;
  data: any;
  pagination: any;
}

const initialState: ProductSearchState = {
  loading: true,
  error: null,
  data: null,
  pagination: null,
}

export const searchProduct = createAsyncThunk(
  'productSearch/searchProduct',
  async (paramaters: {
    keywords: string | undefined,
    nextPage: number | string,
    pageSize: number | string,
  }, thunkAPI) => {
    let url = `https://0315a129-ab46-4414-9f3e-39fd4b5dbe53.mock.pstmn.io?pageNumber=${paramaters.nextPage}&pageSize=${paramaters.pageSize}`;
    if (paramaters.keywords) {
      url += `&keyword=${paramaters.keywords}`;
    }
    const response = await axios.get(url);

    return {
      data: response.data.data,
      pagination: response.data.header['x-pagination'],
    };

  }
)

export const productSearchSlice = createSlice({
  name: 'productSearch',
  initialState,
  reducers: {

  },
  extraReducers: {
    [searchProduct.pending.type]: (state) => {
      state.loading = true
    },
    [searchProduct.fulfilled.type]: (state, action) => {

      state.data = action.payload.data
      state.pagination = action.payload.pagination
      state.loading = false
      state.error = null
    },
    [searchProduct.rejected.type]: (state, aciton: PayloadAction<string | null>) => {
      state.loading = false
      state.error = aciton.payload
    }
  }
})
