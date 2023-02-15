import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const AboutGet = createAsyncThunk("About/get" , async() =>{
    return await  axios.get(`${API_URL}/about`)
    .then(res => res.data)
})
export const AboutPost = createAsyncThunk("About/post" ,  async(body) =>{
    return await axios.post(`${API_URL}/about` , body)
    .then(res => res)
})
export const AboutPut = createAsyncThunk("About/put" , async({body , id}) =>{
    return await axios.put(`${API_URL}/about/${id}` , body)
    .then(res => res)
})
export const AboutDelete = createAsyncThunk("About/delete" , async(id) =>{
    return await axios.delete(`${API_URL}/about/${id}`)
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
const AboutSlice = createSlice({
    name : "About",
    initialState:{
        AboutGet:{
            Loading  : false,
            Success : false, 
            Error : false,
            data : []
        },
        AboutPost:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        AboutPut:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        AboutDelete:{
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
        [AboutGet.pending]:(state , action) =>{
            state.AboutGet.Loading = true   
        },
        [AboutGet.fulfilled]:(state , action) =>{
            state.AboutGet.Loading = false
            state.AboutGet.Success = true 
            state.AboutGet.Error = false
            state.AboutGet.data = action.payload
        },
        [AboutGet.rejected]:(state , action) =>{
            state.AboutGet.Loading = false
            state.AboutGet.Success = false 
            state.AboutGet.Error = true
            state.AboutGet.data = []
        },
        [AboutPost.pending]:(state , action) =>{
            state.AboutPost.Loading = true   
        },
        [AboutPost.fulfilled]:(state , action) =>{
            state.AboutPost.Loading = false
            state.AboutPost.Success = true 
            state.AboutPost.Error = false
        },
        [AboutPost.rejected]:(state , action) =>{
            state.AboutPost.Loading = false
            state.AboutPost.Success = false 
            state.AboutPost.Error = true
        },
        [AboutDelete.pending]:(state , action) =>{
            state.AboutDelete.Loading = true   
        },
        [AboutDelete.fulfilled]:(state , action) =>{
            state.AboutDelete.Loading = false
            state.AboutDelete.Success = true 
            state.AboutDelete.Error = false
        },
        [AboutDelete.rejected]:(state , action) =>{
            state.AboutDelete.Loading = false
            state.AboutDelete.Success = false 
            state.AboutDelete.Error = true
        },
        [AboutPut.pending]:(state , action) =>{
            state.AboutPut.Loading = true   
        },
        [AboutPut.fulfilled]:(state , action) =>{
            state.AboutPut.Loading = false
            state.AboutPut.Success = true 
            state.AboutPut.Error = false
        },
        [AboutPut.rejected]:(state , action) =>{
            state.AboutPut.Loading = false
            state.AboutPut.Success = false 
            state.AboutPut.Error = true
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

export const {} = AboutSlice.actions;
export default AboutSlice.reducer;