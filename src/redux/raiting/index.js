import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const RaitingGet = createAsyncThunk("Raiting/get" , async() =>{
    return await  axios.get(`${API_URL}/raiting`)
    .then(res => res.data)
})
export const RaitingPost = createAsyncThunk("Raiting/post" ,  async(body) =>{
    return await axios.post(`${API_URL}/raiting` , body)
    .then(res => res)
})
export const RaitingPut = createAsyncThunk("Raiting/put" , async({body , id}) =>{
    return await axios.put(`${API_URL}/raiting/${id}` , body)
    .then(res => res)
})
export const RaitingDelete = createAsyncThunk("Raiting/put" , async(id) =>{
    return await axios.delete(`${API_URL}/raiting/${id}`)
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
const RaitingSlice = createSlice({
    name : "Raiting",
    initialState:{
        RaitingGet:{
            Loading  : false,
            Success : false, 
            Error : false,
            data : []
        },
        RaitingPost:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        RaitingPut:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        RaitingDelete:{
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
        [RaitingGet.pending]:(state , action) =>{
            state.RaitingGet.Loading = true   
        },
        [RaitingGet.fulfilled]:(state , action) =>{
            state.RaitingGet.Loading = false
            state.RaitingGet.Success = true 
            state.RaitingGet.Error = false
            state.RaitingGet.data = action.payload
        },
        [RaitingGet.rejected]:(state , action) =>{
            state.RaitingGet.Loading = false
            state.RaitingGet.Success = false 
            state.RaitingGet.Error = true
            state.RaitingGet.data = []
        },
        [RaitingPost.pending]:(state , action) =>{
            state.RaitingPost.Loading = true   
        },
        [RaitingPost.fulfilled]:(state , action) =>{
            state.RaitingPost.Loading = false
            state.RaitingPost.Success = true 
            state.RaitingPost.Error = false
        },
        [RaitingPost.rejected]:(state , action) =>{
            state.RaitingPost.Loading = false
            state.RaitingPost.Success = false 
            state.RaitingPost.Error = true
        },
        [RaitingDelete.pending]:(state , action) =>{
            state.RaitingDelete.Loading = true   
        },
        [RaitingDelete.fulfilled]:(state , action) =>{
            state.RaitingDelete.Loading = false
            state.RaitingDelete.Success = true 
            state.RaitingDelete.Error = false
        },
        [RaitingDelete.rejected]:(state , action) =>{
            state.RaitingDelete.Loading = false
            state.RaitingDelete.Success = false 
            state.RaitingDelete.Error = true
        },
        [RaitingPut.pending]:(state , action) =>{
            state.RaitingPut.Loading = true   
        },
        [RaitingPut.fulfilled]:(state , action) =>{
            state.RaitingPut.Loading = false
            state.RaitingPut.Success = true 
            state.RaitingPut.Error = false
        },
        [RaitingPut.rejected]:(state , action) =>{
            state.RaitingPut.Loading = false
            state.RaitingPut.Success = false 
            state.RaitingPut.Error = true
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

export const {} = RaitingSlice.actions;
export default RaitingSlice.reducer;