import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const PressCenterGet = createAsyncThunk("PressCenter/get" , async() =>{
    return await  axios.get(`${API_URL}/press-center`)
    .then(res => res.data)
})
export const PressCenterPost = createAsyncThunk("PressCenter/post" ,  async(body) =>{
    return await axios.post(`${API_URL}/press-center` , body)
    .then(res => res)
})
export const PressCenterPut = createAsyncThunk("PressCenter/put" , async({body , id}) =>{
    return await axios.put(`${API_URL}/press-center/${id}` , body)
    .then(res => res)
})
export const PressCenterDelete = createAsyncThunk("PressCenter/put" , async(id) =>{
    return await axios.delete(`${API_URL}/press-center/${id}`)
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
const PressCenterSlice = createSlice({
    name : "PressCenter",
    initialState:{
        PressCenterGet:{
            Loading  : false,
            Success : false, 
            Error : false,
            data : []
        },
        PressCenterPost:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        PressCenterPut:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        PressCenterDelete:{
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
        [PressCenterGet.pending]:(state , action) =>{
            state.PressCenterGet.Loading = true   
        },
        [PressCenterGet.fulfilled]:(state , action) =>{
            state.PressCenterGet.Loading = false
            state.PressCenterGet.Success = true 
            state.PressCenterGet.Error = false
            state.PressCenterGet.data = action.payload
        },
        [PressCenterGet.rejected]:(state , action) =>{
            state.PressCenterGet.Loading = false
            state.PressCenterGet.Success = false 
            state.PressCenterGet.Error = true
            state.PressCenterGet.data = []
        },
        [PressCenterPost.pending]:(state , action) =>{
            state.PressCenterPost.Loading = true   
        },
        [PressCenterPost.fulfilled]:(state , action) =>{
            state.PressCenterPost.Loading = false
            state.PressCenterPost.Success = true 
            state.PressCenterPost.Error = false
        },
        [PressCenterPost.rejected]:(state , action) =>{
            state.PressCenterPost.Loading = false
            state.PressCenterPost.Success = false 
            state.PressCenterPost.Error = true
        },
        [PressCenterDelete.pending]:(state , action) =>{
            state.PressCenterDelete.Loading = true   
        },
        [PressCenterDelete.fulfilled]:(state , action) =>{
            state.PressCenterDelete.Loading = false
            state.PressCenterDelete.Success = true 
            state.PressCenterDelete.Error = false
        },
        [PressCenterDelete.rejected]:(state , action) =>{
            state.PressCenterDelete.Loading = false
            state.PressCenterDelete.Success = false 
            state.PressCenterDelete.Error = true
        },
        [PressCenterPut.pending]:(state , action) =>{
            state.PressCenterPut.Loading = true   
        },
        [PressCenterPut.fulfilled]:(state , action) =>{
            state.PressCenterPut.Loading = false
            state.PressCenterPut.Success = true 
            state.PressCenterPut.Error = false
        },
        [PressCenterPut.rejected]:(state , action) =>{
            state.PressCenterPut.Loading = false
            state.PressCenterPut.Success = false 
            state.PressCenterPut.Error = true
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

export const {} = PressCenterSlice.actions;
export default PressCenterSlice.reducer;