import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const UsersGet = createAsyncThunk("Users/get" , async() =>{
    return await  axios.get(`${API_URL}/users`)
    .then(res => res.data)
})
export const UsersPost = createAsyncThunk("Users/post" ,  async(body) =>{
    return await axios.post(`${API_URL}/Users` , body)
    .then(res => res)
})
export const UsersPut = createAsyncThunk("Users/put" , async({body , id}) =>{
    return await axios.put(`${API_URL}/Users/${id}` , body)
    .then(res => res)
})
export const UsersDelete = createAsyncThunk("Users/put" , async(id) =>{
    return await axios.delete(`${API_URL}/Users/${id}`)
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
const UsersSlice = createSlice({
    name : "Users",
    initialState:{
        UsersGet:{
            Loading  : false,
            Success : false, 
            Error : false,
            data : []
        },
        UsersPost:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        UsersPut:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        UsersDelete:{
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
        [UsersGet.pending]:(state , action) =>{
            state.UsersGet.Loading = true   
        },
        [UsersGet.fulfilled]:(state , action) =>{
            state.UsersGet.Loading = false
            state.UsersGet.Success = true 
            state.UsersGet.Error = false
            state.UsersGet.data = action.payload
        },
        [UsersGet.rejected]:(state , action) =>{
            state.UsersGet.Loading = false
            state.UsersGet.Success = false 
            state.UsersGet.Error = true
            state.UsersGet.data = []
        },
        [UsersPost.pending]:(state , action) =>{
            state.UsersPost.Loading = true   
        },
        [UsersPost.fulfilled]:(state , action) =>{
            state.UsersPost.Loading = false
            state.UsersPost.Success = true 
            state.UsersPost.Error = false
        },
        [UsersPost.rejected]:(state , action) =>{
            state.UsersPost.Loading = false
            state.UsersPost.Success = false 
            state.UsersPost.Error = true
        },
        [UsersDelete.pending]:(state , action) =>{
            state.UsersDelete.Loading = true   
        },
        [UsersDelete.fulfilled]:(state , action) =>{
            state.UsersDelete.Loading = false
            state.UsersDelete.Success = true 
            state.UsersDelete.Error = false
        },
        [UsersDelete.rejected]:(state , action) =>{
            state.UsersDelete.Loading = false
            state.UsersDelete.Success = false 
            state.UsersDelete.Error = true
        },
        [UsersPut.pending]:(state , action) =>{
            state.UsersPut.Loading = true   
        },
        [UsersPut.fulfilled]:(state , action) =>{
            state.UsersPut.Loading = false
            state.UsersPut.Success = true 
            state.UsersPut.Error = false
        },
        [UsersPut.rejected]:(state , action) =>{
            state.UsersPut.Loading = false
            state.UsersPut.Success = false 
            state.UsersPut.Error = true
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

export const {} = UsersSlice.actions;
export default UsersSlice.reducer;