import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getAdmin = createAsyncThunk('gets/getAdmin',async () =>{
    return axios.get('http://localhost:5000/Admin').then((res)=>{
        return res.data;
    })
})

const AdminSlice = createSlice({
    name:"Admin",
    initialState:{
        AllAdmin:[],
        loading:false
    },
    reducers:{

    },
    extraReducers:{
        [getAdmin.pending]:(state,action)=>{
            state.loading = true
        },
        [getAdmin.fulfilled]:(state,action)=>{
            state.AllAdmin = action.payload
            state.loading = false
        },
        [getAdmin.rejected]:(state,action)=>{
            state.loading = false
        }
    }
})

export default AdminSlice.reducer