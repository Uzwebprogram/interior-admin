import { createSlice , createAsyncThunk  } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";

export const GetYoutube = createAsyncThunk('youtube/get' , async()=> {
    return await axios.get(`${API_URL}/youtube`)
    .then(response => response.data)
}) 
export const PostYoutube = createAsyncThunk("youtube/post" , async (body) =>{
    return await axios.post(`${API_URL}/youtube` , body)
    .then(res => res)
})
export const DeleteYoutube = createAsyncThunk('youtube/delete' , async(id)=> {
    return await axios.delete(`${API_URL}/youtube/${id}`)
    .then(response => response.data)
}) 
export const PutYoutube = createAsyncThunk('youtube/put' , async({body , id})=> {
    console.log(id , body);
    return await axios.put(`${API_URL}/youtube/${id}`, body)
    .then(response => console.log(response.data))
}) 
const YoutubeSlice = createSlice({
    name : "youtube",
    initialState:{
        getYoutube: {
            Error : false,
            Loading : false,
            Success : false,
            Data : []
        },
        postYoutube: {
            Error : false,
            Loading : false,
            Success : false,
        },
        deleteYoutube: {
            Error : false,
            Loading : false,
            Success : false,
        },
        putYoutube: {
            Error : false,
            Loading : false,
            Success : false,
        },
    },
    extraReducers :{
        [GetYoutube.pending]:(state , action) =>{
            state.getYoutube.loading = true
        },
        [GetYoutube.fulfilled]:(state , action) =>{
            state.getYoutube.Error = false
            state.getYoutube.Success = true
            state.getYoutube.Loading = false
            state.getYoutube.Data = action.payload
        },
        [GetYoutube.rejected]:(state , action) =>{
            state.getYoutube.Error = true
            state.getYoutube.Success = false
            state.getYoutube.Loading = false
            state.getYoutube.Data = []
        },
        
        [PostYoutube.pending]:(state , action) =>{
            state.postYoutube.loading = true
        },
        [PostYoutube.fulfilled]:(state , action) =>{
            state.postYoutube.Error = false
            state.postYoutube.Success = true
            state.postYoutube.Loading = false
        },
        [PostYoutube.rejected]:(state , action) =>{
            state.postYoutube.Error = true
            state.postYoutube.Success = false
            state.postYoutube.Loading = false
        },
        [DeleteYoutube.pending]:(state , action) =>{
            state.deleteYoutube.loading = true
        },
        [DeleteYoutube.fulfilled]:(state , action) =>{
            state.deleteYoutube.Error = false
            state.deleteYoutube.Success = true
            state.deleteYoutube.Loading = false
        },
        [DeleteYoutube.rejected]:(state , action) =>{
            state.deleteYoutube.Error = true
            state.deleteYoutube.Success = false
            state.deleteYoutube.Loading = false
        },
        [PutYoutube.pending]:(state , action) =>{
            state.putYoutube.loading = true
        },
        [PutYoutube.fulfilled]:(state , action) =>{
            state.putYoutube.Error = false
            state.putYoutube.Success = true
            state.putYoutube.Loading = false
        },
        [PutYoutube.rejected]:(state , action) =>{
            state.putYoutube.Error = true
            state.putYoutube.Success = false
            state.putYoutube.Loading = false
        }
    }
})

export const {} = YoutubeSlice.actions;
export default YoutubeSlice.reducer