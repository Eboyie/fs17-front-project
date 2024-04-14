import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { type CartState } from '@/utils';

const initialState: CartState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
  loading: false,
  error: '',
};

const apiUrl = 'https://fakestoreapi.com/';

export const getProducts = createAsyncThunk('product/getProducts', async () => {
  try {
    const resp = await axios.get(apiUrl);
    return resp.data;
  } catch (error) {}
});

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.cartItems = action.payload;
      })
      .addCase(getProducts.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.cartItems = [];
      });
  },
});

export default cartSlice.reducer;
