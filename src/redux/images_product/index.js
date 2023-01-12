import { createSlice , createAsyncThunk  } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";

export const GetImages = createAsyncThunk('Images/get' , async()=> {
    return await axios.get(`${API_URL}/images`)
    .then(response => response.data)
}) 
export const PostImages = createAsyncThunk("Images/post" , async (body) =>{
    return await axios.post(`${API_URL}/images` , body)
    .then(res => res)
})
export const UploadImage = createAsyncThunk("Images/upload" , async (e) =>{
        const formData = new FormData()
        formData.append("file" , e.target.files[0])
        formData.append("upload_preset" , "jlgbmu1o")
            try{
            return await axios.post("https://api.cloudinary.com/v1_1/dnr6dsn29/upload" , formData)
            .then(response => response?.data.secure_url)
            }catch(error){
               return error
            }
 })
export const DeleteImages = createAsyncThunk('Images/delete' , async(id)=> {
    return await axios.delete(`${API_URL}/images/${id}`)
    .then(response => response.data)
}) 
export const PutImages = createAsyncThunk('Images/put' , async({body , id})=> {
    return await axios.put(`${API_URL}/images/${id}`, body)
    .then(response => console.log(response.data))
}) 
const ImagesSlice = createSlice({
    name : "Images",
    initialState:{
        getImages: {
            Error : false,
            Loading : false,
            Success : false,
            Data : []
        },
        postImages: {
            Error : false,
            Loading : false,
            Success : false,
        },
        deleteImages: {
            Error : false,
            Loading : false,
            Success : false,
        },
        putImages: {
            Error : false,
            Loading : false,
            Success : false,
        },
        uploadImages: {
            Error : false,
            Loading : false,
            Success : false,
            data : "",
        },
    },
    extraReducers :{
        [GetImages.pending]:(state , action) =>{
            state.getImages.Loading = true
        },
        [GetImages.fulfilled]:(state , action) =>{
            state.getImages.Error = false
            state.getImages.Success = true
            state.getImages.Loading = false
            state.getImages.Data = action.payload
        },
        [GetImages.rejected]:(state , action) =>{
            state.getImages.Error = true
            state.getImages.Success = false
            state.getImages.Loading = false
            state.getImages.Data = []
        },
        [PostImages.pending]:(state , action) =>{
            state.postImages.Loading = true
        },
        [PostImages.fulfilled]:(state , action) =>{
            state.postImages.Error = false
            state.postImages.Success = true
            state.postImages.Loading = false
        },
        [PostImages.rejected]:(state , action) =>{
            state.postImages.Error = true
            state.postImages.Success = false
            state.postImages.Loading = false
        },
        [DeleteImages.pending]:(state , action) =>{
            state.deleteImages.Loading = true
        },
        [DeleteImages.fulfilled]:(state , action) =>{
            state.deleteImages.Error = false
            state.deleteImages.Success = true
            state.deleteImages.Loading = false
        },
        [DeleteImages.rejected]:(state , action) =>{
            state.deleteImages.Error = true
            state.deleteImages.Success = false
            state.deleteImages.Loading = false
        },
        [PutImages.pending]:(state , action) =>{
            state.putImages.Loading = true
        },
        [PutImages.fulfilled]:(state , action) =>{
            state.putImages.Error = false
            state.putImages.Success = true
            state.putImages.Loading = false
        },
        [PutImages.rejected]:(state , action) =>{
            state.putImages.Error = true
            state.putImages.Success = false
            state.putImages.Loading = false
        },
        [UploadImage.pending]:(state , action) =>{
            state.uploadImages.Loading = true
        },
        [UploadImage.fulfilled]:(state , action) =>{
            state.uploadImages.Error = false
            state.uploadImages.Success = true
            state.uploadImages.Loading = false
            state.uploadImages.data = action.payload  
            // console.log( );
        },
        [UploadImage.rejected]:(state , action) =>{
            state.uploadImages.Error = true
            state.uploadImages.Success = false
            state.uploadImages.Loading = false
        }
    }
})

export const {} = ImagesSlice.actions;
export default ImagesSlice.reducer