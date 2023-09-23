import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk('gets/getUsers',async () =>{
    return axios.get('https://hexago.onrender.com/Auth').then((res)=>{
        return res.data;
    })
})

const UserSlice = createSlice({
    name:"Users",
    initialState:{
        User:JSON.parse(localStorage.getItem('Users'))?JSON.parse(localStorage.getItem('Users')):[],
        AllUsers:[],
        loading:false,
        search:''
    },
    reducers:{
        addUser:(state,action)=>{
            state = [...state,action.payload];
        },
        searchRed:(state,action)=>{
            const { value } = action.payload;
            // return state = action.payload
            const result = state.AllUsers.filter((obj)=>{
                for(let key in obj){
                    const objVal = obj[key].toString().toLowerCase();
                    if (objVal.includes(value.toLowerCase())) {
                        return obj;
                    }
                    console.log(objVal);
                }
            })
            state.search = value
            state.ReqUsers = result;
        }
    },
    extraReducers:{
        [getUsers.pending]:(state,action)=>{
            state.loading = true
        },
        [getUsers.fulfilled]:(state,action)=>{
            state.AllUsers = action.payload
            state.ReqUsers = action.payload
            state.loading = false
        },
        [getUsers.rejected]:(state,action)=>{
            state.loading = false
        }
    }
})

export const {searchRed} = UserSlice.actions;

export default UserSlice.reducer