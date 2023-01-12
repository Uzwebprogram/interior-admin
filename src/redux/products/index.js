import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";

export const GetProducts = createAsyncThunk("Products/get", async () => {
  return await axios
    .get(`${API_URL}/categories`)
    .then((response) => response.data);
});
export const GetProduct = createAsyncThunk("Product/get", async () => {
  return await axios
    .get(`${API_URL}/products`)
    .then((response) => response.data);
});
export const PostProducts = createAsyncThunk("Products/post", async (body) => {
  return await axios.post(`${API_URL}/products`, body).then((res) =>{
    return res
  } );
});
export const UploadImage = createAsyncThunk("Products/upload", async (e) => {
  const formData = new FormData();
  formData.append("file", e.target.files[0]);
  formData.append("upload_preset", "jlgbmu1o");
  try {
    return await axios
      .post("https://api.cloudinary.com/v1_1/dnr6dsn29/upload", formData)
      .then((response) => response?.data.secure_url);
  } catch (error) {
    return error;
  }
});
export const DeleteProducts = createAsyncThunk(
  "Products/delete",
  async (id) => {
    return await axios
      .delete(`${API_URL}/products/${id}`)
      .then((response) => response.data);
  }
);
export const PutProducts = createAsyncThunk(
  "Products/put",
  async ({ body, id }) => {
    return await axios
      .put(`${API_URL}/products/${id}`, body)
      .then((response) => console.log(response.data));
  }
);
const ProductsSlice = createSlice({
  name: "Products",
  initialState: {
    getProducts: {
      Error: false,
      Loading: false,
      Success: false,
      Data: [],
    },
    getProduct: {
      Error: false,
      Loading: false,
      Success: false,
      Data: [],
    },
    postProducts: {
      Error: false,
      Loading: false,
      Success: false,
    },
    deleteProducts: {
      Error: false,
      Loading: false,
      Success: false,
    },
    putProducts: {
      Error: false,
      Loading: false,
      Success: false,
    },
    uploadProducts: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },

  },
  extraReducers: {
    [GetProducts.pending]: (state, action) => {
      state.getProducts.Loading = true;
    },
    [GetProducts.fulfilled]: (state, action) => {
      state.getProducts.Error = false;
      state.getProducts.Success = true;
      state.getProducts.Loading = false;
      state.getProducts.Data = action.payload;
    },
    [GetProducts.rejected]: (state, action) => {
      state.getProducts.Error = true;
      state.getProducts.Success = false;
      state.getProducts.Loading = false;
      state.getProducts.Data = [];
    },
    [GetProduct.pending]: (state, action) => {
      state.getProduct.Loading = true;
    },
    [GetProduct.fulfilled]: (state, action) => {
      state.getProduct.Error = false;
      state.getProduct.Success = true;
      state.getProduct.Loading = false;
      state.getProduct.Data = action.payload;
    },
    [GetProduct.rejected]: (state, action) => {
      state.getProduct.Error = true;
      state.getProduct.Success = false;
      state.getProduct.Loading = false;
      state.getProduct.Data = [];
    },
    [PostProducts.pending]: (state, action) => {
      state.postProducts.Loading = true;
    },
    [PostProducts.fulfilled]: (state, action) => {
      state.postProducts.Error = false;
      state.postProducts.Success = true;
      state.postProducts.Loading = false;
    },
    [PostProducts.rejected]: (state, action) => {
      state.postProducts.Error = true;
      state.postProducts.Success = false;
      state.postProducts.Loading = false;
    },
    [DeleteProducts.pending]: (state, action) => {
      state.deleteProducts.loading = true;
    },
    [DeleteProducts.fulfilled]: (state, action) => {
      state.deleteProducts.Error = false;
      state.deleteProducts.Success = true;
      state.deleteProducts.Loading = false;
    },
    [DeleteProducts.rejected]: (state, action) => {
      state.deleteProducts.Error = true;
      state.deleteProducts.Success = false;
      state.deleteProducts.Loading = false;
    },
    [PutProducts.pending]: (state, action) => {
      state.putProducts.Loading = true;
    },
    [PutProducts.fulfilled]: (state, action) => {
      state.putProducts.Error = false;
      state.putProducts.Success = true;
      state.putProducts.Loading = false;
    },
    [PutProducts.rejected]: (state, action) => {
      state.putProducts.Error = true;
      state.putProducts.Success = false;
      state.putProducts.Loading = false;
    },
    [UploadImage.pending]: (state, action) => {
      state.uploadProducts.Loading = true;
    },
    [UploadImage.fulfilled]: (state, action) => {
      state.uploadProducts.Error = false;
      state.uploadProducts.Success = true;
      state.uploadProducts.Loading = false;
      state.uploadProducts.data = action.payload;
    },
    [UploadImage.rejected]: (state, action) => {
      state.uploadProducts.Error = true;
      state.uploadProducts.Success = false;
      state.uploadProducts.Loading = false;
    },
  },
});

export const {} = ProductsSlice.actions;
export default ProductsSlice.reducer;
