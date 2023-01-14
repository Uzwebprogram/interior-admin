import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const AnalitikaGet = createAsyncThunk("analitika/get" , async() =>{
    return await  axios.get(`${API_URL}/analitika`)
    .then(res => res.data)
})
export const AnalitikaPost = createAsyncThunk("analitika/post" ,  async(body) =>{
    return await axios.post(`${API_URL}/analitika` , body)
    .then(res => res)
})
export const AnalitikaPut = createAsyncThunk("analitika/put" , async({body , id}) =>{
    return await axios.put(`${API_URL}/analitika/${id}` , body)
    .then(res => res)
})
export const AnalitikaDelete = createAsyncThunk("analitika/put" , async(id) =>{
    return await axios.delete(`${API_URL}/analitika/${id}`)
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
const AnalitikaSlice = createSlice({
    name : "analitika",
    initialState:{
        analitikaGet:{
            Loading  : false,
            Success : false, 
            Error : false,
            data : []
        },
        analitikaPost:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        analitikaPut:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        analitikaDelete:{
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
        [AnalitikaGet.pending]:(state , action) =>{
            state.analitikaGet.Loading = true   
        },
        [AnalitikaGet.fulfilled]:(state , action) =>{
            state.analitikaGet.Loading = false
            state.analitikaGet.Success = true 
            state.analitikaGet.Error = false
            state.analitikaGet.data = action.payload
        },
        [AnalitikaGet.rejected]:(state , action) =>{
            state.analitikaGet.Loading = false
            state.analitikaGet.Success = false 
            state.analitikaGet.Error = true
            state.analitikaGet.data = []
        },
        [AnalitikaPost.pending]:(state , action) =>{
            state.analitikaPost.Loading = true   
        },
        [AnalitikaPost.fulfilled]:(state , action) =>{
            state.analitikaPost.Loading = false
            state.analitikaPost.Success = true 
            state.analitikaPost.Error = false
        },
        [AnalitikaPost.rejected]:(state , action) =>{
            state.analitikaPost.Loading = false
            state.analitikaPost.Success = false 
            state.analitikaPost.Error = true
        },
        [AnalitikaDelete.pending]:(state , action) =>{
            state.analitikaDelete.Loading = true   
        },
        [AnalitikaDelete.fulfilled]:(state , action) =>{
            state.analitikaDelete.Loading = false
            state.analitikaDelete.Success = true 
            state.analitikaDelete.Error = false
        },
        [AnalitikaDelete.rejected]:(state , action) =>{
            state.analitikaDelete.Loading = false
            state.analitikaDelete.Success = false 
            state.analitikaDelete.Error = true
        },
        [AnalitikaPut.pending]:(state , action) =>{
            state.analitikaPut.Loading = true   
        },
        [AnalitikaPut.fulfilled]:(state , action) =>{
            state.analitikaPut.Loading = false
            state.analitikaPut.Success = true 
            state.analitikaPut.Error = false
        },
        [AnalitikaPut.rejected]:(state , action) =>{
            state.analitikaPut.Loading = false
            state.analitikaPut.Success = false 
            state.analitikaPut.Error = true
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

export const {} = AnalitikaSlice.actions;
export default AnalitikaSlice.reducer;