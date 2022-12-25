import { createSlice , createAsyncThunk  } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";

export const GetSingle = createAsyncThunk('Single/get' , async()=> {
    return await axios.get(`${API_URL}/single`)
    .then(response => response.data)
}) 
export const PostSingle = createAsyncThunk("Single/post" , async (body) =>{
    return await axios.post(`${API_URL}/single` , body)
    .then(res => res)
})
export const UploadImage = createAsyncThunk("Single/upload" , async (e) =>{
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
 export const UploadImage2 = createAsyncThunk("Single/upload2" , async (e) =>{
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
export const DeleteSingle = createAsyncThunk('Single/delete' , async(id)=> {
    return await axios.delete(`${API_URL}/single/${id}`)
    .then(response => response.data)
}) 
export const PutSingle = createAsyncThunk('Single/put' , async({body , id})=> {
    console.log(id , body);
    return await axios.put(`${API_URL}/single/${id}`, body)
    .then(response => console.log(response.data))
}) 
const SingleSlice = createSlice({
    name : "Single",
    initialState:{
        getSingle: {
            Error : false,
            Loading : false,
            Success : false,
            Data : []
        },
        postSingle: {
            Error : false,
            Loading : false,
            Success : false,
        },
        deleteSingle: {
            Error : false,
            Loading : false,
            Success : false,
        },
        putSingle: {
            Error : false,
            Loading : false,
            Success : false,
        },
        uploadSingle: {
            Error : false,
            Loading : false,
            Success : false,
            data : [],
        },
        uploadSingle2: {
            Error : false,
            Loading : false,
            Success : false,
            data : [],
        },
    },
    extraReducers :{
        [GetSingle.pending]:(state , action) =>{
            state.getSingle.Loading = true
        },
        [GetSingle.fulfilled]:(state , action) =>{
            state.getSingle.Error = false
            state.getSingle.Success = true
            state.getSingle.Loading = false
            state.getSingle.Data = action.payload
        },
        [GetSingle.rejected]:(state , action) =>{
            state.getSingle.Error = true
            state.getSingle.Success = false
            state.getSingle.Loading = false
            state.getSingle.Data = []
        },
        [PostSingle.pending]:(state , action) =>{
            state.postSingle.Loading = true
        },
        [PostSingle.fulfilled]:(state , action) =>{
            state.postSingle.Error = false
            state.postSingle.Success = true
            state.postSingle.Loading = false
        },
        [PostSingle.rejected]:(state , action) =>{
            state.postSingle.Error = true
            state.postSingle.Success = false
            state.postSingle.Loading = false
        },
        [DeleteSingle.pending]:(state , action) =>{
            state.deleteSingle.loading = true
        },
        [DeleteSingle.fulfilled]:(state , action) =>{
            state.deleteSingle.Error = false
            state.deleteSingle.Success = true
            state.deleteSingle.Loading = false
        },
        [DeleteSingle.rejected]:(state , action) =>{
            state.deleteSingle.Error = true
            state.deleteSingle.Success = false
            state.deleteSingle.Loading = false
        },
        [PutSingle.pending]:(state , action) =>{
            state.putSingle.Loading = true
        },
        [PutSingle.fulfilled]:(state , action) =>{
            state.putSingle.Error = false
            state.putSingle.Success = true
            state.putSingle.Loading = false
        },
        [PutSingle.rejected]:(state , action) =>{
            state.putSingle.Error = true
            state.putSingle.Success = false
            state.putSingle.Loading = false
        },
        [UploadImage.pending]:(state , action) =>{
            state.uploadSingle.Loading = true
        },
        [UploadImage.fulfilled]:(state , action) =>{
            state.uploadSingle.Error = false
            state.uploadSingle.Success = true
            state.uploadSingle.Loading = false
            state.uploadSingle.data = action.payload  
            // console.log( );
        },
        [UploadImage.rejected]:(state , action) =>{
            state.uploadSingle.Error = true
            state.uploadSingle.Success = false
            state.uploadSingle.Loading = false
        },
        [UploadImage2.pending]:(state , action) =>{
            state.uploadSingle2.Loading = true
        },
        [UploadImage2.fulfilled]:(state , action) =>{
            state.uploadSingle2.Error = false
            state.uploadSingle2.Success = true
            state.uploadSingle2.Loading = false
            state.uploadSingle2.data = action.payload  
            // console.log( );
        },
        [UploadImage2.rejected]:(state , action) =>{
            state.uploadSingle2.Error = true
            state.uploadSingle2.Success = false
            state.uploadSingle2.Loading = false
        }
    }
})

export const {} = SingleSlice.actions;
export default SingleSlice.reducer