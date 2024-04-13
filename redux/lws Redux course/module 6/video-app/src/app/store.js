import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/videoSlice";
import videoReducer from "../features/video/videoSlice";
import tagReducer from "../features/tags/tagSlice";
import relatedVideosReducer from "../features/relatedVideos/relatedVideosSlice";
import filterReducer from "../features/filter/filterSlice";
export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagReducer,
    video: videoReducer,
    relatedVideos: relatedVideosReducer,
    filter: filterReducer,
  },
});
