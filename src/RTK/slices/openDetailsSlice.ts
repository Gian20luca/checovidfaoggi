import {createSlice} from '@reduxjs/toolkit';

const openDetails = createSlice({
    name:"openDetails",
    initialState:{
        openDetails:"",
    },
    reducers:{
        getOpenDetails :(state, action)=>{
            state.openDetails=action.payload;
        }
    },

});

export const {getOpenDetails} = openDetails.actions;
export const openDetailsReducer = openDetails.reducer;