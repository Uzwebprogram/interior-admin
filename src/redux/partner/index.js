import { createSlice , createAsyncThunk  } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";

export const GetPartner = createAsyncThunk('Partner/get' , async()=> {
    return await axios.get(`${API_URL}/partners`)
    .then(response => response.data)
}) 
export const PostPartner = createAsyncThunk("Partner/post" , async (body) =>{
    return await axios.post(`${API_URL}/partners` , body)
    .then(res => res)
})
export const UploadImage = createAsyncThunk("Partner/upload" , async (e) =>{
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
export const DeletePartner = createAsyncThunk('Partner/delete' , async(id)=> {
    return await axios.delete(`${API_URL}/partners/${id}`)
    .then(response => response.data)
}) 
export const PutPartner = createAsyncThunk('Partner/put' , async({body , id})=> {
    return await axios.put(`${API_URL}/partners/${id}`, body)
    .then(response => console.log(response.data))
}) 
const PartnerSlice = createSlice({
    name : "Partner",
    initialState:{
        getPartner: {
            Error : false,
            Loading : false,
            Success : false,
            Data : []
        },
        postPartner: {
            Error : false,
            Loading : false,
            Success : false,
        },
        deletePartner: {
            Error : false,
            Loading : false,
            Success : false,
        },
        putPartner: {
            Error : false,
            Loading : false,
            Success : false,
        },
        uploadPartner: {
            Error : false,
            Loading : false,
            Success : false,
            data : [],
        },
    },
    extraReducers :{
        [GetPartner.pending]:(state , action) =>{
            state.getPartner.Loading = true
        },
        [GetPartner.fulfilled]:(state , action) =>{
            state.getPartner.Error = false
            state.getPartner.Success = true
            state.getPartner.Loading = false
            state.getPartner.Data = action.payload
        },
        [GetPartner.rejected]:(state , action) =>{
            state.getPartner.Error = true
            state.getPartner.Success = false
            state.getPartner.Loading = false
            state.getPartner.Data = []
        },
        [PostPartner.pending]:(state , action) =>{
            state.postPartner.Loading = true
        },
        [PostPartner.fulfilled]:(state , action) =>{
            state.postPartner.Error = false
            state.postPartner.Success = true
            state.postPartner.Loading = false
        },
        [PostPartner.rejected]:(state , action) =>{
            state.postPartner.Error = true
            state.postPartner.Success = false
            state.postPartner.Loading = false
        },
        [DeletePartner.pending]:(state , action) =>{
            state.deletePartner.Loading = true
        },
        [DeletePartner.fulfilled]:(state , action) =>{
            state.deletePartner.Error = false
            state.deletePartner.Success = true
            state.deletePartner.Loading = false
        },
        [DeletePartner.rejected]:(state , action) =>{
            state.deletePartner.Error = true
            state.deletePartner.Success = false
            state.deletePartner.Loading = false
        },
        [PutPartner.pending]:(state , action) =>{
            state.putPartner.Loading = true
        },
        [PutPartner.fulfilled]:(state , action) =>{
            state.putPartner.Error = false
            state.putPartner.Success = true
            state.putPartner.Loading = false
        },
        [PutPartner.rejected]:(state , action) =>{
            state.putPartner.Error = true
            state.putPartner.Success = false
            state.putPartner.Loading = false
        },
        [UploadImage.pending]:(state , action) =>{
            state.uploadPartner.Loading = true
        },
        [UploadImage.fulfilled]:(state , action) =>{
            state.uploadPartner.Error = false
            state.uploadPartner.Success = true
            state.uploadPartner.Loading = false
            state.uploadPartner.data = action.payload  
            // console.log( );
        },
        [UploadImage.rejected]:(state , action) =>{
            state.uploadPartner.Error = true
            state.uploadPartner.Success = false
            state.uploadPartner.Loading = false
        }
    }
})

export const {} = PartnerSlice.actions;
export default PartnerSlice.reducer