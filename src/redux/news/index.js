import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const NewsGet = createAsyncThunk("News/get" , async() =>{
    return await  axios.get(`${API_URL}/news`)
    .then(res => res.data)
})
export const NewsPost = createAsyncThunk("News/post" ,  async(body) =>{
    return await axios.post(`${API_URL}/news` , body)
    .then(res => res)
})
export const NewsPut = createAsyncThunk("News/put" , async({body , id}) =>{
    return await axios.put(`${API_URL}/news/${id}` , body)
    .then(res => res)
})
export const NewsDelete = createAsyncThunk("News/put" , async(id) =>{
    return await axios.delete(`${API_URL}/news/${id}`)
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
const NewsSlice = createSlice({
    name : "News",
    initialState:{
        NewsGet:{
            Loading  : false,
            Success : false, 
            Error : false,
            data : []
        },
        NewsPost:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        NewsPut:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        NewsDelete:{
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
        [NewsGet.pending]:(state , action) =>{
            state.NewsGet.Loading = true   
        },
        [NewsGet.fulfilled]:(state , action) =>{
            state.NewsGet.Loading = false
            state.NewsGet.Success = true 
            state.NewsGet.Error = false
            state.NewsGet.data = action.payload
        },
        [NewsGet.rejected]:(state , action) =>{
            state.NewsGet.Loading = false
            state.NewsGet.Success = false 
            state.NewsGet.Error = true
            state.NewsGet.data = []
        },
        [NewsPost.pending]:(state , action) =>{
            state.NewsPost.Loading = true   
        },
        [NewsPost.fulfilled]:(state , action) =>{
            state.NewsPost.Loading = false
            state.NewsPost.Success = true 
            state.NewsPost.Error = false
        },
        [NewsPost.rejected]:(state , action) =>{
            state.NewsPost.Loading = false
            state.NewsPost.Success = false 
            state.NewsPost.Error = true
        },
        [NewsDelete.pending]:(state , action) =>{
            state.NewsDelete.Loading = true   
        },
        [NewsDelete.fulfilled]:(state , action) =>{
            state.NewsDelete.Loading = false
            state.NewsDelete.Success = true 
            state.NewsDelete.Error = false
        },
        [NewsDelete.rejected]:(state , action) =>{
            state.NewsDelete.Loading = false
            state.NewsDelete.Success = false 
            state.NewsDelete.Error = true
        },
        [NewsPut.pending]:(state , action) =>{
            state.NewsPut.Loading = true   
        },
        [NewsPut.fulfilled]:(state , action) =>{
            state.NewsPut.Loading = false
            state.NewsPut.Success = true 
            state.NewsPut.Error = false
        },
        [NewsPut.rejected]:(state , action) =>{
            state.NewsPut.Loading = false
            state.NewsPut.Success = false 
            state.NewsPut.Error = true
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

export const {} = NewsSlice.actions;
export default NewsSlice.reducer;