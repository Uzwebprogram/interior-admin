import { createSlice , createAsyncThunk  } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";

export const GetVacancy = createAsyncThunk('Vacancy/get' , async()=> {
    return await axios.get(`${API_URL}/vakancy`)
    .then(response => response.data)
}) 
export const PostVacancy = createAsyncThunk("Vacancy/post" , async (body) =>{
    return await axios.post(`${API_URL}/vakancy` , body)
    .then(res => res)
})

export const DeleteVacancy = createAsyncThunk('Vacancy/delete' , async(id)=> {
    return await axios.delete(`${API_URL}/vakancy/${id}`)
    .then(response => response.data)
}) 
export const PutVacancy = createAsyncThunk('Vacancy/put' , async({body , id})=> {
    return await axios.put(`${API_URL}/vakancy/${id}`, body)
    .then(response => console.log(response.data))
}) 
const VacancySlice = createSlice({
    name : "Vacancy",
    initialState:{
        getVacancy: {
            Error : false,
            Loading : false,
            Success : false,
            Data : []
        },
        postVacancy: {
            Error : false,
            Loading : false,
            Success : false,
        },
        deleteVacancy: {
            Error : false,
            Loading : false,
            Success : false,
        },
        putVacancy: {
            Error : false,
            Loading : false,
            Success : false,
        },
    },
    extraReducers :{
        [GetVacancy.pending]:(state , action) =>{
            state.getVacancy.loading = true
        },
        [GetVacancy.fulfilled]:(state , action) =>{
            state.getVacancy.Error = false
            state.getVacancy.Success = true
            state.getVacancy.Loading = false
            state.getVacancy.Data = action.payload
        },
        [GetVacancy.rejected]:(state , action) =>{
            state.getVacancy.Error = true
            state.getVacancy.Success = false
            state.getVacancy.Loading = false
            state.getVacancy.Data = []
        },

        [PostVacancy.pending]:(state , action) =>{
            state.postVacancy.loading = true
        },
        [PostVacancy.fulfilled]:(state , action) =>{
            state.postVacancy.Error = false
            state.postVacancy.Success = true
            state.postVacancy.Loading = false
        },
        [PostVacancy.rejected]:(state , action) =>{
            state.postVacancy.Error = true
            state.postVacancy.Success = false
            state.postVacancy.Loading = false
        },

        [DeleteVacancy.pending]:(state , action) =>{
            state.deleteVacancy.loading = true
        },
        [DeleteVacancy.fulfilled]:(state , action) =>{
            state.deleteVacancy.Error = false
            state.deleteVacancy.Success = true
            state.deleteVacancy.Loading = false
        },
        [DeleteVacancy.rejected]:(state , action) =>{
            state.deleteVacancy.Error = true
            state.deleteVacancy.Success = false
            state.deleteVacancy.Loading = false
        },
        
        [PutVacancy.pending]:(state , action) =>{
            state.putVacancy.loading = true
        },
        [PutVacancy.fulfilled]:(state , action) =>{
            state.putVacancy.Error = false
            state.putVacancy.Success = true
            state.putVacancy.Loading = false
        },
        [PutVacancy.rejected]:(state , action) =>{
            state.putVacancy.Error = true
            state.putVacancy.Success = false
            state.putVacancy.Loading = false
        },
    }
})

export const {} = VacancySlice.actions;
export default VacancySlice.reducer