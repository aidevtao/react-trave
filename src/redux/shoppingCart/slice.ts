import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface ShoppingCartState {
  loading: boolean;
  error: string | null;
  items: any[];
}

const initialState: ShoppingCartState = {
  loading: true,
  error: null,
  items: [],
};

export const getShoppingCart = createAsyncThunk(
  "shoppingCart/getShoppingCart",
  async (jwt: string, thunkAPI) => {
    const { data } = await axios.get(
      `https://a4ea270b-392f-46ae-85ce-67d987eea002.mock.pstmn.io/shoppingCart`,
      {
        headers: {
          Authorization: `bearer ${jwt}`,
        },
      }
    );
    return data.shoppingCartItems;
  }
);

export const addShoppingCartItem = createAsyncThunk(
  "shoppingCart/addShoppingCartItem",
  async (parameters: { jwt: string; touristRouteId: string }, thunkAPI) => {
    const { data } = await axios.post(
      `https://a4ea270b-392f-46ae-85ce-67d987eea002.mock.pstmn.io/shoppingCart/item`,
      {
        touristRouteId: parameters.touristRouteId,
      },
      {
        headers: {
          Authorization: `bearer ${parameters.jwt}`,
        },
      }
    );
    return data.shoppingCartItems;
  }
);

export const checkout = createAsyncThunk(
  "shoppingCart/checkout",
  async (jwt: string, thunkAPI) => {
    const { data } = await axios.post(
      `https://a4ea270b-392f-46ae-85ce-67d987eea002.mock.pstmn.io/shoppingCart/checkout`,
      null,
      {
        headers: {
          Authorization: `bearer ${jwt}`,
        },
      }
    );
    return data;
  }
);

export const clearShoppingCartItem = createAsyncThunk(
  "shoppingCart/clearShoppingCartItem",
  async (parameters: { jwt: string; itemIds: number[] }, thunkAPI) => {
    return await axios.delete(
      `https://a4ea270b-392f-46ae-85ce-67d987eea002.mock.pstmn.io/shoppingCart/items/(${parameters.itemIds.join(
        ","
      )})`,
      {
        headers: {
          Authorization: `bearer ${parameters.jwt}`,
        },
      }
    );
  }
);

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {},
  extraReducers: {
    [getShoppingCart.pending.type]: (state) => {
      state.loading = true;
    },
    [getShoppingCart.fulfilled.type]: (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getShoppingCart.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    [addShoppingCartItem.pending.type]: (state) => {
      state.loading = true;
    },
    [addShoppingCartItem.fulfilled.type]: (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },
    [addShoppingCartItem.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    [clearShoppingCartItem.pending.type]: (state) => {
      state.loading = true;
    },
    [clearShoppingCartItem.fulfilled.type]: (state) => {
      state.items = [];
      state.loading = false;
      state.error = null;
    },
    [clearShoppingCartItem.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
    [checkout.pending.type]: (state) => {
      state.loading = true;
    },
    [checkout.fulfilled.type]: (state, action) => {
      state.items = [];
      state.loading = false;
      state.error = null;
    },
    [checkout.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
