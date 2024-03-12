import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../vite-env";

export const myApis = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/"
    }),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], string>({
            query: () => ({
                url: "post"
            })
        })
    })
})

export const {useGetPostsQuery} = myApis