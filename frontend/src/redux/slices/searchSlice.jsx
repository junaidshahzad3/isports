import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload.search;
    },
    clearSearch: (state) => {
      return initialState; // Reset the user state to its initial state
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSearch, clearSearch } = searchSlice.actions;

export default searchSlice.reducer;
