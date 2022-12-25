import { createSlice , createAsyncThunk  } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";

export const GetContact = createAsyncThunk('Contact/get' , async()=> {
    return await axios.get(`${API_URL}/contacts`)
    .then(response => response.data)
}) 
// export const PostContact = createAsyncThunk("Contact/post" , async (body) =>{
//     return await axios.post(`${API_URL}/contacts` , body)
//     .then(res => res)
// })
// export const UploadImage = createAsyncThunk("Contact/upload" , async (e) =>{
//         const formData = new FormData()
//         formData.append("file" , e.target.files[0])
//         formData.append("upload_preset" , "jlgbmu1o")
//             try{
//             return await axios.post("https://api.cloudinary.com/v1_1/dnr6dsn29/upload" , formData)
//             .then(response => response?.data.secure_url)
//             }catch(error){
//                return error
//             }
//  })
// export const DeleteContact = createAsyncThunk('Contact/delete' , async(id)=> {
//     return await axios.delete(`${API_URL}/contacts/${id}`)
//     .then(response => response.data)
// }) 
// export const PutContact = createAsyncThunk('Contact/put' , async({body , id})=> {
//     console.log(id , body);
//     return await axios.put(`${API_URL}/contacts/${id}`, body)
//     .then(response => console.log(response.data))
// }) 
const ContactSlice = createSlice({
    name : "Contact",
    initialState:{
        getContact: {
            Error : false,
            Loading : false,
            Success : false,
            Data : []
        },
        // postContact: {
        //     Error : false,
        //     Loading : false,
        //     Success : false,
        // },
        // deleteContact: {
        //     Error : false,
        //     Loading : false,
        //     Success : false,
        // },
        // putContact: {
        //     Error : false,
        //     Loading : false,
        //     Success : false,
        // },
        // uploadContact: {
        //     Error : false,
        //     Loading : false,
        //     Success : false,
        //     data : [],
        // },
    },
    extraReducers :{
        [GetContact.pending]:(state , action) =>{
            state.getContact.loading = true
        },
        [GetContact.fulfilled]:(state , action) =>{
            state.getContact.Error = false
            state.getContact.Success = true
            state.getContact.Loading = false
            state.getContact.Data = action.payload
        },
        [GetContact.rejected]:(state , action) =>{
            state.getContact.Error = true
            state.getContact.Success = false
            state.getContact.Loading = false
            state.getContact.Data = []
        },
        // [PostContact.pending]:(state , action) =>{
        //     state.postContact.loading = true
        // },
        // [PostContact.fulfilled]:(state , action) =>{
        //     state.postContact.Error = false
        //     state.postContact.Success = true
        //     state.postContact.Loading = false
        // },
        // [PostContact.rejected]:(state , action) =>{
        //     state.postContact.Error = true
        //     state.postContact.Success = false
        //     state.postContact.Loading = false
        // },
        // [DeleteContact.pending]:(state , action) =>{
        //     state.deleteContact.loading = true
        // },
        // [DeleteContact.fulfilled]:(state , action) =>{
        //     state.deleteContact.Error = false
        //     state.deleteContact.Success = true
        //     state.deleteContact.Loading = false
        // },
        // [DeleteContact.rejected]:(state , action) =>{
        //     state.deleteContact.Error = true
        //     state.deleteContact.Success = false
        //     state.deleteContact.Loading = false
        // },
        // [PutContact.pending]:(state , action) =>{
        //     state.putContact.loading = true
        // },
        // [PutContact.fulfilled]:(state , action) =>{
        //     state.putContact.Error = false
        //     state.putContact.Success = true
        //     state.putContact.Loading = false
        // },
        // [PutContact.rejected]:(state , action) =>{
        //     state.putContact.Error = true
        //     state.putContact.Success = false
        //     state.putContact.Loading = false
        // },
        // [UploadImage.pending]:(state , action) =>{
        //     state.uploadContact.loading = true
        // },
        // [UploadImage.fulfilled]:(state , action) =>{
        //     state.uploadContact.Error = false
        //     state.uploadContact.Success = true
        //     state.uploadContact.Loading = false
        //     state.uploadContact.data = action.payload  
        //     // console.log( );
        // },
        // [UploadImage.rejected]:(state , action) =>{
        //     state.uploadContact.Error = true
        //     state.uploadContact.Success = false
        //     state.uploadContact.Loading = false
        // }
    }
})

export const {} = ContactSlice.actions;
export default ContactSlice.reducer