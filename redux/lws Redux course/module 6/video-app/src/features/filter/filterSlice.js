const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  tags: [],
  search: "",
};

// create slice
const filterSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    removeTag: (state, action) => {
      const indexRemove = state.tags.indexOf(action.payload);
      if (indexRemove !== -1) {
        state.tags.splice(indexRemove, 1);
      }
    },
    searched: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, removeTag, searched } = filterSlice.actions;
