import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  products: [],
  productUpdates: [],
  carts: [],
  amount: 0,
  total: 0,
};

export const getProducts = createAsyncThunk("products/getProducts", async (category) => {
  const response = await axios.get(`https://fakestoreapi.com/products`);
  return response.data.map((item) => {
    if (!item.quantity) {
      item["stock"] = 10;
    }
    return item;
  });
});

export const updateProducts = createAsyncThunk("products/updateProduct", async ({ id, price }, thunkAPI) => {
  const response = await axios.patch(`https://fakestoreapi.com/products/${id}`, {
    title: "test product",
    price: 13.5,
    description: "lorem ipsum set",
    image: "https://i.pravatar.cc",
    category: "electronic",
  });
  return response.data;
});

const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    addCart: (state, action) => {
      console.log("🚀 ~ file: productSlice.js ~ line 39 ~ action", action);

      state.carts.push(action.payload);
    },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [updateProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      const { payload } = action;
      console.log(payload);
      const result = state.productUpdates.some((product) => product.id === payload.id);
      if (!result) {
        state.productUpdates.push(payload);
      }
    },
  },
});

export const { addCart } = productSlice.actions;
export default productSlice.reducer;
