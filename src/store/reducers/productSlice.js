import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  status: "idle",
  error: null,
};

/**
 * createAsyncThunk - used for fetching the products list asynchronously
 * having two arguments -
 *  - string: used as the prefix for generated action types
 *  - payload creator: a callback fn that should return PRomise containing some data, or a rejected Promise with an error
 */
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
   
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched products to the array
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllProducts = (state) => state.products.products;

// export const selectProductById = (state, id) =>
// state.products.products.find(product => product.id === id);

export default productSlice.reducer;
