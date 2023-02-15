import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const UslugiyGet = createAsyncThunk("Uslugiy/get" , async() =>{
    return await  axios.get(`${API_URL}/uslugiy`)
    .then(res => res.data)
})
export const UslugiyPost = createAsyncThunk("Uslugiy/post" ,  async(body) =>{
    return await axios.post(`${API_URL}/uslugiy` , body)
    .then(res => res)
})
export const UslugiyPut = createAsyncThunk("uslugiy/put" , async({body , id}) =>{
    return await axios.put(`${API_URL}/uslugiy/${id}` , body)
    .then(res => res)
})
export const UslugiyDelete = createAsyncThunk("Uslugiy/put" , async(id) =>{
    return await axios.delete(`${API_URL}/Uslugiy/${id}`)
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
const UslugiySlice = createSlice({
    name : "Uslugiy",
    initialState:{
        UslugiyGet:{
            Loading  : false,
            Success : false, 
            Error : false,
            data : []
        },
        UslugiyPost:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        UslugiyPut:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        UslugiyDelete:{
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
        [UslugiyGet.pending]:(state , action) =>{
            state.UslugiyGet.Loading = true   
        },
        [UslugiyGet.fulfilled]:(state , action) =>{
            state.UslugiyGet.Loading = false
            state.UslugiyGet.Success = true 
            state.UslugiyGet.Error = false
            state.UslugiyGet.data = action.payload
        },
        [UslugiyGet.rejected]:(state , action) =>{
            state.UslugiyGet.Loading = false
            state.UslugiyGet.Success = false 
            state.UslugiyGet.Error = true
            state.UslugiyGet.data = []
        },
        [UslugiyPost.pending]:(state , action) =>{
            state.UslugiyPost.Loading = true   
        },
        [UslugiyPost.fulfilled]:(state , action) =>{
            state.UslugiyPost.Loading = false
            state.UslugiyPost.Success = true 
            state.UslugiyPost.Error = false
        },
        [UslugiyPost.rejected]:(state , action) =>{
            state.UslugiyPost.Loading = false
            state.UslugiyPost.Success = false 
            state.UslugiyPost.Error = true
        },
        [UslugiyDelete.pending]:(state , action) =>{
            state.UslugiyDelete.Loading = true   
        },
        [UslugiyDelete.fulfilled]:(state , action) =>{
            state.UslugiyDelete.Loading = false
            state.UslugiyDelete.Success = true 
            state.UslugiyDelete.Error = false
        },
        [UslugiyDelete.rejected]:(state , action) =>{
            state.UslugiyDelete.Loading = false
            state.UslugiyDelete.Success = false 
            state.UslugiyDelete.Error = true
        },
        [UslugiyPut.pending]:(state , action) =>{
            state.UslugiyPut.Loading = true   
        },
        [UslugiyPut.fulfilled]:(state , action) =>{
            state.UslugiyPut.Loading = false
            state.UslugiyPut.Success = true 
            state.UslugiyPut.Error = false
        },
        [UslugiyPut.rejected]:(state , action) =>{
            state.UslugiyPut.Loading = false
            state.UslugiyPut.Success = false 
            state.UslugiyPut.Error = true
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

export const {} = UslugiySlice.actions;
export default UslugiySlice.reducer;