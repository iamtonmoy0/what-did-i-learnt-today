import { getVideos } from "./videosAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchVideos = createAsyncThunk(
  "/videos/fetchVideos",
  async (tags, search) => {
    const videos = await getVideos(tags, search);
    return videos;
  }
);

// create slice
const videoSlice = createSlice({
  name: "videos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideos.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.videos = action.payload;
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videoSlice.reducer;
