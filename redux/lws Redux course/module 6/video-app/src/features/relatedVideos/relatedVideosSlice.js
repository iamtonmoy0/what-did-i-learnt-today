import { getRelatedVideos } from "./relatedVideosApi";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchRelatedVideos = createAsyncThunk(
  "/videos/relatedVideos",
  async (tags, id) => {
    const videos = await getRelatedVideos(tags, id);
    return videos;
  }
);

// create slice
const relatedVideoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default relatedVideoSlice.reducer;
