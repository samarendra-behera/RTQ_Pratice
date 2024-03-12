import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../vite-env";

export const myApis = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/"
    }),
    tagTypes: ["Post"],
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], string>({
            query: () => ({
                url: "posts"
            }),
            providesTags:['Post']
        }),
        newPost: builder.mutation<Post, Post>({
            query: (post) => ({
                url: "posts",
                method: "POST",
                body: post
            }),
            invalidatesTags: ['Post']
        })
    })
})

export const {useGetPostsQuery, useNewPostMutation} = myApis