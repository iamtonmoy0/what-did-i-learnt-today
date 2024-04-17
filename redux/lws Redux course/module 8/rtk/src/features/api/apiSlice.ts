import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  tagTypes: ["Videos", "Video"],
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "/videos",
      keepUnusedDataFor: 5,
      providesTags: ["Videos"],
    }),
    getVideo: builder.query({
      query: (id) => `/videos/${id}`,
      providesTags: (result, error, arg) => [{ type: "video", id: arg }],
    }),
    getRelatedVideos: builder.query({
      query: ({ id, title }) => {
        const tags = title.split(" ");
        const like = tags.map((tag) => `title_like=${tag}`);
        const queryString = `/videos?${like.join("&")}&_limit=4`;
        return queryString;
      },
      providesTags: (result, error, arg) => [
        { type: "RelatedVideo", id: arg.id },
      ],
    }),
    addVideo: builder.mutation({
      query: (data) => {
        url: "/videos";
        method: "POST";
        body: data;
      },
    }),
  }),
});

export const {
  useGetVideosQuery,
  useGetVideoQuery,
  useGetRelatedVideosQuery,
  useAddVideoMutation,
} = apiSlice;
