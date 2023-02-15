import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const RenkingiGet = createAsyncThunk("Renkingi/get" , async() =>{
    return await  axios.get(`${API_URL}/renkingi`)
    .then(res => res.data)
})
export const RenkingiPost = createAsyncThunk("Renkingi/post" ,  async(body) =>{
    return await axios.post(`${API_URL}/renkingi` , body)
    .then(res => res)
})
export const RenkingiPut = createAsyncThunk("Renkingi/put" , async({body , id}) =>{
    return await axios.put(`${API_URL}/renkingi/${id}` , body)
    .then(res => res)
})
export const RenkingiDelete = createAsyncThunk("Renkingi/put" , async(id) =>{
    return await axios.delete(`${API_URL}/renkingi/${id}`)
    .then(res => res)
})
export const UploadPdf = createAsyncThunk("Pdf/upload" , async (e) =>{
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
const RenkingiSlice = createSlice({
    name : "Renkingi",
    initialState:{
        RenkingiGet:{
            Loading  : false,
            Success : false, 
            Error : false,
            data : []
        },
        RenkingiPost:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        RenkingiPut:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        RenkingiDelete:{
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
        [RenkingiGet.pending]:(state , action) =>{
            state.RenkingiGet.Loading = true   
        },
        [RenkingiGet.fulfilled]:(state , action) =>{
            state.RenkingiGet.Loading = false
            state.RenkingiGet.Success = true 
            state.RenkingiGet.Error = false
            state.RenkingiGet.data = action.payload
        },
        [RenkingiGet.rejected]:(state , action) =>{
            state.RenkingiGet.Loading = false
            state.RenkingiGet.Success = false 
            state.RenkingiGet.Error = true
            state.RenkingiGet.data = []
        },
        [RenkingiPost.pending]:(state , action) =>{
            state.RenkingiPost.Loading = true   
        },
        [RenkingiPost.fulfilled]:(state , action) =>{
            state.RenkingiPost.Loading = false
            state.RenkingiPost.Success = true 
            state.RenkingiPost.Error = false
        },
        [RenkingiPost.rejected]:(state , action) =>{
            state.RenkingiPost.Loading = false
            state.RenkingiPost.Success = false 
            state.RenkingiPost.Error = true
        },
        [RenkingiDelete.pending]:(state , action) =>{
            state.RenkingiDelete.Loading = true   
        },
        [RenkingiDelete.fulfilled]:(state , action) =>{
            state.RenkingiDelete.Loading = false
            state.RenkingiDelete.Success = true 
            state.RenkingiDelete.Error = false
        },
        [RenkingiDelete.rejected]:(state , action) =>{
            state.RenkingiDelete.Loading = false
            state.RenkingiDelete.Success = false 
            state.RenkingiDelete.Error = true
        },
        [RenkingiPut.pending]:(state , action) =>{
            state.RenkingiPut.Loading = true   
        },
        [RenkingiPut.fulfilled]:(state , action) =>{
            state.RenkingiPut.Loading = false
            state.RenkingiPut.Success = true 
            state.RenkingiPut.Error = false
        },
        [RenkingiPut.rejected]:(state , action) =>{
            state.RenkingiPut.Loading = false
            state.RenkingiPut.Success = false 
            state.RenkingiPut.Error = true
        },
        [UploadPdf.pending]:(state , action) =>{
            state.uploadImages.Loading = true
        },
        [UploadPdf.fulfilled]:(state , action) =>{
            state.uploadImages.Error = false
            state.uploadImages.Success = true
            state.uploadImages.Loading = false
            state.uploadImages.data = action.payload  
        },
        [UploadPdf.rejected]:(state , action) =>{
            state.uploadImages.Error = true
            state.uploadImages.Success = false
            state.uploadImages.Loading = false
        }
    }
})

export const {} = RenkingiSlice.actions;
export default RenkingiSlice.reducer;