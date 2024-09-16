import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamperById } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlise = createSlice({
  name: "campers",
  initialState: {
    items: [],
    favorites: [],
    currentItem: null,
    isLoading: false,
    error: null,
    page: 1,
    totalItems: 0,
    morePages: false,
  },
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
    resetPage(state) {
      state.page = 1;
      state.items = [];
    },
    chooseFavorite(state, action) {
      const camperId = action.payload;
      const index = state.favorites.findIndex((item) => item.id === camperId);
      if (index === -1) {
        const itemToAdd = state.items.find((item) => item.id === camperId);
        if (itemToAdd) {
          state.favorites.push(itemToAdd);
        }
      } else {
        state.favorites.splice(index, 1);
      }
    },
  },

extraReducers: (builder) => {
  builder
    .addCase(fetchCampers.pending, handlePending)
    .addCase(fetchCampers.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      
      state.items = [
        ...state.items,
        ...action.payload.items.filter(
          (newItem) => !state.items.some((existingItem) => existingItem.id === newItem.id)
        ),
      ];

      state.totalItems = action.payload.total;
      state.morePages = state.items.length < state.totalItems;
    })
    .addCase(fetchCampers.rejected, handleRejected)
    .addCase(fetchCamperById.pending, handlePending)
    .addCase(fetchCamperById.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.currentItem = action.payload;
    })
    .addCase(fetchCamperById.rejected, handleRejected);
},
});
export const campersReducer = campersSlise.reducer;
export const { incrementPage, resetPage, chooseFavorite } = campersSlise.actions;
