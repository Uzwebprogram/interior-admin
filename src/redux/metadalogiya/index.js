import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const MetadalogiyaGet = createAsyncThunk("Metadalogiya/get" , async() =>{
    return await  axios.get(`${API_URL}/metadalogia`)
    .then(res => res.data)
})
export const MetadalogiyaPost = createAsyncThunk("Metadalogiya/post" ,  async(body) =>{
    return await axios.post(`${API_URL}/metadalogia` , body)
    .then(res => res)
})
export const MetadalogiyaPut = createAsyncThunk("Metadalogiya/put" , async({body , id}) =>{
    return await axios.put(`${API_URL}/metadalogia/${id}` , body)
    .then(res => res)
})
export const MetadalogiyaDelete = createAsyncThunk("Metadalogiya/put" , async(id) =>{
    return await axios.delete(`${API_URL}/metadalogia/${id}`)
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
const MetadalogiyaSlice = createSlice({
    name : "Metadalogiya",
    initialState:{
        MetadalogiyaGet:{
            Loading  : false,
            Success : false, 
            Error : false,
            data : []
        },
        MetadalogiyaPost:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        MetadalogiyaPut:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        MetadalogiyaDelete:{
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
        [MetadalogiyaGet.pending]:(state , action) =>{
            state.MetadalogiyaGet.Loading = true   
        },
        [MetadalogiyaGet.fulfilled]:(state , action) =>{
            state.MetadalogiyaGet.Loading = false
            state.MetadalogiyaGet.Success = true 
            state.MetadalogiyaGet.Error = false
            state.MetadalogiyaGet.data = action.payload
        },
        [MetadalogiyaGet.rejected]:(state , action) =>{
            state.MetadalogiyaGet.Loading = false
            state.MetadalogiyaGet.Success = false 
            state.MetadalogiyaGet.Error = true
            state.MetadalogiyaGet.data = []
        },
        [MetadalogiyaPost.pending]:(state , action) =>{
            state.MetadalogiyaPost.Loading = true   
        },
        [MetadalogiyaPost.fulfilled]:(state , action) =>{
            state.MetadalogiyaPost.Loading = false
            state.MetadalogiyaPost.Success = true 
            state.MetadalogiyaPost.Error = false
        },
        [MetadalogiyaPost.rejected]:(state , action) =>{
            state.MetadalogiyaPost.Loading = false
            state.MetadalogiyaPost.Success = false 
            state.MetadalogiyaPost.Error = true
        },
        [MetadalogiyaDelete.pending]:(state , action) =>{
            state.MetadalogiyaDelete.Loading = true   
        },
        [MetadalogiyaDelete.fulfilled]:(state , action) =>{
            state.MetadalogiyaDelete.Loading = false
            state.MetadalogiyaDelete.Success = true 
            state.MetadalogiyaDelete.Error = false
        },
        [MetadalogiyaDelete.rejected]:(state , action) =>{
            state.MetadalogiyaDelete.Loading = false
            state.MetadalogiyaDelete.Success = false 
            state.MetadalogiyaDelete.Error = true
        },
        [MetadalogiyaPut.pending]:(state , action) =>{
            state.MetadalogiyaPut.Loading = true   
        },
        [MetadalogiyaPut.fulfilled]:(state , action) =>{
            state.MetadalogiyaPut.Loading = false
            state.MetadalogiyaPut.Success = true 
            state.MetadalogiyaPut.Error = false
        },
        [MetadalogiyaPut.rejected]:(state , action) =>{
            state.MetadalogiyaPut.Loading = false
            state.MetadalogiyaPut.Success = false 
            state.MetadalogiyaPut.Error = true
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

export const {} = MetadalogiyaSlice.actions;
export default MetadalogiyaSlice.reducer;