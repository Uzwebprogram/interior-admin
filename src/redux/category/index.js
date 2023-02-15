import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const CategoriesGet = createAsyncThunk("Categories/get" , async() =>{
    return await  axios.get(`${API_URL}/categories`)
    .then(res => res.data)
})
export const CategoriesPost = createAsyncThunk("Categories/post" ,  async(body) =>{
    return await axios.post(`${API_URL}/categories` , body)
    .then(res => res)
})
export const CategoriesPut = createAsyncThunk("Categories/put" , async({body , id}) =>{
    return await axios.put(`${API_URL}/categories/${id}` , body)
    .then(res => res)
})
export const CategoriesDelete = createAsyncThunk("Categories/put" , async(id) =>{
    return await axios.delete(`${API_URL}/categories/${id}`)
    .then(res => res)
})
export const UploadImage = createAsyncThunk("Images/upload" , async (e) =>{
    const formData = new FormData()
    formData.append("file" , e.target.files[0])
    formData.append("upload_preset" , "iq8jsr28")
        try{
        return await axios.post("https://api.cloudinary.com/v1_1/drxqomgmy/upload" , formData)
        .then(response => response?.data.secure_url)
        }catch(error){
           return error
        }
})
const CategoriesSlice = createSlice({
    name : "Categories",
    initialState:{
        CategoriesGet:{
            Loading  : false,
            Success : false, 
            Error : false,
            data : []
        },
        CategoriesPost:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        CategoriesPut:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        CategoriesDelete:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        uploadImages: {
            Error : false,
            Loading : false,
            Success : false,
            data : "",
        },
    },
    extraReducers:{
        [CategoriesGet.pending]:(state , action) =>{
            state.CategoriesGet.Loading = true   
        },
        [CategoriesGet.fulfilled]:(state , action) =>{
            state.CategoriesGet.Loading = false
            state.CategoriesGet.Success = true 
            state.CategoriesGet.Error = false
            state.CategoriesGet.data = action.payload
        },
        [CategoriesGet.rejected]:(state , action) =>{
            state.CategoriesGet.Loading = false
            state.CategoriesGet.Success = false 
            state.CategoriesGet.Error = true
            state.CategoriesGet.data = []
        },
        [CategoriesPost.pending]:(state , action) =>{
            state.CategoriesPost.Loading = true   
        },
        [CategoriesPost.fulfilled]:(state , action) =>{
            state.CategoriesPost.Loading = false
            state.CategoriesPost.Success = true 
            state.CategoriesPost.Error = false
        },
        [CategoriesPost.rejected]:(state , action) =>{
            state.CategoriesPost.Loading = false
            state.CategoriesPost.Success = false 
            state.CategoriesPost.Error = true
        },
        [CategoriesDelete.pending]:(state , action) =>{
            state.CategoriesDelete.Loading = true   
        },
        [CategoriesDelete.fulfilled]:(state , action) =>{
            state.CategoriesDelete.Loading = false
            state.CategoriesDelete.Success = true 
            state.CategoriesDelete.Error = false
        },
        [CategoriesDelete.rejected]:(state , action) =>{
            state.CategoriesDelete.Loading = false
            state.CategoriesDelete.Success = false 
            state.CategoriesDelete.Error = true
        },
        [CategoriesPut.pending]:(state , action) =>{
            state.CategoriesPut.Loading = true   
        },
        [CategoriesPut.fulfilled]:(state , action) =>{
            state.CategoriesPut.Loading = false
            state.CategoriesPut.Success = true 
            state.CategoriesPut.Error = false
        },
        [CategoriesPut.rejected]:(state , action) =>{
            state.CategoriesPut.Loading = false
            state.CategoriesPut.Success = false 
            state.CategoriesPut.Error = true
        },
        [UploadImage.pending]:(state , action) =>{
            state.uploadImages.Loading = true
        },
        [UploadImage.fulfilled]:(state , action) =>{
            state.uploadImages.Error = false
            state.uploadImages.Success = true
            state.uploadImages.Loading = false
            state.uploadImages.data = action.payload  
        },
        [UploadImage.rejected]:(state , action) =>{
            state.uploadImages.Error = true
            state.uploadImages.Success = false
            state.uploadImages.Loading = false
        }
    }
})

export const {} = CategoriesSlice.actions;
export default CategoriesSlice.reducer;