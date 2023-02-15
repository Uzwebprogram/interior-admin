import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";

export const BanksGet = createAsyncThunk("Banks/get" , async() =>{
    return await  axios.get(`${API_URL}/banks`)
    .then(res => res.data)
})
export const BanksPost = createAsyncThunk("Banks/post" ,  async(body) =>{
    return await axios.post(`${API_URL}/banks` , body)
    .then(res => res)
})
export const BanksPut = createAsyncThunk("Banks/put" , async({body , id}) =>{
    return await axios.put(`${API_URL}/banks/${id}` , body)
    .then(res => res)
})
export const BanksDelete = createAsyncThunk("Banks/put" , async(id) =>{
    return await axios.delete(`${API_URL}/banks/${id}`)
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
const BanksSlice = createSlice({
    name : "Banks",
    initialState:{
        BanksGet:{
            Loading  : false,
            Success : false, 
            Error : false,
            data : []
        },
        BanksPost:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        BanksPut:{
            Loading  : false,
            Success : false, 
            Error : false,
        },
        BanksDelete:{
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
        [BanksGet.pending]:(state , action) =>{
            state.BanksGet.Loading = true   
        },
        [BanksGet.fulfilled]:(state , action) =>{
            state.BanksGet.Loading = false
            state.BanksGet.Success = true 
            state.BanksGet.Error = false
            state.BanksGet.data = action.payload
        },
        [BanksGet.rejected]:(state , action) =>{
            state.BanksGet.Loading = false
            state.BanksGet.Success = false 
            state.BanksGet.Error = true
            state.BanksGet.data = []
        },
        [BanksPost.pending]:(state , action) =>{
            state.BanksPost.Loading = true   
        },
        [BanksPost.fulfilled]:(state , action) =>{
            state.BanksPost.Loading = false
            state.BanksPost.Success = true 
            state.BanksPost.Error = false
        },
        [BanksPost.rejected]:(state , action) =>{
            state.BanksPost.Loading = false
            state.BanksPost.Success = false 
            state.BanksPost.Error = true
        },
        [BanksDelete.pending]:(state , action) =>{
            state.BanksDelete.Loading = true   
        },
        [BanksDelete.fulfilled]:(state , action) =>{
            state.BanksDelete.Loading = false
            state.BanksDelete.Success = true 
            state.BanksDelete.Error = false
        },
        [BanksDelete.rejected]:(state , action) =>{
            state.BanksDelete.Loading = false
            state.BanksDelete.Success = false 
            state.BanksDelete.Error = true
        },
        [BanksPut.pending]:(state , action) =>{
            state.BanksPut.Loading = true   
        },
        [BanksPut.fulfilled]:(state , action) =>{
            state.BanksPut.Loading = false
            state.BanksPut.Success = true 
            state.BanksPut.Error = false
        },
        [BanksPut.rejected]:(state , action) =>{
            state.BanksPut.Loading = false
            state.BanksPut.Success = false 
            state.BanksPut.Error = true
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

export const {} = BanksSlice.actions;
export default BanksSlice.reducer;