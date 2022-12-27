import { createSlice , createAsyncThunk  } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";

export const GetTeam = createAsyncThunk('Team/get' , async()=> {
    return await axios.get(`${API_URL}/teams`)
    .then(response => response.data)
}) 
export const PostTeam = createAsyncThunk("Team/post" , async (body) =>{
    return await axios.post(`${API_URL}/teams` , body)
    .then(res => res)
})
export const UploadImage = createAsyncThunk("Team/upload" , async (e) =>{
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
export const DeleteTeam = createAsyncThunk('Team/delete' , async(id)=> {
    return await axios.delete(`${API_URL}/teams/${id}`)
    .then(response => response.data)
}) 
export const PutTeam = createAsyncThunk('Team/put' , async({body , id})=> {
    return await axios.put(`${API_URL}/teams/${id}`, body)
    .then(response => console.log(response.data))
}) 
const TeamSlice = createSlice({
    name : "Team",
    initialState:{
        getTeam: {
            Error : false,
            Loading : false,
            Success : false,
            Data : []
        },
        postTeam: {
            Error : false,
            Loading : false,
            Success : false,
        },
        deleteTeam: {
            Error : false,
            Loading : false,
            Success : false,
        },
        putTeam: {
            Error : false,
            Loading : false,
            Success : false,
        },
        uploadTeam: {
            Error : false,
            Loading : false,
            Success : false,
            data : [],
        },
    },
    extraReducers :{
        [GetTeam.pending]:(state , action) =>{
            state.getTeam.loading = true
        },
        [GetTeam.fulfilled]:(state , action) =>{
            state.getTeam.Error = false
            state.getTeam.Success = true
            state.getTeam.Loading = false
            state.getTeam.Data = action.payload
        },
        [GetTeam.rejected]:(state , action) =>{
            state.getTeam.Error = true
            state.getTeam.Success = false
            state.getTeam.Loading = false
            state.getTeam.Data = []
        },
        [PostTeam.pending]:(state , action) =>{
            state.postTeam.loading = true
        },
        [PostTeam.fulfilled]:(state , action) =>{
            state.postTeam.Error = false
            state.postTeam.Success = true
            state.postTeam.Loading = false
        },
        [PostTeam.rejected]:(state , action) =>{
            state.postTeam.Error = true
            state.postTeam.Success = false
            state.postTeam.Loading = false
        },
        [DeleteTeam.pending]:(state , action) =>{
            state.deleteTeam.loading = true
        },
        [DeleteTeam.fulfilled]:(state , action) =>{
            state.deleteTeam.Error = false
            state.deleteTeam.Success = true
            state.deleteTeam.Loading = false
        },
        [DeleteTeam.rejected]:(state , action) =>{
            state.deleteTeam.Error = true
            state.deleteTeam.Success = false
            state.deleteTeam.Loading = false
        },
        [PutTeam.pending]:(state , action) =>{
            state.putTeam.loading = true
        },
        [PutTeam.fulfilled]:(state , action) =>{
            state.putTeam.Error = false
            state.putTeam.Success = true
            state.putTeam.Loading = false
        },
        [PutTeam.rejected]:(state , action) =>{
            state.putTeam.Error = true
            state.putTeam.Success = false
            state.putTeam.Loading = false
        },
        [UploadImage.pending]:(state , action) =>{
            state.uploadTeam.Loading = true
        },
        [UploadImage.fulfilled]:(state , action) =>{
            state.uploadTeam.Error = false
            state.uploadTeam.Success = true
            state.uploadTeam.Loading = false
            state.uploadTeam.data = action.payload  
            // console.log( );
        },
        [UploadImage.rejected]:(state , action) =>{
            state.uploadTeam.Error = true
            state.uploadTeam.Success = false
            state.uploadTeam.Loading = false
        }
    }
})

export const {} = TeamSlice.actions;
export default TeamSlice.reducer