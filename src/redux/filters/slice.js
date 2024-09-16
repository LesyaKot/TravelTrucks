import {createSlice} from '@reduxjs/toolkit';

const filtersSlice = createSlice({
    name: "filters",
    initialState: {
        filterParams : {},
    },
    reducers:{
        setFilterParams: (state, action) => {
            state.filterParams = action.payload;
        },
    },
});

export const {setFilterParams}= filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;