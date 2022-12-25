import { createSlice , createAsyncThunk  } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";

export const GetCalculate = createAsyncThunk('Calculate/get' , async()=> {
    return await axios.get(`${API_URL}/calculate`)
    .then(response => response.data)
}) 
// export const PostCalculate = createAsyncThunk("Calculate/post" , async (body) =>{
//     return await axios.post(`${API_URL}/calculate` , body)
//     .then(res => res)
// })
// export const UploadImage = createAsyncThunk("Calculate/upload" , async (e) =>{
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
// export const DeleteCalculate = createAsyncThunk('Calculate/delete' , async(id)=> {
//     return await axios.delete(`${API_URL}/calculate/${id}`)
//     .then(response => response.data)
// }) 
// export const PutCalculate = createAsyncThunk('Calculate/put' , async({body , id})=> {
//     console.log(id , body);
//     return await axios.put(`${API_URL}/calculate/${id}`, body)
//     .then(response => console.log(response.data))
// }) 
const CalculateSlice = createSlice({
    name : "Calculate",
    initialState:{
        getCalculate: {
            Error : false,
            Loading : false,
            Success : false,
            Data : []
        },
        // postCalculate: {
        //     Error : false,
        //     Loading : false,
        //     Success : false,
        // },
        // deleteCalculate: {
        //     Error : false,
        //     Loading : false,
        //     Success : false,
        // },
        // putCalculate: {
        //     Error : false,
        //     Loading : false,
        //     Success : false,
        // },
        // uploadCalculate: {
        //     Error : false,
        //     Loading : false,
        //     Success : false,
        //     data : [],
        // },
    },
    extraReducers :{
        [GetCalculate.pending]:(state , action) =>{
            state.getCalculate.loading = true
        },
        [GetCalculate.fulfilled]:(state , action) =>{
            state.getCalculate.Error = false
            state.getCalculate.Success = true
            state.getCalculate.Loading = false
            state.getCalculate.Data = action.payload
        },
        [GetCalculate.rejected]:(state , action) =>{
            state.getCalculate.Error = true
            state.getCalculate.Success = false
            state.getCalculate.Loading = false
            state.getCalculate.Data = []
        },
        // [PostCalculate.pending]:(state , action) =>{
        //     state.postCalculate.loading = true
        // },
        // [PostCalculate.fulfilled]:(state , action) =>{
        //     state.postCalculate.Error = false
        //     state.postCalculate.Success = true
        //     state.postCalculate.Loading = false
        // },
        // [PostCalculate.rejected]:(state , action) =>{
        //     state.postCalculate.Error = true
        //     state.postCalculate.Success = false
        //     state.postCalculate.Loading = false
        // },
        // [DeleteCalculate.pending]:(state , action) =>{
        //     state.deleteCalculate.loading = true
        // },
        // [DeleteCalculate.fulfilled]:(state , action) =>{
        //     state.deleteCalculate.Error = false
        //     state.deleteCalculate.Success = true
        //     state.deleteCalculate.Loading = false
        // },
        // [DeleteCalculate.rejected]:(state , action) =>{
        //     state.deleteCalculate.Error = true
        //     state.deleteCalculate.Success = false
        //     state.deleteCalculate.Loading = false
        // },
        // [PutCalculate.pending]:(state , action) =>{
        //     state.putCalculate.loading = true
        // },
        // [PutCalculate.fulfilled]:(state , action) =>{
        //     state.putCalculate.Error = false
        //     state.putCalculate.Success = true
        //     state.putCalculate.Loading = false
        // },
        // [PutCalculate.rejected]:(state , action) =>{
        //     state.putCalculate.Error = true
        //     state.putCalculate.Success = false
        //     state.putCalculate.Loading = false
        // },
        // [UploadImage.pending]:(state , action) =>{
        //     state.uploadCalculate.loading = true
        // },
        // [UploadImage.fulfilled]:(state , action) =>{
        //     state.uploadCalculate.Error = false
        //     state.uploadCalculate.Success = true
        //     state.uploadCalculate.Loading = false
        //     state.uploadCalculate.data = action.payload  
        //     // console.log( );
        // },
        // [UploadImage.rejected]:(state , action) =>{
        //     state.uploadCalculate.Error = true
        //     state.uploadCalculate.Success = false
        //     state.uploadCalculate.Loading = false
        // }
    }
})

export const {} = CalculateSlice.actions;
export default CalculateSlice.reducer