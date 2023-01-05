import { createSlice , createAsyncThunk  } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";

export const GetClient = createAsyncThunk('Client/get' , async()=> {
    return await axios.get(`${API_URL}/client`)
    .then(response => response.data)
}) 
export const PostClient = createAsyncThunk("Client/post" , async (body) =>{
    return await axios.post(`${API_URL}/client` , body)
    .then(res => res)
})
export const DeleteClient = createAsyncThunk('Client/delete' , async(id)=> {
    return await axios.delete(`${API_URL}/client/${id}`)
    .then(response => response.data)
}) 
export const PutClient = createAsyncThunk('Client/put' , async({body , id})=> {
    return await axios.put(`${API_URL}/client/${id}`, body)
    .then(response => console.log(response.data))
}) 
const ClientSlice = createSlice({
    name : "Client",
    initialState:{
        getClient: {
            Error : false,
            Loading : false,
            Success : false,
            Data : []
        },
        postClient: {
            Error : false,
            Loading : false,
            Success : false,
        },
        deleteClient: {
            Error : false,
            Loading : false,
            Success : false,
        },
        putClient: {
            Error : false,
            Loading : false,
            Success : false,
        },
    },
    extraReducers :{
        [GetClient.pending]:(state , action) =>{
            state.getClient.loading = true
        },
        [GetClient.fulfilled]:(state , action) =>{
            state.getClient.Error = false
            state.getClient.Success = true
            state.getClient.Loading = false
            state.getClient.Data = action.payload
        },
        [GetClient.rejected]:(state , action) =>{
            state.getClient.Error = true
            state.getClient.Success = false
            state.getClient.Loading = false
            state.getClient.Data = []
        },
        [PostClient.pending]:(state , action) =>{
            state.postClient.loading = true
        },
        [PostClient.fulfilled]:(state , action) =>{
            state.postClient.Error = false
            state.postClient.Success = true
            state.postClient.Loading = false
        },
        [PostClient.rejected]:(state , action) =>{
            state.postClient.Error = true
            state.postClient.Success = false
            state.postClient.Loading = false
        },
        [DeleteClient.pending]:(state , action) =>{
            state.deleteClient.loading = true
        },
        [DeleteClient.fulfilled]:(state , action) =>{
            state.deleteClient.Error = false
            state.deleteClient.Success = true
            state.deleteClient.Loading = false
        },
        [DeleteClient.rejected]:(state , action) =>{
            state.deleteClient.Error = true
            state.deleteClient.Success = false
            state.deleteClient.Loading = false
        },
        [PutClient.pending]:(state , action) =>{
            state.putClient.loading = true
        },
        [PutClient.fulfilled]:(state , action) =>{
            state.putClient.Error = false
            state.putClient.Success = true
            state.putClient.Loading = false
        },
        [PutClient.rejected]:(state , action) =>{
            state.putClient.Error = true
            state.putClient.Success = false
            state.putClient.Loading = false
        }
    }
})

export const {} = ClientSlice.actions;
export default ClientSlice.reducer