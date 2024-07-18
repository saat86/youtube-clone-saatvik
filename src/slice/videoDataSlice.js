import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    data : [],
    categories: ['New', 'Music', 'Sports', 'Health', 'Food', 'Entertainment', 'Funny'],
    selectedCategory: 'New',
    searchValue:'new',
}

const videoDataSlice =createSlice({
    name:'videoData',
    initialState,
    reducers:{
        setVideoData:(state,action)=>{
            state.data=[];
            state.data.push(action.payload);
        },
        addCategories:(state,action)=>{
            state.categories.push(action.payload)
        },
        newSelectedCategory:(state,action)=>{
            state.selectedCategory=action.payload;
        },
        searchValueInput:(state,action)=>{
            state.searchValue=action.payload;

        }

    },
});

export const {setVideoData,addCategories,newSelectedCategory,searchValueInput} =videoDataSlice.actions;

export default videoDataSlice.reducer;