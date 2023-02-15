import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const VoprosGet = createAsyncThunk("Vopros/get" , async() =>{
    return await  axios.get(`${API_URL}/vopros`)
    .then(res => res.data)
})
export const VoprosPost = createAsyncThunk("Vopros/post" ,  async(body) =>{
    return await axios.post(`${API_URL}/vopros` , body)
    .then(res => res)
})
export const VoprosPut = createAsyncThunk("Vopros/put" , async({body , id}) =>{
    return await axios.put(`${API_URL}/vopros/${id}` , body)
    .then(res => res)
})
export const VoprosDelete = createAsyncThunk("Vopros/put" , async(id) =>{
    return await axios.delete(`${API_URL}/vopros/${id}`)
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
const VoprosSlice = createSlice({
    name : "Vopros",
    initialState:{
        VoprosGet:{
            Loading  : false,
            Success : false, 
            Error : false,
            data : []
        },
        VoprosPost:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        VoprosPut:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        VoprosDelete:{
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
        [VoprosGet.pending]:(state , action) =>{
            state.VoprosGet.Loading = true   
        },
        [VoprosGet.fulfilled]:(state , action) =>{
            state.VoprosGet.Loading = false
            state.VoprosGet.Success = true 
            state.VoprosGet.Error = false
            state.VoprosGet.data = action.payload
        },
        [VoprosGet.rejected]:(state , action) =>{
            state.VoprosGet.Loading = false
            state.VoprosGet.Success = false 
            state.VoprosGet.Error = true
            state.VoprosGet.data = []
        },
        [VoprosPost.pending]:(state , action) =>{
            state.VoprosPost.Loading = true   
        },
        [VoprosPost.fulfilled]:(state , action) =>{
            state.VoprosPost.Loading = false
            state.VoprosPost.Success = true 
            state.VoprosPost.Error = false
        },
        [VoprosPost.rejected]:(state , action) =>{
            state.VoprosPost.Loading = false
            state.VoprosPost.Success = false 
            state.VoprosPost.Error = true
        },
        [VoprosDelete.pending]:(state , action) =>{
            state.VoprosDelete.Loading = true   
        },
        [VoprosDelete.fulfilled]:(state , action) =>{
            state.VoprosDelete.Loading = false
            state.VoprosDelete.Success = true 
            state.VoprosDelete.Error = false
        },
        [VoprosDelete.rejected]:(state , action) =>{
            state.VoprosDelete.Loading = false
            state.VoprosDelete.Success = false 
            state.VoprosDelete.Error = true
        },
        [VoprosPut.pending]:(state , action) =>{
            state.VoprosPut.Loading = true   
        },
        [VoprosPut.fulfilled]:(state , action) =>{
            state.VoprosPut.Loading = false
            state.VoprosPut.Success = true 
            state.VoprosPut.Error = false
        },
        [VoprosPut.rejected]:(state , action) =>{
            state.VoprosPut.Loading = false
            state.VoprosPut.Success = false 
            state.VoprosPut.Error = true
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

export const {} = VoprosSlice.actions;
export default VoprosSlice.reducer;