import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name:"Users",
    initialState:JSON.parse(localStorage.getItem('Users'))?JSON.parse(localStorage.getItem('Users')):[],
    reducers:{
        addUser:(state,action)=>{
            state = [...state,action.payload];
        }
    }
})

export default UserSlice.reducer