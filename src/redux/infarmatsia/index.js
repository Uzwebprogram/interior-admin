import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const InfarmatsiaGet = createAsyncThunk("Infarmatsia/get" , async() =>{
    return await  axios.get(`${API_URL}/infarmatsia`)
    .then(res => res.data)
})
export const InfarmatsiaPost = createAsyncThunk("Infarmatsia/post" ,  async(body) =>{
    return await axios.post(`${API_URL}/infarmatsia` , body)
    .then(res => res)
})
export const InfarmatsiaPut = createAsyncThunk("Infarmatsia/put" , async({body , id}) =>{
    return await axios.put(`${API_URL}/infarmatsia/${id}` , body)
    .then(res => res)
})
export const InfarmatsiaDelete = createAsyncThunk("Infarmatsia/put" , async(id) =>{
    return await axios.delete(`${API_URL}/infarmatsia/${id}`)
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
const InfarmatsiaSlice = createSlice({
    name : "Infarmatsia",
    initialState:{
        InfarmatsiaGet:{
            Loading  : false,
            Success : false, 
            Error : false,
            data : []
        },
        InfarmatsiaPost:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        InfarmatsiaPut:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        InfarmatsiaDelete:{
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
        [InfarmatsiaGet.pending]:(state , action) =>{
            state.InfarmatsiaGet.Loading = true   
        },
        [InfarmatsiaGet.fulfilled]:(state , action) =>{
            state.InfarmatsiaGet.Loading = false
            state.InfarmatsiaGet.Success = true 
            state.InfarmatsiaGet.Error = false
            state.InfarmatsiaGet.data = action.payload
        },
        [InfarmatsiaGet.rejected]:(state , action) =>{
            state.InfarmatsiaGet.Loading = false
            state.InfarmatsiaGet.Success = false 
            state.InfarmatsiaGet.Error = true
            state.InfarmatsiaGet.data = []
        },
        [InfarmatsiaPost.pending]:(state , action) =>{
            state.InfarmatsiaPost.Loading = true   
        },
        [InfarmatsiaPost.fulfilled]:(state , action) =>{
            state.InfarmatsiaPost.Loading = false
            state.InfarmatsiaPost.Success = true 
            state.InfarmatsiaPost.Error = false
        },
        [InfarmatsiaPost.rejected]:(state , action) =>{
            state.InfarmatsiaPost.Loading = false
            state.InfarmatsiaPost.Success = false 
            state.InfarmatsiaPost.Error = true
        },
        [InfarmatsiaDelete.pending]:(state , action) =>{
            state.InfarmatsiaDelete.Loading = true   
        },
        [InfarmatsiaDelete.fulfilled]:(state , action) =>{
            state.InfarmatsiaDelete.Loading = false
            state.InfarmatsiaDelete.Success = true 
            state.InfarmatsiaDelete.Error = false
        },
        [InfarmatsiaDelete.rejected]:(state , action) =>{
            state.InfarmatsiaDelete.Loading = false
            state.InfarmatsiaDelete.Success = false 
            state.InfarmatsiaDelete.Error = true
        },
        [InfarmatsiaPut.pending]:(state , action) =>{
            state.InfarmatsiaPut.Loading = true   
        },
        [InfarmatsiaPut.fulfilled]:(state , action) =>{
            state.InfarmatsiaPut.Loading = false
            state.InfarmatsiaPut.Success = true 
            state.InfarmatsiaPut.Error = false
        },
        [InfarmatsiaPut.rejected]:(state , action) =>{
            state.InfarmatsiaPut.Loading = false
            state.InfarmatsiaPut.Success = false 
            state.InfarmatsiaPut.Error = true
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

export const {} = InfarmatsiaSlice.actions;
export default InfarmatsiaSlice.reducer;